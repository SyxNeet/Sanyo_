'use client'
import React from 'react'
import BreadcrumbContainer from '@/components/breadcrumb/BreadcrumbContainer'
import BreadcrumbLink from '@/components/breadcrumb/BreadcrumbLink'
import {Swiper, SwiperSlide} from 'swiper/react'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/navigation'
import {Navigation, Autoplay} from 'swiper/modules'
const HeaderProject = ({data,slide,dataTypeElevator}) => {
  return (
    <section>
      <BreadcrumbContainer className='pl-3 md:pl-[6.25rem]'>
        <BreadcrumbLink href={`/`}>TRANG CHỦ</BreadcrumbLink>
        <BreadcrumbLink href={`/`}>DANH SÁCH DỰ ÁN</BreadcrumbLink>
        <BreadcrumbLink isLastLink>DỰ ÁN BIỆT THỰ PHÚ QUỐC</BreadcrumbLink>
      </BreadcrumbContainer>
      <div className='border-b border-[rgba(28,32,28,0.10)] pb-[3.28rem] max-md:border-b-0 max-md:pb-0'>
        <div className='ml-[6.25rem] mt-[3.31rem] max-md:mt-6 max-md:ml-3'>
          <h1
            className='font-SVNLagu text-[4.375rem] font-semibold leading-1.2 text-gray-900 mb-[1.12rem] max-md:text-[1.5rem]'
            dangerouslySetInnerHTML={{__html: data?.heading}}
          ></h1>
          <span className='font-Iciel block leading-1.5 font-normal text-[1rem] w-[50.0625rem] max-md:text-[0.875rem] max-md:w-full'>
            {data?.desc}
          </span>
        </div>
        <div className='flex space-x-[5rem] ml-[6.25rem] mt-[3.41rem] max-md:ml-3 max-md:mt-[1.51rem] max-md:flex-wrap max-md:space-x-0'>
          <div className='flex items-center max-md:basis-[50%] max-md:mb-[1rem]'>
            <Image
              src='/images/chi-tiet-du-an/house.svg'
              width={60}
              height={60}
              alt='house-icon'
              className='w-[3.7185rem] h-[3.7185rem] mr-[0.5rem] max-md:w-[2.09925rem] max-md:h-[2.09925rem]'
            />
            <div className='flex flex-col justify-center'>
              <span className='text-[#A9A9A9] uppercase text-[0.86763rem] font-Iciel font-normal  leading-1.5 mb-1 max-md:text-[0.625rem]'>
                chủ đầu tư
              </span>
              <span className='text-grey-900 font-semibold uppercase max-md:text-[0.6875rem]'>
                {data?.project_details?.name}
              </span>
            </div>
          </div>
          <div className='flex items-center max-md:basis-[50%] max-md:mb-[1rem]'>
            <Image
              src='/images/chi-tiet-du-an/location.svg'
              width={60}
              height={60}
              alt='house-icon'
              className='w-[3.7185rem] h-[3.7185rem] mr-[0.5rem] max-md:w-[2.09925rem] max-md:h-[2.09925rem]'
            />
            <div className='flex flex-col'>
              <span className='text-[#A9A9A9] uppercase text-[0.86763rem] font-Iciel font-normal  leading-1.5 mb-1 max-md:text-[0.625rem]'>
                địa điểm
              </span>
              <span className='text-grey-900 font-semibold uppercase max-md:text-[0.6875rem]'>
                {data?.project_details?.local}
              </span>
            </div>
          </div>
          <div className='flex items-center max-md:basis-[50%]'>
            <Image
              src='/images/chi-tiet-du-an/cal.svg'
              width={60}
              height={60}
              alt='house-icon'
              className='w-[3.7185rem] h-[3.7185rem] mr-[0.5rem] max-md:w-[2.09925rem] max-md:h-[2.09925rem]'
            />
            <div className='flex flex-col'>
              <span className='text-[#A9A9A9] uppercase text-[0.86763rem] font-Iciel font-normal  leading-1.5 mb-1 max-md:text-[0.625rem]'>
                thời gian
              </span>
              <span className='text-grey-900 font-semibold uppercase max-md:text-[0.6875rem]'>
                {data?.project_details?.time}
              </span>
            </div>
          </div>
          <div className='flex items-center max-md:basis-[50%]'>
            <Image
              src='/images/chi-tiet-du-an/button.svg'
              width={60}
              height={60}
              alt='house-icon'
              className='w-[3.7185rem] h-[3.7185rem] mr-[0.5rem] max-md:w-[2.09925rem] max-md:h-[2.09925rem]'
            />
            <div className='flex flex-col'>
              <span className='text-[#A9A9A9] uppercase text-[0.86763rem] font-Iciel font-normal  leading-1.5 mb-1 max-md:text-[0.625rem]'>
                loại thang máy
              </span>
              <span className='text-grey-900 font-semibold uppercase max-md:text-[0.6875rem]'>
                {dataTypeElevator?.map(
                  (item, index, array) => (
                    <span key={index}>
                      {item.name}
                      {index < array.length - 1 ? ', ' : ''}
                    </span>
                  ),
                )}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-[2.62rem] max-md:mt-8'>
        <Swiper
          spaceBetween={25}
          breakpoints={{
            0: {
              slidesPerView: 1.2,
            },
            768: {
              slidesPerView: 1.7,
            },
          }}
          loop={true}
          speed={8000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay]}
          className='mySwiperduan'
        >
          {(slide||[]).map((item, index) => (
            <SwiperSlide key={index}>
              <Image
                src={item?.image?.url}
                width={1000}
                height={600}
                alt={item?.image?.alt}
                className='w-full h-[41rem] max-md:h-[15.125rem] object-cover rounded-[0.75rem]'
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default HeaderProject
