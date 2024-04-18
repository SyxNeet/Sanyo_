'use client'

import {Swiper, SwiperSlide} from 'swiper/react'
import Image from 'next/image'
import {Autoplay, EffectFade} from 'swiper/modules'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import PaginationProductionLine from '@/components/slide-production-line/PaginationProductionLine'
import {useState} from 'react'

export default function ProductionLineSection({isMobile}) {
  const [activeImage, setActiveImage] = useState(0)
  const [previousActiveImage, setPreviousActiveImage] = useState(0)
  const [direction, setDirection] = useState(undefined)
  return (
    <section className='h-screen overflow-hidden'>
      <Swiper
        slidesPerView={1}
        effect={'fade'}
        autoplay={{
          delay: 3000,
        }}
        speed={500}
        modules={[Autoplay, EffectFade]}
        className='swiper-production-line'
        onActiveIndexChange={(swiper) => {
          setActiveImage(swiper.activeIndex)
          if (
            previousActiveImage < swiper.activeIndex ||
            (previousActiveImage === swiper.slides.length - 1 &&
              swiper.activeIndex === 0)
          ) {
            setDirection('right')
          } else if (
            previousActiveImage > swiper.activeIndex ||
            (previousActiveImage === 0 &&
              swiper.activeIndex === swiper.slides.length - 1)
          ) {
            setDirection('left')
          }
        }}
        onBeforeTransitionStart={(swiper) =>
          setPreviousActiveImage(swiper.activeIndex)
        }
      >
        <SwiperSlide>
          <Image
            src={`/images/layout/support/day-chuyen-san-xuat-1.png`}
            alt=''
            className='object-cover w-full h-full'
            width={1920}
            height={1080}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={`/images/layout/support/day-chuyen-san-xuat-2.png`}
            alt=''
            className='object-cover w-full h-full'
            width={1920}
            height={1080}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={`/images/layout/support/day-chuyen-san-xuat-3.png`}
            alt=''
            className='object-cover w-full h-full'
            width={1920}
            height={1080}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={`/images/layout/support/day-chuyen-san-xuat-4.png`}
            alt=''
            className='object-cover w-full h-full'
            width={1920}
            height={1080}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={`/images/layout/support/day-chuyen-san-xuat-4.png`}
            alt=''
            className='object-cover w-full h-full'
            width={1920}
            height={1080}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={`/images/layout/support/day-chuyen-san-xuat-4.png`}
            alt=''
            className='object-cover w-full h-full'
            width={1920}
            height={1080}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={`/images/layout/support/day-chuyen-san-xuat-4.png`}
            alt=''
            className='object-cover w-full h-full'
            width={1920}
            height={1080}
          />
        </SwiperSlide>
        <div
          className='absolute top-0 z-10 flex-col w-full h-full -translate-x-1/2 pointer-events-none left-1/2'
          style={{
            background:
              'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 60.17%, rgba(0, 0, 0, 0.50) 84.52%)',
          }}
        >
          <div className='absolute -translate-x-1/2 select-none bottom-[11%] left-1/2'>
            <h3 className='font-SVNLagu text-grey-0 text-1.375 tracking-0.1 font-semibold text-center mb-2'>
              CÔNG NGHỆ SẢN XUẤT TIÊN TIẾN
            </h3>
            <h2 className='font-SVNLagu text-3 font-semibold leading-1.4 text-center text-grey-0'>
              THANG MÁY NHẬT BẢN
            </h2>
          </div>
        </div>
        <PaginationProductionLine
          activeImage={activeImage}
          direction={direction}
        />
      </Swiper>
    </section>
  )
}
