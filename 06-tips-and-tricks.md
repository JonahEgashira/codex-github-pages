---
layout: default
title: Codex CLI Tips
---

# Codex CLI Tips

Codex CLIは複数の機能を実行できるAIエージェントなので、Webサイトを構築する以外にも、数多くのことができます。詳細は[Codex CLI公式ドキュメント](https://developers.openai.com/codex/cli)をご覧ください。ここでは便利な機能をいくつか紹介します。

## Web検索

Codex CLIは、必要に応じてWeb検索を使い、インターネット上の情報を取得しながら作業できます。ニュース、価格、株価、仕様、公式ドキュメントなど、変わりやすい情報を扱うときに便利です。

```bash
user> Web検索を使って、直近1週間のAppleの株価を調べ、推移を新しいHTMLファイルに載せてください。
```

![Apple](./images/apple.png)

## ファイル（画像）添付

Codex CLIに画像を含むファイルを読み込ませて、そのファイルの内容を解析してもらったり、参考画像をもとにWebページのデザインを行うこともできます。

画像を添付するには、まずCodespacesのファイルエクスプローラーに画像をアップロードします（ドラッグ＆ドロップ、またはエクスプローラーの「Upload」から追加できます）。その後、Codex CLIの入力エリアで`@`を入力するとファイル候補が表示されるので、添付したい画像を選びます。

パス（path）とは、コンピューター上でファイルやフォルダーがどこにあるかを示す「住所」のようなものです。

ここではAppleのWebページのスクリーンショットを撮り、その画像をCodex CLIに渡して再現してみます。

<details>
<summary>💡 パス（path）を理解しよう</summary>

> **パス = ファイルやフォルダーまでの"道順"**
> パソコンの中で目的地を示す住所のようなものです。

- 絶対パスと相対パス

| 種類       | いつ使う？                           | 例（macOS/Linux）                                   | 例（Windows）                                         |
| -------- | ------------------------------- | ------------------------------------------------ | -------------------------------------------------- |
| **絶対パス** | ファイルの場所を"地球規模"で一意に示したいとき        | `/Users/jonah/projects/my-site/images/apple-hp.png` | `C:\\Users\\jonah\\projects\\my-site\\images\\apple-hp.png` |
| **相対パス** | 今いるフォルダー（カレントディレクトリ）からの距離で示したいとき | `./images/apple-hp.png`                             | `.\\images\\apple-hp.png`                             |

* `./` は "今いる場所"
* `../` は "ひとつ上の階層"

</details>

---

Appleのページのスクリーンショットを撮り、`apple-hp.png`などの名前でCodespacesのファイルエクスプローラーエリアに追加します。

![GitHub Apple](./images/github-apple-hp.png)

Codex CLIに`@`と入力すると、添付するファイルの候補が出てくるので、`@apple-hp.png`を選択します。その状態で、この画像に対して行いたいリクエストを入力します。

```bash
user> @apple-hp.png このAppleのホームページの画像を参考にして、AppleっぽいHTMLページを新しく作ってください。
```

![Codex Apple Request](./images/apple-codex.png)

すると、画像を読み込んだCodex CLIがAppleのページに近いデザインを作成してくれます。iPhoneの画像などは準備していないので表示していませんが、ボタンやヘッダーの見た目はかなり近いのではないでしょうか。

![Codex Apple Result](./images/gemini-apple.png)

---

## Codex CLIコマンド

Codexの入力欄で `/` を入力すると、使えるコマンドの一覧が表示されます。上下の矢印キーで選び、Enterキーを押してください。

最初は、次のコマンドだけ覚えておけば十分です。

| コマンド | できること |
|---------|-----------|
| `/model` | 使用するAIモデルを選ぶ |
| `/reasoning` | AIが考える深さを選ぶ |
| `/permissions` | Codexに許可する操作の範囲を変える |
| `/status` | 現在の設定や使用状況を確認する |
| `/diff` | Codexが変更したファイルの差分を見る |
| `/review` | 変更内容に問題がないかレビューしてもらう |
| `/new` | 新しい会話を始める |
| `/exit` | Codex CLIを終了する |

> コマンドはCodex CLIの更新によって変わることがあります。資料と画面が違う場合は、実際に `/` を入力したときに表示される一覧を確認してください。

> `/permissions` の `Full Access` は強い権限です。内容をよく確認し、慎重に選びましょう。

詳しい一覧は[OpenAI公式のCodex CLIコマンド説明](https://developers.openai.com/codex/cli/slash-commands)で確認できます。

---

前へ → [CSS/JavaScriptで拡張](./05-style-and-js.md)
次へ → [Codex App](./07-codex-app.md)
目次へ → [ホーム](./index.md)

---
