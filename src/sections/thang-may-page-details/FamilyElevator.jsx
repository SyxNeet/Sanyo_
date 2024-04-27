import React from 'react'
import HeaderDetailElevator from './headerDetailElevator'
import ConnectLove from './connectLoves/ConnectLove'
import ListElevator from './listElevator'
import ProductionLineSection from '../about-us/ProductionLineSection'
const FamilyElevator = ({lang}) => {
  return (
    <main>
      <HeaderDetailElevator lang={lang}/>
      <ConnectLove lang={lang}/>
      <ListElevator/>
      {/* <ProductionLineSection/> */}
    </main>
  )
}

export default FamilyElevator