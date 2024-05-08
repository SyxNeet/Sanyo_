'use client'
import React from 'react'
import BreadcrumbContainer from '@/components/breadcrumb/BreadcrumbContainer'
import BreadcrumbLink from '@/components/breadcrumb/BreadcrumbLink'
import {Swiper, SwiperSlide} from 'swiper/react'
import Image from 'next/image'
import {Autoplay} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import SlideOnlyImagesDownloadDV from '@/components/slideOnlyImagesWithDowloadDV'
const HeaderDichVu = ({data}) => {
  return (
    <section>
      <BreadcrumbContainer className='ml-3 md:mx-[6.25rem]'>
        <BreadcrumbLink href='/'>TRANG CHỦ</BreadcrumbLink>
        <BreadcrumbLink href='/'>DỊCH VỤ</BreadcrumbLink>
        <BreadcrumbLink isLastLink>
          DỊCH VỤ LẮP ĐẶT THANG MÁY THEO YÊU CẦU
        </BreadcrumbLink>
      </BreadcrumbContainer>
      <SlideOnlyImagesDownloadDV data={data}/>
    </section>
  )
}

export default HeaderDichVu
