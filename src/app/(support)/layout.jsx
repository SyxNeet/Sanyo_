import Support from '@/layout/support'
import getData from '@/lib/getData'
import {headers} from 'next/headers'

async function getSupport() {
  return getData(`/options/options/contactForm`)
}

export default async function SupportLayout({children, params}) {
  const headersList = headers()
  const userAgent = headersList.get('user-agent')
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|ZaloTheme|FB_IAB|Opera Mini/i.test(
      userAgent,
    )
  const dataSupport = await getSupport()
  return (
    <>
      {children}
      <Support
        forLienHePage={false}
        isMobile={isMobile}
        data={dataSupport.contactForm}
      />
    </>
  )
}
