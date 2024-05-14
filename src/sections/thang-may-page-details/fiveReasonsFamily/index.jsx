'use client'
import React from 'react'
import Link from 'next/link'
import ButtonSlide from '@/components/buttonSlideSixReasons/ButtonSLide'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './styles.css'
import FirstReason from './first'
import SecondReasons from './second'
import ThirdReason from './third'
import FourthReason from './fourth'
import FifthReason from './fifth'
const FiveReasonsFamily = ({lang, isMobile, data,heading_reason}) => {
  const {
    first_reason,
    second_reason,
    third_reason,
    fourth_reason,
    fifth_reason,
  } = data
  return (
    <section>
      <div className='flex justify-between pl-[5.75rem] pr-[5.84rem] items-end mt-[8.13rem] pb-[3.69rem] border-b border-[rgba(28,32,28,0.10)] max-md:px-3 max-md:mt-[3.5rem] max-md:pb-[1rem] max-md:border-none'>
        <h2 className='w-[58.4375rem] font-SVNLagu uppercase text-[3.71738rem] leading-1.4 font-semibold max-md:text-[1.875rem] [&>p>strong]:text-yellow-500 [&>p>strong]:font-semibold' dangerouslySetInnerHTML={{__html:data?.heading_reason}}>
         
        </h2>
        <Link
          href={'/'}
          className=' w-fit  flex items-center group right-[6.25rem] bottom-[50%] max-md:bottom-0 max-md:left-0 max-md:hidden'
        >
          <ButtonSlide
            className={
              'w-[3.5rem] h-[3.5rem] border-yellow-500 group-hover:border-yellow-500 max-md:w-[2.11056rem] max-md:h-[2.11056rem] transition'
            }
            classNameSvg={
              'svgDance1 group-hover:text-yellow-500 max-d:w-[0.75rem] max-md:h-[0.75rem] md:w-[1rem] lg:w-[1.25rem] lg:h-[1.25rem] transition text-yellow-500'
            }
          />
          <span className='ml-4 max-md:ml-3 text-[1.125rem] font-Iciel leading-[110%] font-normal group-hover:text-yellow-500 max-md:text-[0.67838rem] transition'>
           Khám phá ngay
          </span>
        </Link>
      </div>
      {/* first reason */}
      <FirstReason isMobile={isMobile} data={first_reason}/>
      {/* second reason */}
      <SecondReasons isMobile={isMobile} data ={second_reason} />
      {/* third reason */}
      <ThirdReason isMobile={isMobile} data={third_reason}/>
      {/* fourth reason */}
      <FourthReason isMobile={isMobile} data={fourth_reason}/>
      {/* fifth reason */}
      <FifthReason isMobile={isMobile} data={fifth_reason} />
    </section>
  )
}

export default FiveReasonsFamily
