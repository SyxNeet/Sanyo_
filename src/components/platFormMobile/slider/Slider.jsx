'use client'
import Image from 'next/image'
import React, {useRef, useState} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Pagination} from 'swiper/modules'
import {Button} from '@/components/ui/button'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Link from 'next/link'
import './styles.css'

export default function Slider() {
  const slideImages = Array(4).fill(0)

  return (
    <div className='slide_elevator_custom_mb'>
      <Swiper
        className='slide_elevator_custom'
        pagination={{
          type: 'progressbar',
          el: '.paginationPlatFormMb',
        }}
        slidesPerView={1.1}
        spaceBetween={14}
        loop={true}
        modules={[Pagination]}
      >
        {slideImages.map((item, index) => (
          <SwiperSlide key={index}>
            <div className='rounded-[0.5rem] border-[1px] solid border-yellow-500 bg-opacity-30 relative overflow-hidden'>
              <Link
                href={'/'}
                className='absolute bottom-0 md:hidden right-0 bg-yellow-500 rounded-tl-full py-[0.81rem] pl-[2.31rem] pr-[1.77rem] flex items-center'
              >
                <span className='uppercase text-[0.875rem] font-Iciel mr-[0.62rem] font-medium '>
                  chi tiết
                </span>
                <Image
                  src={'/images/layout/platForm/arrowDetails.svg'}
                  alt='image'
                  width={800}
                  height={800}
                  quality={100}
                  className='w-[0.66963rem] h-[0.76525rem]'
                />
              </Link>
              <Image
                src={'/images/layout/platForm/anhThangMay1.png'}
                alt='image'
                width={800}
                height={800}
                quality={100}
                className='h-[17.75644rem] w-full object-cover rounded-[0.5rem] mb-[1.05rem]'
              />
              <h3 className='text-yellow-500 text-[1rem] font-SVNLagu font-medium px-[0.87rem] leading-1.5 mb-[0.5rem]'>
                PLATFORM HOME ELEVATOR
              </h3>
              <p className='mb-[0.75rem] px-[0.87rem] text-[0.75rem] leading-1.5 text-ellipsis line-clamp-5 text-white'>
                Thang gia đình rất thích hợp cho các toà nhà bị hạn chế về diện
                tích, thang có thể được lắp đặt bằng cách cải tạo một khu vực
                thích hợp bên trong hoặc bên ngoài toà nhà vì vậy tính linh hoạt
                của thang gia đình rất cao
              </p>

              <div className='flex justify-between max-md:px-[0.88rem] max-md:mb-[4.75rem]'>
                <div className='flex items-center md:mb-[1.25rem] md:pb-[1.25rem] border-b-[1px] solid border-white border-opacity-10 max-md:border-none'>
                  <Image
                    src={'/images/layout/platForm/iconPlform1.svg'}
                    alt='icon'
                    width={100}
                    height={100}
                    quality={100}
                    className='w-[1.55225rem] h-[1.55225rem] mr-[0.38rem]'
                  />
                  <div>
                    <span className='lg:text-[0.75rem] font-medium leading-[1.2] uppercase font-Iciel text-grey-200 md:mb-[0.25rem] max-md:text-[0.625rem]'>
                      TỐC ĐỘ
                    </span>
                    <span className='text-white font-Iciel font-medium leading-[1.29] block md:tracking-[-0.03125rem] max-md:text-[0.75rem]'>
                      0.4m.s
                    </span>
                  </div>
                </div>

                <div className='flex items-center md:mb-[1.25rem] md:pb-[1.25rem] border-b-[1px] solid border-white border-opacity-10 max-md:border-none'>
                  <Image
                    src={'/images/layout/platForm/iconPlform1.svg'}
                    alt='icon'
                    width={100}
                    height={100}
                    quality={100}
                    className='w-[1.55225rem] h-[1.55225rem] mr-[0.38rem]'
                  />
                  <div>
                    <span className='lg:text-[0.75rem] font-medium leading-[1.2] uppercase font-Iciel text-grey-200 md:mb-[0.25rem] max-md:text-[0.625rem]'>
                      tải trọng
                    </span>
                    <span className='text-white font-Iciel font-medium block leading-[1.29] md:tracking-[-0.03125rem] max-md:text-[0.75rem]'>
                      320 - 400kg
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='w-[6.25rem] relative mx-auto mt-8 '>
        <div className='paginationPlatFormMb rounded-full w-full !bg-white'></div>
      </div>
      <Link href={'/'} className='mt-[3.12rem] flex justify-center'>
        <Button
          isHover={true}
          text={'XEM TẤT CẢ'}
          isBlack={true}
          className='max-md:bg-yellow-500 max-md:border-none '
        ></Button>
      </Link>
    </div>
  )
}
