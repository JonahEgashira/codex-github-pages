---
layout: default
title: 開発環境の準備
---

# 開発環境の準備

本講義中は、GitHub Codespacesを用いてCodex CLIを利用します。
GitHub Codespacesは、クラウド上で開発環境を提供するサービスで、ブラウザーだけで開発環境を利用できます。
これにより、インストールやセットアップの手間を省き、すぐに開発を始めることができます。

---

# GitHub Codespacesとは

GitHubが提供するクラウドの開発環境です。
[GitHub Codespaces](https://github.co.jp/features/codespaces)

* **環境構築不要**
  通常、プログラミングや開発を行う際は複数のツールをインストールする必要がありますが、Codespaces上のマシンには主要なツールがすでにインストールされています。
  自分のPCには何もインストールしなくても、すぐに開発を始められます。

* **どのPCでも同じ環境**
  クラウド上で開発を行うことができるため、個人のPCの設定などに左右されず、チーム全員が同じ設定で作業できます。

---

## GitHub Codespacesでの作業手順

まずはじめに、GitHubでリポジトリを作成しましょう。

### GitHub リポジトリを新規作成

* リポジトリとは、Gitで管理しているフォルダー、ディレクトリのことです。

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

---

### Codespaceを起動

1. 作成したリポジトリのトップページがこのようになっていることを確認します。
   ![GitHub-Blank](./images/github-start.png)
2. 右上の「＋」→ **New Codespace** をクリックします。
   ![GitHub-Repo-Code](./images/github-repo-code.png)
3. Codespace作成の設定画面に移行するので、Repositoryから先ほど作成したリポジトリを選択します。その他の設定はデフォルトのままでOKです。**Create codespace**をクリックします。
   ![GitHub-Code-Settings](./images/github-code-settings.png)

作成から起動までに1〜3分ほどかかる場合があります。ブラウザーは閉じずにそのまま待ちましょう。

<details markdown="1">
<summary>Codespacesの料金について</summary>

Codespacesは毎月一定量まで無料で使用することができます。
個人用のGitHubアカウントには、月あたり15GBのストレージと、120コア時間の使用時間が付与されます。
コア時間は使用するマシンのスペックによって消費量が異なります。
2コアマシンを1時間使うと2コア時間を消費し、8コアマシンを1時間使うと8コア時間という計算です。
詳しくは[GitHub Codespacesの料金について](https://docs.github.com/ja/billing/concepts/product-billing/github-codespaces)をご確認ください。

</details>

---

## Codespacesの画面構成

GitHub Codespacesは、クラウド上で動作するVS Code（Visual Studio Code）です。
VS Codeは、Microsoftが提供する無料のソースコードエディターで、多くのプログラミング言語をサポートし、拡張機能を通じて機能を追加することができます。

Codespaces/VS Codeの画面構成について簡単に説明します。

![codespace-vscode](./images/codespace-vscode.png)

1. **ファイルエクスプローラー**
   左側に表示されるファイルエクスプローラーは、プロジェクト内のファイルやフォルダーを表示します。ここからファイルをクリックすることで、エディターで開くことができます。

2. **エディター**
   画面中央に位置するエディターは、コードを編集するための領域です。シンタックスハイライトやコード補完機能が利用でき、効率的にコードを書くことができます。

3. **ターミナル**
   画面下部に表示されるターミナルは、コマンドを実行するためのインターフェースです。ここでGitコマンドやnpmコマンドを実行して、プロジェクトの管理やビルドを行うことができます。

---

# Codex CLIのインストール

それでは実際にCodespaces上でCodex CLIを動かしてみましょう。

まず、Codespacesのターミナルで以下のコマンドを実行し、Codex CLIをインストールします。
実行は、このコマンドをターミナルに入力（コピー＆ペースト）し、Enterキーを押すことでできます。

```bash
npm i -g @openai/codex
```

このコマンドで、Codex CLIがCodespaces上のマシンにグローバルにインストールされます。

![codespace-codex](./images/codespace-codex.png)

---

# Codex CLIの起動

インストールが完了したら、以下のコマンドでCodex CLIを起動します。

```bash
codex
```

実行すると、以下のように回転するロゴが表示されます。

![codex-start](./images/codex-start.png)

![codex logo](./images/codex.gif)

ここで認証方法を選びます。ChatGPT Plus、Pro、Business、Edu、Enterpriseなどの対象プランを利用している方は[1. ChatGPTアカウントでサインインする人](#1-chatgptアカウントでサインインする人)を、APIキーを利用する方は[2. APIキーを利用する人](#2-apiキーを利用する人)を参考に進めてください。
ChatGPTアカウントでサインインする場合は、契約プランに含まれるCodex利用枠を使います。APIキーでサインインする場合は、OpenAI PlatformのAPI利用料金として課金されます。

### 1. ChatGPTアカウントでサインインする人

Codex CLIを初めて起動すると、ChatGPTアカウントでサインインする案内が表示されます。
画面に表示されるURLやコードに従って、ブラウザーで認証を完了してください。
Codespaces上でブラウザーが自動で開かない場合も、表示されたURLをコピーして開けば進められます。

### 2. APIキーを利用する人

![api key](./images/api-key.png)

ここの**API key**と書いてあるところに、APIキーをペーストしましょう。
APIキーを利用する場合は、講義中に案内される手順に従って取得してください。講義用APIキーが配布される場合は、下の欄に授業中に共有されたパスワードを入力すると表示できます。

<div class="api-key-unlocker" data-api-key-unlocker data-key-url="{{ '/assets/data/class-api-key.enc.json' | relative_url }}">
  <form data-api-key-form>
    <label for="class-api-key-password">講義用APIキーのパスワード</label>
    <div class="api-key-form-row">
      <input id="class-api-key-password" type="password" autocomplete="off" data-api-key-password>
      <button type="submit" data-api-key-submit>APIキーを表示</button>
    </div>
  </form>
  <p class="api-key-status" data-api-key-status role="status" aria-live="polite"></p>
  <div class="api-key-result" data-api-key-result hidden>
    <label for="class-api-key-output">APIキー</label>
    <div class="api-key-output-row">
      <input id="class-api-key-output" type="text" readonly data-api-key-output>
      <button type="button" data-api-key-copy>コピー</button>
    </div>
  </div>
</div>

<details markdown="1">
<summary>講師向け：講義用APIキーを公開する手順</summary>

授業前に、ローカルで次のコマンドを実行します。入力したAPIキーとパスワードは画面に表示されません。

```bash
node scripts/encrypt-class-api-key.mjs
```

作成された `assets/data/class-api-key.enc.json` をGitHub Pagesに公開すると、このページのフォームから復号できます。授業後はOpenAI Platform側で講義用APIキーを削除してください。

</details>

![codex-ok](./images/codex-ok.png)

成功すると、上記のような画面になります。
失敗する場合は、APIキーのコピー漏れや、利用中のOpenAI Platformアカウントの設定を確認してください。

# 重要：モデルの選択

Codexでは複数のモデルを選択できます。モデル一覧は頻繁に更新されるため、講義資料のスクリーンショットと実際の画面でモデル名が違う場合があります。

2026年5月時点では、OpenAIの公式ドキュメントでは多くのコード生成タスクの標準として `gpt-5.5` が案内されています。Codex CLIのモデル選択画面では、ChatGPTでサインインしているか、APIキーを使っているか、また契約プランによって、`gpt-5.5`、`gpt-5.4`、`gpt-5.3-codex` など表示される候補が変わることがあります。

表示されていれば、公式ドキュメントで案内されている最新モデルの `gpt-5.5` を選びます。表示されない場合は、`gpt-5.4` や `gpt-5.3-codex` など、その時点で選べる新しいモデルを選べばOKです。迷った場合は、最初はデフォルトのモデルのまま進めても構いません。

Codexを起動している画面で、

```
/model
```

と入力してください。

![codex-model-select](./images/model-select.png)

すると、このようにどのモデルを選択するかの画面が出てきます。

> 注: この資料の画像は講義作成時点のスクリーンショットを含むため、画像内のモデル名が古い場合があります。画面に古いモデル名が写っていても、実際にはその時点で表示される新しいモデルを選んでください。

キーボードの上下矢印キーで使いたいモデルに移動し、Enterキーを押します。

![codex-mini](./images/codex-mini.png)

すると、Reasoning Levelの選択画面に移ります。
Reasoningとは、AIが考えるプロセスのことであり、ReasoningのLevelを上げると、AIがより多く考えて良い答えが返ってくる可能性が高まります。

本講習で扱う静的なWebサイトのコーディングは比較的シンプルなので、Reasoning Levelは最初は `Low` を選べば十分です。複雑なバグ修正や大きな設計変更を依頼する場合は、`Medium (default)`、`High`、`Extra high` を検討します。

![reasoning](./images/reasoning.png)

<details markdown="1">
<summary>どんな時にReasoningが必要？</summary>
以下のようなケースでは、Reasoningがあるとより良い結果を得られやすいです。

- バグの原因特定
- アルゴリズムの設計・選定
- コードレビューでの問題発見
- 複雑なデータ分析
- 数学の問題

Reasoningをおこなうようにすると、その分解答にかかる時間も増えるので、Codex CLIに限らず、普段生成AIを使用するときも使い分けを意識するとよいかもしれません。
</details>

---

### 補足

* Codex CLIを終了するには、CLIを実行しているターミナルで `Ctrl + C` を押します。
* この後は「Codex CLI用ターミナル（対話用）」と「通常のbashターミナル（コマンド実行用）」の2つを並行して使います。画面右上の「＋」から新しいターミナルを開き、`bash` と表示されるタブでコマンドを実行してください。
* モデル名やUIは変わりやすいので、迷った場合は[Codex CLI公式ドキュメント](https://developers.openai.com/codex/cli)も確認してください。

---

前へ → [はじめに](./01-introduction.md)
次へ → [Codex CLI でサイト作成](./03-build-with-codex.md)
目次へ → [ホーム](./index.md)

---
