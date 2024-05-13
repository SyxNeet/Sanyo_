'use client'
import Image from 'next/image'
import React, {useRef, useState} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Pagination,FreeMode} from 'swiper/modules'
import {Button} from '@/components/ui/button'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Link from 'next/link'
import './styles.css'

export default function SliderMbJapanElevator() {
  const slideImages = Array(4).fill(0)

  return (
    <div className='slide_elevator_custom_mb'>
      <Swiper
        className='slide_elevator_custom'
        freeMode={true}
        pagination={{
          type: 'progressbar',
          el: '.paginationPlatFormMb',
        }}
        slidesPerView={1.1}
        spaceBetween={0}
        loop={true}
        modules={[Pagination,FreeMode]}
      >
        {slideImages.map((item, index) => (
          <SwiperSlide key={index}  className='mt-4 pl-3 rounded-[0.5rem]  overflow-hidden '>
            <div className='rounded-[0.5rem] border-[1px] solid border-[rgba(254,65,39,0.30] bg-opacity-30 relative overflow-hidden bg-[linear-gradient(180deg,rgba(254,65,39,0.40)0%,rgba(255,255,255,0.40)89.5%);]'>
              <Link
                href={'/'}
                className='absolute bottom-0 md:hidden right-0 border border-[rgba(254,65,39,0.30)] bg-[linear-gradient(272deg,rgba(254,65,39,0.14)-5.86%,rgba(255,255,255,0.14)98.54%)] rounded-tl-full py-[0.81rem] pl-[2.31rem] pr-[1.77rem] flex items-center'
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
              <h3 className='text-c-nht text-[1rem] font-SVNLagu font-medium px-[0.87rem] leading-1.5 mb-[0.5rem]'>
                PLATFORM HOME ELEVATOR
              </h3>
              <p className='mb-[0.75rem] px-[0.87rem] text-[0.75rem] leading-1.5 text-ellipsis line-clamp-5 text-grey-900'>
                Thang gia đình rất thích hợp cho các toà nhà bị hạn chế về diện
                tích, thang có thể được lắp đặt bằng cách cải tạo một khu vực
                thích hợp bên trong hoặc bên ngoài toà nhà vì vậy tính linh hoạt
                của thang gia đình rất cao
              </p>

              <div className='flex items-center max-md:px-[0.88rem] max-md:mb-[4.75rem]'>
                <div className='flex items-center md:mb-[1.25rem] md:pb-[1.25rem] border-b-[1px] solid border-white border-opacity-10 max-md:border-none max-md:w-[5.6875rem]'>
                  <Image
                    src={'/images/layout/platForm/iconPlform1.svg'}
                    alt='icon'
                    width={120}
                    height={120}
                    quality={100}
                    className='w-[1.55225rem] h-[1.55225rem] mr-[0.38rem]'
                  />
                  <div>
                    <span className='lg:text-[0.75rem] font-medium leading-[1.2] uppercase font-Iciel text-grey-200 md:mb-[0.25rem] max-md:text-[0.625rem]'>
                      TỐC ĐỘ
                    </span>
                    <span className='text-gray-900 font-Iciel font-medium leading-[1.29] block md:tracking-[-0.03125rem] max-md:text-[0.75rem]'>
                      0.4m.s
                    </span>
                  </div>
                </div>
                <div className='w-[0.0485rem] h-[1.60075rem] bg-[rgba(112,112,112,0.10)] mx-6'></div>
                <div className='flex items-center md:mb-[1.25rem] md:pb-[1.25rem] border-b-[1px] solid border-white border-opacity-10 max-md:border-none max-md:w-[6.6875rem]'>
                  <Image
                    src={'/images/layout/platForm/iconPlform1.svg'}
                    alt='icon'
                    width={120}
                    height={120}
                    quality={100}
                    className='w-[1.55225rem] h-[1.55225rem] mr-[0.38rem]'
                  />
                  <div>
                    <span className='lg:text-[0.75rem] font-medium leading-[1.2] uppercase font-Iciel text-grey-200 md:mb-[0.25rem] max-md:text-[0.625rem]'>
                      tải trọng
                    </span>
                    <span className='text-grey-900 font-Iciel font-medium block leading-[1.29] md:tracking-[-0.03125rem] max-md:text-[0.75rem]'>
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
        <div className='paginationPlatFormMb rounded-full w-full !bg-[#E6E9F6]'></div>
      </div>
      {/* <Link href={'/'} className='mt-[3.12rem] flex justify-center'>
        <Button
          isHover={true}
          text={'XEM TẤT CẢ'}
          isBlack={true}
          className='max-md:bg-yellow-500 max-md:border-none '
        ></Button>
      </Link> */}
    </div>
  )
}
