import getData from '@/lib/getData'
import HeaderContainer from './HeaderContainer'

export default async function Header({ isMobile, isTablet }) {
  const [dataHeader, dataModal] = await Promise.all([
    getData(`/options/options/header`),
    getData(`/elevator-terms`, 'custom'),
  ])
  return (
    <>
      <HeaderContainer
        isMobile={isMobile}
        isTablet={isTablet}
        data={dataHeader?.header}
        dataModal={dataModal}
      />
    </>
  )
}
