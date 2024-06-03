'use client'

import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ButtonSlide from '@/components/buttonSlideSixReasons/ButtonSLide'
import BreadcrumbContainer from '@/components/breadcrumb/BreadcrumbContainer'
import {Swiper, SwiperSlide} from 'swiper/react'
import BreadcrumbLink from '@/components/breadcrumb/BreadcrumbLink'
import {Navigation, Pagination, Thumbs, Autoplay} from 'swiper/modules'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/thumbs'
import './styles.css'
import {Fade} from 'react-awesome-reveal'
import '../../../components/slideOnlyImagesWithDowload/styles.css'

const HeaderDetailElevator = ({data, title}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const dataSLide = data?.slide || []
  return (
    <section className=''>
      <BreadcrumbContainer className='ml-3 md:mx-[6.25rem]'>
        <BreadcrumbLink href='/'>TRANG CHỦ</BreadcrumbLink>
        <BreadcrumbLink href='/'>THANG MÁY NHẬT BẢN</BreadcrumbLink>
        <BreadcrumbLink isLastLink>{title}</BreadcrumbLink>
      </BreadcrumbContainer>
      <div className='flex'>
        <div className='w-[70%] max-md:w-full'>
          <div className='mt-[2.36rem] border-b border-[rgba(28,32,28,0.10)] pb-[2.14rem] max-md:pb-6'>
            <div className='pl-[6.25rem] w-[65.875rem] max-md:px-3 max-md:w-full'>
              <Fade
                triggerOnce
                direction='up'
              >
                <div className='relative'>
                  <h1
                    className='font-SVNLagu text-[5.46506rem] font-semibold leading-1.3 text-grey-900 mb-[0.62rem] max-md:text-[1.875rem] [&>p>strong]:text-yellow-500 [&>p>strong]:font-semibold [&>p>font>strong>font]:text-yellow-500 [&>p>font>strong>font]:font-semibold'
                    dangerouslySetInnerHTML={{__html: data?.heading}}
                  ></h1>

                  <Image
                    src={
                      '/images/familyElevator/headerFamilyElevator/bonghoa.png'
                    }
                    alt='hoabg'
                    width={500}
                    height={500}
                    className='absolute w-[8.3125rem] h-[8rem] -right-[6%] bottom-[30%] max-md:hidden -z-10'
                  />
                </div>
              </Fade>
              <Fade
                direction='up'
                triggerOnce
              >
                <span
                  className='text-1 font-normal leading-1.5 font-Iciel max-md:text-[0.875rem] [&>p>strong]:font-medium text-grey-900 [&>p>strong]:text-gray-900 [&>p]:text-gray-500'
                  dangerouslySetInnerHTML={{__html: data?.desc}}
                ></span>
              </Fade>
            </div>
          </div>
          <div className='pl-[6.25rem] pt-[2.38rem] flex items-center max-md:px-3 max-md:pt-6 flex-wrap'>
            <Fade
              direction='up'
              triggerOnce
            >
              <div className='flex flex-col'>
                <span className='uppercase text-1 font-medium leading-1.5 font-Iciel text-grey-500 opacity-80 max-md:text-[0.625rem] '>
                  Tải trọng lên đến
                </span>
                <span className='font-SVNLagu text-2 font-semibold leading-1.5 py-2 text-yellow-500 max-md:text-[1.5rem] max-md:py-0'>
                  <span className='text-[3.3125rem] text-yellow-500 max-md:text-[1.5rem]'>
                    {data?.weight}
                  </span>
                  kg
                </span>
              </div>
            </Fade>
            <Fade
              direction='up'
              triggerOnce
            >
              <div className='w-[0.0625rem] h-[5.125rem] bg-[rgba(28,32,28,0.10)] mx-10 max-md:mx-8 max-md:h-[2.99588rem]'></div>
              <div className='flex flex-col'>
                <span className='uppercase text-1 font-medium leading-1.5 font-Iciel text-grey-500 opacity-80 max-md:text-[0.625rem]'>
                  Tốc độ
                </span>
                <span className='font-SVNLagu text-2 font-semibold leading-1.5  py-2 text-yellow-500 max-md:text-[1.5rem]  max-md:py-0'>
                  <span className='text-[3.3125rem] max-md:text-[1.5rem]'>
                    {data?.speed}
                  </span>
                  m/s
                </span>
              </div>
            </Fade>
            <Fade
              triggerOnce
              direction='up'
            >
              <div className='w-[0.0625rem] h-[5.125rem] bg-[rgba(28,32,28,0.10)] mx-10 max-md:mx-8 max-md:hidden'></div>
              <div className='flex flex-col max-md:pt-[1.12rem]'>
                <span className='uppercase text-1 font-medium leading-1.5 font-Iciel text-grey-500 opacity-80 max-md:text-[0.625rem] '>
                  diện tích tối thiểu
                </span>
                <span className='font-SVNLagu text-2 font-semibold leading-1.5  py-2 text-yellow-500 max-md:text-[1.5rem]  max-md:py-0'>
                  từ &nbsp;
                  <span className='text-[3.3125rem] max-md:text-[1.5rem]'>
                    {data?.acreage}
                  </span>
                  m2
                </span>
              </div>
            </Fade>
          </div>
        </div>
        <Fade
          direction='up'
          triggerOnce
        >
          <div className='w-[30%] max-md:hidden'>
            <div className='ml-28 mt-[10%] relative w-16  h-[14.3125rem] bg-slate-400 '>
              <Image
                src={`/images/components/slideAutoplay/thangmay.png`}
                alt='imgThangmay'
                className='absolute top-0 left-0 object-fill w-full h-full'
                width={120}
                height={120}
              />
              <div className='cirleElevatorBg absolute w-[11.875rem] h-[11.875rem] rounded-[50%]  bottom-[36%] left-[106%] opacity-30'></div>
              <div className='absolute flex flex-col w-56 left-[106%] bottom-[46%]'>
                <span className='font-SVNLagu text-base font-medium leading-1.4 uppercase mb-[0.12rem]'>
                  profile
                </span>
                <span className='font-SVNLagu text-[1.68588rem] font-extrabold leading-1.4 text-gray-900'>
                  SANYO YUSOKI
                </span>
              </div>
              <Link
                href={`${data?.link}`}
                target='_blank'
                className='dowloadElevator absolute left-full bottom-[13%] w-[13.9375rem] h-[3.9375rem] flex items-center justify-center cursor-pointer '
              >
                <span className='uppercase font-Iciel text-base font-medium leading-[120%] mr-[0.87rem]'>
                  tải xuống ngay
                </span>
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
              </Link>
            </div>
          </div>
        </Fade>
      </div>
      <div className='px-[3.75rem] mt-[4.94rem] relative max-md:px-3 max-md:mt-[1.17rem] tmgd'>
        <Swiper
          spaceBetween={10}
          thumbs={{swiper: thumbsSwiper}}
          pagination={{
            type: 'progressbar',
            el: '.paginationHeaderFE',
          }}
          speed={1000}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: '.swiper-button-next-thumbFE',
            prevEl: '.swiper-button-prev-thumbFE',
          }}
          modules={[Navigation, Thumbs, Pagination, Autoplay]}
          className='mySwiperFather'
        >
          {dataSLide.map((item, index) => (
            <SwiperSlide
              className='w-full !h-[43rem] rounded-[1rem] max-md:rounded-[0.25rem] overflow-hidden max-md:!h-[13.375rem]'
              key={index}
            >
              <Image
                src={item?.image?.url}
                className='object-cover w-full h-full'
                alt={item?.image?.alt}
                width={1500}
                height={1500}
                quality={100}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={14}
          breakpoints={{
            0: {
              slidesPerView: 5,
              spaceBetween: 6,
            },
            768: {
              slidesPerView: 5,
            },
          }}
          slidesPerView={5}
          watchSlidesProgress={true}
          modules={[Navigation, Thumbs]}
          className='mySwiperChild !absolute bottom-[2.5rem] right-[9.37rem] w-[40%] h-[4rem] z-10  max-md:!h-[2.5343rem] max-md:!relative max-md:w-full max-md:bottom-[unset] max-md:right-[unset] max-md: mt-[0.57rem]'
        >
          {dataSLide.map((item, index) => (
            <SwiperSlide
              className='rounded-[0.125rem] overflow-hidden'
              key={index}
            >
              <Image
                src={item?.image?.url}
                className='object-cover w-full h-full'
                alt={item?.image?.alt}
                width={1000}
                height={1000}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='flex justify-between mt-4'>
          <div className='flex justify-between max-md:justify-start'>
            <ButtonSlide
              className={
                ' swiper-button-prev-thumbFE border-[#fff] transition ease-in cursor-pointer w-[3.20513rem] h-[3.20513rem] mr-[0.75rem] bg-grey-0 md:hover:border-yellow-500 md:hover:bg-yellow-500 max-md:bg-yellow-500 max-md:border-yellow-500 max-md:w-[2.5rem] max-md:h-[2.5rem] absolute z-20  top-[48%] left-[9%] max-md:relative max-md:left-[unset] max-md:top-[unset] '
              }
              classNameSvg={
                'w-[1rem] h-[1rem] text-yellow-500 md:group-hover:text-white max-md:text-grey-900 max-md:w-[0.875rem] max-md:h-[0.875rem]'
              }
            />
            <ButtonSlide
              className={
                ' swiper-button-next-thumbFE border-[#fff] transition ease-in cursor-pointer w-[3.20513rem] h-[3.20513rem] mr-[0.75rem] bg-grey-0 md:hover:border-yellow-500 md:hover:bg-yellow-500 max-md:bg-yellow-500 max-md:border-yellow-500 max-md:w-[2.5rem] max-md:h-[2.5rem] absolute z-20  top-[48%] right-[9%] max-md:relative max-md:right-[unset] max-md:top-[unset] '
              }
              classNameSvg={
                'w-[1rem] h-[1rem] text-yellow-500 md:group-hover:text-white max-md:text-grey-900 max-md:w-[0.875rem] max-md:h-[0.875rem] rotate-180'
              }
            />
          </div>
          <div className='w-[6.25rem] relative md:hidden'>
            <div className='paginationHeaderFE rounded-full w-full !bg-[#E6E9F6] [&>.swiper-pagination-progressbar-fill]:!bg-yellow-500 [&>.swiper-pagination-progressbar-fill]:!rounded-full'></div>
          </div>
        </div>
        <Fade triggerOnce>
          <Link
            href={`${data?.link}`}
            target='_blank'
            className='md:hidden bg-[linear-gradient(180deg,_#D1B37B_0%,_#E4B867_100%)] w-[5.375rem] h-[5.375rem] rounded-[50%] flex items-center justify-center flex-col absolute -top-[3.8rem] right-[3rem] z-10'
          >
            <span className='font-Iciel text-[0.625rem] font-medium leading-1.2 text-white block w-[3rem] text-center mb-1'>
              Tải xuống profile
            </span>
            <div className='flex flex-col items-center justify-center'>
              <Image
                src={'/images/familyElevator/connectLove/downArrow.svg'}
                width={16}
                height={16}
                alt='download icon'
                className='w-[0.95981rem] h-[0.84463rem] mb-[1px]'
              />
              <div className='bg-white w-[0.57588rem] h-[0.07038rem] rounded-full'></div>
            </div>
          </Link>
        </Fade>
      </div>
    </section>
  )
}

export default HeaderDetailElevator
