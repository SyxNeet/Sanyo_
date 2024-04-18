'use client'
import React from 'react'
import Image from 'next/image'
import 'swiper/css'
import slideImg from '../../../public/images/slideAutoplay/slide.png'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay} from 'swiper/modules'
const SLideAutoPlay = ({
  image = [slideImg, slideImg, slideImg, slideImg],
  className,
}) => {
  return (
    <div className='w-full mx-auto max-w-[100rem]'>
      <Swiper
        slidesPerView={1.3}
        spaceBetween={30}
        speed={30000}
        autoplay={{
          delay: 0,
        }}
        modules={[Autoplay]}
        className={`mySwiper ${className}`}
      >
        {image.map((img, index) => (
          <SwiperSlide
            key={index}
            className='h-full'
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

export default SLideAutoPlay
