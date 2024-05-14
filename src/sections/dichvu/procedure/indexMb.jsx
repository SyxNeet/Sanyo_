'use client'
import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import {Pagination, Navigation, FreeMode} from 'swiper/modules'
import ButtonSLide from '@/components/buttonSlideSixReasons/ButtonSLide'
import Image from 'next/image'
const ProcedureMb = ({data}) => {
  return (
    <section className='relative mb-14'>
      <div className='w-[4rem] h-[3rem] bg-yellow-500 opacity-10 absolute left-0 top-0'></div>
      <div className='w-[1rem] h-[1rem] bg-yellow-500 opacity-10 absolute left-[4rem] top-[3rem]'></div>
      <h2 className='font-SVNLagu text-[1.375rem] font-semibold leading-1.3 pt-[4.56rem] px-3 border-b border-[rgba(28,32,28,0.10)] pb-4 mb-4 [&>p>strong]:font-semibold [&>p>strong]:font-yellow-500' dangerouslySetInnerHTML={{__html:data?.heading}}>  
      </h2>
      <div>
        <Swiper
        pagination={{
            el:".swiper-pagination-procedure",
            type: 'fraction',
        }}
        freeMode={true}
        navigation={{
            nextEl:".swiper-button-next-procedure",
            prevEl:".swiper-button-prev-procedure",
        }}
          modules={[Pagination, Navigation,FreeMode]}
          className='mySwiper'
        >
          {(data.list_procedure || []).map((item, index) => (
            <SwiperSlide
              key={index}
              
            >
              <div className='text-[1.125rem] font-SVNLagu font-semibold leading-1.4 mb-[0.88rem] text-grey-800 px-3 [&>p>strong]:font-semibold [&>p>strong]:text-yellow-500' dangerouslySetInnerHTML={{__html:item?.name_step}}>

              </div>
              {item?.list_steps?.map((item, index) => (
                <div
                  key={index}
                  className='flex items-start mb-[0.75rem] px-3'
                >
                  <div className='w-[1.5rem] h-[1.5rem] rounded-[50%] bg-yellow-500 text-white font-SVNLagu text-[0.75rem] flex justify-center items-center mr-2'>
                    {index + 1}
                  </div>
                  <span className='font-Iciel text-[0.875rem] leading-1.5 font-normal text-grey-400 block w-[90%]'>
                    {item.name}
                  </span>
                </div>
              ))}
              <Image src={item?.img?.url} alt='test' width={1000} height={1000} className='w-full h-[22.375rem] object-cover'/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className='md:hidden flex px-3 mt-[1.5rem] justify-between'>
        <div className='flex'>
          <ButtonSLide
            className={
              ' swiper-button-prev-procedure border-[#FE4127] transition ease-in cursor-pointer w-[3.5rem] h-[3.5rem] mr-[0.75rem] md:hover:border-white md:hover:bg-[#FE4127] max-md:bg-yellow-500 max-md:border-yellow-500 max-md:w-[2.5rem] max-md:h-[2.5rem]'
            }
            classNameSvg={
              'w-[1rem] h-[1rem] text-[#FE4127] md:group-hover:text-white max-md:text-black max-md:w-[0.875rem] max-md:h-[0.875rem]'
            }
          />
          <ButtonSLide
            className={
              ' swiper-button-next-procedure border-[#FE4127] transition ease-in cursor-pointer w-[3.5rem] h-[3.5rem] mr-[0.75rem] md:hover:border-white md:hover:bg-[#FE4127] max-md:bg-yellow-500 max-md:border-yellow-500 max-md:w-[2.5rem] max-md:h-[2.5rem]'
            }
            classNameSvg={
              'w-[1rem] h-[1rem] text-[#FE4127] rotate-180 md:group-hover:text-white max-md:text-black max-md:w-[0.875rem] max-md:h-[0.875rem]'
            }
          />
        </div>
        <div className='swiper-pagination-procedure hidden !w-[4.3125rem] rounded-full  h-[2.5rem] bg-yellow-500 bg-opacity-10 max-md:flex items-center justify-center !text-yellow-500 font-Iciel text-sm [&>span:last-child]:max-md:ml-1 [&>span:first-child]:max-md:mr-1'>
        </div>
      </div>
    </section>
  )
}

export default ProcedureMb
