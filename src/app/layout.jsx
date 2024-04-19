import './global.css'

import localFont from 'next/font/local'
import Footer from '@/layout/footer'
import Nav from '@/layout/nav'
import GsapProvider from '@/components/gsap/GsapProvider'

export const metadata = {
  title: 'Sanyo Yosuki',
  description: 'Sanyo Yosuki by create FINNTVD',
}

const svnLaguSans = localFont({
  src: [
    {
      path: './font/svn/SVN-LaguSans-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './font/svn/SVN-LaguSans-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './font/svn/SVN-LaguSans-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './font/svn/SVN-LaguSans-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './font/svn/SVN-LaguSans-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
  ],
  variable: '--font-svn-lagusans',
  display: 'swap',
})

const icielSteradian = localFont({
  src: [
    {
      path: './font/iciel/iCielSteradian-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './font/iciel/iCielSteradian-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './font/iciel/iCielSteradian-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './font/iciel/iCielSteradian-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-iciel-steradian',
  display: 'swap',
})

export default function RootLayout({children, params}) {
  return (
    <html lang={params.lang}>
      <body
        suppressHydrationWarning={true}
        suppressContentEditableWarning={true}
        className={`${icielSteradian.className} ${icielSteradian.variable} ${svnLaguSans.variable}`}
      >
        <GsapProvider>
          <Nav />
          {children}
          <Footer />
        </GsapProvider>
      </body>
    </html>
  )
}
