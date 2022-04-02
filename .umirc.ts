import { defineConfig } from "dumi";

const repo = "react-barcode-scanner";

export default defineConfig({
  title: "React Barcode Scanner",
  favicon:
    "https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png",
  logo: "https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png",
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
