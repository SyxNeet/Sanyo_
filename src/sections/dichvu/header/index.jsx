'use client'
import React from 'react'
import BreadcrumbContainer from '@/components/breadcrumb/BreadcrumbContainer'
import BreadcrumbLink from '@/components/breadcrumb/BreadcrumbLink'
import SlideOnlyImagesDownload from '@/components/slideOnlyImagesWithDowload'
import {Swiper, SwiperSlide} from 'swiper/react'
import Image from 'next/image'
import {Autoplay} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
const HeaderDichVu = () => {
  return (
    <section>
      <BreadcrumbContainer className='ml-3 md:mx-[6.25rem]'>
        <BreadcrumbLink href='/'>TRANG CHỦ</BreadcrumbLink>
        <BreadcrumbLink href='/'>DỊCH VỤ</BreadcrumbLink>
        <BreadcrumbLink isLastLink>
          DỊCH VỤ LẮP ĐẶT THANG MÁY THEO YÊU CẦU
        </BreadcrumbLink>
      </BreadcrumbContainer>
      <SlideOnlyImagesDownload />
      <Swiper
        spaceBetween={30}
        breakpoints={{
          0:{
            spaceBetween:10,
          },
          768:{
            spaceBetween:30,
          }
        }}
        slidesPerView={1.5}
        speed={7000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className='mySwiper'
      >
        <SwiperSlide>
            <Image src="https://swiperjs.com/demos/images/nature-1.jpg" alt="hello" width={1000} height={1000} className='w-full h-[33.9375rem] max-md:h-[12.366rem] rounded-2xl max-md:rounded-xl'/>
        </SwiperSlide>
        <SwiperSlide>
            <Image src="https://swiperjs.com/demos/images/nature-1.jpg" alt="hello" width={1000} height={1000} className='w-full h-[33.9375rem] max-md:h-[12.366rem] rounded-2xl max-md:rounded-xl'/>
        </SwiperSlide>
        <SwiperSlide>
            <Image src="https://swiperjs.com/demos/images/nature-1.jpg" alt="hello" width={1000} height={1000} className='w-full h-[33.9375rem] max-md:h-[12.366rem] rounded-2xl max-md:rounded-xl'/>
        </SwiperSlide>
        <SwiperSlide>
            <Image src="https://swiperjs.com/demos/images/nature-1.jpg" alt="hello" width={1000} height={1000} className='w-full h-[33.9375rem] max-md:h-[12.366rem] rounded-2xl max-md:rounded-xl'/>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default HeaderDichVu
