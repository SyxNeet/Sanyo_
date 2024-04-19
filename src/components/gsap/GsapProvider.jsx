'use client'

import {gsap} from 'gsap'
import {ScrollSmoother} from 'gsap/ScrollSmoother'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {useGSAP} from '@gsap/react'

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother)

export default function GsapProvider({children}) {
  useGSAP(() => {
    ScrollSmoother.create({
      effects: true,
      smoothTouch: 0.1,
    })
  }, [])
  return (
    <div id='smooth-wrapper'>
      <div id='smooth-content'>{children}</div>
    </div>
  )
}
