#!/usr/bin/env node

import { createCipheriv, pbkdf2Sync, randomBytes } from "node:crypto";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const outputPath = path.resolve(
  process.cwd(),
  process.argv[2] || "assets/data/class-api-key.enc.json"
);
const iterations = 250000;

function toBase64(buffer) {
  return Buffer.from(buffer).toString("base64");
}

function readHidden(promptText) {
  if (!process.stdin.isTTY) {
    return Promise.resolve("");
  }

  return new Promise((resolve) => {
    let value = "";

    process.stdout.write(promptText);
    process.stdin.setRawMode(true);
    process.stdin.resume();
    process.stdin.setEncoding("utf8");

    function finish() {
      process.stdin.setRawMode(false);
      process.stdin.pause();
      process.stdin.removeListener("data", onData);
      process.stdout.write("\n");
      resolve(value);
    }

    function onData(char) {
      if (char === "\u0003") {
        process.stdout.write("\n");
        process.exit(130);
      }

      if (char === "\r" || char === "\n") {
        finish();
        return;
      }

      if (char === "\u007f") {
        value = value.slice(0, -1);
        return;
      }

      value += char;
    }

    process.stdin.on("data", onData);
  });
}

async function readSecret(envName, promptText) {
  if (process.env[envName]) {
    return process.env[envName];
  }

  return readHidden(promptText);
}

const apiKey = (await readSecret("CLASS_API_KEY", "授業用APIキー: ")).trim();
const password = await readSecret("CLASS_API_KEY_PASSWORD", "配布ページのパスワード: ");

if (!apiKey) {
  console.error("APIキーが空です。CLASS_API_KEYを指定するか、プロンプトで入力してください。");
  process.exit(1);
}

if (!password) {
  console.error("パスワードが空です。CLASS_API_KEY_PASSWORDを指定するか、プロンプトで入力してください。");
  process.exit(1);
}

const salt = randomBytes(16);
const iv = randomBytes(12);
const key = pbkdf2Sync(password, salt, iterations, 32, "sha256");
const cipher = createCipheriv("aes-256-gcm", key, iv);
const plaintext = Buffer.from(
  JSON.stringify({
    apiKey,
    encryptedAt: new Date().toISOString(),
  }),
  "utf8"
);
const encrypted = Buffer.concat([cipher.update(plaintext), cipher.final()]);
const authTag = cipher.getAuthTag();

const payload = {
  version: 1,
  kind: "class-api-key",
  algorithm: "PBKDF2-SHA256+A256GCM",
  iterations,
  salt: toBase64(salt),
  iv: toBase64(iv),
  ciphertext: toBase64(Buffer.concat([encrypted, authTag])),
  updatedAt: new Date().toISOString(),
};

await mkdir(path.dirname(outputPath), { recursive: true });
await writeFile(outputPath, `${JSON.stringify(payload, null, 2)}\n`, "utf8");

console.log(`暗号化済みAPIキーファイルを作成しました: ${outputPath}`);
console.log("このJSONファイルだけをGitHub Pagesへ公開してください。平文のAPIキーは保存されません。");
