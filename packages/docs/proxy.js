import { NextResponse } from 'next/server'

const DEFAULT_LOCALE = 'en-US'
const CHINESE_LOCALE = 'zh-CN'

export function proxy (request) {
  const { pathname } = request.nextUrl

  if (pathname === `/${DEFAULT_LOCALE}` || pathname.startsWith(`/${DEFAULT_LOCALE}/`)) {
    const url = request.nextUrl.clone()
    url.pathname = pathname.slice(DEFAULT_LOCALE.length + 1) || '/'
    return NextResponse.redirect(url)
  }

  if (pathname === `/${CHINESE_LOCALE}` || pathname.startsWith(`/${CHINESE_LOCALE}/`)) {
    return NextResponse.next()
  }

  if (request.cookies.get('NEXT_LOCALE')?.value === CHINESE_LOCALE) {
    const url = request.nextUrl.clone()
    url.pathname = `/${CHINESE_LOCALE}${pathname === '/' ? '' : pathname}`
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|favicon-16x16.png|favicon-32x32.png|apple-touch-icon.png|logo.png|robots.txt|sitemap.xml|llms.txt|llms-full.txt|_pagefind).*)'
  ]
}
