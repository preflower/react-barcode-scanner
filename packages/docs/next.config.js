import nextra from 'nextra'

const withNextra = nextra({
  search: {
    codeblocks: true
  },
  defaultShowCopyCode: true,
  readingTime: true,
  contentDirBasePath: '/',
  unstable_shouldAddLocaleToLinks: true
})

export default withNextra({
  reactStrictMode: true,
  i18n: {
    locales: ['en-US', 'zh-CN'],
    defaultLocale: 'en-US'
  }
})

// If you have other Next.js configurations, you can pass them as the parameter:
// export default withNextra({ /* other next.js config */ })
