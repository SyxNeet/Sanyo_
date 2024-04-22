'use client'

import Image from 'next/image'
import Link from 'next/link'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import {useEffect, useRef, useState} from 'react'
import {coreValues} from '../../../data/ve-chung-toi/core-values'
import clsx from 'clsx'
import {Swiper, SwiperSlide} from 'swiper/react'

export default function LeaderShipMessageAndCoreValues({isMobile}) {
  const firstRef = useRef(null)
  const secondRef = useRef(null)
  const [activeImage, setActiveImage] = useState(0)
  const swiperRef = useRef(null)
  const [activeSlide, setActiveSlide] = useState(0)

  useGSAP(() => {
    if (!isMobile) {
      gsap.to(firstRef.current, {
        scrollTrigger: {
          trigger: firstRef.current,
          pin: true,
          start: 'top top',
          end: 'bottom top',
          pinSpacing: false,
          anticipatePin: 1
        },
      })
      gsap.to(secondRef.current, {
        scrollTrigger: {
          trigger: secondRef.current,
          endTrigger: '.section-container',
          pin: true,
          start: 'top top',
          end: 'bottom bottom',
          anticipatePin: 1
        },
      })
    }
  }, [isMobile])

  useEffect(() => {
    if (!isMobile) {
      const fnc = () => {
        const sectionLeaderMessageContainer = document.querySelector(
          '.section-leader-message-container',
        )
        const rect = sectionLeaderMessageContainer.getBoundingClientRect()
        if (
          rect.top > 0 &&
          rect.top <=
            parseFloat(window.innerHeight) - parseFloat(rect.height) / 2
        ) {
          gsap.to('.sun', {top: '17%', duration: 0.5})
        }
      }
      window.addEventListener('scroll', fnc)
      return () => window.removeEventListener('scroll', fnc)
    }
  }, [isMobile])

  useEffect(() => {
    if (!isMobile) {
      const coreValuesLinks = document.querySelectorAll('.core-value-link')
      const fnc = () => {
        let rectArray = []
        for (let i = 0; i < coreValuesLinks.length; i++) {
          const rect = coreValuesLinks[i].getBoundingClientRect()
          rectArray.push(rect)
        }
        let count = {
          positive: 0,
          negative: 0,
        }
        rectArray.forEach((rect, i) => {
          if (Math.abs(rect.top) <= coreValuesLinks[i].offsetHeight / 2) {
            setActiveImage(i + 1)
          } else if (rect.top > 0) {
            count = {...count, positive: count.positive + 1}
          } else if (rect.top < 0) {
            count = {...count, negative: count.negative + 1}
          }
        })
        if (count.negative === 0 && count.positive === coreValuesLinks.length) {
          setActiveImage(0)
        } else if (
          count.positive < 1 &&
          count.negative >= coreValuesLinks.length - 1
        ) {
          setActiveImage(coreValuesLinks.length - 1)
        }
      }
      window.addEventListener('scroll', fnc)
      return () => window.removeEventListener('scroll', fnc)
    }
  }, [isMobile])

  return (
    <>
      <div className='mb-[3.2rem] md:mb-[5.2rem]'>
        <section
          ref={firstRef}
          className='relative flex flex-col pt-6 mb-12 md:mb-24 md:pt-12 section-leader-message-container -z-10'
        >
          <Image
            src={`/images/about-us/bglanhdao.png`}
            alt='bgLeadership'
            className='absolute top-0 left-0 object-cover w-full h-full -z-10 max-md:hidden'
            width={1920}
            height={1080}
          />
          <Image
            src={`/images/about-us/bgmblandao.png`}
            alt='bgLeadership'
            className='absolute top-0 left-0 hidden object-cover w-full h-full -z-10 max-md:block'
            width={1920}
            height={1080}
          />
          <div className='flex w-full pt-12 overflow-hidden max-md:flex-row-reverse max-md:px-4 max-md:items-center'>
            <div className='relative w-[40%] flex justify-end'>
              <div className='sun w-[32.8125rem] h-[32.8125rem] bg-[#DAB571] absolute -z-[1] rounded-[50%] right-0 top-[-5%] md:top-[100%] transition max-md:w-[9.25rem] max-md:bg-transparent max-md:h-[9.25rem] max-md:bg-[linear-gradient(180deg,_#DAB571_0%,_rgba(218,_181,_113,_0.00)_62.11%)] max-md:left-0'></div>
              <Image
                src={`/images/about-us/lanhdao.png`}
                alt='leadership'
                className='w-[20.9375rem] max-md:w-[7.375rem] max-md:h-[12.625rem] object-contain'
                width={1920}
                height={1080}
              />
            </div>
            <div className='w-[60%] pl-[3.12rem] pt-[5%] max-md:pl-0'>
              <div className='w-[47rem] relative'>
                <Image
                  src={`/images/about-us/dauphay.png`}
                  alt='dauphay'
                  className='w-16 h-[3.3125rem] top-0 right-0 absolute max-md:hidden'
                  width={1920}
                  height={1080}
                />
                <h2 className='font-SVNLagu text-[1.25rem] uppercase font-medium leading-1.5 mb-[1.56rem] text-[#484F57] opacity-80 max-md:text-[0.625rem] max-md:mb-2'>
                  chia sẻ từ BAN lãnh đạo
                </h2>
                <h3 className='w-[44.25rem] font-SVNLagu text-[2.25rem] font-semibold leading-1.4 mb-2 max-md:w-[14.4375rem] max-md:text-[0.9375rem]'>
                  Tập đoàn{' '}
                  <strong className='font-semibold text-yellow-500'>
                    thang máy Sanyo luôn tôn trọng niềm tin rằng
                  </strong>{' '}
                  "nền tảng vững chắc là nền tảng của sự phát triển chất lượng"
                </h3>
                <p className='w-[43.125rem] font-Iciel text-base leading-1.5 font-normal mb-[3.12rem] text-grey-900 max-md:hidden'>
                  Tập đoàn thang máy Sanyo luôn tôn trọng niềm tin rằng "nền
                  tảng vững chắc là nền tảng của sự phát triển chất lượng".
                  Chúng tôi liên tục nâng cao năng lực R&D của mình cho đầy đủ
                  các sản phẩm thang máy, nỗ lực cung cấp thang máy an toàn hơn
                  và hiệu suất cao hơn cho toàn xã hội. Nỗ lực này nhằm đạt được
                  sự công nhận toàn cầu về những phát triển mới trong ngành
                  thang máy.
                </p>
                <span className='font-Iciel font-bold leading-1.5 text-[1.25rem] text-grey-900 max-md:hidden'>
                  CEO SANYO YUSOKI
                </span>
              </div>
            </div>
          </div>
          <div className='w-full px-3 md:hidden'>
            <div className='bg-[linear-gradient(180deg,_rgba(209,179,123,0.40)_0%,_rgba(255,255,255,0.40)_19.12%)] border-yellow-500 border-[1px] px-3 pt-6 rounded-xl border-opacity-60 pb-6'>
              <p className='text-justify font-Iciel text-xs font-normal leading-1.5 pb-4'>
                Tập đoàn thang máy Sanyo luôn tôn trọng niềm tin rằng "nền tảng
                vững chắc là nền tảng của sự phát triển chất lượng". Chúng tôi
                liên tục nâng cao năng lực R&D của mình cho đầy đủ các sản phẩm
                thang máy, nỗ lực cung cấp thang máy an toàn hơn và hiệu suất
                cao hơn cho toàn xã hội. Nỗ lực này nhằm đạt được sự công nhận
                toàn cầu về những phát triển mới trong ngành thang máy.
              </p>
              <div className='flex flex-col'>
                <span className='font-Iciel text-[0.625rem] font-normal leading-1.5 mb-1'>
                  Chia sẻ từ
                </span>
                <span className='italic text-xs font-normal leading-1.5'>
                  CEO SANYO YUSOKI
                </span>
              </div>
            </div>
          </div>
        </section>
        {!isMobile && (
          <section className='z-10 flex flex-row items-start bg-white section-container'>
            <div
              ref={secondRef}
              className='relative basis-[65%] h-screen top-0'
            >
              {coreValues.map((item, i) => {
                return (
                  <Image
                    key={i}
                    src={item.src}
                    alt={item.alt}
                    className={clsx(
                      'absolute top-0 left-0 object-cover w-full h-full transition-300',
                      {
                        'opacity-100': activeImage === i,
                        'opacity-0': activeImage !== i,
                      },
                    )}
                    width={1920}
                    height={1080}
                  />
                )
              })}
            </div>
            <div className='ml-auto basis-[35%]'>
              <h2 className='text-3 font-SVNLagu font-semibold leading-1.3 text-grey-900 pl-[2.94rem] pt-[5.56rem] pr-[6.5rem] pb-[2.94rem]'>
                Giá trị cốt lõi của{' '}
                <strong className='font-semibold text-yellow-500'>
                  SANYO YUSOKI
                </strong>
              </h2>
              <nav>
                {coreValues.map((item, i) => {
                  return (
                    <Link
                      key={i}
                      href={item.href}
                      className={clsx(
                        'core-value-link pr-[1.88rem] pl-[2.94rem] py-[2.75rem] flex flex-row items-start border-t transition-300',
                        {
                          'hover:bg-yellow-500 group': activeImage !== i,
                          'bg-yellow-500': activeImage === i,
                        },
                      )}
                      onMouseEnter={() => setActiveImage(i)}
                    >
                      <div>
                        <h3
                          className={clsx(
                            'font-SVNLagu text-2.25 font-medium leading-1.3 mb-[0.44rem] transition-300',
                            {
                              'text-yellow-500 group-hover:text-white':
                                activeImage !== i,
                              'text-white': activeImage === i,
                            },
                          )}
                        >
                          {item.title}
                        </h3>
                        <p
                          className={clsx(
                            'text-1.125 font-Iciel font-medium leading-1.5 transition-300',
                            {
                              'text-grey-500 group-hover:text-white':
                                activeImage !== i,
                              'text-white': activeImage === i,
                            },
                          )}
                        >
                          {item.content}
                        </p>
                      </div>
                      <svg
                        width='33'
                        height='38'
                        viewBox='0 0 33 38'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        className={clsx(
                          'ml-[1.69rem] w-[1.875rem] h-[2.3125rem] shrink-0',
                          {
                            'group-hover:[&_path]:stroke-white [&_path]:transition-300':
                              activeImage !== i,
                            '[&_path]:stroke-white': activeImage === i,
                          },
                        )}
                      >
                        <path
                          d='M1 37.001L31.001 7'
                          stroke='#DAB571'
                          strokeWidth='2.57143'
                        />
                        <path
                          d='M4.00439 7H31.0053V34.0009'
                          stroke='#DAB571'
                          strokeWidth='2.57143'
                        />
                      </svg>
                    </Link>
                  )
                })}
              </nav>
            </div>
          </section>
        )}
        {isMobile && (
          <section>
            <h2 className='ml-3 text-1.5 font-semibold leading-1.3 font-SVNLagu text-grey-900 w-2/3 mb-6'>
              Giá trị cốt lõi của{' '}
              <strong className='font-semibold text-yellow-500'>
                SANYO YUSOKI
              </strong>
            </h2>
            <Swiper
              ref={swiperRef}
              spaceBetween={(window.innerWidth / 100) * 4.267 * 0.75}
              speed={800}
              slidesPerView='auto'
              className='swiper-core-values'
              onActiveIndexChange={(swiper) => {
                setActiveSlide(swiper.activeIndex)
              }}
            >
              {coreValues.map((item, i) => {
                return (
                  <SwiperSlide key={i}>
                    <div className='relative w-[19.5625rem] h-[17.625rem] rounded-lg mb-4'>
                      <Image
                        src={item.src}
                        alt={item.alt}
                        className='object-cover w-full h-full rounded-lg'
                        width={1920}
                        height={1080}
                      />
                      <div className='absolute bottom-3 left-3 px-3 py-1.5 text-1.25 text-grey-0 leading-1.5 font-medium bg-black/30 backdrop-blur-lg rounded-md z-10 font-SVNLagu'>
                        {item.titleMobile}
                      </div>
                    </div>
                    <p className='text-grey-700 font-Iciel text-0.875 leading-1.5 line-clamp-3'>
                      {item.content}
                    </p>
                  </SwiperSlide>
                )
              })}
            </Swiper>
            <div className='flex flex-row mx-3 mt-5'>
              <button onClick={() => swiperRef.current.swiper.slidePrev()}>
                <svg
                  className='size-10'
                  xmlns='http://www.w3.org/2000/svg'
                  width='40'
                  height='40'
                  viewBox='0 0 40 40'
                  fill='none'
                >
                  <circle
                    cx='20'
                    cy='20'
                    r='19.65'
                    transform='matrix(-1 0 0 1 40 0)'
                    fill='#DAB571'
                    stroke='#DAB571'
                    strokeWidth='0.7'
                  />
                  <path
                    d='M14.2864 20.1221L21.939 14V18.5915L25 20.1221L21.939 21.6526V26.2441L14.2864 20.1221Z'
                    fill='#1E2125'
                  />
                </svg>
              </button>
              <button
                className='ml-[0.38rem]'
                onClick={() => swiperRef.current.swiper.slideNext()}
              >
                <svg
                  className='size-10'
                  xmlns='http://www.w3.org/2000/svg'
                  width='40'
                  height='40'
                  viewBox='0 0 40 40'
                  fill='none'
                >
                  <circle
                    cx='20'
                    cy='20'
                    r='19.65'
                    fill='#DAB571'
                    stroke='#DAB571'
                    strokeWidth='0.7'
                  />
                  <path
                    d='M25.7136 20.1221L18.061 14V18.5915L15 20.1221L18.061 21.6526V26.2441L25.7136 20.1221Z'
                    fill='#1E2125'
                  />
                </svg>
              </button>
              <div
                className='rounded-full flex justify-center items-center ml-auto w-[4.3125rem] h-10 text-yellow-500 font-Iciel text-0.875 font-medium leading-1.2'
                style={{background: 'rgba(218, 181, 113, 0.12)'}}
              >
                {swiperRef.current && (
                  <>
                    {activeSlide + 1}/{swiperRef.current.swiper.slides.length}
                  </>
                )}
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  )
}
