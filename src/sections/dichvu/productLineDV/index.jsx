'use client'

import {Swiper, SwiperSlide} from 'swiper/react'
import Image from 'next/image'
import ButtonSLide from '@/components/buttonSlideSixReasons/ButtonSLide'
import {Autoplay, EffectFade, Navigation, Pagination} from 'swiper/modules'
import 'swiper/css/effect-fade'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import PaginationProductionLine from '@/components/slide-production-line/PaginationProductionLine'
import {useState,useEffect} from 'react'
import AOS from 'aos'
import "aos/dist/aos.css"
export default function ProductionLineSectionDV({
  isMobile,
  data,
  justSlide = false,
}) {

  const [activeImage, setActiveImage] = useState(0)
  const arrayData = data?.slide ?? data 
  const [previousActiveImage, setPreviousActiveImage] = useState(0)
  const [direction, setDirection] = useState(undefined)
  return (
    <section className='mt-14 md:mt-[6.5rem] border-t border-[rgba(28,32,28,0.10)] relative pt-[9.19rem] max-md:pt-[3.94rem]'>
      <div className='w-[8rem] h-[4.6875rem] opacity-10 bg-yellow-500 top-0 left-0 absolute max-md:hidden'></div>
      <div className='w-[8rem] h-[4.6875rem] opacity-10 bg-yellow-500 top-0 right-0 absolute max-md:w-[4rem] max-md:h-[3rem]'></div>
      <div className='w-[3.625rem] h-[3.625rem] opacity-10 bg-yellow-500 top-[4.6875rem] right-[8rem] absolute max-md:w-[1rem] max-md:h-[1rem] max-md:top-[3rem] max-md:right-[4rem] '></div>

      <div className='w-[93%] md:w-[67.375rem] mx-auto md:ml-[6.25rem] mb-6 md:mb-10 relative'>
        <Image
          src={'/images/dich-vu/phay.svg'}
          width={1000}
          height={1000}
          className='w-[5.875rem] h-[4.9375rem] absolute bottom-full right-0 max-md:hidden'
        />
        <h3
          className={`text-grey-500 font-SVNLagu text-0.625 md:text-1.25 font-medium leading-1.5 tracking-0.1 opacity-80 mb-2 md:mb-5 ${
            justSlide ? 'hidden' : 'block'
          }`} dangerouslySetInnerHTML={{__html: data?.heading}}

        >
         
        </h3>
        <h2
          className='md:w-[66.8125rem] font-SVNLagu text-1.125 md:text-2.25 font-semibold leading-1.4 [&_strong]:font-semibold [&_strong]:text-yellow-500'
          dangerouslySetInnerHTML={{
            __html:
              data?.desc ||
              'Chúng tôi cam kết không ngừng nỗ lực để đảm bảo chất lượng tốt nhất trong quá trình thi công lắp đặt. Điều này là sứ mệnh mang lại sự hài lòng và niềm tin cho khách hàng.',
          }}
  
        ></h2>
      </div>
      <div className='relative w-full h-full' >
        <Swiper
          slidesPerView={1}
          effect={'fade'}
          //   autoplay={{
          //     delay: 3000,
          //     disableOnInteraction: false,
          //   }}
          pagination={{
            el: '.swiper-pagination-procedure-pl',
            type: 'fraction',
          }}
          navigation={{
            nextEl: '.swiper-button-next-procedure-pl',
            prevEl: '.swiper-button-prev-procedure-pl',
          }}
          loop
          speed={500}
          modules={[Autoplay, EffectFade, Navigation, Pagination]}
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
         {(Array.isArray(arrayData) ? arrayData : []).map((item, i) => {
            return (
              <SwiperSlide key={i}>
                <Image
                  src={item.image.url}
                  alt={item.image.alt ?? 'các bước tiến hành dịch vụ'}
                  className='object-cover w-full h-[50rem] max-md:h-[26.8125rem]'
                  width={1920}
                  height={1080}
                  priority={true}
                />
                <div
                  className='absolute top-0 z-10 flex-col w-full h-full -translate-x-1/2 pointer-events-none left-1/2'
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 60.17%, rgba(0, 0, 0, 0.50) 84.52%)',
                  }}
                >
                  <div className='absolute -translate-x-1/2 select-none bottom-[10%] md:bottom-[11%] left-1/2 w-full flex flex-col justify-end items-center'>
                  <h2 className='font-SVNLagu text-1.125 md:text-3 font-semibold leading-1.4 text-center text-grey-0 max-md:text-[1.0625rem]'>
                      {item.title}
                    </h2>
                    <h3 className='font-SVNLagu text-grey-0 md:text-1.375 text-[1.25rem] tracking-0.1 font-semibold text-center mb-1 md:mb-2 md:w-[47.5rem] w-full max-md:text-[0.75rem] '>
                      {item.desc}
                    </h3>
           
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
          <PaginationProductionLine
            activeImage={activeImage}
            direction={direction}
          />
        </Swiper>
        <div className=' flex w-full justify-between absolute top-[45%] z-50 px-8'>
          <div className='flex w-full justify-between'>
            <ButtonSLide
              className={
                ' swiper-button-prev-procedure-pl border-[#fff] bg-white transition ease-in cursor-pointer w-[3.5rem] h-[3.5rem] mr-[0.75rem] md:hover:border-white md:hover:bg-yellow-500 max-md:bg-white max-md:border-white max-md:w-[2.5rem] max-md:h-[2.5rem]'
              }
              classNameSvg={
                'w-[1rem] h-[1rem] text-yellow-500 md:group-hover:text-white max-md:text-black max-md:w-[0.875rem] max-md:h-[0.875rem]'
              }
            />
            <ButtonSLide
              className={
                ' swiper-button-next-procedure-pl border-[#fff] bg-white transition ease-in cursor-pointer w-[3.5rem] h-[3.5rem] mr-[0.75rem] md:hover:border-white md:hover:bg-yellow-500 max-md:bg-white max-md:border-white max-md:w-[2.5rem] max-md:h-[2.5rem]'
              }
              classNameSvg={
                'w-[1rem] h-[1rem] text-yellow-500 rotate-180 md:group-hover:text-white max-md:text-black max-md:w-[0.875rem] max-md:h-[0.875rem]'
              }
            />
          </div>
        </div>
        <div className='swiper-pagination-procedure-pl font-SVNLagu !w-[4.3125rem] rounded-full  h-[2.5rem] bg-opacity-10 items-center justify-center !text-white text-sm [&>span:last-child]:max-md:ml-1 [&>span:first-child]:text-[1.6765rem] [&>span:first-child]:font-semibold [&>span:first-child]:max-md:mr-1 absolute !right-[3rem] !bottom-[3rem] !left-[unset] !top-[unset] z-50 max-md:hidden'></div>
      </div>
    </section>
  )
}
