'use client'

import {Swiper, SwiperSlide} from 'swiper/react'
import Image from 'next/image'
import {Autoplay, EffectFade} from 'swiper/modules'
import 'swiper/css/effect-fade'
import PaginationProductionLine from '@/components/slide-production-line/PaginationProductionLine'
import {useState} from 'react'
import {productionLine} from '../../../data/day-chuyen-san-xuat'

export default function ProductionLineSection({isMobile}) {
  const [activeImage, setActiveImage] = useState(0)
  const [previousActiveImage, setPreviousActiveImage] = useState(0)
  const [direction, setDirection] = useState(undefined)
  return (
    <section>
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
        {productionLine.map((item, i) => {
          return (
            <>
              <SwiperSlide>
                <Image
                  src={item.src}
                  alt={item.alt}
                  className='object-cover w-full h-full'
                  width={1920}
                  height={1080}
                  priority={i < 1}
                />
                <div
                  className='absolute top-0 z-10 flex-col w-full h-full -translate-x-1/2 pointer-events-none left-1/2'
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 60.17%, rgba(0, 0, 0, 0.50) 84.52%)',
                  }}
                >
                  <div className='absolute -translate-x-1/2 select-none bottom-[10%] md:bottom-[11%] left-1/2 w-full'>
                    <h3 className='font-SVNLagu text-grey-0 text-0.625 md:text-1.375 tracking-0.1 font-semibold text-center mb-1 md:mb-2'>
                      {item.title}
                    </h3>
                    <h2 className='font-SVNLagu text-1.125 md:text-3 font-semibold leading-1.4 text-center text-grey-0'>
                      {item.content}
                    </h2>
                  </div>
                </div>
              </SwiperSlide>
            </>
          )
        })}

        <PaginationProductionLine
          activeImage={activeImage}
          direction={direction}
        />
      </Swiper>
    </section>
  )
}
