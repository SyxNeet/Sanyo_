'use client'

import HeaderDesktop from './HeaderDesktop'
import HeaderMobile from './HeaderMobile'
import {useEffect, useRef} from 'react'
import gsap from 'gsap'

export default function Header({isMobile, lang}) {
  const headerRef = useRef(null)
  useEffect(() => {
    let prevScroll = 0
    const fnc = () => {
      const currentScroll = document.documentElement.scrollTop
      if (currentScroll > prevScroll) {
        gsap.to(headerRef.current, {
          yPercent: -103,
          duration: 0.5,
        })
      } else {
        gsap.to(headerRef.current, {
          yPercent: 0,
          duration: 0.5,
        })
      }
      prevScroll = currentScroll
    }
    window.addEventListener('scroll', fnc)
    return () => window.removeEventListener('scroll', fnc)
  }, [])
  return (
    <header
      ref={headerRef}
      className='fixed top-0 left-0 z-50 w-full'
    >
      {!isMobile ? (
        <HeaderDesktop
          isMobile={isMobile}
          lang={lang}
        />
      ) : (
        <HeaderMobile
          isMobile={isMobile}
          lang={lang}
        />
      )}
    </header>
  )
}
