import {NextResponse, userAgent} from 'next/server'

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

  if (
    ['/manifest.json', '/favicon.ico', '/robots.txt', '/sitemap.xml'].includes(
      pathname,
    )
  )
    return

  const newUrl = new URL(`${pathname}`, nextUrl)
  newUrl.search = nextUrl.searchParams.toString()
  return NextResponse.rewrite(newUrl)
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|images|favicon.ico).*)'],
}
