'use client'
import React, {useEffect} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/grid'
import {Grid, Pagination} from 'swiper/modules'
import 'swiper/css/pagination'
import {Button} from '@/components/ui/button'
import ItemOperate from './item-van-hanh'
import {Fade} from 'react-awesome-reveal'
const Operate = ({isMobile = true, data}) => {
  function handleClick() {
    const element = document.getElementById('formSupport')
    if (element) {
      element.scrollIntoView({behavior: 'smooth'})
    }
  }
  return (
    <section className='mt-[8rem] max-md:mt-[3rem]'>
      <div className='md:hidden flex flex-col justify-center items-center px-3 '>
        <h2
          className='text-[1.5rem] font-SVNLagu w-[14.625rem] mb-[0.62rem] font-semibold [&>p>strong]:text-yellow-500 [&>p>strong]:font-semibold'
          dangerouslySetInnerHTML={{__html: data?.heading}}
        ></h2>
        <span className=' text-center text-[0.875rem] font-Iciel font-normal leading-1.4 mb-[1.2rem]'>
          {data?.desc}
        </span>
      </div>
      <Swiper
        slidesPerView={!isMobile ? 3 : 1.2}
        pagination={{
          type: 'progressbar',
          el: '.processSlideOpe',
        }}
        grid={{
          rows: isMobile ? 1 : 2,
          fill: 'row',
        }}
        spaceBetween={isMobile ? 16 : 24}
        modules={[Grid, Pagination]}
        className='mySwiper !pl-3'
      >
        <SwiperSlide>
        <ItemOperate data={(data?.list_operate && data.list_operate[0]) || {}} />
        </SwiperSlide>
        <SwiperSlide className={`${isMobile ? '!hidden' : ''}`}>
          <Fade direction='fade-down' fraction={0}                                                    >
            <div className='flex flex-col items-center justify-center py-[1.5rem] px-4'>
              <h2
                className='font-SVNLagu text-center text-[3rem] font-semibold leading-[134%] text-grey-900 mb-[0.75rem] [&>p>strong]:font-semibold [&>p>strong]:text-yellow-500'
                dangerouslySetInnerHTML={{__html: data.heading}}
              ></h2>
              <span className=' text-center font-Iciel text-[1rem] font-normal leading-1.5 mb-[1.88rem] w-[28.25rem] '>
                {data?.desc}
              </span>
              <Button
                isHover={true}
                text={'TƯ VẤN NGAY'}
                isBlack={true}
                className='max-md:bg-yellow-500 max-md:border-none'
                onClick={handleClick}
              />
            </div>
          </Fade>
        </SwiperSlide>
        <Fade direction='up'>
          {(Array.isArray(data?.list_operate) ? data.list_operate.slice(1) : []).map((item, index) => (
            <SwiperSlide key={index}>
              <ItemOperate data={item} />
            </SwiperSlide>
          ))}
        </Fade>
      </Swiper>
      <div className='md:hidden relative flex justify-between px-3 mt-[1.5rem]'>
        <Button
          isHover={true}
          text={'TƯ VẤN NGAY'}
          isBlack={true}
          className='max-md:bg-yellow-500 max-md:border-none'
          onClick={handleClick}
        />
        <div className='relative w-[6.25rem]'>
          <div className='processSlideOpe rounded-full [&>.swiper-pagination-progressbar-fill]:!bg-yellow-500'></div>
        </div>
      </div>
    </section>
  )
}

export default Operate
