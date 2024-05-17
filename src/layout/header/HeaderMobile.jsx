'use client'

import {useEffect, useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import LangDropdown from '@/components/header/LangDropdown'
import dynamic from 'next/dynamic'
import GoogleTranslate from '@/components/Language'
const DynamicModalMenuMobile = dynamic(() => import('./ModalMenuMobile'), {
  ssr: false,
})

export default function HeaderMobile({isMobile}) {
  const [isOpenModalMenu, setIsOpenModalMenu] = useState(false)
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
      <div className='h-[3.9375rem] bg-grey-0 flex flex-row items-center px-3 border-b border-grey-50'>
        <GoogleTranslate isMobile={isMobile}/>
        <Link
          href={`/`}
          className='absolute flex flex-row items-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
          onClick={() => setIsOpenModalMenu(false)}
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
      </div>
      {/* modal menu */}
      <DynamicModalMenuMobile
        isOpenModalMenu={isOpenModalMenu}
        isMobile={isMobile}
        setIsOpenModalMenu={setIsOpenModalMenu}
      />
    </>
  )
}
