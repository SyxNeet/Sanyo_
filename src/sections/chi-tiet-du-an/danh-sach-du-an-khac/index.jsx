'use client'
import React from 'react'
import {Button} from '@/components/ui/button'
import ButtonSlide from '@/components/buttonSlideSixReasons/ButtonSLide'
import 'swiper/css'
import 'swiper/css/pagination'
import Link from 'next/link'
import 'swiper/css/navigation'
import {Pagination, Navigation} from 'swiper/modules'
import {Swiper, SwiperSlide} from 'swiper/react'
import ItemOutStandingProject from '@/components/itemOutstandingProject'
const ListOtherProjects = ({data}) => {
  return (
    <section className=' pt-[6.25rem] max-md:pt-[3rem]'>
      <div className='flex justify-between items-center px-[6.25rem] mb-[2.5rem] max-md:px-3 max-md:mb-[1.13rem]'>
        <h2 className='text-[3rem] font-SVNLagu leading-1.4 font-semibold max-md:text-[1.5rem]'>
          Danh sách <span className='text-[3rem] font-SVNLagu leading-1.4 font-semibold max-md:text-[1.5rem] text-yellow-500 uppercase'>dự án khác</span>
        </h2>
        <Button
          text='DANH SÁCH DỰ ÁN'
          isHover='true'
          isBlack='true'
          className="max-md:hidden"
        />
      </div>
      <div className='relative mx-[6.25rem] max-md:mx-0'>
        <Swiper
          navigation={{
            nextEl: '.swiper-button-next-otherProjects',
            prevEl: '.swiper-button-prev-otherProjects',
          }}
          pagination={{
            type: 'progressbar',
            el: '.processOtherProjects',
          }}
          breakpoints={{
            0: {
              slidesPerView: 1.2,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 16,
            },
          }}
          modules={[Pagination, Navigation]}
          className='mySwiperotherProjects max-md:!pl-3'
        >
          {
            data?.other_project?.map((item, index) => (
              <SwiperSlide className='rounded-xl overflow-hidden' key={index}>
              <ItemOutStandingProject
                className={'w-full h-[22.4rem]'}
                duAn='true'
                data={item}
              />
            </SwiperSlide>
            ))
          }
         
        </Swiper>
        <div className='max-md:flex order-3 px-3 max-md:pt[1.38rem] w-full items-center justify-between max-md:pt-[1.38rem] '>
          <div className='flex justify-between max-md:hidden'>
            <ButtonSlide
              className={
                ' swiper-button-prev-otherProjects border-[#fff] transition ease-in cursor-pointer w-[3.20513rem] h-[3.20513rem] mr-[0.75rem] bg-grey-0 md:hover:border-yellow-500 md:hover:bg-yellow-500 max-md:bg-grey-0 max-md:border-[#FE4127] max-md:w-[2.5rem] max-md:h-[2.5rem] absolute z-20  top-[42%] left-[-1.7%] max-md:relative max-md:left-[unset] max-md:top-[unset] shadow-md'
              }
              classNameSvg={
                'w-[1rem] h-[1rem] text-yellow-500 md:group-hover:text-white max-md:text-[#FE4127] max-md:w-[0.875rem] max-md:h-[0.875rem]'
              }
            />
            <ButtonSlide
              className={
                ' swiper-button-next-otherProjects border-[#fff] transition ease-in cursor-pointer w-[3.20513rem] h-[3.20513rem] mr-[0.75rem] bg-grey-0 md:hover:border-yellow-500 md:hover:bg-yellow-500 max-md:bg-grey-0 max-md:border-[#FE4127] max-md:w-[2.5rem] max-md:h-[2.5rem] absolute z-20  top-[42%] right-[-2.5%] max-md:relative max-md:right-[unset] max-md:top-[unset] shadow-md'
              }
              classNameSvg={
                'w-[1rem] h-[1rem] text-yellow-500 md:group-hover:text-white max-md:text-[#FE4127] max-md:w-[0.875rem] max-md:h-[0.875rem] rotate-180'
              }
            />
          </div>
         <Link href='/du-an'>
         <Button
          text='XEM TẤT CẢ'
          isHover='true'
          isBlack='true'
          className="md:hidden"
        />
         </Link>
          <div className='relative w-[6.25rem] md:hidden'>
            <div className='processOtherProjects rounded-full [&>.swiper-pagination-progressbar-fill]:!bg-yellow-500'></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ListOtherProjects
