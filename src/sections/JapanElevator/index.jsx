'use client'
import React from 'react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import './styles.css'
import SlideFirstJE from './slideFirstJE'
import ProductLine from './day-chuyen-san-xuat/ProductLine'
import PerfectChoiceJE from './perfect-choice/PerfectChoiceJE'
import ElevatorJapan from './ElevatorJapan/ElevatorJapan'
import SixReasonJE from './sixReasonJE/sixReasonJE'
import OutStandingProjectJE from './outStandingProjectJE/OutStandingProjectJE'

const JapanElevator = ({isMobile}) => {
  return (
    <main className='overflow-hidden janpanElevator'>
        <SlideFirstJE isMobile={isMobile} />
        <ProductLine/>
        <PerfectChoiceJE/>
        <ElevatorJapan isMobile={isMobile}/>
        <SixReasonJE isMobile={isMobile}/>
      <OutStandingProjectJE isMobile={isMobile}/>
    </main>
  )
}

export default JapanElevator
