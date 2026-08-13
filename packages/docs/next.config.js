import path from 'node:path'
import { fileURLToPath } from 'node:url'

import nextra from 'nextra'

const docsDirectory = path.dirname(fileURLToPath(import.meta.url))

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
  flexsearch: {
    codeblocks: true
  },
  defaultShowCopyCode: true,
  readingTime: true
})

export default withNextra({
  reactStrictMode: true,
  i18n: {
    locales: ['en-US', 'zh-CN'],
    defaultLocale: 'en-US'
  },
  webpack (config) {
    // Workspace packages may have a different React dev version. Force the
    // documentation app and the linked library to share one React instance.
    config.resolve.alias = {
      ...config.resolve.alias,
      react: path.join(docsDirectory, 'node_modules/react'),
      'react-dom': path.join(docsDirectory, 'node_modules/react-dom')
    }

    return config
  }
})

// If you have other Next.js configurations, you can pass them as the parameter:
// export default withNextra({ /* other next.js config */ })
