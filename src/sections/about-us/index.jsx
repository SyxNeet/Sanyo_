import ProductionLineSection from './ProductionLineSection'
import PartnerSection from './PartnerSection'
import Achieved from './Achieved'
import LeaderShipMessageAndCoreValues from './LeaderShipMessageAndCoreValues'

export default function AboutUs({isMobile}) {
  return (
    <>
      <LeaderShipMessageAndCoreValues isMobile={isMobile} />
      <Achieved isMobile={isMobile} />
      <ProductionLineSection isMobile={isMobile} />
      <PartnerSection isMobile={isMobile} />
    </>
  )
}
