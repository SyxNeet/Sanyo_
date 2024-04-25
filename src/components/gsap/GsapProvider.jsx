'use client'

import {gsap} from 'gsap'
import {ScrollSmoother} from 'gsap/ScrollSmoother'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {useGSAP} from '@gsap/react'
import {useEffect} from 'react'
import clsx from 'clsx'

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother)

export default function GsapProvider({children, isMobile}) {
  useGSAP(() => {
    ScrollSmoother.create({
      effects: true,
      smoothTouch: 0.1,
    })
  }, [])
  return (
    <div id='smooth-wrapper'>
      <div
        id='smooth-content'
        className={clsx('', {
          'pt-[3.9375rem]': isMobile,
          'pt-[5.5rem]': !isMobile,
        })}
      >
        {children}
      </div>
    </div>
  )
}
