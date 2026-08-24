## Codex CLIでWebサイトをつくろう

このリポジトリは、Codex CLI を使って GitHub Pages にサイトを公開するための実践ガイドです。
慶應AICの講座資料として使える構成を保ちつつ、Webサイト制作と公開の基本を学べるように整理しています。

### 目次（GitHub 上の各章）
- 1. はじめに: [01-introduction.md](./01-introduction.md)
- 2. 開発環境の準備: [02-github-codex.md](./02-github-codex.md)
- 3. Codex CLI でサイト作成: [03-build-with-codex.md](./03-build-with-codex.md)
- 4. GitHub Pages へデプロイ: [04-deploy-github-pages.md](./04-deploy-github-pages.md)
- 5. CSS/JavaScript で拡張: [05-style-and-js.md](./05-style-and-js.md)
- 6. Tips・検索・画像添付: [06-tips-and-tricks.md](./06-tips-and-tricks.md)
- 7. Codex App: [07-codex-app.md](./07-codex-app.md)
- 8. エージェント Tips: [08-agent-tips.md](./08-agent-tips.md)
- 9. 制作物発表: [10-showcase.md](./10-showcase.md)
- 10. おわりに: [09-outro.md](./09-outro.md)

## [WebページURL](https://codex.keioaic.dev/)

## 講義用APIキーの公開

1. [OpenAI Platform の API keys](https://platform.openai.com/api-keys) で講義用のAPIキーを作成し、その場でコピーします。
2. ローカルで暗号化ファイルを作ります。APIキーとパスワードは入力しても画面に表示されません。

```bash
node scripts/encrypt-class-api-key.mjs
```

3. 作成された `assets/data/class-api-key.enc.json` だけを公開します。

```bash
git add assets/data/class-api-key.enc.json
git commit -m "Update class API key"
git push
```

公開後は `02-github-codex.md` のフォームで、設定したパスワードを入れるとAPIキーを表示できます。平文のAPIキーはGitHubに置かず、授業後はOpenAI Platformで講義用キーを削除します。

## ローカル開発

このリポジトリは GitHub Pages / Jekyll で公開する静的サイトです。
npm の依存はありませんが、見た目を確認しやすいように `npm run dev` からJekyllを起動できるようにしています。

```bash
npm run dev
```

起動したら `http://127.0.0.1:4000/` を開きます。
初回はRuby gemのインストールが走るため少し時間がかかります。

MacでRuby 3系が入っていない場合は、先に以下を実行してください。

```bash
brew install ruby@3.4
```

依存関係の脆弱性チェックは次のコマンドで実行できます。

```bash
npm run audit:ruby
```
