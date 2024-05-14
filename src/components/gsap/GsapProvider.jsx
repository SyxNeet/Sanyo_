'use client'

import {gsap} from 'gsap'
import {ScrollSmoother} from 'gsap/ScrollSmoother'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {useGSAP} from '@gsap/react'
import clsx from 'clsx'
import {usePathname} from 'next/navigation'

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother)
export const scrollSmootherConfig = {
  effects: true,
  speed: 0.8,
}

export default function GsapProvider({children, isMobile}) {
  const pathname = usePathname()
  useGSAP(() => {
    const scrollSmooth = ScrollSmoother.create(scrollSmootherConfig)
    if (pathname.includes('du-an') && isMobile) {
      scrollSmooth.kill()
      ScrollTrigger.killAll()
    }
  }, [pathname, isMobile])
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
