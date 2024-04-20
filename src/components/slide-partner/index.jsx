'use client'

import {Swiper, SwiperSlide} from 'swiper/react'
import {Grid, Autoplay} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/grid'
import {doiTac} from '../../../data/ve-chung-toi/doi-tac'
import Image from 'next/image'

export default function SlidePartner() {
  return (
    <Swiper
      slidesPerView={3}
      slidesPerGroup={3}
      speed={1000}
      grid={{
        rows: 2,
      }}
      modules={[Grid, Autoplay]}
      autoplay={{
        delay: 4000,
      }}
      loop
      breakpoints={{
        768: {
          slidesPerView: 5,
          slidesPerGroup: 5,
        },
      }}
      className='swiper-partner'
    >
      {doiTac.map((item, i) => {
        return (
          <SwiperSlide key={i}>
            <Image
              src={item.src}
              alt={item.alt}
              width={120}
              height={120}
            />
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
