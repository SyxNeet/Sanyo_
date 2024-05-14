'use client'
import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay, FreeMode} from 'swiper/modules'
import 'swiper/css'
import Image from 'next/image'
import './styles.css'
const SlideOnlyImages = ({className, data}) => {
  return (
    <div className='w-full mx-auto max-w-[100rem]'>
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
        className={`swiper-only-images-with-download `}
      >
        {(data || []).map((img, index) => (
          <SwiperSlide
            key={index}
            className={`${className} mr-[1.7rem] max-md:mr-3 max-md:!h-[13.76756rem]`}
          >
            <Image
              src={
                img?.image?.url ||
                'https://swiperjs.com/demos/images/nature-1.jpg'
              }
              alt={img?.image?.alt || 'Product Line'}
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
