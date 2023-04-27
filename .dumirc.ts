import { defineConfig } from 'dumi';
import { defineThemeConfig } from 'dumi-theme-chakra';

const repo = "react-barcode-scanner";

export default defineConfig({
  mfsu: false,
  locales: [
    { id: 'en-US', name: 'English' },
    { id: 'zh-CN', name: '中文' }
  ],
  title: "React Barcode Scanner",
  favicons: ["/react-barcode-scanner/logo.png"],
  logo: "/react-barcode-scanner/logo.png",
  outputPath: "dist-docs",
  hash: true,
  // Because of using GitHub Pages
  base: `/${repo}/`,
  publicPath: `/${repo}/`,
  themeConfig: {
    name: "React Barcode Scanner",
    ...defineThemeConfig({
      social: {
        github: {
          name: 'GitHub',
          link: 'https://github.com/preflower/react-barcode-scanner'
        }
      },
      // @ts-expect-error
      footer: `Copyright © ${new Date().getFullYear()} React-Barcode-Scanner`
    })
  },
  https: {
  }
})
