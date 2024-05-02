import Support from '@/layout/support'
import getData from '@/lib/getData'

async function getSupportEn() {
  return getData(`/options/options/contactFormEn`)
}
async function getSupportVi() {
  return getData(`/options/options/contactFormVi`)
}

export default async function SupportLayout({children, params}) {
  const {lang} = params
  const dataSupport = await (lang === 'vi' ? getSupportVi() : getSupportEn())
  return (
    <>
      {children}
      <Support
        data={
          lang === 'vi' ? dataSupport.contactFormVi : dataSupport.contactFormEn
        }
        lang={lang}
      />
    </>
  )
}
