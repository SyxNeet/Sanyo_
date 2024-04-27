'use client'

import HeaderDesktop from './HeaderDesktop'
import HeaderMobile from './HeaderMobile'
import {useEffect, useRef} from 'react'

export default function Header({isMobile, lang}) {
  const headerRef = useRef(null)
  useEffect(() => {
    let prevScroll = 0
    const fnc = () => {
      const currentScroll = document.documentElement.scrollTop
      if (currentScroll > prevScroll) {
        headerRef.current.style.transform = 'translateY(-103%)'
      } else {
        headerRef.current.style.transform = 'translateY(0%)'
      }
      prevScroll = currentScroll
    }
    window.addEventListener('scroll', fnc)
    return () => window.removeEventListener('scroll', fnc)
  }, [])
  return (
    <header
      ref={headerRef}
      className='fixed top-0 left-0 z-50 w-full transition-500'
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
