'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import {Autoplay} from 'swiper/modules'
import 'swiper/css'
import Image from 'next/image'
const SlideOnlyImages = ({className,data}) => {
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
      speed={15000}
      autoplay={{
        delay: 0,
      }}
      modules={[Autoplay]}
      className={`mySwiperOnlyImages overflow-hidden`}
    >
      {data?.map((img, index) => (
        <SwiperSlide
          key={index}
          className={`${className} mr-[1.7rem] max-md:mr-3 max-md:!h-[13.76756rem]`}
        >
          <Image
            src={img?.image?.link}
            alt={img?.image?.alt||'Product Line'}
            width={1000}
            height={1000}
            className='object-cover h-full rounded-[0.5rem] w-full'
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  )
}

export default SlideOnlyImages