'use client'
import Image from 'next/image'
import React, {useEffect, useRef, useState} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import {Navigation} from 'swiper/modules'
import Link from 'next/link'
import ReactPlayer from 'react-player';

function SliderJapanElevator({data}) {
  const [indexSlider, setIndexSlider] = useState(0)
  const handleSlideChange = (swiper) => {
    const activeSlideIndex = swiper.realIndex
    setIndexSlider(activeSlideIndex)
  }
  console.log(data)
  return (
    <div className='flex md:space-x-[2.37rem] border-t-[1px] border-b-[1px] solid border-[rgba(28,32,28,0.10)] border-opacity-10 pl-[6.31rem] mt-10'>
      <div className='md:w-[21.625rem] md:py-[1.98rem] flex flex-col flex-shrink-0'>
        <h4 className='text-c-nht font-SVNLagu lg:text-[1.5rem] font-semibold md:leading-[1.25] md:tracking-[-0.03125rem] md:mb-[1.12rem]'>
          {data[indexSlider]?.title}
        </h4>
        <p className='text-grey-600 text-justify font-Iciel lg:text-[0.875rem] leading-[1.5] md:mb-[1.81rem]'>
          {data[indexSlider]?.elevator?.mo_ta}
        </p>
        <div className='flex items-center md:mb-[1.25rem] md:pb-[1.25rem] border-b-[1px] solid border-[rgba(28,32,28,0.10)] border-opacity-10'>
          <Image
            src={'/images/layout/platForm/iconPlformJapanE1.svg'}
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
            <span className='text-grey-500  font-Iciel font-medium leading-[1.29] block md:tracking-[-0.03125rem]'>
              {data[indexSlider]?.elevator?.rated_speed} m/s
            </span>
          </div>
        </div>

        <div className='flex items-center md:mb-[1.25rem] md:pb-[1.25rem] border-b-[1px] solid border-[rgba(28,32,28,0.10)] border-opacity-10'>
          <Image
            src={'/images/layout/platForm/iconPlformJapanE2.svg'}
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
            <span className='text-grey-500 font-Iciel font-medium block leading-[1.29] md:tracking-[-0.03125rem]'>
              {data[indexSlider]?.elevator?.rated_load} -{' '}
              {data[indexSlider]?.elevator?.rated_load_2}
            </span>
          </div>
        </div>

        <Link
          href={`/thang-may-nhat-ban/${data[indexSlider]?.elevator?.slug_detail?.slug}`}
          className='text-c-nht font-Iciel lg:text-[0.875rem] font-medium leading-[1.2] underline uppercase'
        >
          CHI TIẾT SẢN PHẨM
        </Link>
        <div className='md:mt-[3.63rem]'>
          <button className='md:w-[3.5rem] md:h-[3.5rem] rounded-[50%]  border border-[#FE4127] solid relative transition-all duration-300 hover:bg-c-nht btnNextJE group'>
            <svg
              className='md:w-[0.875rem] md:h-[1rem] w-[0.66963rem] h-[0.76525rem] absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 group-hover:[&>path]:fill-white'
              xmlns='http://www.w3.org/2000/svg'
              width='17'
              height='18'
              viewBox='0 0 17 18'
              fill='none'
            >
              <path
                d='M0.809772 8.94723L12.3742 0V6.71042L17 8.94723L12.3742 11.184V17.8945L0.809772 8.94723Z'
                fill='#FE4127'
              />
            </svg>
          </button>
          <button className='btnPrevJE md:ml-[0.88rem]  md:w-[3.5rem] md:h-[3.5rem] rounded-[50%] border-[#FE4127] border solid relative  transition-all duration-300 hover:bg-c-nht group'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='md:w-[0.875rem] md:h-[1rem] w-[0.66963rem] h-[0.76525rem] absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 group-hover:[&>path]:fill-white'
              width='15'
              height='16'
              viewBox='0 0 15 16'
              fill='none'
            >
              <path
                d='M14.5 8L4.5 0V6L0.5 8L4.5 10L4.5 16L14.5 8Z'
                fill='#FE4127'
              />
            </svg>
          </button>
        </div>
      </div>

      {/* slide */}
      <div className='slideElevator md:pl-[2.05rem] md:py-[1.98rem] border-l-[1px] solid border-[rgba(28,32,28,0.10)] border-opacity-10'>
        <Swiper
          className='slide_elevator_JE'
          loop={true}
          slidesPerView={1.8}
          spaceBetween={20}
          onSlideChange={handleSlideChange}
          navigation={{
            nextEl: '.btnPrevJE',
            prevEl: '.btnNextJE',
          }}
          modules={[Navigation]}
        >
          {data?.map((item, index) => (
            <SwiperSlide key={index} className='overflow-hidden'>
              {item.video_ytb ? (
                <iframe
                  width='800'
                  height='800'
                  src={`https://www.youtube.com/embed/${new URL(item.video_ytb).searchParams.get('v')}`}
                  frameBorder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                  className='md:h-[36.8535rem] !w-full object-cover border border-[rgba(28,32,28,0.10)]'
                ></iframe>
              ) : item.video_upload ? (
                <ReactPlayer
                  className='md:!h-[36.8535rem] relative !w-full object-cover border border-[rgba(28,32,28,0.10)] [&>video]:object-cover'
                  controls
                  url={item?.video_upload?.link}
                />
              ) : (
                <Image
                  src={item.thumbnail}
                  alt='image'
                  width={800}
                  height={800}
                  quality={100}
                  className='md:h-[36.8535rem] w-full object-cover border border-[rgba(28,32,28,0.10)]'
                />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default SliderJapanElevator
