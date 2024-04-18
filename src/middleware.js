import {NextResponse, userAgent} from 'next/server'
const defaultLocale = 'vi'
let locales = ['vi', 'en']

export function middleware(request) {
  const nextUrl = request.nextUrl
  const pathname = nextUrl.pathname

  const {device} = userAgent(request)
  const viewport =
    device.type === 'mobile'
      ? 'mobile'
      : device.type === 'tablet'
      ? 'tablet'
      : 'desktop'
  nextUrl.searchParams.set('viewport', viewport)
  nextUrl.searchParams.set('pathname', pathname)

  const url = request.nextUrl



  // if (!/(\/|^)commingSoon(\/|$)/i.test(pathname)) {
  //   const newUrl = new URL('/commingSoon', url.origin)
  //   return Response.redirect(newUrl, 302)
  // }
  // url.searchParams.set('pathname', url.pathname)

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
        request.url,
      ),
    )
  }

  const pathnameIsMissingLocale = locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  )

  if (pathnameIsMissingLocale) {
    if (nextUrl.searchParams) {
      const newUrl = new URL(`/${defaultLocale}${pathname}`, request.url)
      newUrl.search = nextUrl.searchParams.toString()
      return NextResponse.rewrite(newUrl)
    }

    return NextResponse.rewrite(
      new URL(`/${defaultLocale}${pathname}`, request.url),
    )
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|images|favicon.ico).*)'],
}

// import {NextResponse, userAgent} from 'next/server'

// export function middleware(request) {
//   const url = request.nextUrl
//   if (url.pathname.includes('undefined')) {
//     return NextResponse.redirect(new URL('/404', request.url))
//   }

//   // if (url.pathname.includes('/san-pham')) {
//   //   return NextResponse.redirect(new URL('/', request.url))
//   // }
//   // if (url.pathname.includes('/pre-order')) {
//   //   return NextResponse.redirect(new URL('/', request.url))
//   // }
//   // if (url.pathname.includes('/tra-cuu-don-hang')) {
//   //   return NextResponse.redirect(new URL('/', request.url))
//   // }
//   // if (url.pathname.includes('/flash-sale')) {
//   //   return NextResponse.redirect(new URL('/', request.url))
//   // }
//   const {device} = userAgent(request)

//   const viewport =
//     device.type === 'mobile'
//       ? 'mobile'
//       : device.type === 'tablet'
//       ? 'tablet'
//       : 'desktop'
//   url.searchParams.set('viewport', viewport)
//   url.searchParams.set('pathname', url.pathname)
//   return NextResponse.rewrite(url)
// }
