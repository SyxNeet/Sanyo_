'use client'

import Image from 'next/image'
import Link from 'next/link'
import {useEffect, useRef} from 'react'
import {ScrollSmoother} from 'gsap/ScrollSmoother'
import {scrollSmootherConfig} from '@/components/gsap/GsapProvider'
import {useGSAP} from '@gsap/react'
import {usePathname} from 'next/navigation'
import {regDuAnUrl} from '@/lib/reg'
export default function FixedLayout({isMobile}) {
  const pathname = usePathname()
  const myRef = useRef(null)
  const smootherRef = useRef(null)
  useGSAP(() => {
    if (!isMobile) {
      smootherRef.current = ScrollSmoother.create(scrollSmootherConfig)
      if (regDuAnUrl.test(pathname) && isMobile) {
        smootherRef.current.kill()
      }
    }
  }, [isMobile, pathname])
  useEffect(() => {
    if (!isMobile) {
      const length = myRef.current.getTotalLength()
      myRef.current.style.strokeDasharray = length
      myRef.current.style.strokeDashoffset = length
      function myFunction() {
        const scrollpercent =
          (document.body.scrollTop + document.documentElement.scrollTop) /
          (document.documentElement.scrollHeight -
            document.documentElement.clientHeight)
        const draw = length * scrollpercent
        myRef.current.style.strokeDashoffset = length - draw
      }
      window.addEventListener('scroll', myFunction)
      return () => window.removeEventListener('scroll', myFunction)
    }
  }, [isMobile])
  return (
    <div className='z-30 fixed bottom-3.5 right-3 md:bottom-6 md:right-6 flex flex-col gap-[0.88rem] md:gap-[1.38rem] '>
      <Link href={`tel:0393580688`}>
        <Image
          src={`/images/layout/3-nut-noi/call.svg`}
          alt=''
          width={120}
          height={120}
          className='size-[2.875rem] md:size-[3.125rem] object-cover'
        />
      </Link>
      <Link href={`https://zalo.me/4574140570292753526 `}>
        <Image
          src={`/images/layout/3-nut-noi/messenger.svg`}
          alt=''
          width={120}
          height={120}
          className='size-[2.875rem] md:size-[3.125rem] object-cover'
        />
      </Link>
      {!isMobile && (
        <button
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            })
          }
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='56'
            height='56'
            viewBox='0 0 56 56'
            fill='none'
            className='size-[2.875rem] md:size-[3.125rem] object-cover'
          >
            <path
              d='M28.0977 20L19.0977 31.4286L25.8477 31.4286L28.0977 36L30.3477 31.4286L37.0977 31.4286L28.0977 20Z'
              fill='#DAB571'
            />
            <rect
              ref={myRef}
              x='0.5'
              y='0.5'
              width='55'
              height='55'
              rx='27.5'
              stroke='#DAB571'
            />
          </svg>
        </button>
      )}
    </div>
  )
}
