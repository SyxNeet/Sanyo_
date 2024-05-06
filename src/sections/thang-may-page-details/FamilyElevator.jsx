import React from 'react'
import HeaderDetailElevator from './headerDetailElevator'
import ConnectLove from './connectLoves/ConnectLove'
import ListElevator from './listElevator'
import ProductionLineSection from '../about-us/ProductionLineSection'
import FiveReasonsFamily from './fiveReasonsFamily'
import ActualConstruction from './actualConstruction'
const FamilyElevator = ({isMobile,data}) => {
  const {banner,connectLove,elevator,slide,first_reason,second_reason,third_reason,fourth_reason,fifth_reason,list_image_construction} = data?.posts[0]
  const reasons = {
    first_reason,
    second_reason,
    third_reason,
    fourth_reason,
    fifth_reason
  };
  return (
    <main>
      <HeaderDetailElevator data={banner}/>
      <ConnectLove data={connectLove}/>
      <ListElevator isMobile={isMobile} data={elevator} />
      <ProductionLineSection data={slide} justSlide={true}/>
      <FiveReasonsFamily isMobile={isMobile} data={reasons}/>
      <ActualConstruction isMobile={isMobile} data={list_image_construction}/>
    </main>
  )
}

export default FamilyElevator