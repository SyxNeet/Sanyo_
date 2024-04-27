import Support from '@/layout/support'
import getData from '@/lib/getData'

async function getSupport(pageId) {
  return getData(`/pages/${pageId}/support`)
}
let pageId

export default async function SupportLayout({children, params}) {
  const {lang} = params
  if (lang === 'vi') {
    pageId = 188
  } else {
    pageId = 193
  }
  const dataSupport = await getSupport(pageId)
  return (
    <>
      {children}
      <Support data={dataSupport.support} lang={lang} />
    </>
  )
}
