export const SITE_URL = 'https://reactbarcodescanner.vercel.app'
export const SITE_NAME = 'React Barcode Scanner'

const faqEntries = {
  'en-US': [
    ['What is React Barcode Scanner?', 'React Barcode Scanner is a TypeScript React component and hooks library for scanning QR codes and one-dimensional barcodes in a browser. It uses the Barcode Detection API and provides a zbar WebAssembly polyfill.'],
    ['Does React Barcode Scanner work with Next.js and SSR?', 'The package can be imported during server-side rendering. Camera access starts only after the scanner mounts in the browser. In Next.js, keep the Provider, scanner and controls in the same Client Component.'],
    ['How do I use multiple barcode scanners?', 'Wrap each active scanner and its controls in a separate BarcodeScannerProvider. Each Provider isolates the media stream, torch state, capability detection and errors.'],
    ['Can another component read the current camera stream or torch state?', 'Yes. Place that component under the same BarcodeScannerProvider and call useStreamState or useTorch. Without a Provider, hooks use the global compatibility scope.']
  ],
  'zh-CN': [
    ['React Barcode Scanner 是什么？', 'React Barcode Scanner 是一个使用 TypeScript 编写的 React 浏览器扫码组件与 Hooks 库。它基于 Barcode Detection API，并提供 zbar WebAssembly polyfill，可识别二维码和一维条码。'],
    ['React Barcode Scanner 支持 Next.js 和 SSR 吗？', '包本身可以在服务端渲染期间导入，相机只会在组件挂载到浏览器后启动。在 Next.js 中，应将 Provider、扫码组件和控制组件放在同一个客户端组件内。'],
    ['如何同时使用多个扫码器？', '为每个活动扫码器及其控制组件分别创建 BarcodeScannerProvider。不同 Provider 的媒体流、闪光灯状态、能力检测和错误相互隔离。'],
    ['其他组件可以读取当前相机流或闪光灯状态吗？', '可以。将组件放到同一个 BarcodeScannerProvider 下，再调用 useStreamState 或 useTorch。没有 Provider 时，Hooks 会使用全局兼容作用域。']
  ]
}

function JsonLd ({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, '\\u003c')
      }}
    />
  )
}

function getRoutePath (mdxPath = []) {
  return mdxPath.length ? `/${mdxPath.join('/')}` : '/'
}

function getLocalizedUrl (lang, routePath) {
  const localePrefix = lang === 'zh-CN' ? '/zh-CN' : ''
  return `${SITE_URL}${localePrefix}${routePath === '/' ? '' : routePath}`
}

export function buildPageMetadata (metadata, lang, mdxPath) {
  const routePath = getRoutePath(mdxPath)
  const englishUrl = getLocalizedUrl('en-US', routePath)
  const chineseUrl = getLocalizedUrl('zh-CN', routePath)
  const canonical = getLocalizedUrl(lang, routePath)

  return {
    ...metadata,
    alternates: {
      canonical,
      languages: {
        'en-US': englishUrl,
        'zh-CN': chineseUrl,
        'x-default': englishUrl
      }
    },
    openGraph: {
      type: 'website',
      locale: lang.replace('-', '_'),
      url: canonical,
      siteName: SITE_NAME,
      images: [{ url: `${SITE_URL}/logo.png`, width: 100, height: 100, alt: SITE_NAME }]
    },
    twitter: {
      card: 'summary'
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1
      }
    }
  }
}

export function StructuredData () {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: SITE_NAME,
          url: SITE_URL,
          inLanguage: ['en-US', 'zh-CN']
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'SoftwareSourceCode',
          name: SITE_NAME,
          description: 'A React component and hooks library for browser barcode scanning with a zbar WebAssembly polyfill.',
          url: SITE_URL,
          codeRepository: 'https://github.com/preflower/react-barcode-scanner',
          license: 'https://opensource.org/licenses/MIT',
          programmingLanguage: ['TypeScript', 'JavaScript'],
          runtimePlatform: 'Web Browser'
        }}
      />
    </>
  )
}

export function FaqStructuredData ({ lang }) {
  const entries = faqEntries[lang] || faqEntries['en-US']

  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: entries.map(([name, text]) => ({
          '@type': 'Question',
          name,
          acceptedAnswer: { '@type': 'Answer', text }
        }))
      }}
    />
  )
}
