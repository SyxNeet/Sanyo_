import getData from '@/lib/getData'
import HeaderContainer from './HeaderContainer'

async function getHeader() {
  return getData(`/options/options/header`)
}

export default async function Header({isMobile,isTablet}) {
  const dataHeader = await getHeader()
  return (
    <>
      <HeaderContainer
        isMobile={isMobile}
        isTablet={isTablet}
        data={dataHeader?.header}
      />
    </>
  )
}
