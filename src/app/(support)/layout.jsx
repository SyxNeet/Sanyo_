import Support from '@/layout/support'
import getData from '@/lib/getData'

async function getSupport() {
  return getData(`/options/options/contactForm`)
}

export default async function SupportLayout({children, params}) {
  const dataSupport = await getSupport()
  return (
    <>
      {children}
      <Support data={dataSupport.contactForm} />
    </>
  )
}
