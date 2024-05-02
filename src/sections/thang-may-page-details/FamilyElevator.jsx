import React from 'react'
import HeaderDetailElevator from './headerDetailElevator'
import ConnectLove from './connectLoves/ConnectLove'
import ListElevator from './listElevator'
import ProductionLineSection from '../about-us/ProductionLineSection'
import FiveReasonsFamily from './fiveReasonsFamily'
const FamilyElevator = ({lang,isMobile}) => {
  return (
    <main>
      <HeaderDetailElevator lang={lang}/>
      <ConnectLove lang={lang}/>
      <ListElevator isMobile={isMobile}/>
      {/* <ProductionLineSection/> */}
      <FiveReasonsFamily lang={lang} isMobile={isMobile}/>
    </main>
  )
}

export default FamilyElevator