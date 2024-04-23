import HeaderDesktop from './HeaderDesktop'
import HeaderMobile from './HeaderMobile'

export default function Header({isMobile}) {
  if (!isMobile) {
    return <HeaderDesktop isMobile={isMobile} />
  } else {
    return <HeaderMobile isMobile={isMobile} />
  }
}
