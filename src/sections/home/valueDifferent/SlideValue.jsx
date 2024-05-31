'use client'
import React, {useRef, useState, useEffect} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import {Navigation, Pagination} from 'swiper/modules'
import ReasonChoose from '@/components/reasonChoose'
import './style.css'

export default function SlideValue({isMobile, data}) {
  const slideImages = data?.sixReasons?.slide_six_reasons?.slice().reverse()
  const [activeSlide, setActiveSlide] = useState(0)
  const swiperRef = useRef(null)

  const handleChangeSlide = (swiper) => {
    const currentIndex = swiper?.realIndex
    setActiveSlide(currentIndex)
  }

  useEffect(() => {
    if (swiperRef.current) {
      handleChangeSlide(swiperRef.current)
    }
  }, [swiperRef.current])

  return (
    <>
      <div className='relative'>
        <Swiper
          modules={[Navigation, Pagination]}
          className=' max-md:!pl-[0.76rem] md:!pr-[10rem]'
          slidesPerView={1.2}
          spaceBetween={12}
          speed={400}
          centeredSlides={!isMobile && true}
          onSlideChange={(swiper) => handleChangeSlide(swiper)}
          initialSlide={!isMobile?slideImages?.length:0}
          navigation={{
            prevEl: '.btn-prev-cus-value',
            nextEl: '.btn-next-cus-value',
          }}
          breakpoints={{
            375: {
              navigation: {
                nextEl: '.btn-next-cus-value',
                prevEl: '.btn-prev-cus-value',
              },
            },
            768: {
              slidesPerView: 1.8,
              spaceBetween: 35,
            },
          }}
        >
          {(!isMobile
            ? data?.sixReasons?.slide_six_reasons.slice().reverse()
            : data?.sixReasons?.slide_six_reasons
          )?.map((item, index) => (
            <SwiperSlide key={index}>
              <ReasonChoose data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className='flex absolute right-[0.75rem] text-yellow-500 text-[0.875rem] font-medium leading-1.2 bottom-[-4rem] justify-center items-center md:hidden w-[4.3125rem] h-[2.5rem] rounded-[2.0625rem] box_count_slide'>
        <span>{activeSlide + 1}</span>
        <span className='ml-[0.25rem] mr-[0.25rem]'>/</span>
        <span>{slideImages?.length}</span>
      </div>
    </>
  )
}
