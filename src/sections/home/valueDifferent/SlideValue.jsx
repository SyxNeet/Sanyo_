'use client'
import React, {useRef, useState} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import {Navigation, Pagination, Autoplay} from 'swiper/modules'
import Image from 'next/image'
import ReasonChoose from '@/components/reasonChoose'
export default function SlideValue() {
  const slideImages = Array(4)?.fill(0)
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        className='slide_first_onPage size-full'
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 3000,
        }}
        pagination={{
          el: '.swiper-pagination-value',
        }}
        navigation={{
          nextEl: '.swiper-button-next-value',
          prevEl: '.swiper-button-prev-value',
        }}
      >
        {slideImages.map((item, index) => (
          <SwiperSlide key={index}>
            <ReasonChoose />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
