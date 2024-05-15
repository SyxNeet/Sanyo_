import getData from '@/lib/getData'
import HeaderContainer from './HeaderContainer'

const pageId = 1066
async function getHeader() {
  return getData(`/pages/${pageId}/header`)
}

export default async function Header({isMobile}) {
  const dataHeader = await getHeader()
  return (
    <>
      <HeaderContainer isMobile={isMobile} data={dataHeader.header} />
    </>
  )
}
