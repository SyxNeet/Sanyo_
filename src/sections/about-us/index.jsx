import ProductionLineSection from './ProductionLineSection'
import PartnerSection from './PartnerSection'
import Achieved from './Achieved'
import LeaderShipMessageAndCoreValues from './LeaderShipMessageAndCoreValues'
import SlideOnlyImagesDownload from '@/components/slideOnlyImagesWithDowload'
import BreadcrumbContainer from '@/components/breadcrumb/BreadcrumbContainer'
import BreadcrumbLink from '@/components/breadcrumb/BreadcrumbLink'

export default function AboutUs({isMobile}) {
  return (
    <>
      <BreadcrumbContainer>
        <BreadcrumbLink href={`/`}>TRANG CHỦ /</BreadcrumbLink>
        <BreadcrumbLink isLastLink>VỀ CHÚNG TÔI</BreadcrumbLink>
      </BreadcrumbContainer>
      <SlideOnlyImagesDownload />
      <LeaderShipMessageAndCoreValues isMobile={isMobile} />
      <Achieved isMobile={isMobile} />
      <ProductionLineSection isMobile={isMobile} />
      <PartnerSection isMobile={isMobile} />
    </>
  )
}
