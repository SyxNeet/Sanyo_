import React from 'react'
import HeaderDetailElevator from './headerDetailElevator'
import ConnectLove from './connectLoves/ConnectLove'
import ListElevator from './listElevator'
import ProductionLineSection from '../about-us/ProductionLineSection'
import FiveReasonsFamily from './fiveReasonsFamily'
const FamilyElevator = ({isMobile}) => {
  return (
    <main>
      <HeaderDetailElevator/>
      <ConnectLove/>
      <ListElevator isMobile={isMobile}/>
      {/* <ProductionLineSection/> */}
      <FiveReasonsFamily isMobile={isMobile}/>
    </main>
  )
}

export default FamilyElevator