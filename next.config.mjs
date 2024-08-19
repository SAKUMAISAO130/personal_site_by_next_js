/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  /**
   * 静的サイトジェネレーションの設定
   */ 
  // エクスポートを有効にする
  output: 'export',
  // 出力先ディレクトリ
  distDir: 'out',
  // cssや画像などの静的ファイルのパスのプレフィックスなど
  basePath: '/personal_site_by_next_js/out',
  // assetsPrefix: './',

};

export default nextConfig;
