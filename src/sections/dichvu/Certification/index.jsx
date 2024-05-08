'use client'
import Image from 'next/image'
import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import ButtonSLide from '@/components/buttonSlideSixReasons/ButtonSLide'

import {Navigation} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
const Certification = ({data}) => {
  return (
    <section className='w-full relative h-[100vh] flex justify-center items-center max-md:h-[33.5rem]'>
      <Image
        src='/images/dich-vu/bgCerti.png'
        width={1000}
        height={1000}
        alt='bgCerti'
        className='w-full h-full absolute object-cover top-0 left-0'
      />
      <div className='overlay absolute w-full left-0 top-0 h-[30%] z-[1] bg-[linear-gradient(180deg,rgba(255,255,255,1)36%,rgba(255,255,255,0)89%)]'></div>
      <div className='bg-white bg-opacity-90 py-[3.56rem] px-[4.37rem] relative z-50 flex flex-col justify-center w-[84.4375rem] h-[45.0625rem] rounded-1rem max-md:w-[21.9375rem] max-md:px-3 max-md:py-[1.38rem] max-md:h-fit'>
        <div className='flex flex-col justify-center items-center'>
          <h2
            className='text-[3rem] font-SVNLagu font-semibold uppercase leading-1.3 text-grey-900 mb-2 text-center max-md:text-[1.5rem] [&>p>strong]:font-semibold [&>p>strong]:text-yellow-500'
            dangerouslySetInnerHTML={{__html: data?.heading}}
          ></h2>
          <span className=' text-center text-[0.875rem] font-Iciel font-normal leading-1.5 mb-8 text-grey-500 w-[33.0625rem] max-md:w-[21.9375rem] max-md:text-[0.875rem]'>
            {data?.desc}
          </span>
        </div>
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 6,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 32,
            },
          }}
          navigation={{
            prevEl: '.swiper-button-prev-procedure-certi',
            nextEl: '.swiper-button-next-procedure-certi',
          }}
          modules={[Navigation]}
          className='mySwiper w-[64.2rem] max-md:w-[100%]'
        >
          {data?.list_certi?.map((item, index) => (
            <SwiperSlide>
              <Image
                src={item?.image?.url}
                alt={item?.image?.alt}
                width={1000}
                height={1000}
                className='object-cover h-[28.74631rem] w-full max-md:h-[14.5rem]'
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className=' flex justify-between absolute top-[50%] z-50 w-[90%] max-md:w-full max-md:top-[62%] max-md:left-[2%] '>
          <div className='flex w-full justify-between'>
            <ButtonSLide
              className={
                ' swiper-button-prev-procedure-certi border-[#fff] bg-white transition ease-in cursor-pointer w-[3.5rem] h-[3.5rem] mr-[0.75rem] md:hover:border-white md:hover:bg-yellow-500 max-md:bg-white max-md:border-white max-md:w-[2.5rem] max-md:h-[2.5rem]'
              }
              classNameSvg={
                'w-[1rem] h-[1rem] text-yellow-500 md:group-hover:text-white max-md:text-black max-md:w-[0.875rem] max-md:h-[0.875rem]'
              }
            />
            <ButtonSLide
              className={
                ' swiper-button-next-procedure-certi border-[#fff] bg-white transition ease-in cursor-pointer w-[3.5rem] h-[3.5rem] mr-[0.75rem] md:hover:border-white md:hover:bg-yellow-500 max-md:bg-white max-md:border-white max-md:w-[2.5rem] max-md:h-[2.5rem]'
              }
              classNameSvg={
                'w-[1rem] h-[1rem] text-yellow-500 rotate-180 md:group-hover:text-white max-md:text-black max-md:w-[0.875rem] max-md:h-[0.875rem]'
              }
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certification
