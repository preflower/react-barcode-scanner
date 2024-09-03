export default {
  logo: (
    <>
      <img style={{ height: '30px' }} src="/logo.png" alt="React Barcode Scanner" />
      <span style={{ marginLeft: '8px' }}>React Barcode Scanner</span>
    </>
  ),
  project: {
    link: 'https://github.com/preflower/react-barcode-scanner'
  },
  useNextSeoProps () {
    return {
      titleTemplate: '%s – React Barcode Scanner'
    }
  },
  footer: {
    text: <p>Copyright © {new Date().getFullYear()} React Barcode Scanner</p>
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
    </>
  ),
  darkMode: false,
  i18n: [
    { locale: 'en-US', text: 'English' },
    { locale: 'zh-CN', text: '简体中文' }
  ]
}
