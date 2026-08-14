import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import { Layout, Navbar } from 'nextra-theme-docs'
import 'nextra-theme-docs/style.css'

import { LocaleSwitcher } from './locale-switcher'
import { SITE_NAME, SITE_URL, StructuredData } from './seo'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s – ${SITE_NAME}`
  },
  description: 'A React component and hooks library for browser barcode scanning with a zbar WebAssembly polyfill.',
  applicationName: SITE_NAME,
  authors: [{ name: 'Ted Lin' }],
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' }
    ],
    apple: '/apple-touch-icon.png'
  }
}

function removeDefaultLocalePrefix (items) {
  return items.map(item => ({
    ...item,
    ...(typeof item.route === 'string'
      ? { route: item.route.replace(/^\/en-US(?=\/|$)/, '') || '/' }
      : {}),
    ...(typeof item.href === 'string' && item.href.startsWith('/en-US')
      ? { href: item.href.replace(/^\/en-US(?=\/|$)/, '') || '/' }
      : {}),
    ...('children' in item
      ? { children: removeDefaultLocalePrefix(item.children) }
      : {})
  }))
}

export async function SiteLayout ({ children, lang }) {
  const localizedPageMap = await getPageMap(`/${lang}`)
  const pageMap = lang === 'en-US'
    ? removeDefaultLocalePrefix(localizedPageMap)
    : localizedPageMap
  const homeUrl = lang === 'zh-CN' ? '/zh-CN' : '/'
  const navbar = (
    <Navbar
      key="navbar"
      logo={(
        <>
          <img style={{ height: '30px' }} src="/logo.png" alt="React Barcode Scanner" />
          <span style={{ marginLeft: '8px' }}>React Barcode Scanner</span>
        </>
      )}
      logoLink={homeUrl}
      projectLink="https://github.com/preflower/react-barcode-scanner"
    >
      <LocaleSwitcher />
    </Navbar>
  )

  return (
    <html lang={lang} suppressHydrationWarning>
      <Head />
      <body>
        <StructuredData />
        <Layout
          darkMode={false}
          docsRepositoryBase="https://github.com/preflower/react-barcode-scanner/tree/master/packages/docs"
          footer={(
            <footer key="footer" className="x:mx-auto x:flex x:max-w-(--nextra-content-width) x:justify-center x:py-12 x:text-gray-600 x:md:justify-start x:px-6">
              Copyright © {new Date().getFullYear()} React Barcode Scanner
            </footer>
          )}
          navbar={navbar}
          pageMap={pageMap}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
