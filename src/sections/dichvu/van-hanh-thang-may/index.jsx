'use client'
import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/grid'
import {Grid, Pagination} from 'swiper/modules'
import 'swiper/css/pagination'
import {Button} from '@/components/ui/button'
import ItemOperate from './item-van-hanh'
const Operate = () => {
  return (
    <section>
      <Swiper
        slidesPerView={3}
        grid={{
          rows: 2,
          fill: 'row',
        }}
        spaceBetween={24}
        modules={[Grid, Pagination]}
        className='mySwiper'
      >
        <SwiperSlide><ItemOperate/></SwiperSlide>
        <SwiperSlide>
          <div className='flex flex-col items-center justify-center p-[1.5rem]'>
            <h2 className='font-SVNLagu text-center text-[3rem] font-semibold leading-[134%] text-grey-900 mb-[0.75rem]'>Vận hành thang máy một cách DỄ DÀNG</h2>
            <span className=' text-center font-Iciel text-[1rem] font-normal leading-1.5 mb-[1.88rem] w-[28.25rem]'>
              Trước khi tiến hành bàn giao thang máy cho khách hàng. Công ty sẽ
              tổ chức đào tạo, hướng dẫn sử dụng, xử lý các tình huống câp thiết
              cho khách hàng ngay tại công trình
            </span>
            <Button
              isHover={true}
              text={'TƯ VẤN NGAY'}
              isBlack={true}
              className='max-md:bg-yellow-500 max-md:border-none'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Operate
