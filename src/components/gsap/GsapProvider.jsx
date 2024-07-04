'use client'

import {gsap} from 'gsap'
import {ScrollSmoother} from 'gsap/ScrollSmoother'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {ScrollToPlugin} from 'gsap/ScrollToPlugin'
import {useGSAP} from '@gsap/react'
import clsx from 'clsx'
import {usePathname} from 'next/navigation'
import {regDuAnUrl} from '@/lib/reg'
import useChangePage from '@/hooks/useChangePage'

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, ScrollToPlugin)
export const scrollSmootherConfig = {
  effects: true,
  speed: 0.9,
}

export default function GsapProvider({children, isMobile}) {
  const pathname = usePathname()
  useChangePage()
  useGSAP(() => {
    let scrollSmooth = ScrollSmoother.create(scrollSmootherConfig)
    if (regDuAnUrl.test(pathname) && isMobile) {
      scrollSmooth.kill()
    } else {
      const header = document.querySelector('.header')
      header.style.opacity = 1
      header.style.pointerEvents = 'all'
    }
  }, [pathname, isMobile])
  return (
    <div id='smooth-wrapper'>
      <div
        id='smooth-content'
        className={clsx('', {
          'pt-[5.5rem]': isMobile,
          'pt-[5.5rem]': !isMobile,
        })}
      >
        {children}
      </div>
    </div>
  )
}
