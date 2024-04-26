'use client'

import Image from 'next/image'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import {useEffect, useRef, useState} from 'react'
import clsx from 'clsx'
import {Swiper, SwiperSlide} from 'swiper/react'
import LeadershipMessage from '@/components/LeadershipMessage'

export default function LeaderShipMessageAndCoreValues({
  isMobile,
  dataLeadershipMessage,
  dataCoreValues,
  lang
}) {
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
          anticipatePin: 1,
        },
      })
      gsap.to(secondRef.current, {
        scrollTrigger: {
          trigger: secondRef.current,
          endTrigger: '.section-container',
          pin: true,
          start: 'top top',
          end: 'bottom bottom',
          anticipatePin: 1,
        },
      })
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
        <LeadershipMessage
          ref={firstRef}
          data={dataLeadershipMessage}
          lang={lang}
        />
        {!isMobile && (
          <section className='relative z-10 flex flex-row items-start bg-grey-0 section-container'>
            <div
              ref={secondRef}
              className='relative basis-[65%] h-screen top-0'
            >
              {dataCoreValues.coreValue.map((item, i) => {
                return (
                  <Image
                    key={i}
                    src={item.image.url}
                    alt={item.image.alt ?? 'Giá trị cốt lõi của SANYO YUSOKI'}
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
              <h2
                className='text-3 font-SVNLagu font-semibold leading-1.3 text-grey-900 pl-[2.94rem] pt-[5.56rem] pr-[6.5rem] pb-[2.94rem] [&_strong]:font-semibold [&_strong]:text-yellow-500'
                dangerouslySetInnerHTML={{__html: dataCoreValues.heading}}
              ></h2>
              <nav>
                {dataCoreValues.coreValue.map((item, i) => {
                  return (
                    <div
                      key={i}
                      className={clsx(
                        'core-value-link pr-[1.88rem] pl-[2.94rem] py-[2.75rem] flex flex-row items-start border-t transition-300',
                        {
                          'bg-yellow-500': activeImage === i,
                        },
                      )}
                    >
                      <div>
                        <h3
                          className={clsx(
                            'font-SVNLagu text-2.25 font-medium leading-1.3 mb-[0.44rem] transition-300',
                            {
                              'text-white': activeImage === i,
                            },
                          )}
                        >
                          {item.heading}
                        </h3>
                        <p
                          className={clsx(
                            'text-1.125 font-Iciel font-medium leading-1.5 transition-300',
                            {
                              'text-white': activeImage === i,
                            },
                          )}
                        >
                          {item.description}
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
                    </div>
                  )
                })}
              </nav>
            </div>
          </section>
        )}
        {isMobile && (
          <section>
            <h2
              className='ml-3 text-1.5 font-semibold leading-1.3 font-SVNLagu text-grey-900 w-2/3 mb-6 [&_strong]:font-semibold [&_strong]:text-yellow-500'
              dangerouslySetInnerHTML={{__html: dataCoreValues.heading}}
            ></h2>
            <Swiper
              ref={swiperRef}
              spaceBetween={(window.innerWidth / 100) * 4.267 * 0.75}
              speed={800}
              slidesPerView='auto'
              className='swiper-core-values'
              
              onActiveIndexChange={(swiper) => {
                setActiveSlide(swiper.activeIndex)
              }}
              slidesOffsetAfter={(window.innerWidth / 100) * 4.267 * 0.75}
              slidesOffsetBefore={(window.innerWidth / 100) * 4.267 * 0.75}
            >
              {dataCoreValues.coreValue.map((item, i) => {
                return (
                  <SwiperSlide key={i}>
                    <div className='relative w-[19.5625rem] h-[17.625rem] rounded-lg mb-4'>
                      <Image
                        src={item.image.url}
                        alt={item.image.alt}
                        className='object-cover w-full h-full rounded-lg'
                        width={1920}
                        height={1080}
                      />
                      <div className='absolute bottom-3 left-3 px-3 py-1.5 text-1.25 text-grey-0 leading-1.5 font-medium bg-black/30 backdrop-blur-lg rounded-md z-10 font-SVNLagu'>
                        {item.headingMobile}
                      </div>
                    </div>
                    <p className='text-grey-700 font-Iciel text-0.875 leading-1.5 line-clamp-3'>
                      {item.description}
                    </p>
                  </SwiperSlide>
                )
              })}
            </Swiper>
            <div className='flex flex-row mx-3 mt-5'>
              <button onClick={() => swiperRef.current.swiper.slidePrev()}>
                <Image
                  src={`/images/about-us/prev-button-core-value-slide.svg`}
                  alt='previous slide'
                  className='size-10'
                  width={120}
                  height={120}
                />
              </button>
              <button
                className='ml-[0.38rem]'
                onClick={() => swiperRef.current.swiper.slideNext()}
              >
                <Image
                  src={`/images/about-us/next-button-core-value-slide.svg`}
                  alt='next slide'
                  className='size-10'
                  width={120}
                  height={120}
                />
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
