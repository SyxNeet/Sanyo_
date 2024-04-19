import ProductionLineSection from './ProductionLineSection'
import PartnerSection from './PartnerSection'
import CoreValues from './CoreValues'

export default function AboutUs({isMobile}) {
  return (
    <>
      <CoreValues isMobile={isMobile} />
      <ProductionLineSection isMobile={isMobile} />
      <PartnerSection isMobile={isMobile} />
    </>
  )
}
