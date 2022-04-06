import { defineConfig } from "dumi";

const repo = "react-barcode-scanner";

export default defineConfig({
  title: "React Barcode Scanner",
  favicon: "/react-barcode-scanner/logo.png",
  logo: "/react-barcode-scanner/logo.png",
  outputPath: "dist-docs",
  mode: "site",
  hash: true,
  // Because of using GitHub Pages
  base: `/${repo}/`,
  publicPath: `/${repo}/`,
  navs: [
    null,
    {
      title: "GitHub",
      path: "https://github.com/preflower/react-barcode-scanner",
    }
  ],
  devServer: {
    https: true
  }
})
