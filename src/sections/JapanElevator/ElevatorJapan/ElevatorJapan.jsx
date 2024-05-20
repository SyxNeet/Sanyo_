'use client'
import React from 'react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import '../styles.css'
import Link from 'next/link'

import {Button} from '@/components/ui/button'

import SliderJapanElevator from '@/components/platForm/sliderJapanElevator/SLiderJapanElevator'
import SliderMbJapanElevator from '@/components/platFormMbJapanElevator'
import { Fade } from 'react-awesome-reveal'
const ElevatorJapan = ({isMobile,data,dataListEle}) => {

  return (
    <section className='relative pt-[7.5rem] max-md:pt-[2.37rem] max-md:border-t max-md:border-[rgba(28, 32, 28, 0.10)]'>
    <div className='absolute w-[6.0625rem] h-[5.75rem] top-0 left-0 bg-c-nht opacity-10 max-md:hidden'></div>
    <div className='w-[112.25rem] h-[112.25rem] rounded-[50%] opacity-50 bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(254,65,39,0.60)_0%,_rgba(254,65,39,0.00)_100%)] absolute right-[80%] top-[-25%] -z-10'></div>
    <div className='w-[112.25rem] h-[112.25rem] rounded-[50%] opacity-50 bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(254,65,39,0.60)_0%,_rgba(254,65,39,0.00)_100%)] absolute left-[80%] top-[-25%] -z-10 max-md:w-[29.125rem] max-md:h-[29.125rem] max-md:top-[-30%] max-md:left-[57%]'></div>
    <div className='pl-[6.31rem] flex items-end justify-between pr-[3.56rem] max-md:px-3'>
      <div className='w-[55.625rem]'>
   <Fade triggerOnce={true} direction='up' fraction={0}>
          <h2 className='text-[3.125rem] font-SVNLagu font-semibold leading-1.3 text-grey-900 mb-4 max-md:text-2xl max-md:leading-1.3 [&>p>strong]:font-semibold  max-md:mb-[0.62rem] [&>p>strong]:text-c-nht max-md:[&>p]:flex max-md:[&>p]:flex-col' dangerouslySetInnerHTML={{__html:dataListEle?.title||"Thang máy Nhật Bản SANYO YUSOKI"}}>
            
          </h2>
   </Fade>
     <Fade triggerOnce={true} direction='up' fraction={0}>
          <span className='text-[1.125rem] font-Iciel leading-1.7 font-normal uppercase text-[#42484F] [&>p>strong]:text-c-nht max-md:text-[0.75rem]' dangerouslySetInnerHTML={{__html:dataListEle?.desc||"Chúng tôi tin rằng với một nền móng vững chắc sẽ cho ra đời những sản phẩm thang máy chất lượng nhất. SANYO YUSOKI vẫn liên tục đầu tư cho Nghiên cứu Phát triển (R&D) tất cả các dòng thang máy"}}>
          </span>
     </Fade>
      </div>
      <Link href='/du-an'>
      <Button
        isRed={true}
        text={'DANH SÁCH DỰ ÁN'}
        isHover={true}
        isBlack={true}
        classHover={'group-hover'}
        classtext={'group-hover:text-white'}
        className='max-md:hidden'
      /></Link>
    </div>

    <Fade triggerOnce={true} direction='up' fraction={0}>{!isMobile?<SliderJapanElevator data={dataListEle?.elavators}/>:<SliderMbJapanElevator data={dataListEle?.elavators}/>}</Fade>
  </section>
  )
}

export default ElevatorJapan