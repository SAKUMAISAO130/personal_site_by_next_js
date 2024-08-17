/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // ルートパスの設定
  trailingSlash: true,

  // 画像の最適化
  images: { unoptimized: true },

  /**
   * 静的サイトジェネレーションの設定
   */ 
  // エクスポートを有効にする
  output: 'export',
  // 出力先ディレクトリ
  distDir: 'out',
  // cssや画像などの静的ファイルのパスのプレフィックスなど
  basePath: '/out',
  assetsPrefix: './',
};

export default nextConfig;
