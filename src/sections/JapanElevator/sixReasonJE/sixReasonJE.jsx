'use client'
import React from 'react'
import Image from 'next/image'
import bgImgSixReasons from '/public/images/japanElevator/bg6reasons.png'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import '../styles.css'
import SixReasons from '@/components/sixReasons'

const SixReasonJE = ({isMobile,data}) => {
  return (
    <section className='relative sixReasonsJE pt-[9.06rem] max-md:pt-[3.5rem]'>
      <div className='absolute bottom-0 left-0 bg-[linear-gradient(0deg,rgba(255,255,255,1)_3%,_rgba(255,255,255,0)_100%)] w-full h-[30%] -z-[1]'></div>
      <Image
        src={bgImgSixReasons}
        alt='bg-6reason'
        className='w-full h-full -z-10 absolute object-cover bottom-0 left-0'
      />
      <SixReasons isMobile={isMobile} data={data}/>
    </section>
  )
}

export default SixReasonJE
