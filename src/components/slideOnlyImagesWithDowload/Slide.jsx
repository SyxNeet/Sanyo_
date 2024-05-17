'use client'

import 'swiper/css'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay} from 'swiper/modules'
import Image from 'next/image'

export default function Slide({data}) {
  return (
    <Swiper
      loop
      breakpoints={{
        0: {
          slidesPerView: 1.1,
        },
        768: {
          slidesPerView: 1.3,
        },
      }}
      spaceBetween={0}
      speed={8000}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className={`swiper-only-images-with-download`}
    >
      {data.map((img, index) => (
        <SwiperSlide
          key={index}
          className='mr-[1.7rem] max-md:mr-3'
        >
          <Image
            src={img?.url}
            alt={img?.alt || 'Trải nghiệm tuyệt vời'}
            className='object-cover h-[45.37819rem] max-md:h-[13.76756rem] rounded-[0.5rem]'
            width={1920}
            height={1080}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
