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
const JapanElevator = ({isMobile, data,dataSixReason}) => {
  const {
    banner,
    japan_elevator,
    outstanding_project,
    perfect_choice,
    productLine,
  } = data?.acf
  console.log(data.acf)

  return (
    <main className='overflow-hidden janpanElevator'>
      <SlideFirstJE
        isMobile={isMobile}
        data={banner}
      />
      <ProductLine
        data={productLine}
        isMobile={isMobile}
      />
      <PerfectChoiceJE
        data={perfect_choice}
      />
      <ElevatorJapan
        isMobile={isMobile}
        data={japan_elevator}
      />
      <SixReasonJE isMobile={isMobile} data={dataSixReason}/>
      <OutStandingProjectJE
        isMobile={isMobile}
        data={outstanding_project}
      />
    </main>
  )
}

export default JapanElevator
