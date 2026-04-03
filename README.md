## Codex CLIでWebサイトをつくろう

このリポジトリは、Codex CLI を使って GitHub Pages にサイトを公開するための実践ガイドです。
講座資料として使える構成を保ちつつ、個人の YouTube チュートリアル動画にも転用できるように整理していく想定です。

### 目次（GitHub 上の各章）
- 1. はじめに: [01-introduction.md](./01-introduction.md)
- 2. 開発環境の準備: [02-github-codex.md](./02-github-codex.md)
- 3. Codex CLI でサイト作成: [03-build-with-codex.md](./03-build-with-codex.md)
- 4. GitHub Pages へデプロイ: [04-deploy-github-pages.md](./04-deploy-github-pages.md)
- 5. CSS/JavaScript で拡張: [05-style-and-js.md](./05-style-and-js.md)
- 6. Tips・検索・画像添付: [06-tips-and-tricks.md](./06-tips-and-tricks.md)
- 7. おわりに: [07-outro.md](./07-outro.md)

## [WebページURL](https://jonahegashira.github.io/codex-github-pages/)

↓講義中の質問やコメントはこちらへ↓
### [掲示板](https://lecture-board.jonah-342.workers.dev/)

---

## 動画化の仮運用

YouTube 向けでは、各章をそのまま読み上げるのではなく、以下のような役割分担を想定しています。

- `01-07` の Markdown は講座資料の本体として維持する
- `scripts/` は動画制作のための下書き置き場として使う
- 本編動画は「作る → 確認する → push する → 公開する」を優先して再構成する
- セットアップや補足、変わりやすい情報は概要欄・固定コメント・補助動画に逃がす
- 画像や既存のスクリーンショットは B ロールやテロップ素材として再利用する

今は仮の運用として、`scripts/` に以下のようなファイルを置いています。

- `00-series-plan.md`: シリーズ全体のざっくり設計
- `01-main-tutorial.md`: 本編チュートリアルの脚本たたき台
- `02-design-upgrade.md`: デザイン改善編のたたき台
- `03-bonus-tips.md`: 補足・小ネタ回のたたき台
- `prompt-bank.md`: 収録でコピペしやすいプロンプト集
- `shot-list.md`: 撮影カット一覧
- `asset-list.md`: 使えそうな既存素材メモ
- `recording-checklist.md`: 収録前チェック
- `description-pack.md`: 概要欄、チャプター、固定コメントの下書き

講座資料は説明の丁寧さを優先し、動画台本はテンポと再撮影のしやすさを優先する方針です。

---

開発に本格的に取り組んでみたい方は、GitHub Codespaces上ではなく手元のPCに環境を構築することをおすすめします。
以下の記事ではローカルにGemini CLIを導入する方法を紹介しています。

- [ローカル環境構築](./local-setup.md)
