# ウェブサイトのボイラープレート

## 動作環境

- [Active LTS](https://github.com/nodejs/release#release-schedule)
- Docker

## クイックスタート

```shell
yarn install # npmパッケージのインストール
yarn dev # 開発サーバーの起動
```

## npmスクリプト

| タスク名 | 説明                                                                                            |
| :------- | :---------------------------------------------------------------------------------------------- |
| build    | 静的サイト生成します。                                                                          |
| clean    | ビルド成果物を取り除きます。                                                                    |
| dev      | 開発サーバーを起動します。                                                                      |
| format   | コード整形します。                                                                              |
| lint     | 静的コード検査します。                                                                          |
| release  | [リリース](https://community.algolia.com/shipjs/guide/)を実施します。GitHubトークンが必要です。 |

## 環境変数

| 変数名     | 説明                   |
| :--------- | :--------------------- |
| SITE_URL   | サイトのURL。必須      |
| SERVER_URL | APIサーバーのURL。任意 |

### カスケーディング (`yarn dev`)

1. .env
2. .env.development
3. .env.local
4. .env.development.local

の順番で参照します。後に参照される値が優先されます。リポジトリに含めない環境変数は.env.localあるいは.env.development.localに記述してください。

### カスケーディング (`yarn build`)

1. .env
2. .env.production
3. .env.local
4. .env.production.local

の順番で参照します。後に参照される値が優先されます。リポジトリに含めない環境変数は.env.productionあるいは.env.production.localに記述してください。

## 採用しているライブラリ

### [Eleventy](https://www.11ty.dev/)

静的サイト生成するためのライブラリです。

### [TailwindCSS](https://tailwindcss.com/)

見た目を実装するためのユーティリティファーストなCSSフレームワークです。

### [Jumpu UI](https://github.com/tuqulore/jumpu-ui)

一貫性のある見た目を実装するためのユーティリティフレンドリーなUIコンポーネントライブラリです。

### [Alpine.js](https://alpinejs.dev/)

動的な振る舞いの実装するためのライブラリです。

### [Iconify SVG Framework](https://docs.iconify.design/icon-components/svg-framework/)

SVGアイコンを参照するためのライブラリです。

## ディレクトリ構成

```
.
├── CHANGELOG.md
├── Dockerfile
├── LICENSE.md
├── README.md
├── dist
├── lib
│   └── get-content.js
├── package.json
├── postcss.config.js
├── renovate.json
├── serve.js
├── ship.config.js
├── src
│   ├── _data
│   │   ├── nav.json
│   │   └── site.js
│   ├── _includes
│   │   ├── base.njk
│   │   ├── partials
│   │   │   ├── footer.njk
│   │   │   ├── header.njk
│   │   │   ├── header_nav.njk
│   │   │   └── ogp.njk
│   │   └── post.njk
│   ├── index.md
│   ├── ogp.png
│   ├── public
│   │   └── favicon.ico
│   └── style
│       ├── components
│       ├── index.njk
│       └── main.css
├── tailwind.config.js
└── yarn.lock
```

### dist

ビルド成果物の出力先です。

### lib

Node.jsで実行するCommonJSモジュールを配置します。主にEleventyで実行するコードに使用します。

### src

Eleventyテンプレートの参照先です。

### src/\_data

[グローバルデータ](https://www.11ty.dev/docs/data-global/)を配置します。

### src/\_includes

[レイアウトテンプレート](https://www.11ty.dev/docs/layouts/)を配置します。

### src/public

静的アセットを配置します。distディレクトリ直下に出力されます。

### src/style

スタイルシートを配置します。

## Docker

以下のような手順で静的サイトを配信するDockerイメージを生成し、コンテナーを生成して動作させることができます。

```
docker build -t website-boilerplate .
docker run --rm -p 8080:8080 website-boilerplate
```

## GitHubワークフロー

### CI

PRブランチで静的コード検査とコード整形をおこないます。
