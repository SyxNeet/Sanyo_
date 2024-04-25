'use client'

import React, {useRef, useState} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import {
  Navigation,
  Pagination,
  Autoplay,
  Thumbs,
  EffectFade,
} from 'swiper/modules'
import Image from 'next/image'
import './style.css'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'

export default function SlideBanner({isMobile, dataBanner}) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const swiperRef = useRef()
  const [indexSlider, setIndexSlider] = useState(0)

  useGSAP(() => {
    gsap.fromTo(
      '.heading-1',
      {yPercent: 103, autoAlpha: 1},
      {
        yPercent: 0,
        autoAlpha: 1,
        duration: 0.5,
      },
    )
    gsap.fromTo(
      '.heading-2',
      {yPercent: 103, autoAlpha: 1},
      {
        yPercent: 0,
        autoAlpha: 1,
        duration: 0.5,
        delay: 0.5,
      },
    )
  }, [indexSlider])

  const handleSlideChange = (swiper) => {
    setIndexSlider(swiper.realIndex)
  }

  return (
    <section className='md:h-screen h-[23.6875rem] w-full relative'>
      {/* pagination */}

      {isMobile ? (
        <div className='absolute md:left-[5.62rem] md:bottom-[2.81rem] bottom-[1.25rem] left-[1.25rem] z-[2] flex'>
          {dataBanner?.map((item, index) => (
            <div
              key={index}
              className={`w-[0.6rem] h-[0.6rem] transition-transform duration-1000 mr-[0.58rem]`}
            >
              {indexSlider === index ? (
                <Image
                  src='/images/home/slideFirstPage/tabActive.png'
                  width={500}
                  height={500}
                  alt='tabActive'
                />
              ) : (
                <Image
                  src='/images/home/slideFirstPage/tabNormal.png'
                  width={500}
                  height={500}
                  alt='tabNormal'
                />
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className='absolute md:left-[5.62rem] md:bottom-[2.81rem] bottom-[1.25rem] left-[1.25rem] z-[2] flex'>
          {dataBanner?.map((item, index) => (
            <div
              key={index}
              className={`md:w-[1rem] w-[0.6rem] h-[0.6rem] md:h-[1rem] md:mr-[1rem] mr-[0.58rem]  rounded-[50%] bg-gray-800 bg-opacity-20 relative ${
                indexSlider === index
                  ? 'border-[0.25rem] solid border-white'
                  : ''
              }`}
            >
              <div
                className={`md:w-[0.25rem] md:h-[0.25rem] w-[0.15rem] h-[0.15rem] flex flex-shrink-0 rounded-[50%] ${
                  indexSlider === index ? '' : 'bg-grey-0'
                } absolute -translate-x-1/2 -translate-y-1/2 top-[50%] left-[50%]`}
              ></div>
            </div>
          ))}
        </div>
      )}

      <div className='bottom-[1.44rem] right-[1.37rem] md:w-[3.625rem] w-[1.94194rem] h-[4.6875rem] absolute md:top-[50%] md:right-[3.25rem] pt-[0.17rem] md:-translate-x-1/2 md:-translate-y-1/2 z-[2] flex flex-col items-center md:h-[8.75rem] md:rounded-[0.35rem] rounded-[0.1875rem] bg-[rgba(255,255,255,0.20)] bg-opacity-20 md:pt-[0.31rem] max-md:border-[0.3px] md:solid border-grey-50 backdrop-blur-[14px]'>
        <div className='md:w-[2.9375rem] w-[1.57369rem] flex items-center justify-center md:h-[3.4375rem] md:rounded-[0.25rem] bg-grey-0 relative'>
          <Swiper
            onSwiper={setThumbsSwiper}
            slidesPerView={1}
            speed={500}
            watchSlidesProgress={true}
            modules={[Navigation, Thumbs]}
            className='mySwiperNumberElevator h-[1.875rem]'
            direction='vertical'
          >
            {dataBanner?.map((item, index) => (
              <SwiperSlide
                key={index}
                className='h-[1.875rem] max-md:!flex max-md:!items-center'
              >
                <span
                  className={`font-grey-800 font-SVNLagu lg:text-[1.25rem] font-[800] leading-1.5 w-full`}
                >
                  0{index + 1}
                </span>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <button className='md:mt-[0.82rem] mt-[0.47rem] swiper-button-next-custom-home'>
          <Image
            src={'/images/home/slideFirstPage/btnUp.svg'}
            alt='btn'
            width={120}
            height={120}
            className='md:w-[1.82956rem] md:h-[1.30681rem] object-cover w-[0.98013rem] h-[0.7rem]'
          />
        </button>
        <button className='rotate-180 md:mt-[0.82rem] mt-[0.47rem] swiper-button-prev-custom-home'>
          <Image
            src={'/images/home/slideFirstPage/btnUp.svg'}
            alt='btn'
            width={120}
            height={120}
            className='md:w-[1.82956rem] md:h-[1.30681rem] object-cover w-[0.98013rem] h-[0.7rem]'
          />
        </button>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, Thumbs, EffectFade]}
        className='slide_first_onPage size-full'
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        effect={'fade'}
        thumbs={{swiper: thumbsSwiper}}
        autoplay={{
          delay: 3000,
        }}
        onSlideChange={handleSlideChange}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper
        }}
        pagination={{
          el: '.swiper-pagination-custom-home',
        }}
        navigation={{
          nextEl: '.swiper-button-next-custom-home',
          prevEl: '.swiper-button-prev-custom-home',
        }}
      >
        {dataBanner.map((item, index) => (
          <SwiperSlide key={index}>
            <Image
              src={item?.background?.url}
              alt={item?.background?.alt || 'thang máy gia đình'}
              width={1920}
              height={1080}
              priority={index < 1}
              className='size-full object-cover z-[-1] absolute inset-0'
            />
            <div className='relative md:top-[4.25rem] md:left-[4.06rem] '>
              <div className='flex flex-col md:flex-row'>
                <div className='overflow-hidden h-max'>
                  <h2
                    className='text-2 md:text-4.975 font-bold leading-1.2 uppercase font-averta text-transparent heading-1 opacity-0'
                    style={{
                      WebkitTextStroke: '1px #FFF',
                      filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
                    }}
                  >
                    {item?.heading1}
                  </h2>
                </div>
                <div className='overflow-hidden h-max'>
                  <h2
                    className='text-2 md:text-4.975 text-grey-0 md:ml-4 font-averta font-bold leading-1.2 tracking-[-0.25rem] uppercase heading-2 opacity-0'
                    style={{textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}
                  >
                    {item?.heading2}
                  </h2>
                </div>
              </div>
              <p className='md:w-[45.5rem] max-md:hidden md:mt-[0.37rem] text-white lg:text-[1.125rem] font-medium leading-1.5 font-Iciel'>
                {item?.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
