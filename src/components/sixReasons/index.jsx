'use client'
import React, { useRef, useState } from 'react';
import ButtonSLide from '../../components/buttonSlideSixReasons/ButtonSLide'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
const SixReasons = () => {
  return (
    <section className='pl-[6.25rem] flex flex-col max-md:pl-0'>
      <div>
        <h2 className='font-SVNLagu text-[3.125rem] font-semibold leading-[140%] w-[49rem] mb-3 max-md:mb-2 max-md:px-4 max-md:w-full max-md:text-[1.5rem]'>6 LÝ DO LỰA CHỌN THANG MÁY NHẬT BẢN SANYO YUSOKI</h2>
        <span className='w-[35rem] font-Iciel block text-base leading-[150%] font-normal mb-[0.5rem]  max-md:text-[0.875rem] max-md:text-justify max-md:px-4 max-md:w-full'>Mong muốn của chúng tôi là bảo đảm những tiêu chuẩn cao nhất nhằm phục vụ khách hàng cho mọi nhu cầu liên quan đến thang máy</span>
      </div>
      <div className='flex justify-end pr-[6.25rem] mb-[3.25rem]'>
      <ButtonSLide  className={" swiper-button-prev-sixReasons border-[#FE4127] transition ease-in cursor-pointer w-[3.5rem] h-[3.5rem] mr-[0.75rem] hover:border-white hover:bg-[#FE4127]"} classNameSvg={"w-[1rem] h-[1rem] text-[#FE4127] group-hover:text-white"}/>
      <ButtonSLide  className={" swiper-button-next-sixReasons border-[#FE4127] transition ease-in cursor-pointer w-[3.5rem] h-[3.5rem] mr-[0.75rem] hover:border-white hover:bg-[#FE4127]"} classNameSvg={"w-[1rem] h-[1rem] text-[#FE4127] rotate-180 group-hover:text-white"}/>
      </div>  
      <div>
      <Swiper className="mySwiperSix" navigation={
        {
          nextEl: ".swiper-button-next-sixReasons",
          prevEl: ".swiper-button-prev-sixReasons",
        }
      }  
      modules={[Navigation]} slidesPerView={1.7}>
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
      </div>
    </section>
  )
}

export default SixReasons