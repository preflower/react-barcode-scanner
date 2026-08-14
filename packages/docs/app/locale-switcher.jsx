'use client'

import { usePathname } from 'next/navigation'

const ONE_YEAR = 365 * 24 * 60 * 60 * 1000

export function LocaleSwitcher () {
  const pathname = usePathname()
  const currentLocale = pathname === '/zh-CN' || pathname.startsWith('/zh-CN/')
    ? 'zh-CN'
    : 'en-US'

  function changeLocale (event) {
    const locale = event.target.value
    const routePath = pathname.replace(/^\/(?:en-US|zh-CN)(?=\/|$)/, '') || '/'
    const localePrefix = locale === 'zh-CN' ? '/zh-CN' : ''
    const destination = `${localePrefix}${routePath === '/' ? '' : routePath}` || '/'
    const expires = new Date(Date.now() + ONE_YEAR).toUTCString()

    document.cookie = `NEXT_LOCALE=${locale}; expires=${expires}; path=/; SameSite=Lax`
    window.location.assign(destination)
  }

  return (
    <label className="x:flex x:items-center x:gap-2 x:text-sm">
      <span className="x:sr-only">Language</span>
      <select
        aria-label="Language"
        className="x:rounded-md x:border x:border-gray-300 x:bg-transparent x:px-2 x:py-1"
        onChange={changeLocale}
        value={currentLocale}
      >
        <option value="en-US">English</option>
        <option value="zh-CN">简体中文</option>
      </select>
    </label>
  )
}
