import React from 'react'
import SlideOnPage from './slideOnPage/SlideOnPage'
import CountUp from './countUp/CountUp'
import ValueDifferent from './valueDifferent/ValueDifferent'
import PlatFormElevator from '@/components/platForm'
import PartnerSection from '@/sections/about-us/PartnerSection'

export default function HomePage({isMobile}) {
  return (
    <div>
      <SlideOnPage />
      <CountUp />
      <ValueDifferent />
      <PlatFormElevator />
      <PartnerSection />
    </div>
  )
}
