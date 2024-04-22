import {NextResponse, userAgent} from 'next/server'
const defaultLocale = 'vi'
let locales = ['vi', 'en']

export function middleware(request) {
  const nextUrl = request.nextUrl
  const pathname = nextUrl.pathname
  console.log(pathname)

  const {device} = userAgent(request)
  const viewport =
    device.type === 'mobile'
      ? 'mobile'
      : device.type === 'tablet'
      ? 'tablet'
      : 'desktop'
  nextUrl.searchParams.set('viewport', viewport)
  nextUrl.searchParams.set('pathname', pathname)

  // const url = request.nextUrl

  if (
    ['/manifest.json', '/favicon.ico', '/robots.txt', '/sitemap.xml'].includes(
      pathname,
    )
  )
    return

  if (
    pathname.startsWith(`/${defaultLocale}/`) ||
    pathname === `/${defaultLocale}`
  ) {
    return NextResponse.redirect(
      new URL(
        pathname.replace(
          `/${defaultLocale}`,
          pathname === `/${defaultLocale}` ? '/' : '',
        ),
        nextUrl,
      ),
    )
  }

  const pathnameIsMissingLocale = locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  )

  if (pathnameIsMissingLocale) {
    if (nextUrl.searchParams) {
      const newUrl = new URL(`/${defaultLocale}${pathname}`, nextUrl)
      newUrl.search = nextUrl.searchParams.toString()
      return NextResponse.rewrite(newUrl)
    }

    return NextResponse.rewrite(
      new URL(`/${defaultLocale}${pathname}`, nextUrl),
    )
  }

  const newUrl = new URL(`${pathname}`, nextUrl)
  newUrl.search = nextUrl.searchParams.toString()
  return NextResponse.rewrite(newUrl)
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|images|favicon.ico).*)'],
}
