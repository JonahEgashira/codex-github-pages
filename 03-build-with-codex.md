---
layout: default
title: Codex CLIでサイト作成
---

# Codex CLIでWebサイトを作成する

Codex CLIのインストールが完了したら、実際にWebサイトを作っていきましょう。

---

## Codexに依頼する

Codex CLIに対する入力と、ターミナル上で入力するコマンドを区別するため、今後、Codex CLIに対する入力には`user>`を先頭に付けて記述します。

```bash
user> ここにCodexへのメッセージ、プロンプトが入ります。
```

> 注: 上の `user>` は資料上の記法です。実際のCodex CLIには `user>` を付ける必要はありません。

では、早速CodexにHTMLファイルを作ってもらいましょう。

```bash
user> このリポジトリは、GitHub Pagesで公開する自分のWebサイトです。index.htmlを新規作成し、シンプルなHTMLを用意してください。
```

![Codex HTML](./images/index-codex.png)


## HTMLページを確認する

作成したHTMLページの内容を確認してみましょう。
まずはじめに、新しいターミナルの画面を作成します。

ターミナルの右上の「＋」を押します。

![codespace-bash](./images/plus.png)

bashと表示されて新しい画面になったことを確認します。ここで以下の`python`コマンドを入力します。

![bash-new](./images/bash.png)

ターミナルで以下のコマンドを入力してください。

```bash
python3 -m http.server 5500
```

![HTTP](./images/github-http.png)

**ブラウザーで開く** をクリックすると、現状のHTMLファイルが確認できます。
もしくはターミナル上の`http://0.0.0.0:5500/`を、Macであれば⌘+クリック、WindowsであればCtrl+クリックで開くことができます。

このPythonコマンドでは簡易なWebサーバーを立ち上げ、今いるフォルダーの中身をHTTPで配信しています。
停止するには、サーバーを起動しているターミナルで `Ctrl + C` を押してください。

【トラブルシュート】

* 5500番ポートが使用中なら `python3 -m http.server 5501` など別ポートに変更
* 「Open in Browser」が出ない場合は、VS Code（Codespaces）の「PORTS」タブから該当ポートを手動で開く
* 画面が更新されない時はファイル保存とブラウザーのリロードを確認

---

## Codex CLIとターミナルの切り替え

Codex CLIに自然言語で依頼をする場所と、ターミナルでコマンドを入力する場所は異なります。

`npm`や`node`と表示されることがあるタブがCodex CLI（対話用）で、`bash`と書かれているタブが通常のターミナル（コマンド実行用）です。
`user>`と先頭に書かれている文書/指示はCodex CLIに入力し、それ以外のコマンドはターミナル上で入力・実行します。

![Codex NPM](./images/codex-npm.png)
*Codex CLIが開かれている状態*

---

# HTMLファイルをGitHubへ送る

作成した `index.html` をGitHubへ送ります。
Gitでは「**変更を記録する**」作業を*コミット*、GitHubへ送る作業を*プッシュ*と呼びます。

本講義では、細かいGitコマンドはCodex CLIに任せます。
Codex CLIのタブに戻り、次のように依頼してください。

```bash
user> 変更を確認してpushしてください
```

![Codex git add](./images/commit.png)

Pushにはネットワークアクセスが必要なため、Codexが許可を求めてきています。
`1. Yes, proceed`を選択し、Pushしましょう。

![Codex commit push](./images/push.png)

これで、変更の確認、コミット、GitHubへのpushまで完了です。
GitHubでリポジトリのページを開き、`index.html` が表示されていれば成功です。

> **ポイント**
> Codex CLIは *「ユーザーの意図 → 具体的なGitコマンド」* を橋渡ししてくれます。
> 今日の講義では、Git操作は基本的に `変更を確認してpushしてください` と頼めばOKです。

Codexの裏側では、だいたい次の3段階の操作が行われています。

1. **add**: どの変更を記録するか選ぶ
2. **commit**: 変更を記録する
3. **push**: 記録した変更をGitHubへ送る

この3つの名前だけ覚えておくと、あとでGitを学ぶときに理解しやすくなります。

<details markdown="1">
<summary>参考：手動でGit操作を行う場合</summary>

Codexに頼らず自分で行う場合は、通常のターミナルで次の流れを実行します。

```bash
git status
git add .
git commit -m "Add initial site"
git push -u origin main
```

* `git status` は変更内容の確認です。
* `git add .` は現在のフォルダー以下の変更をまとめて記録候補にします。
* `git commit -m "..."` は変更を記録します。
* `git push -u origin main` はGitHubへ送信します。

今すぐ全部覚える必要はありません。今日の作業では、Codex CLIに任せて進めましょう。

</details>

---

## VSCodeのGUIを使ったGit操作

VSCode（GitHub Codespaces上で動いているエディター）は開発のための様々な便利を備えています。
VSCode上のボタンを操作することでも、`git add`, `git commit`, `git push`は簡単にできます。

### Add

左側の虫眼鏡の下にある、丸が繋がっているようなアイコンを押すと、このような表示になります。
もしコードに変更が加えられている場合、`Changes`の下に、変更済みのファイルが一覧で出てきます。

`Changes`の右にある`+`ボタンを押すと、変更があったファイルを全て`add`することができます。

![add-vs](./images/add-vs.png)

### Commit

Addすると、`Staged Changes`にAddしたファイルが追加されているのが確認できます。
ステージに追加されたファイルをコミットするには、コメント（どんな変更をしたか）が必要なので、
`Changes`の下にある入力欄にコメントを入力します。

入力したら、`✅Commit`を押して、コミット完了です。

![commit-vs](./images/commit-vs.png)

### Push

コミットまでできれば、あとは簡単です。
`Sync Changes`を押せば、リモートのGitHubリポジトリに変更を同期できます。

![push-vs](./images/push-vs.png)

---

前へ → [開発環境の準備](./02-github-codex.md)
次へ → [GitHub Pages へデプロイ](./04-deploy-github-pages.md)
目次へ → [ホーム](./index.md)

---
