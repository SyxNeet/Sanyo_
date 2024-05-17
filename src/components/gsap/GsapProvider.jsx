'use client'

import {gsap} from 'gsap'
import {ScrollSmoother} from 'gsap/ScrollSmoother'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {useGSAP} from '@gsap/react'
import clsx from 'clsx'
import useChangePage from '@/hooks/useChangePage'
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother)
export const scrollSmootherConfig = {
  effects: true,
  speed: 0.8,
}

export default function GsapProvider({children, isMobile}) {
  useChangePage()
  useGSAP(() => {
    ScrollSmoother.create(scrollSmootherConfig)
  }, [])
  return (
    <div id='smooth-wrapper'>
      <div
        id='smooth-content'
        className='pt-[5.5rem] max-lg:pt-[0.5rem]'
      >
        {children}
      </div>
    </div>
  )
}
