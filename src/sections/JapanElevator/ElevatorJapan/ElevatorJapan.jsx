'use client'
import React from 'react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import '../styles.css'

import {Button} from '@/components/ui/button'

import SliderJapanElevator from '@/components/platForm/sliderJapanElevator/SLiderJapanElevator'
import SliderMbJapanElevator from '@/components/platFormMbJapanElevator'

const ElevatorJapan = ({isMobile,data}) => {
  console.log(data)
  return (
    <section className='relative pt-[7.5rem] max-md:pt-[2.37rem] max-md:border-t max-md:border-[rgba(28, 32, 28, 0.10)]'>
    <div className='absolute w-[6.0625rem] h-[5.75rem] top-0 left-0 bg-c-nht opacity-10 max-md:hidden'></div>
    <div className='w-[112.25rem] h-[112.25rem] rounded-[50%] opacity-50 bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(254,65,39,0.60)_0%,_rgba(254,65,39,0.00)_100%)] absolute right-[80%] top-[-25%] -z-10'></div>
    <div className='w-[112.25rem] h-[112.25rem] rounded-[50%] opacity-50 bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(254,65,39,0.60)_0%,_rgba(254,65,39,0.00)_100%)] absolute left-[80%] top-[-25%] -z-10 max-md:w-[29.125rem] max-md:h-[29.125rem] max-md:top-[-30%] max-md:left-[57%]'></div>
    <div className='pl-[6.31rem] flex items-end justify-between pr-[3.56rem] max-md:px-3'>
      <div className='w-[55.625rem]'>
        <h2 className='text-[3.125rem] font-SVNLagu font-semibold leading-1.3 text-grey-900 mb-4 max-md:text-2xl max-md:leading-1.3 [&>p>strong]:font-semibold  max-md:mb-[0.62rem] [&>p>strong]:text-c-nht ' dangerouslySetInnerHTML={{__html:data?.heading}}>
          
        </h2>
        <span className='text-[1.125rem] font-Iciel leading-1.7 font-normal uppercase text-[#42484F] max-md:text-[0.875rem] [&>p>strong]:text-c-nht' dangerouslySetInnerHTML={{__html:data?.desc}}>
        </span>
      </div>
      <Button
        isRed={true}
        text={'XEM TẤT CẢ'}
        isHover={true}
        isBlack={true}
        classHover={'group-hover'}
        classtext={'group-hover:text-white'}
        className='max-md:hidden'
      />
    </div>

    {!isMobile?<SliderJapanElevator/>:<SliderMbJapanElevator/>}
  </section>
  )
}

export default ElevatorJapan