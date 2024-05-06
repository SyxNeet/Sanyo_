'use client'
import React from 'react'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import '../styles.css'
const ThirdReason = ({lang, isMobile,data}) => {
  return (
    <div>
      <div className='bg-white relative z-[99999] flex max-md:flex-col'>
        <div className='w-[50%] relative overflow-hidden max-md:w-full max-md:h-[33.8125rem]'>
          <div className='absolute bg-yellow-500 opacity-10 top-0 right-0 w-[8rem] h-[5.5625rem] max-md:hidden'></div>
          <div className='md:hidden bg-[linear-gradient(180deg,rgba(255,255,255,1)70%,rgba(255,255,255,0)_100%)] h-[50%] absolute top-0 left-0 w-full -z-[1]'></div>
          <div className='absolute bg-yellow-500 opacity-10 top-[94%] left-0 w-[11.1875rem] h-[5.5625rem] max-md:hidden'></div>
          <div className='absolute bg-yellow-500 opacity-10 top-[86%] left-[11.1875rem] w-[3.75rem] h-[3.4375rem] max-md:hidden'></div>
          <Image
          src='/images/familyElevator/detailFE/reason3.png'
          alt='bao ve moi truong'
          width={1000}
          height={1000}
          className='md:hidden absolute top-[10%] left-0 -z-10 w-full h-full object-cover'
        />
          <h2 className='pt-[8.25rem] pl-[5.19rem] text-[3.125rem] text-gray-900 font-SVNLagu font-semibold leading-1.3 mb-[2.94rem] max-md:px-3 max-md:py-0 max-md:text-[1.25rem] max-md:pt-[2.5rem]'>
           {data?.heading} 
          </h2>
          <div className='pl-[5.19rem] flex items-center max-md:pl-3 max-md:justify-between'>
            <div className='flex flex-col'>
              <span className='font-SVNLagu text-[4.125rem] font-semibold leading-1.2 text-yellow-500 mb-[0.19rem]  max-md:text-[2.5rem] max-md:mb-0'>
                {data?.optical_power_coating?.percent}%
              </span>
              <span className='w-[14.6875rem] text-[1.125rem] text-[#6A6A6A] font-medium leading-1.5 max-md:text-[0.75rem] max-md:w-[8.9375rem]'>
              {data?.optical_power_coating?.desc}
              </span>
            </div>
            <div className='w-[0.0625rem] h-[9.8125rem] bg-[#ECECEC] ml-[4.25rem] mr-[1.5rem] max-md:mx-0 max-md:h-[4.6875rem]'></div>
            <div className='flex flex-col'>
              <span className='font-SVNLagu text-[4.125rem] font-semibold leading-1.2 text-yellow-500 mb-[0.19rem] max-md:text-[2.5rem] max-md:mb-0'>
              {data?.power_saving?.percent}%
              </span>
              <span className='w-[14.6875rem] text-[1.125rem] text-[#6A6A6A] font-medium leading-1.5 max-md:text-[0.75rem] max-md:w-[8.9375rem]'>
              {data?.power_saving?.desc}
              </span>
            </div>
          </div>
        </div>
        <Image
          src='/images/familyElevator/detailFE/reason3.png'
          alt='bao ve moi truong'
          width={1000}
          height={1000}
          className='w-[50%] h-[40.4375rem] rounded-tr-[0.3125rem] rounded-bl-[0.3125rem] max-md:w-full max-md:rounded-none max-md:hidden'
        />
      </div>
      
    </div>
  )
}

export default ThirdReason
