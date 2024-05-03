import Support from '@/layout/support'
import getData from '@/lib/getData'

async function getSupportEn() {
  return getData(`/options/options/contactFormEn`)
}
async function getSupportVi() {
  return getData(`/options/options/contactFormVi`)
}

export default async function SupportLayout({children, params}) {
  const dataSupport = await getSupportVi()
  return (
    <>
      {children}
      <Support data={dataSupport.contactFormVi} />
    </>
  )
}
