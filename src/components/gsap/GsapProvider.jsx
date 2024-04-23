'use client'

import {gsap} from 'gsap'
import {ScrollSmoother} from 'gsap/ScrollSmoother'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {useGSAP} from '@gsap/react'
import {useEffect} from 'react'

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother)

export default function GsapProvider({children, isMobile}) {
  useGSAP(() => {
    ScrollSmoother.create({
      effects: true,
      smoothTouch: 0.1,
    })
  }, [])
  useEffect(() => {
    if (isMobile) {
      document.querySelector('#smooth-content').style.paddingTop = '3.9375rem'
    } else {
      document.querySelector('#smooth-content').style.paddingTop = '5.5rem'
    }
  }, [])
  return (
    <div id='smooth-wrapper'>
      <div
        id='smooth-content'
      >
        {children}
      </div>
    </div>
  )
}
