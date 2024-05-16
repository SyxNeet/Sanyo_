'use client'

import {Swiper, SwiperSlide} from 'swiper/react'
import {Grid, Autoplay} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/grid'
import Image from 'next/image'

export default function SlidePartner({data}) {
  return (
    <Swiper
      slidesPerView={3}
      speed={1000}
      grid={{
        rows: 2,
        fill: 'row',
      }}
      modules={[Grid, Autoplay]}
      autoplay={{
        delay: 4000,
      }}
      loop
      breakpoints={{
        768: {
          slidesPerView: 5,
        },
      }}
      className='swiper-partner'
    >
      {data.images.map((item, i) => {
        return (
          <SwiperSlide key={i}>
            <Image
              src={item.url}
              alt={item.alt ?? 'đối tác sanyo yusoki'}
              width={120}
              height={120}
            />
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
