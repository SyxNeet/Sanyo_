import ProductionLineSection from './ProductionLineSection'
import PartnerSection from './PartnerSection'

export default function AboutUs({isMobile}) {
  return (
    <>
      <ProductionLineSection isMobile={isMobile} />
      <PartnerSection isMobile={isMobile} />
    </>
  )
}
