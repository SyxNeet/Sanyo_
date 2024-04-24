'use client'
import React, {useState} from 'react'
import ButtonSLide from '../../components/buttonSlideSixReasons/ButtonSLide'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation,Pagination} from 'swiper/modules'
import 'swiper/css'
import "./style.css"
import ReasonChoose from '../reasonChoose'
const SixReasons = ({isMobile}) => {
  const slides = [1, 2, 3, 4, 5, 6]
  const [activeSlide, setActiveSlide] = useState(0);
  const handleSlideChange = (swiper) => {
    setActiveSlide(swiper.activeIndex);
  };
  const breakpoints = {
    0: {
      slidesPerView: 1.1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 1.6,
      spaceBetween: 26,
    },
    1024: {
      slidesPerView: 1.9,
      spaceBetween: 26,
    },
  };
  return (
    <div className=' flex flex-col max-md:pl-0'>
      <div className='pl-[6.25rem] max-md:pl-0'>
        <h2 className='font-SVNLagu text-[3.125rem] font-semibold leading-[140%] w-[49rem] mb-3 max-md:mb-2 max-md:px-4 max-md:text-[1.875rem] max-md:order-1 max-md:w-[20.9375rem]'>
          6 LÝ DO LỰA CHỌN THANG MÁY NHẬT BẢN SANYO YUSOKI
        </h2>
        <div className='flex justify-between mb-[1.96rem]'>
        <span className='w-[35rem] font-Iciel block text-base leading-[150%] font-normal mb-[0.5rem]  max-md:text-[0.875rem] max-md:text-justify max-md:px-4 max-md:w-full max-md:mb-6'>
          Mong muốn của chúng tôi là bảo đảm những tiêu chuẩn cao nhất nhằm phục
          vụ khách hàng cho mọi nhu cầu liên quan đến thang máy
        </span>
        <div className='pr-[7rem]'>
        <div className='flex'>
          <ButtonSLide
            className={
              ' swiper-button-prev-sixReasons border-[#FE4127] transition ease-in cursor-pointer w-[3.5rem] h-[3.5rem] mr-[0.75rem] md:hover:border-white md:hover:bg-[#FE4127] max-md:bg-yellow-500 max-md:border-yellow-500 max-md:w-[2.5rem] max-md:h-[2.5rem]'
            }
            classNameSvg={
              'w-[1rem] h-[1rem] text-[#FE4127] md:group-hover:text-white max-md:text-black max-md:w-[0.875rem] max-md:h-[0.875rem]'
            }
          />
          <ButtonSLide
            className={
              ' swiper-button-next-sixReasons border-[#FE4127] transition ease-in cursor-pointer w-[3.5rem] h-[3.5rem] mr-[0.75rem] md:hover:border-white md:hover:bg-[#FE4127] max-md:bg-yellow-500 max-md:border-yellow-500 max-md:w-[2.5rem] max-md:h-[2.5rem]'
            }
            classNameSvg={
              'w-[1rem] h-[1rem] text-[#FE4127] rotate-180 md:group-hover:text-white max-md:text-black max-md:w-[0.875rem] max-md:h-[0.875rem]'
            }
          />
        </div>
        <div className='swiper-pagination-sixReasons hidden w-[4.3125rem] rounded-full  h-[2.5rem] bg-yellow-500 bg-opacity-10 max-md:flex items-center justify-center text-yellow-500 font-Iciel text-sm '>
            
        </div>
      </div>
        </div>
       
      </div>

      <div className='overflow-auto'>
        <Swiper
          className='mySwiperSix overflow-hidden'
          pagination={{
            type: 'fraction',
            el: ".swiper-pagination-sixReasons",
          }}
          navigation={{
            nextEl: '.swiper-button-next-sixReasons',
            prevEl: '.swiper-button-prev-sixReasons',
          }}
          breakpoints={breakpoints}
          modules={[Pagination, Navigation]}
          onSlideChange={handleSlideChange}
        >
          {slides.map((slide, index) => (
            <SwiperSlide
              key={index}
              className='max-md:pl-3'
            >
              <ReasonChoose />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default SixReasons
