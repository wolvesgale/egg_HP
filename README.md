# 株式会社egg コーポレートサイト

株式会社eggの公式コーポレートサイトです。Next.js 13+ App Routerを使用して構築されています。

## 事業内容

- **EC運営管理**: オンラインストアの構築から運営まで包括的なECソリューション
- **DXコンサルティング**: デジタル技術を活用した業務改革と効率化支援
- **調香/香料販売**: 世界であなただけの香りとの出会いをサポート

## 技術スタック

- **フレームワーク**: Next.js 14 (App Router)
- **スタイリング**: TailwindCSS
- **デプロイ**: Vercel
- **ドメイン**: eggs.email

## 開発環境のセットアップ

### 前提条件

- Node.js 18以上
- npm または yarn

### インストール

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

開発サーバーが起動したら、[http://localhost:3000](http://localhost:3000) でサイトを確認できます。

## デプロイ

### Vercelへの自動デプロイ

1. GitHubリポジトリにコードをpush
2. Vercelが自動的にビルド・デプロイを実行
3. プレビューURLまたは本番URLで確認

### 独自ドメインの設定

1. Vercelダッシュボードにログイン
2. プロジェクトの「Settings」→「Domains」に移動
3. `eggs.email` を追加
4. DNSレコードを設定（Vercelが提供する値を使用）
5. SSL証明書（Let's Encrypt）が自動で有効化される

### ビルドコマンド

```bash
# 本番用ビルド
npm run build

# 本番サーバー起動（ローカル確認用）
npm run start
```

## プロジェクト構成

```
src/
├── app/                    # App Router ページ
│   ├── dx-consulting/      # DXコンサルティングページ
│   ├── ec-management/      # EC運営管理ページ
│   ├── fragrance/          # 調香/香料販売ページ
│   ├── tokushoho/          # 特定商取引法ページ
│   ├── layout.js           # ルートレイアウト
│   └── page.jsx            # トップページ
├── components/             # 共通コンポーネント
│   └── Footer.jsx          # フッターコンポーネント
└── utilities/              # ユーティリティ
```

## 特定商取引法に基づく表記

サイトのフッターから「特定商取引法に基づく表記」ページ（`/tokushoho`）にアクセスできます。

## ライセンス

© 2025 株式会社egg. All rights reserved.