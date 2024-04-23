'use client'
import React from 'react'
import Link from 'next/link'

import Image from 'next/image'
import imgDownArrow from '/public/images/japanElevator/down.png'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import '../styles.css'
import SlideOnlyImages from '@/components/slideOnlyImages'
const ProductLine = ({data,lang}) => {
  return (
    <section className='mt-[2.25rem] relative z-10 box-container-border bg-white productLineJE max-md:mt-[1.25rem]'>
    <div className='w-[114.75rem] h-[114.75rem] absolute  top-0 left-[60%] max-md:left-[62%] max-md:w-[29.125rem] max-md:h-[29.125rem] rounded-[50%] opacity-50 bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(254,_65,_39,_0.60)_0%,_rgba(254,_65,_39,_0.00)_100%)] -z-[1]'></div>
    <div className='pt-[9rem] pl-[6.25rem] flex max-md:px-4 max-md:pt-[2rem]'>
      <div className='border-r-[1px] border-[rgba(28,32,28,0.10)] pb-[5.38rem] pr-[6.63rem] max-md:border-none max-md:px-0 max-md:pb-5'>
        <h2 className='w-[50.0625rem] font-SVNLagu text-[3.125rem] font-semibold leading-1.3 mb-[2.06rem] max-md:hidden [&>p>strong]:text-c-nht [&>p>strong]:font-semibold ' dangerouslySetInnerHTML={{__html:data?.heading}}>
        </h2>
        <h2 className='md:hidden w-full font-SVNLagu text-[1.5rem] font-bold leading-1.3 mb-2 [&>p>strong]:text-c-nht [&>p>strong]:font-semibold' dangerouslySetInnerHTML={{__html:data?.heading_mb}}>
        </h2>
        <span className='w-[47.875rem] block font-Iciel text-[1.125rem] font-normal leading-1.7 uppercase max-md:capitalize max-md:w-full text-[#6D7279] max-md:text-sm' dangerouslySetInnerHTML={{__html:data?.desc}}>
        </span>
      </div>
      <Link
        href={'/'}
        className='dowloadfileJE w-[10.6875rem] h-[10.6875rem] rounded-[50%] ml-[14rem] bg-[#FE4127] flex items-center justify-center flex-col relative mt-[1%] max-md:hidden z-10'
      >
        <span className='font-Iciel text-[1.22144rem] w-[5.875rem] text-center font-normal leading-1.2 mb-1 text-white'>
          {lang==="en"?"Download profile":"Tải xuống profile"}
        </span>
        <div className='w-[2rem] h-[1.9085rem] overflow-hidden relative'>
          <Image
            src={imgDownArrow}
            alt='download'
            className='downArrowTop absolute left-0 bottom-full'
          />
          <Image
            src={imgDownArrow}
            alt='download'
            className='downArrowBottom absolute left-0 bottom-[5%]'
          />
          <div className='absolute w-[68%] left-[17%] bottom-0 h-[2px] rounded-full bg-grey-0'></div>
        </div>
      </Link>
    </div>
    <SlideOnlyImages className='!h-[41.5625rem]' data={data?.slide}/>
  </section>
  )
}

export default ProductLine