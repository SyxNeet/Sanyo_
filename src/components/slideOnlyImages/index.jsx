'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import {Autoplay} from 'swiper/modules'
import 'swiper/css'
import Image from 'next/image'
import slideImg from "../../../public/images/components/slideAutoplay/slide.png"
const SlideOnlyImages = (className) => {
    const image = [slideImg, slideImg, slideImg, slideImg];
  return (
    <div className='w-full mx-auto max-w-[100rem]'>
    <Swiper
      slidesPerView={1.3}
      loop={true}
      breakpoints={{
        0: {
          slidesPerView: 1.1,

        },
        768: {
          slidesPerView: 1.3,

        },

      }}
      spaceBetween={0}
      speed={10000}
      autoplay={{
        delay: 0,
      }}
      modules={[Autoplay]}
      className={`mySwiperOnlyImages`}
    >
      {image.map((img, index) => (
        <SwiperSlide
          key={index}
          className={`!h-[42.92581rem] mr-[1.7rem] max-md:mr-3 max-md:h-[13.76756rem] ${className}`}
        >
          <Image
            src={img}
            alt={`slide-${index + 1}`}
            className='object-cover h-full rounded-[0.5rem] w-full'
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  )
}

export default SlideOnlyImages