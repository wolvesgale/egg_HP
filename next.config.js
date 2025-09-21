/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    esmExternals: 'loose'
  },
  webpack: (config) => {
    config.externals = [...config.externals, { canvas: "canvas" }]; // required to make pdfjs work
    return config;
  },
  // Vercel向けの設定
  images: {
    // Vercelの画像最適化を使用
    domains: ['ucarecdn.com'], // 使用している外部画像ドメインを追加
  },
  // 静的出力は無効化（Vercelのサーバーレス環境を利用）
  // output: 'export', // この行はコメントアウトまたは削除
};

module.exports = nextConfig;