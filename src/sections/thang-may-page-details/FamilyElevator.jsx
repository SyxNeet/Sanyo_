import React from 'react'
import HeaderDetailElevator from './headerDetailElevator'
import ConnectLove from './connectLoves/ConnectLove'

const FamilyElevator = ({lang}) => {
  return (
    <main>
      <HeaderDetailElevator lang={lang}/>
      <ConnectLove lang={lang}/>
    </main>
  )
}

export default FamilyElevator