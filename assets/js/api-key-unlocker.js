(function () {
  const textEncoder = new TextEncoder();
  const textDecoder = new TextDecoder();

  function base64ToBytes(value) {
    const binary = atob(value);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i += 1) {
      bytes[i] = binary.charCodeAt(i);
    }
    return bytes;
  }

  async function deriveKey(password, salt, iterations) {
    const keyMaterial = await crypto.subtle.importKey(
      "raw",
      textEncoder.encode(password),
      "PBKDF2",
      false,
      ["deriveKey"]
    );

    return crypto.subtle.deriveKey(
      {
        name: "PBKDF2",
        hash: "SHA-256",
        salt,
        iterations,
      },
      keyMaterial,
      { name: "AES-GCM", length: 256 },
      false,
      ["decrypt"]
    );
  }

  async function decryptPayload(payload, password) {
    if (!payload || payload.algorithm !== "PBKDF2-SHA256+A256GCM") {
      throw new Error("unsupported-payload");
    }

    const salt = base64ToBytes(payload.salt);
    const iv = base64ToBytes(payload.iv);
    const ciphertext = base64ToBytes(payload.ciphertext);
    const key = await deriveKey(password, salt, Number(payload.iterations));
    const decrypted = await crypto.subtle.decrypt(
      { name: "AES-GCM", iv },
      key,
      ciphertext
    );

    return textDecoder.decode(decrypted);
  }

  function extractApiKey(decryptedText) {
    try {
      const parsed = JSON.parse(decryptedText);
      return parsed.apiKey || parsed.key || decryptedText;
    } catch (_error) {
      return decryptedText;
    }
  }

  function setStatus(statusElement, message, tone) {
    statusElement.textContent = message;
    statusElement.dataset.tone = tone || "";
  }

  function initializeUnlocker(root) {
    const form = root.querySelector("[data-api-key-form]");
    const passwordInput = root.querySelector("[data-api-key-password]");
    const submitButton = root.querySelector("[data-api-key-submit]");
    const statusElement = root.querySelector("[data-api-key-status]");
    const result = root.querySelector("[data-api-key-result]");
    const output = root.querySelector("[data-api-key-output]");
    const copyButton = root.querySelector("[data-api-key-copy]");
    const keyUrl = root.dataset.keyUrl;

    if (!window.crypto || !window.crypto.subtle) {
      setStatus(
        statusElement,
        "このブラウザーでは復号機能を利用できません。別のブラウザーで開いてください。",
        "error"
      );
      submitButton.disabled = true;
      return;
    }

    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      const password = passwordInput.value;
      if (!password) {
        setStatus(statusElement, "授業中に案内されたパスワードを入力してください。", "error");
        return;
      }

      result.hidden = true;
      output.value = "";
      submitButton.disabled = true;
      setStatus(statusElement, "APIキーを復号しています...", "pending");

      try {
        const response = await fetch(keyUrl, { cache: "no-store" });
        if (!response.ok) {
          throw new Error("missing-encrypted-file");
        }

        const payload = await response.json();
        const decryptedText = await decryptPayload(payload, password);
        const apiKey = extractApiKey(decryptedText).trim();

        if (!apiKey) {
          throw new Error("empty-api-key");
        }

        output.value = apiKey;
        result.hidden = false;
        setStatus(statusElement, "表示できました。コピーしてCodex CLIのAPI key欄に貼り付けてください。", "success");
      } catch (error) {
        const message =
          error.message === "missing-encrypted-file"
            ? "暗号化されたAPIキーのファイルがまだ公開されていません。講師に確認してください。"
            : "パスワードが違うか、APIキーのデータを読み取れませんでした。";
        setStatus(statusElement, message, "error");
      } finally {
        submitButton.disabled = false;
      }
    });

    copyButton.addEventListener("click", async () => {
      if (!output.value) return;

      try {
        await navigator.clipboard.writeText(output.value);
        setStatus(statusElement, "APIキーをコピーしました。", "success");
      } catch (_error) {
        output.focus();
        output.select();
        setStatus(statusElement, "コピーできない場合は、表示されたAPIキーを選択してコピーしてください。", "error");
      }
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-api-key-unlocker]").forEach(initializeUnlocker);
  });
})();
