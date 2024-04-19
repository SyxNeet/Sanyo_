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
export default function SlideValue() {
  const slideImages = Array(4)?.fill(0)
  return (
    <div className='relative'>
      <Swiper
        modules={[Navigation, Pagination]}
        className='slide_value size-full'
        slidesPerView={'auto'}
        spaceBetween={35}
        centeredSlides={true}
        initialSlide={slideImages?.length}
        navigation={{
          nextEl: '.btn-prev-cus-value',
          prevEl: '.btn-next-cus-value',
        }}
      >
        {slideImages.map((item, index) => (
          <SwiperSlide key={index}>
            <ReasonChoose />
          </SwiperSlide>
        ))}
      </Swiper>

      <button className='md:w-[3.5rem] md:h-[3.5rem] rounded-[50%] bg-white shadow_btn left-[6.13rem] z-[1] btn-prev-cus-value'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='17'
          height='18'
          viewBox='0 0 17 18'
          fill='none'
        >
          <path
            d='M0.809772 8.94723L12.3742 0V6.71042L17 8.94723L12.3742 11.184V17.8945L0.809772 8.94723Z'
            fill='#DAB571'
          />
        </svg>
      </button>
      <button className='md:w-[3.5rem] md:h-[3.5rem] rounded-[50%] bg-white right-[6.13rem] z-[1] shadow_btn btn-next-cus-value'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='14'
          height='16'
          viewBox='0 0 14 16'
          fill='none'
        >
          <path
            d='M14 8L4 0L4 6L0 8L4 10L4 16L14 8Z'
            fill='#DAB571'
          />
        </svg>
      </button>
    </div>
  )
}
