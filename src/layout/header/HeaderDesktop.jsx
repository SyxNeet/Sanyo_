'use client'

import {useEffect, useState, useRef} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {Button} from '@/components/ui/button'
import dynamic from 'next/dynamic'
import GoogleTranslate from '@/components/Language'
const DynamicModalMenuDesktop = dynamic(() => import('./ModalMenuDesktop'))

export default function HeaderDesktop({isMobile, data}) {
  const headerRef = useRef(null)
  const [isOpenModalMenu, setIsOpenModalMenu] = useState(false)
  const [activeModalMenuLink, setActiveModalMenuLink] = useState('')
  const [activeModalMenuChildLink, setActiveModalMenuChildLink] = useState('')
  useEffect(() => {
    if (!isMobile) {
      if (isOpenModalMenu) {
        headerRef.current.style.paddingRight = '0.5rem'
        document.querySelector('#smooth-content').style.paddingRight = '0.5rem'
        document.body.style.overflow = 'hidden'
      } else {
        headerRef.current.style.paddingRight = '0px'
        document.querySelector('#smooth-content').style.paddingRight = '0px'
        document.body.style.overflow = 'auto'
      }
    }
  }, [isOpenModalMenu, isMobile])
  useEffect(() => {
    if (!isOpenModalMenu) {
      setActiveModalMenuLink(false)
    }
  }, [isOpenModalMenu])
  const handleClickModalLink = () => setIsOpenModalMenu(false)
  return (
    <>
      <div
        ref={headerRef}
        className='h-[5.5rem] bg-grey-0 border-b border-grey-50'
      >
        <div className='px-10 py-[1.13rem] flex flex-row items-center'>
          <button
            className={
              isOpenModalMenu
                ? 'flex items-center justify-center h-5 w-9 hover-opacity'
                : 'w-9 h-5 grid grid-cols-1 gap-[0.5625rem] hover-opacity'
            }
            onClick={() => {
              setIsOpenModalMenu(false)
              setActiveModalMenuLink('')
              setActiveModalMenuChildLink('')
            }}
          >
            {isOpenModalMenu ? (
              <Image
                src={`/images/layout/header/x-mark.svg`}
                alt='close modal menu'
                className='size-[1.4rem]'
                width={120}
                height={120}
                priority
              />
            ) : (
              <>
                <span className='w-3/4 h-[0.12rem] bg-grey-900'></span>
                <span className='w-full h-[0.12rem] bg-grey-900'></span>
                <span className='w-1/2 h-[0.12rem] bg-grey-900'></span>
              </>
            )}
          </button>
          <div className='w-[0.075rem] h-[2.5rem] opacity-10 bg-grey-900 mx-10' />
          <button
            className='flex flex-row items-center font-Iciel text-grey-900 text-1 font-medium leading-1.5 ml-10 hover-opacity py-2'
            onClick={() => {
              setIsOpenModalMenu(
                activeModalMenuLink === 'THANG MÁY NHẬT BẢN' ? false : true,
              )
              setActiveModalMenuLink('THANG MÁY NHẬT BẢN')
            }}
          >
            THANG MÁY NHẬT BẢN
            <Image
              src={`/images/layout/header/arrow-down.svg`}
              alt='arrow down'
              className='w-2 h-1 ml-2'
              width={120}
              height={120}
              priority
            />
          </button>
          <button
            className='flex flex-row items-center font-Iciel text-grey-900 text-1 font-medium leading-1.5 ml-10 hover-opacity py-2'
            onClick={() => {
              setIsOpenModalMenu(
                activeModalMenuLink === 'DỊCH VỤ' ? false : true,
              )
              setActiveModalMenuLink('DỊCH VỤ')
            }}
          >
            DỊCH VỤ
            <Image
              src={`/images/layout/header/arrow-down.svg`}
              alt='arrow down'
              className='w-2 h-1 ml-2'
              width={120}
              height={120}
              priority
            />
          </button>
          <Link
            href={`/`}
            className='absolute flex flex-row items-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
            onClick={() => setIsOpenModalMenu(false)}
          >
            <Image
              src={`/images/layout/header/logo.svg`}
              alt='sanyo yusoki'
              className='size-[2.6rem]'
              width={120}
              height={120}
              priority
            />
            <div className='flex flex-col items-center'>
              <Image
                src={`/images/layout/header/logo-name.svg`}
                alt=''
                className='w-[12rem] h-[1.6rem] ml-1 mb-[0.3rem]'
                width={120}
                height={120}
                priority
              />
              <Image
                src={`/images/layout/header/logo-name-jap.svg`}
                alt='sanyo yusoki'
                className='w-[12rem] h-3'
                width={120}
                height={120}
                priority
              />
            </div>
          </Link>
          <div className='flex flex-row items-center ml-auto'>
            <Link
              href={`/lien-he`}
              onClick={() => setIsOpenModalMenu(false)}
            >
              <Button
                text='LIÊN HỆ NGAY'
                isHover
                isBlack
              />
            </Link>
            <div className='w-[0.075rem] h-[2.5rem] opacity-10 bg-grey-900 mx-7' />
            <div className='flex flex-col'>
              <p className='text-0.75 font-Iciel text-grey-700 opacity-60 font-medium mb-[0.2rem]'>
                Chọn ngôn ngữ
              </p>
              <GoogleTranslate />
            </div>
          </div>
        </div>
      </div>
      <DynamicModalMenuDesktop
        isOpenModalMenu={isOpenModalMenu}
        activeModalMenuLink={activeModalMenuLink}
        activeModalMenuChildLink={activeModalMenuChildLink}
        handleClickModalLink={handleClickModalLink}
        setIsOpenModalMenu={setIsOpenModalMenu}
        setActiveModalMenuLink={setActiveModalMenuLink}
        setActiveModalMenuChildLink={setActiveModalMenuChildLink}
        data={data}
      />
    </>
  )
}
