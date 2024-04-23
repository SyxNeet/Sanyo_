'use client'

import clsx from 'clsx'
import {useEffect, useRef, useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import gsap from 'gsap'
import LangDropdown from '@/components/header/LangDropdown'
import {modalMenu} from '../../../data/header/modal-menu'
import Accordion from './Accordion'

export default function HeaderMobile({isMobile}) {
  const headerMobileRef = useRef(null)
  const [isOpenModalMenu, setIsOpenModalMenu] = useState(false)
  useEffect(() => {
    if (isMobile) {
      let prevScroll = 0
      const fnc = () => {
        const currentScroll = document.documentElement.scrollTop
        if (currentScroll > prevScroll) {
          gsap.to(headerMobileRef.current, {
            yPercent: -100,
            duration: 0.5,
          })
        } else {
          gsap.to(headerMobileRef.current, {
            yPercent: 0,
            duration: 0.5,
          })
        }
        prevScroll = currentScroll
      }
      window.addEventListener('scroll', fnc)
      return () => window.removeEventListener('scroll', fnc)
    }
  }, [isMobile])
  useEffect(() => {
    if (isMobile) {
      if (isOpenModalMenu) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'auto'
      }
    }
  }, [isOpenModalMenu, isMobile])
  return (
    <>
      <header
        ref={headerMobileRef}
        className='sticky top-0 left-0 z-30 h-[3.9375rem] bg-grey-0 flex flex-row items-center px-3 border-b border-grey-50'
      >
        <LangDropdown isMobile={isMobile} />
        <Link
          href={`/`}
          className='absolute flex flex-row items-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
        >
          <Image
            src={`/images/layout/header/logo.svg`}
            alt='sanyo yusoki'
            className='size-[1.58369rem]'
            width={120}
            height={120}
          />
          <div className='flex flex-col ml-[0.45rem]'>
            <Image
              src={`/images/layout/header/logo-name.svg`}
              alt='sanyo yosoki'
              className='w-[7.3rem] h-[0.975rem] mb-[0.2rem]'
              width={120}
              height={120}
            />
            <Image
              src={`/images/layout/header/logo-name-jap.svg`}
              alt='sanyo yosoki'
              className='w-[7.3rem] h-[0.45rem]'
              width={120}
              height={120}
            />
          </div>
        </Link>
        <div className='flex flex-row items-center ml-auto'>
          <div className='w-[0.0625rem] h-[2.125rem] bg-grey-900 opacity-20' />
          <button
            className='w-[1.56rem] h-[1.2rem] grid grid-cols-1 gap-[0.44rem] hover-opacity ml-[0.8rem]'
            onClick={() => setIsOpenModalMenu(!isOpenModalMenu)}
          >
            <span className='w-3/4 h-[0.1rem] bg-grey-900'></span>
            <span className='w-full h-[0.1rem] bg-grey-900'></span>
            <span className='w-1/2 h-[0.1rem] bg-grey-900'></span>
          </button>
        </div>
      </header>
      {/* modal menu */}
      {/* TODO: Lazy Loading */}
      <div
        className={clsx(
          'fixed top-0 left-0 z-50 w-full h-screen bg-grey-600 transition-500 py-4 px-[0.87rem] overflow-auto',
          {
            'translate-x-full': !isOpenModalMenu,
          },
        )}
      >
        <div className='flex flex-row items-center w-full'>
          <Link
            href={`/`}
            className='flex flex-col'
          >
            <Image
              src={`/images/layout/header/logo-name-white.svg`}
              alt='sanyo yusoki'
              className='w-[9rem] h-[1.2rem] ml-1'
              width={120}
              height={120}
            />
            <Image
              src={`/images/layout/header/logo-name-jap-white.svg`}
              alt='sanyo yusoki'
              className='w-[6.62rem] h-[0.41rem] mt-[0.31rem]'
              width={120}
              height={120}
            />
          </Link>
          <button
            className='ml-auto'
            onClick={() => setIsOpenModalMenu(false)}
          >
            <Image
              src={`/images/layout/header/x-mark-white.svg`}
              alt='close modal menu'
              className='size-5'
              width={120}
              height={120}
            />
          </button>
        </div>
        <div className='grid grid-cols-1 gap-[1.12rem] mt-[2.7rem]'>
          {modalMenu.map((item, i) => {
            if (item.child) {
              return (
                <Accordion
                  key={i}
                  title={item.text}
                  accordionData={item.child}
                  isLastChild={i === modalMenu.length - 1}
                  showMore={item.showMore}
                />
              )
            } else {
              return (
                <>
                  <Link
                    href={item.href}
                    className='flex flex-row items-center text-grey-0 text-1.25 font-Iciel'
                  >
                    {item.text}
                  </Link>
                  {i !== modalMenu.length - 1 && (
                    <div className='w-full h-[0.3rem] rounded-full bg-grey-0 opacity-5' />
                  )}
                </>
              )
            }
          })}
        </div>
      </div>
    </>
  )
}
