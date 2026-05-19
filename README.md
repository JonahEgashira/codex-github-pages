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
- 7. おわりに: [07-outro.md](./07-outro.md)

## [WebページURL](https://codex.keioaic.dev/)

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
