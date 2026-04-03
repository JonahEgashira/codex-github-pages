# 01 Main Tutorial

## Goal

Codex CLI を使って、GitHub Pages にサイトを公開するところまで見せる。

## Hook

「今日は Codex を使って、ゼロから Web ページを作って、そのまま GitHub Pages で公開するところまで一気にやります。」

## Viewer Outcome

- GitHub リポジトリを作る流れがわかる
- Codespaces と Codex CLI の最低限の使い方がわかる
- `index.html` を作って push し、公開する流れがわかる

## Chapter Draft

1. 何を作る動画か
2. リポジトリ作成
3. Codespaces 起動
4. Codex で `index.html` を作る
5. ローカル確認
6. GitHub に push
7. GitHub Pages 公開
8. 完成確認

## Scene Template

### Scene 1

- Narration: 今日やることを短く説明する
- On Screen: 完成したページのプレビュー
- Action: 先にゴールを見せる
- Asset: 公開済みページ、もしくは完成スクリーンショット
- Note: ここはテンポ重視

### Scene 2

- Narration: 新しいリポジトリを作る
- On Screen: GitHub の New repository 画面
- Action: README ありで作成
- Asset: `images/github-new-repo.png`
- Note: 名前入力部分は必要に応じてカット

### Scene 3

- Narration: Codespaces を開いて Codex を使う準備をする
- On Screen: Codespaces 起動画面
- Action: 新規 Codespace を作る
- Asset: `images/github-repo-code.png`, `images/github-code-settings.png`
- Note: 待ち時間はカット

### Scene 4

- Narration: Codex に最初の HTML を作ってもらう
- On Screen: Codex CLI と入力プロンプト
- Action: `index.html` を生成
- Asset: `images/index-codex.png`
- Note: プロンプトは `prompt-bank.md` から貼る

### Scene 5

- Narration: ブラウザーで確認する
- On Screen: `python3 -m http.server 5500`
- Action: ローカルで開いて表示
- Asset: `images/github-http.png`
- Note: 表示成功の瞬間をしっかり見せる

### Scene 6

- Narration: 変更を GitHub に送る
- On Screen: Git の流れ or Codex に push を頼む場面
- Action: `git add`, `git commit`, `git push` もしくは Codex で一括
- Asset: `images/commit.png`, `images/push.png`
- Note: 手動と自動のどちらを主役にするか後で決める

### Scene 7

- Narration: GitHub Pages を有効化して公開する
- On Screen: Pages 設定画面
- Action: `main` を公開対象にする
- Asset: `images/pages-main.png`, `images/site-url.png`
- Note: 反映待ちはカット

### Scene 8

- Narration: 公開完了と次回予告
- On Screen: 公開されたページ
- Action: URL を見せる
- Asset: 完成ページの録画
- Note: 次は CSS/JS 編へ誘導

## TODO

- 冒頭 30 秒の言い回しを少し自然にする
- 本編を 10 分以内に収めるか検討する
- Git 操作をどこまで手で見せるか決める
