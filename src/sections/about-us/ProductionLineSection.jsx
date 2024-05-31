'use client'

import {Swiper, SwiperSlide} from 'swiper/react'
import Image from 'next/image'
import {Autoplay, EffectFade} from 'swiper/modules'
import 'swiper/css/effect-fade'
import PaginationProductionLine from '@/components/slide-production-line/PaginationProductionLine'
import {useState} from 'react'
import {Fade} from 'react-awesome-reveal'

export default function ProductionLineSection({
  isMobile,
  data,
  justSlide = false,
  kKao4,
}) {
  const [activeImage, setActiveImage] = useState(0)
  const [previousActiveImage, setPreviousActiveImage] = useState(0)
  const [direction, setDirection] = useState(undefined)
  return (
    <section className='mt-14 md:mt-[6.5rem] max-md:mb-[3.37rem]'>
      <div className='w-[93%] md:w-auto mx-auto md:ml-[6.25rem] mb-6 md:mb-10'>
        <Fade
          direction='up'
          triggerOnce
        >
          <h3
            className={`text-grey-500 font-SVNLagu text-0.625 md:text-1.25 font-medium leading-1.5 tracking-0.1 opacity-80 mb-2 md:mb-5 ${
              justSlide ? 'hidden' : 'block'
            }`}
          >
            CÁC BƯỚC TIẾN HÀNH DỊCH VỤ
          </h3>
        </Fade>
        <Fade
          direction='up'
          triggerOnce={true}
        >
          <h2
            className='md:w-[65.8125rem] font-SVNLagu text-1.125 md:text-2.25 font-semibold leading-1.4 [&_strong]:font-semibold [&_strong]:text-yellow-500'
            dangerouslySetInnerHTML={{__html: data?.heading}}
          ></h2>
        </Fade>
      </div>
      <Swiper
        slidesPerView={1}
        effect={'fade'}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop
        speed={500}
        modules={[Autoplay, EffectFade]}
        className='swiper-production-line'
        onActiveIndexChange={(swiper) => {
          setActiveImage(swiper.realIndex)
          if (
            previousActiveImage < swiper.realIndex ||
            (previousActiveImage === swiper.slides.length - 1 &&
              swiper.realIndex === 0)
          ) {
            setDirection('right')
          } else if (
            previousActiveImage > swiper.realIndex ||
            (previousActiveImage === 0 &&
              swiper.realIndex === swiper.slides.length - 1)
          ) {
            setDirection('left')
          }
        }}
        onBeforeTransitionStart={(swiper) =>
          setPreviousActiveImage(swiper.realIndex)
        }
      >
        {data && (
          <>
            {(kKao4 ? data.slide : data).map((item, i) => {
              return (
                <SwiperSlide key={i}>
                  <Image
                    src={item.image.url}
                    alt={item.image.alt ?? 'các bước tiến hành dịch vụ'}
                    className='object-cover w-full h-full max-md:h-[26.8125rem]'
                    width={1920}
                    height={1080}
                    priority
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
                        {item.heading}
                      </h3>
                      <h2 className='font-SVNLagu text-1.125 md:text-3 font-semibold leading-1.4 text-center text-grey-0'>
                        {item.description}
                      </h2>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })}
          </>
        )}
        <PaginationProductionLine
          activeImage={activeImage}
          direction={direction}
        />
      </Swiper>
    </section>
  )
}
