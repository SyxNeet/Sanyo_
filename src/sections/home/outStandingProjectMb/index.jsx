'use client'
import React from 'react'
import Image from 'next/image'
import { outStandingProject } from '../../../../data/japanElevator'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation, Pagination, Autoplay, FreeMode} from 'swiper/modules'
import ItemOutStandingProject from '@/components/itemOutstandingProject'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import imglogo from '/public/images/japanElevator/logotext.png'
const OutStandingProjectMb = ({data}) => {
  return (
    <div>
      <div className='pt-12 px-7 flex items-center justify-center flex-col mb-[1.55rem]'>
        <h2 className='text-[0.625rem] font-SVNLagu font-medium leading-1.5 tracking-[0.05rem] uppercase mb-[0.54rem]'>DỰ ÁN NỔI BẬT CỦA SANYO YUSOKI</h2>
        <Image
          src={imglogo}
          alt='logo Sanyo'
          width={1000}
          height={1000}
          className='w-full  '
        />
      </div>
      <div className='mbOutStandingSLideHome'>
            <Swiper
              speed={15000}
              freeMode={true}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1.2,
                  spaceBetween: 0,
                },
              }}
              modules={[Pagination, Navigation, Autoplay,FreeMode]}
              className='mySwiperOnlyImages w-screen order-1 overflow-hidden'
            >
              {data.map((item, index) => (
                <SwiperSlide
                  key={index}
                  className={`h-[17.125rem] pl-3`}
                >
                  <ItemOutStandingProject
                    key={index}
                    width='full'
                    height='full'
                    imgFlagUrl={item.image_country.url}
                    className={`rounded-[0.75rem] w-full h-full `}
                    altImageFlag={item.image_country.alt}
                    nameProject={item.title}
                    imgProjectUrl={item.thumbnail}
                    altImageProject={item.alt}
                    link={item.title}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className='mt-[1.31rem] flex px-3 justify-center mbOutStandingSLideBtn'>
  <Link href={'/du-an'}>
              <Button
                className='w-fit border-yellow-500 hover:border-yellow-500 bg-yellow-500'
                text={'XEM TẤT CẢ'}
                isHover={true}
                isBlack={true}
                classHover={'group-hover'}
                classtext={'text-black'}

              /></Link>
            </div>
          </div>
    </div>
  )
}

export default OutStandingProjectMb
