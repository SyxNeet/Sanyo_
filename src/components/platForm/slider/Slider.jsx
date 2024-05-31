'use client'

import Image from 'next/image'
import React, {useRef, useState} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import Link from 'next/link'
import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import('react-player/lazy'), {ssr: false})

export default function Slider({data}) {
  const [activeIndex, setActiveIndex] = useState(0)
  const swiperRef = useRef()
  const handleNextSlide = () => {
    swiperRef.current?.slideNext()
  }
  const handlePrevSlide = () => {
    swiperRef.current?.slidePrev()
  }
  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex)
  }
  return (
    <div className='flex md:space-x-[2.37rem] border-t-[1px] border-b-[1px]  solid border-white border-opacity-10'>
      <div
        key={activeIndex}
        className='relative md:w-[21.625rem] md:py-[1.98rem] flex flex-col flex-shrink-0'
      >
        <h4 className='text-yellow-500 font-SVNLagu lg:text-[1.5rem] font-semibold md:leading-[1.25] md:tracking-[-0.03125rem] md:mb-[1.12rem] animate__animated animate__fadeIn'>
          {data[activeIndex]?.title||'title'}
        </h4>
        <p className='text-white text-justify font-Iciel lg:text-[0.875rem] leading-[1.5] md:mb-[1.81rem] animate__animated animate__fadeIn'>
          {data[activeIndex]?.elevator.mo_ta||"mo ta"}
        </p>
        <div className='flex items-center md:mb-[1.25rem] md:pb-[1.25rem] border-b-[1px] solid border-white border-opacity-10 animate__animated animate__fadeIn'>
          <Image
            src={'/images/layout/platForm/iconPlform1.svg'}
            alt='icon'
            width={120}
            height={120}
            quality={100}
            className='md:w-[2rem] md:h-[2rem] md:mr-[0.5rem]'
          />
          <div>
            <span className='lg:text-[0.75rem] font-medium leading-[1.2] uppercase font-Iciel text-grey-200 md:mb-[0.25rem]'>
              TỐC ĐỘ
            </span>
            <span className='text-white font-Iciel font-medium leading-[1.29] block md:tracking-[-0.03125rem]'>
              {data[activeIndex]?.elevator.rated_speed} m/s
            </span>
          </div>
        </div>

        <div className='flex items-center md:mb-[1.25rem] md:pb-[1.25rem] border-b-[1px] solid border-white border-opacity-10 animate__animated animate__fadeIn'>
          <Image
            src={'/images/layout/platForm/iconPlform2.svg'}
            alt='icon'
            width={120}
            height={120}
            quality={100}
            className='md:w-[2rem] md:h-[2rem] md:mr-[0.5rem]'
          />
          <div>
            <span className='lg:text-[0.75rem] font-medium leading-[1.2] uppercase font-Iciel text-grey-200 md:mb-[0.25rem]'>
              tải trọng
            </span>
            <span className='text-white font-Iciel font-medium block leading-[1.29] md:tracking-[-0.03125rem]'>
              {data[activeIndex]?.elevator.rated_load} -{' '}
              {data[activeIndex]?.elevator.rated_load_2} kg
            </span>
          </div>
        </div>
        <Link
          href={`/thang-may-nhat-ban/${data[activeIndex]?.elevator.slug_detail.slug}`}
          className='text-yellow-500 font-Iciel lg:text-[0.875rem] font-medium leading-[1.2] underline uppercase animate__animated animate__fadeIn'
        >
          CHI TIẾT SẢN PHẨM
        </Link>
        <div className='absolute bottom-[2rem] left-0'>
          <button
            onClick={handlePrevSlide}
            className='btn-next-custom md:w-[3.5rem] md:h-[3.5rem] rounded-[50%] border-white border solid relative transition-300'
          >
            <svg
              className='md:w-[0.875rem] md:h-[1rem] w-[0.66963rem] h-[0.76525rem] absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 transition-300'
              xmlns='http://www.w3.org/2000/svg'
              width='17'
              height='18'
              viewBox='0 0 17 18'
              fill='none'
            >
              <path
                d='M0.809772 8.94723L12.3742 0V6.71042L17 8.94723L12.3742 11.184V17.8945L0.809772 8.94723Z'
                fill='white'
                className='transition-300'
              />
            </svg>
          </button>
          <button
            className='btn-prev-custom md:ml-[0.88rem]  md:w-[3.5rem] md:h-[3.5rem] rounded-[50%] border-white border solid relative transition-300'
            onClick={handleNextSlide}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='md:w-[0.875rem] md:h-[1rem] w-[0.66963rem] h-[0.76525rem] absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 transition-300 '
              width='15'
              height='16'
              viewBox='0 0 15 16'
              fill='none'
            >
              <path
                d='M14.5 8L4.5 0V6L0.5 8L4.5 10L4.5 16L14.5 8Z'
                fill='white'
                className='transition-300'
              />
            </svg>
          </button>
        </div>
      </div>

      <div className='slideElevator md:pl-[2.05rem] md:py-[1.98rem] border-l-[1px] solid border-white border-opacity-10'>
        <Swiper
          className='slide_elevator_custom'
          speed={600}
          slidesPerView={1.4}
          spaceBetween={20}
          onSlideChange={handleSlideChange}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper
          }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              {!item.video_upload && !item.video_ytb && (
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  width={800}
                  height={800}
                  className='md:h-[36.8535rem] w-full object-cover'
                />
              )}
              {item.video_upload && (
                <ReactPlayer
                  url={item.video_upload.url}
                  controls
                  className='md:!h-[36.8535rem] !w-full !object-cover'
                />
              )}
              {item.video_ytb && (
                <ReactPlayer
                  url={item.video_ytb}
                  controls
                  className='md:!h-[36.8535rem] !w-full !object-cover'
                />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
