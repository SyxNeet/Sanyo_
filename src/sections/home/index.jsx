import React from 'react'
import SlideOnPage from './slideOnPage/SlideOnPage'
import CountUp from './countUp/CountUp'
import ValueDifferent from './valueDifferent/ValueDifferent'

export default function HomePage({isMobile}) {
  return (
    <div>
      <SlideOnPage />
      <CountUp />
      <ValueDifferent />
    </div>
  )
}
