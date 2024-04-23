'use client'

import clsx from 'clsx'
import {useEffect, useState, useRef} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {Button} from '@/components/ui/button'
import HeaderModalLink from './HeaderModalLink'
import {modalMenu} from '../../../data/header/modal-menu'
import LangDropdown from '@/components/header/LangDropdown'

export default function HeaderDesktop({isMobile}) {
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
  const handleClickModalLink = () => setIsOpenModalMenu(false)
  return (
    <>
      <header
        ref={headerRef}
        className='header-container sticky top-0 left-0 z-30 h-[5.5rem] bg-grey-0 border-b border-grey-50'
      >
        <nav className='px-10 py-[1.13rem] flex flex-row items-center'>
          {!isOpenModalMenu ? (
            <button
              className='w-9 h-5 grid grid-cols-1 gap-[0.5625rem] hover-opacity'
              onClick={() => {
                setIsOpenModalMenu(true)
                setActiveModalMenuLink('')
                setActiveModalMenuChildLink('')
              }}
            >
              <span className='w-3/4 h-[0.12rem] bg-grey-900'></span>
              <span className='w-full h-[0.12rem] bg-grey-900'></span>
              <span className='w-1/2 h-[0.12rem] bg-grey-900'></span>
            </button>
          ) : (
            <button
              className='flex items-center justify-center h-5 w-9 hover-opacity'
              onClick={() => {
                setIsOpenModalMenu(false)
                setActiveModalMenuLink('')
                setActiveModalMenuChildLink('')
              }}
            >
              <Image
                src={`/images/layout/header/x-mark.svg`}
                alt='close modal menu'
                className='size-[1.4rem]'
                width={120}
                height={120}
              />
            </button>
          )}
          <div className='w-[0.0625rem] h-[2.5rem] opacity-20 bg-grey-900 mx-10' />
          <button
            className='flex flex-row items-center font-Iciel text-grey-900 text-1 font-medium leading-1.5 ml-10 hover-opacity py-2'
            onClick={() => {
              setIsOpenModalMenu(!isOpenModalMenu)
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
            />
          </button>
          <button
            className='flex flex-row items-center font-Iciel text-grey-900 text-1 font-medium leading-1.5 ml-10 hover-opacity py-2'
            onClick={() => {
              setIsOpenModalMenu(!isOpenModalMenu)
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
            />
          </button>
          <Link
            href={`/`}
            className='absolute flex flex-row items-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
          >
            <Image
              src={`/images/layout/header/logo.svg`}
              alt='sanyo yusoki'
              className='size-[2.6rem]'
              width={120}
              height={120}
            />
            <div className='flex flex-col items-center'>
              <Image
                src={`/images/layout/header/logo-name.svg`}
                alt=''
                className='w-[12rem] h-[1.6rem] ml-1 mb-[0.3rem]'
                width={120}
                height={120}
              />
              <Image
                src={`/images/layout/header/logo-name-jap.svg`}
                alt='sanyo yusoki'
                className='w-[12rem] h-3'
                width={120}
                height={120}
              />
            </div>
          </Link>
          <div className='flex flex-row items-center ml-auto'>
            <Button
              text='LIÊN HỆ NGAY'
              isHover
              isBlack
            />
            <div className='w-[0.0625rem] h-[2.5rem] opacity-20 bg-grey-900 mx-7' />
            <div className='flex flex-col'>
              <p className='text-0.75 font-Iciel text-grey-700 opacity-60 font-medium mb-[0.2rem]'>
                Chọn ngôn ngữ
              </p>
              <LangDropdown isMobile={isMobile} />
            </div>
          </div>
        </nav>
      </header>
      {/* TODO: lazy loading */}
      <div
        className={clsx(
          'fixed top-0 left-0 z-10 w-full h-screen bg-black/70 transition-500',
          {
            'opacity-0 pointer-events-none': !isOpenModalMenu,
            'opacity-100 pointer-events-auto': isOpenModalMenu,
          },
        )}
        onClick={() => setIsOpenModalMenu(false)}
      />
      <div
        className={clsx(
          'navbar-container pt-[5.5rem] transition-500 z-20 bg-grey-600 h-screen transition-500 fixed top-0 left-0',
          {
            '-translate-x-full pointer-events-none': !isOpenModalMenu,
            'translate-x-0 pointer-events-auto': isOpenModalMenu,
            'max-w-[72.5rem]': activeModalMenuLink,
            'max-w-[27rem]': !activeModalMenuLink,
          },
        )}
      >
        <div className='flex flex-col pl-10 pt-11'>
          <Link
            href={`/`}
            className='flex flex-col mb-[1.74rem] hover-opacity w-fit'
            onClick={handleClickModalLink}
          >
            <Image
              src={`/images/layout/header/logo-name-white.svg`}
              alt='sanyo yusoki'
              className='w-[15rem] h-8 ml-1 mb-[0.38rem]'
              width={120}
              height={120}
            />
            <Image
              src={`/images/layout/header/logo-name-jap-white.svg`}
              alt='sanyo yusoki'
              className='w-[11rem] h-[0.7rem]'
              width={120}
              height={120}
            />
          </Link>
          <div className='flex flex-row items-center border-y-[0.0625rem] border-white/10 overflow-hidden'>
            <nav className='flex-none grid grid-cols-1 w-[24.5rem]'>
              {modalMenu.map((item, i) => {
                return (
                  <HeaderModalLink
                    key={i}
                    href={item.href}
                    text={item.text}
                    isLink={!!item.href}
                    handleOnMouseEnter={() => setActiveModalMenuLink(item.text)}
                    handleOnMouseLeave={() => setActiveModalMenuLink('')}
                    isActive={activeModalMenuLink === item.text}
                  />
                )
              })}
            </nav>
            <div className='relative w-[41.25rem]'>
              {modalMenu.map((item1, i1) => {
                return (
                  <div
                    className={clsx(
                      'flex flex-row items-center transition-500',
                      {
                        'opacity-0 pointer-events-none':
                          activeModalMenuLink !== item1.text,
                        'opacity-100 pointer-events-auto':
                          activeModalMenuLink === item1.text,
                        'absolute top-0 left-0 w-full h-full': i1 !== 0,
                      },
                    )}
                    onMouseEnter={() => setActiveModalMenuLink(item1.text)}
                    onMouseLeave={() => setActiveModalMenuLink('')}
                  >
                    {item1.child && (
                      <>
                        <nav
                          className='flex-none flex flex-col w-[21rem] border-x-[0.0625rem] border-white/10 h-full grow'
                          onMouseOver={() => {
                            setActiveModalMenuLink(item1.text)
                          }}
                          onMouseLeave={() => setActiveModalMenuLink('')}
                        >
                          {item1.child.map((item2, i2) => {
                            return (
                              <Link
                                href={item2.href}
                                className='font-Iciel text-0.875 leading-1.5 uppercase opacity-60 px-6 py-[0.62rem] text-white border-b-[0.0625rem] border-white/10 hover:text-yellow-500 transition-300 hover:opacity-100 flex flex-row items-center group'
                                onMouseEnter={() => {
                                  setActiveModalMenuLink(item1.text)
                                  setActiveModalMenuChildLink(item2.text)
                                }}
                                onMouseLeave={() => {
                                  setActiveModalMenuLink('')
                                  setActiveModalMenuChildLink('')
                                }}
                              >
                                {item2.text}
                                <Image
                                  src={`/images/layout/header/arrow-right-yellow.svg`}
                                  alt={item2.text}
                                  className='size-[0.75rem] ml-auto opacity-0 group-hover:opacity-100 transition-300'
                                  width={120}
                                  height={120}
                                />
                              </Link>
                            )
                          })}
                          {item1.showMore && (
                            <Link
                              href={`/`}
                              className='font-Iciel text-0.875 leading-1.5 uppercase pl-6 py-[0.8rem] text-white font-bold underline hover:bg-yellow-500 transition-300'
                              onMouseEnter={() =>
                                setActiveModalMenuLink(item1.text)
                              }
                              onMouseLeave={() => setActiveModalMenuLink('')}
                            >
                              XEM TẤT CẢ
                            </Link>
                          )}
                        </nav>
                        <div
                          className='relative flex-none w-[21.875rem] self-stretch'
                          onMouseEnter={() =>
                            setActiveModalMenuLink(item1.text)
                          }
                        >
                          {item1.child.map((item2, i2) => {
                            return (
                              <Image
                                src={item2.src}
                                alt=''
                                className={clsx(
                                  'object-cover w-full h-full transition-500',
                                  {
                                    'absolute top-0 left-0': i2 !== 0,
                                    'opacity-0 pointer-events-none':
                                      activeModalMenuChildLink !== item2.text,
                                    'opacity-100 pointer-events-auto':
                                      activeModalMenuChildLink === item2.text,
                                  },
                                )}
                                onMouseEnter={() => {
                                  setActiveModalMenuLink(item1.text)
                                  setActiveModalMenuChildLink(item2.text)
                                }}
                                onMouseLeave={() => {
                                  setActiveModalMenuLink('')
                                  setActiveModalMenuChildLink('')
                                }}
                                width={1920}
                                height={1080}
                              />
                            )
                          })}
                        </div>
                      </>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
          <div
            className='flex flex-row overflow-hidden pt-9'
            onMouseEnter={() => {
              setActiveModalMenuLink(activeModalMenuLink)
              setActiveModalMenuChildLink(activeModalMenuChildLink)
            }}
            onMouseLeave={() => {
              setActiveModalMenuLink('')
              setActiveModalMenuChildLink('')
            }}
          >
            <div className='flex flex-col w-[27rem] shrink-0'>
              <span className='text-white text-1'>Theo dõi chúng tôi</span>
              <nav className='flex flex-row items-center mt-1'>
                <Link
                  href={`/`}
                  className='hover-opacity'
                >
                  <Image
                    src={`/images/layout/header/facebook.svg`}
                    alt='facebook'
                    className='size-[2rem]'
                    width={120}
                    height={120}
                  />
                </Link>
                <Link
                  href={`/`}
                  className='hover-opacity'
                >
                  <Image
                    src={`/images/layout/header/instagram.svg`}
                    alt='instagram'
                    className='size-[2rem] ml-2'
                    width={120}
                    height={120}
                  />
                </Link>
              </nav>
            </div>
            <button className='relative w-[20.4375rem] h-[5.3125rem] flex flex-row justify-center items-center hover-opacity flex-none ml-[20rem]'>
              <Image
                src={`/images/layout/header/contact-now.svg`}
                alt=''
                className='absolute top-0 left-0 object-cover w-full h-full -z-10'
                width={120}
                height={120}
              />
              <p className='text-1.375 uppercase font-SVNLagu text-grey-0 font-extrabold leading-1.2 text-center'>
                liên hệ ngay
              </p>
              <Image
                src={`/images/layout/header/arrow-right-white.svg`}
                alt=''
                className='w-[0.95rem] h-[1.05rem] ml-3'
                width={120}
                height={120}
              />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
