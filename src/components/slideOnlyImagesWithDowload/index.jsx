'use client'
import React from 'react'
import Image from 'next/image'
import 'swiper/css'
import slideImg from '../../../public/images/components/slideAutoplay/slide.png'
import imgThangmay from '../../../public/images/components/slideAutoplay/thangmay.png'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay} from 'swiper/modules'
import imgArrowDownLoad from '../../../public/images/components/slideAutoplay/downArrow.png'
import './styles.css'
const SlideOnlyImagesDownload = ({
  image = [slideImg, slideImg, slideImg, slideImg],
  className,
}) => {
  return (
    <div>
      <div className='flex px-[6.25rem] max-md:w-full max-md:px-4'>
        <div className='relative w-[70%] border-r max-md:w-full max-md:border-none '>
          <h1 className='font-SVNLagu text-[4rem] text-black font-semibold leading-[130%] w-[50.9375rem] mb-[1.19rem] max-md:w-[18.3125rem] max-md:text-2xl max-md:mb-3 max-md:border-none'>
            Creating your Excellence Trải nghiệm tuyệt vời
          </h1>
          <span className='w-[40.125rem] font-Iciel text-base font-normal leading-[188%] text-justify mb-20 block max-md:w-full max-md:text-[0.875rem] max-md:mb-5'>
            Bằng nhiệt huyết và tinh thần không ngừng đổi mới, SANYO YUSOKI đã
            vươn mình trở thành một biểu tượng của ngành thiết kế và lắp đặt
            thang máy. Đó là biểu tượng giá trị ưu việt, được minh chứng bởi
            những sản phẩm bền vững theo thời gian
          </span>
          <div className='absolute block w-[4.375rem] h-16 bg-yellow-500 opacity-[0.14] bottom-0 right-0 max-md:hidden'></div>
        </div>
        <div className='w-[30%] max-md:hidden'>
          <div className='ml-28 mt-[10%] relative w-16  h-[14.3125rem] bg-slate-400 '>
            <Image
              src={imgThangmay}
              alt='imgThangmay'
              className='absolute top-0 left-0 w-full h-full object-fill'
            />
            <div className='cirleElevatorBg absolute w-[11.875rem] h-[11.875rem] rounded-[50%]  bottom-[36%] left-[106%] opacity-30'></div>
            <div className='absolute flex flex-col w-56 left-[106%] bottom-[46%]'>
              <span className='font-SVNLagu text-base font-medium leading-1.4 uppercase mb-[0.12rem]'>
                profile
              </span>
              <span className='font-SVNLagu text-[1.68588rem] font-extrabold leading-1.4 text-gray-900'>
                SANYO YUSOKI
              </span>
            </div>
            <div className='dowloadElevator absolute left-full bottom-[13%] w-[13.9375rem] h-[3.9375rem] flex items-center justify-center cursor-pointer '>
              <span className='uppercase font-Iciel text-base font-medium leading-[120%] mr-[0.87rem]'>tải xuống ngay</span>
              <div className='w-6 h-6  relative overflow-hidden flex items-center justify-center flex-col mb-[0.7rem]'>
              <Image src={imgArrowDownLoad} alt='imgArrowDownLoad' className=' imgArrowFirst w-[1.3125rem] h-[1.20306rem] absolute bottom-full group-hover:bottom-[10%]'/>
                <Image src={imgArrowDownLoad} alt='imgArrowDownLoad'  className='imgArrowSecond w-[1.3125rem] h-[1.20306rem] absolute bottom-[10%] group-hover:bottom-6'/>
                <div className='absolute w-[50%] h-[0.10025rem] bottom-0 bg-black left-[25%] lineDownLoadElevator'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
          speed={10000}
          autoplay={{
            delay: 0,
          }}
          modules={[Autoplay]}
          className={`mySwiper ${className}`}
        >
          {image.map((img, index) => (
            <SwiperSlide
              key={index}
              className='h-[45.37819rem] mr-[1.7rem] max-md:mr-3 max-md:h-[13.76756rem]'
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
    </div>
  )
}

export default SlideOnlyImagesDownload
