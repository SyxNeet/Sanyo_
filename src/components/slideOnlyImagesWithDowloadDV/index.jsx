'use client'

import Image from 'next/image'
import 'swiper/css'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay} from 'swiper/modules'
import './styles.css'
import Link from 'next/link'
import {Fade} from 'react-awesome-reveal'

const SlideOnlyImagesDownloadDV = ({data}) => {
  return (
    <div className='mt-6 md:mt-[4.12rem]'>
      <div className='flex px-[6.25rem] max-md:w-full max-md:pl-0 max-md:pr-0 max-md:flex-col-reverse'>
        <div className='relative w-[70%] border-r max-md:w-full max-md:border-none '>
          <Fade
            direction='up'
            triggerOnce
          >
            <h1
              className='font-SVNLagu text-[4rem] text-black font-semibold leading-1.2 max-md:hidden w-[50.9375rem] mb-[1.19rem] max-md:w-[18.3125rem] max-md:text-2xl max-md:mb-3 max-md:border-none [&_strong]:font-semibold [&_strong]:text-yellow-500'
              dangerouslySetInnerHTML={{__html: data?.heading}}
            ></h1>
          </Fade>
          <Fade
            direction='up'
            triggerOnce
          >
            <span
              className='w-[40.125rem] font-Iciel text-base font-normal max-md:mt-[1rem] max-md:px-3 leading-[188%] text-justify mb-20 block max-md:w-full max-md:text-[0.875rem] max-md:text-grey-500 max-md:[&>p>strong]:text-grey-900 max-md:mb-5'
              dangerouslySetInnerHTML={{__html: data?.description}}
            ></span>
          </Fade>
          <div className='absolute block w-[4.375rem] h-16 bg-yellow-500 opacity-[0.14] bottom-0 right-0 max-md:hidden'></div>
        </div>
        <div className='w-[30%] max-md:w-full relative overflow-hidden'>
          <Image
            src='/images/dich-vu/bgheadermb.svg'
            width={1000}
            height={1000}
            alt='bgheadermb'
            className='absolute w-full h-full object-contain top-0 -right-[36%] opacity-50'
          />
          <div className='ml-28 mt-[10%] relative w-16  h-[14.3125rem] max-md:ml-3'>
            <Image
              src={`/images/components/slideAutoplay/thangmay.png`}
              alt='imgThangmay'
              className='absolute top-0 left-0 object-fill w-full h-full'
              width={120}
              height={120}
            />
            <div className='cirleElevatorBg absolute w-[11.875rem] h-[11.875rem] rounded-[50%]  bottom-[36%] left-[106%] opacity-30 max-md:w-[7.875rem] max-md:h-[7.875rem] max-md:bottom-[53%]'></div>
            <div className='absolute flex flex-col w-56 left-[106%] bottom-[46%]'>
              <span className='font-SVNLagu text-base font-medium leading-1.4 uppercase mb-[0.12rem] max-md:hidden '>
                profile
              </span>
              <span className='font-SVNLagu text-[1.68588rem] font-extrabold leading-1.4 text-gray-900 max-md:hidden'>
                SANYO YUSOKI
              </span>
              <div
                className='font-SVNLagu text-[4rem] text-black font-semibold leading-[130%] md:hidden w-[50.9375rem] mb-[1.19rem] max-md:w-[18.3125rem] max-md:text-2xl max-md:mb-3 max-md:border-none [&_strong]:font-semibold [&_strong]:text-yellow-500'
                dangerouslySetInnerHTML={{__html: data?.heading}}
              ></div>
            </div>
            <div className='dowloadElevator absolute left-full bottom-[13%] w-[13.9375rem] h-[3.9375rem] flex items-center justify-center cursor-pointer '>
              <Link
                href={data?.link || ''}
                target='_blank'
                className='uppercase font-Iciel text-base font-medium leading-[120%] mr-[0.87rem]'
              >
                tải xuống ngay
              </Link>
              <div className='w-6 h-6  relative overflow-hidden flex items-center justify-center flex-col mb-[0.7rem]'>
                <Image
                  src={`/images/components/slideAutoplay/downArrow.png`}
                  alt='imgArrowDownLoad'
                  className=' imgArrowFirst w-[1.3125rem] h-[1.20306rem] absolute bottom-full group-hover:bottom-[10%]'
                  width={120}
                  height={120}
                />
                <Image
                  src={`/images/components/slideAutoplay/downArrow.png`}
                  alt='imgArrowDownLoad'
                  className='imgArrowSecond w-[1.3125rem] h-[1.20306rem] absolute bottom-[10%] group-hover:bottom-6'
                  width={120}
                  height={120}
                />
                <div className='absolute w-[50%] h-[0.10025rem] bottom-0 bg-black left-[25%] lineDownLoadElevator'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full mx-auto max-w-[100rem]'>
        <Swiper
          loop
          breakpoints={{
            0: {
              slidesPerView: 1.1,
            },
            768: {
              slidesPerView: 1.3,
            },
          }}
          spaceBetween={0}
          speed={8000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className={`swiper-only-images-with-download`}
        >
          {(data?.images || []).map((img, index) => (
            <SwiperSlide
              key={index}
              className='mr-[1.7rem] max-md:mr-3'
            >
              <Image
                src={img?.url}
                alt={img?.alt || 'Trải nghiệm tuyệt vời'}
                className='object-cover h-[45.37819rem] max-md:h-[13.76756rem] rounded-[0.5rem]'
                width={1920}
                height={1080}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default SlideOnlyImagesDownloadDV
