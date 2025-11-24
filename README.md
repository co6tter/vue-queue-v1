# vue-queue-v1

## Overview

Vue 3とTypeScriptを使用したモダンなWebアプリケーションプロジェクトです。ViteをビルドツールとしてVue Routerによるルーティング機能を実装しています。

## Tech Stack

- **Frontend Framework**: Vue 3.5.13
- **Language**: TypeScript 5.6
- **Build Tool**: Vite 6.0
- **Routing**: Vue Router 4
- **Code Quality**: Biome 1.9.4
- **Git Hooks**: Lefthook 1.10.10
- **Package Manager**: pnpm

## Setup

### Prerequisites

- Node.js (推奨: 最新のLTS版)
- pnpm

### Installation

```bash
# 依存関係のインストール
pnpm install
```

## Usage

### Development

```bash
# 開発サーバーの起動
pnpm dev
```

開発サーバーは `http://localhost:5173` で起動します。

### Build

```bash
# プロダクションビルド
pnpm build
```

ビルドされたファイルは `dist/` ディレクトリに出力されます。

### Preview

```bash
# ビルド後のプレビュー
pnpm preview
```

## Directory Structure

```
.
├── public/           # 静的アセット
├── src/
│   ├── assets/       # 画像やスタイルなどのリソース
│   ├── components/   # 再利用可能なVueコンポーネント
│   ├── router/       # Vue Routerの設定
│   ├── utils/        # ユーティリティ関数
│   ├── views/        # ページコンポーネント
│   ├── App.vue       # ルートコンポーネント
│   ├── main.ts       # エントリーポイント
│   └── style.css     # グローバルスタイル
├── index.html        # HTMLテンプレート
├── vite.config.ts    # Viteの設定
└── tsconfig.json     # TypeScriptの設定
```

## License

This repository is for personal/private use only.
