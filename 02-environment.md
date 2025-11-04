---
layout: default
title: 開発環境の準備
---

# 開発環境の準備

本講義中は、GitHub Codespacesを用いてGemini CLIを利用します。
GitHub Codespacesは、クラウド上で開発環境を提供するサービスで、ブラウザーだけで開発環境を利用できます。これにより、インストールやセットアップの手間を省き、すぐに開発を始めることができます。

---

# GitHub Codespacesとは

GitHubが提供するクラウドの開発環境です。
[GitHub Codespaces](https://github.co.jp/features/codespaces)

* **環境構築不要**
  通常、プログラミングや開発を行う際は複数のツールをインストールする必要がありますが、Codespaces上のマシンには主要なツールがすでにインストールされています。自分のPCには何もインストールしなくても、すぐ開発を始められます。
* **どのPCでも同じ環境**
  クラウド上で開発を行うことができるため、個人のPCの設定などに左右されず、チーム全員が同じ設定で作業できます。

## GitHub Codespacesでの作業手順

まずはじめに、GitHubでリポジトリを作成しましょう。

### GitHub リポジトリを新規作成

- リポジトリとは、Gitで管理しているフォルダー、ディレクトリのことです。

<details markdown="1">
<summary>補足：💡フォルダー、ディレクトリ、リポジトリの違い</summary>

### **フォルダー**

* パソコンの中でファイルを入れる「入れ物」
* 物理的なディレクトリ構造の見た目のこと

---

### **ディレクトリ**

* フォルダーとほぼ同じ意味ですが、**コンピューター用語寄り**
* ターミナルやコマンドラインで「今いる場所」を指すときに「ディレクトリ」と言う
* 例：`cd my-site` は「my-site」というディレクトリに移動するという意味です。

---

### **リポジトリ（Repository）**

* Gitで管理されているフォルダー（＋その中の履歴データ）
* 普通のフォルダーとの違いは「中に `.git` という隠しフォルダーがあり、過去の履歴や設定が入っている」こと
* GitHubにアップすると、そのままインターネット上のリポジトリにもなります。

</details>

1. [GitHub にログイン](https://github.com/login)し、右上の「＋」→ [**New repository**](https://github.com/new) をクリック  
 ![GitHub-New-Repo](./images/github-new-repo.png)
2. Repository name に任意の名前（例：`my-site`）を入力し、`Add README` をオンにして、**Create repository** をクリックします。
![GitHub-Create](./images/github-create-readme.png)

### Codespaceを起動
1. 作成したリポジトリのトップページがこのようになっていることを確認します。
![GitHub-Blank](./images/github-start.png)
2. 右上の「＋」→ **New Codespace** をクリックします。
![GitHub-Repo-Code](./images/github-repo-code.png)
3. Codespace作成の設定画面に移行するので、Repositoryから先ほど作成したリポジトリを選択します。その他の設定はデフォルトのままでOKです。**Create codespace**をクリックします。
![GitHub-Code-Settings](./images/github-code-settings.png)

作成から起動までに1〜3分ほどかかる場合があります。ブラウザーは閉じずにそのまま待ちましょう。

<details markdown="1">
<summary>
Codespacesの料金について
</summary>

Codespacesは毎月一定量まで無料で使用することができます。
個人用のGitHubアカウントには、月あたり15GBのストレージと、120コア時間の使用時間が付与されます。
コア時間は使用するマシンのスペックによって消費量が異なります。
2コアマシンを1時間使うと2コア時間を消費し、8コアマシンを1時間使うと8コア時間という計算です。詳しくは[GitHub Codespacesの料金について](https://docs.github.com/ja/billing/concepts/product-billing/github-codespaces)をご確認ください。
</details>

## Codespacesの画面構成

GitHub Codespacesは、クラウド上で動作するVS Code（Visual Studio Code）です。VS Codeは、Microsoftが提供する無料のソースコードエディターで、多くのプログラミング言語をサポートし、拡張機能を通じて機能を追加することができます。

Codespaces/VS Codeの画面構成について簡単に説明します。

![codespace-vscode](./images/codespace-vscode.png)

1. **ファイルエクスプローラー**  
   左側に表示されるファイルエクスプローラーは、プロジェクト内のファイルやフォルダーを表示します。ここからファイルをクリックすることで、エディターで開くことができます。VS Codeでも同様に、プロジェクトの構造を視覚的に把握することができます。

2. **エディター**  
   画面中央に位置するエディターは、コードを編集するための領域です。VS Codeと同様に、シンタックスハイライトやコード補完機能が利用でき、効率的にコードを書くことができます。

3. **ターミナル**  
   画面下部に表示されるターミナルは、コマンドを実行するためのインターフェースです。ここでGitコマンドやnpmコマンドを実行して、プロジェクトの管理やビルドを行うことができます。VS Codeでもターミナルを内蔵しており、同様の操作が可能です。

---

# Gemini CLIの起動
それでは実際にCodespaces上でGemini CLIを動かしてみましょう。

Codespaces のターミナルで以下を実行します。
実行は、このコマンドをターミナルに入力（コピーアンドペースト）し、Enterキーを押すことでできます。

```bash
npx @google/gemini-cli
```

`npx`コマンドでGemini CLIがCodespaces上のマシンにインストールされ、実行されます。

![codespace-gemini](./images/codespace-gemini.png)

- Google アカウントでのログインを求められるので、`1. Login with Google`を選択しましょう。

~~**⚠️注意**：慶應のGoogleアカウントではGeminiの利用が制限されていて使えません。個人のGoogleアカウントでログインしてください。~~

2025年7月現在、慶應義塾がGoogle Workspace for Educationを契約しており、@keio.jpアカウントでログインしてもおそらく使用できます。

参考: https://www.mita.itc.keio.ac.jp/ja/software_ai_guideline.html

![gemini-login](./images/gemini-login.png)

- `1. Login with Google`を選択したら、ターミナル上に出てくるURLをクリックします。
- 最初はこのURLが表示されない場合があります。その場合は、再度`npx @google/gemini-cli`を実行してください。

![gemini-url](./images/gemini-url.png)

- URLをクリックするとGoogleでのログインが求められます。ログイン後、このようなページとコードが表示されるので、`Copy`を押してコードをコピーします。

![gemini-copy](./images/gemini-code.png)

- 再度Codespacesに戻り、このコードをペーストして、Enterキーを押します。

![gemini-success](./images/gemini-success.png)

成功すると、このような大きな`GEMINI`の文字が表示され、Gemini CLIに対してメッセージを送って使える状態になります。

ここまで確認できればCodespaces環境の準備は完了です。

補足:
- Gemini CLIを終了するには、CLIを実行しているターミナルで `Ctrl + C` を押します。
- この後は「Gemini CLI用ターミナル（対話用）」と「通常のbashターミナル（コマンド実行用）」の2つを並行して使います。画面右上の「＋」から新しいターミナルを開き、`bash` と表示されるタブでコマンドを実行してください。
- もしローカルPCで進めたい場合は `local-setup.md` を参照してください。

【ログイントラブルのヒント】
- ターミナルのURLがクリックできない場合は、右クリックでコピーしてブラウザーに貼り付け
- 認証コード入力に失敗した場合は、もう一度 `npx @google/gemini-cli` を実行し新しいコードで再認証
- 組織アカウントで認可がブロックされる場合は、個人アカウントでのログインや別ブラウザーでの再試行を検討

前へ → [はじめに](./01-introduction.md)
次へ → [Gemini CLI でサイト作成](./03-build-with-codex.md)
目次へ → [ホーム](./index.md)
