'use client'
import React, {useRef, useState} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import {Navigation, Pagination} from 'swiper/modules'
import Image from 'next/image'
import ReasonChoose from '@/components/reasonChoose'
import './style.css'
export default function SlideValue({isMobile}) {
  const slideImages = Array(4)?.fill(0)
  const [activeSlide, setActiveSlide] = useState(slideImages?.length)
  const swiperRef = useRef()
  const handleChangeSlide = (swiper) => {
    setActiveSlide(swiper?.activeIndex)
  }
  return (
    <>
      <div className='relative'>
        <Swiper
          modules={[Navigation, Pagination]}
          className='slide_value size-full max-md:!pl-[0.76rem]'
          slidesPerView={1.2}
          spaceBetween={12}
          centeredSlides={!isMobile && true}
          initialSlide={slideImages?.length}
          onSlideChange={handleChangeSlide}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper
          }}
          navigation={{
            nextEl: '.btn-prev-cus-value',
            prevEl: '.btn-next-cus-value',
          }}
          breakpoints={{
            768: {
              slidesPerView: 'auto',
              spaceBetween: 35,
            },
          }}
        >
          {slideImages.map((item, index) => (
            <SwiperSlide key={index}>
              <ReasonChoose />
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
