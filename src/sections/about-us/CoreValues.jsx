'use client'

import Image from 'next/image'
import Link from 'next/link'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import {useEffect, useRef, useState} from 'react'
import {coreValues} from '../../../data/core-values'
import clsx from 'clsx'
import {Swiper, SwiperSlide} from 'swiper/react'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

export default function CoreValues({isMobile}) {
  const firstRef = useRef(null)
  const secondRef = useRef(null)
  const [activeImage, setActiveImage] = useState(0)
  useGSAP(() => {
    if (!isMobile) {
      gsap.to(firstRef.current, {
        scrollTrigger: {
          trigger: firstRef.current,
          pin: true,
          start: 'top top',
          end: 'bottom top',
          pinSpacing: false,
        },
      })
      gsap.to(secondRef.current, {
        scrollTrigger: {
          trigger: secondRef.current,
          endTrigger: '.section-container',
          pin: true,
          start: 'top top',
          end: 'bottom bottom',
        },
      })
      const coreValuesLinks = document.querySelectorAll('.core-value-link')
      ScrollTrigger.create({
        start: 0,
        end: 'max',
        onUpdate: () => {
          for (let i = 0; i < coreValuesLinks.length; i++) {
            if (ScrollTrigger.isInViewport(coreValuesLinks[i], 0.5)) {
              setActiveImage(i)
              break
            }
          }
        },
      })
    }
  }, [isMobile])
  return (
    <>
      <div className=''>
        <section
          ref={firstRef}
          className='sticky top-0 h-[80vh] -z-10'
        >
          <h2 className='text-center uppercase text-2'>
            Chia sẻ từ BAN lãnh đạo
          </h2>
          {Array.from({length: 20}, (_, i) => i + 1).map((_, i) => {
            return (
              <p
                key={i}
                className='mx-4'
              >
                {i}
              </p>
            )
          })}
        </section>
        {!isMobile && (
          <section className='flex flex-row section-container'>
            <div
              ref={secondRef}
              className='basis-[65%] h-screen top-0'
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
            <div className='basis-[35%]'>
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
              spaceBetween={(window.innerWidth / 100) * 4.267 * 0.75}
              speed={800}
              slidesPerView='auto'
              className='swiper-core-values'
            >
              {coreValues.map((item) => {
                return (
                  <SwiperSlide>
                    <Image
                      key={i}
                      src={item.src}
                      alt={item.alt}
                      className='object-cover w-[19.5625rem] h-[17.625rem] rounded-lg mb-4'
                      width={1920}
                      height={1080}
                    />
                    <p className='text-grey-700 font-Iciel text-0.875 leading-1.5'>
                      Đóng góp vào sự phát triển bền vững của ngành thang máy
                      thông qua nghiên cứu và phát triển liên tục
                    </p>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </section>
        )}
      </div>
    </>
  )
}
