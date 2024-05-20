'use client'
import React from 'react'
import Image from 'next/image'
import ButtonSlide from '@/components/buttonSlideSixReasons/ButtonSLide'
import Link from 'next/link'
import './styles.css'
import SlideOnlyImages from '@/components/slideOnlyImages'
import { Fade } from 'react-awesome-reveal'
const ConnectLove = ({data}) => {
  return (
    <section className='relative border-t border-[rgba(28,32,28,0.10)] mt-[5.06rem]  max-md:mt-7'>
      <Image
        src={'/images/familyElevator/connectLove/bg.png'}
        width={1000}
        height={1000}
        alt='bg-connect-love'
        className='absolute w-full h-full object-cover -z-10'
      />
      <div className='flex pl-[6.25rem] max-md:px-3 max-md:pb-4'>
<Fade direction='up' triggerOnce={true}>
          <div className='w-fit pt-[5.06rem] max-md:hidden'>
            <h3 className='uppercase font-SVNLagu text-xl font-medium leading-1.5 tracking-[0.1rem]  mb-[9.56rem] w-[23.5rem] '>
              {data?.sub_title}
            </h3>
            <div
              className=' w-fit  flex items-center group right-[6.25rem] bottom-[50%] max-md:bottom-0 max-md:left-0'
            >
              <ButtonSlide
                className={
                  'w-[3.5rem] h-[3.5rem] border-[#282B30] group-hover:border-yellow-500 max-md:w-[2.11056rem] max-md:h-[2.11056rem] transition'
                }
                classNameSvg={
                  'svgDance1 group-hover:text-yellow-500 max-d:w-[0.75rem] max-md:h-[0.75rem] md:w-[1rem] lg:w-[1.25rem] lg:h-[1.25rem] transition'
                }
              />
              <span className='ml-4 max-md:ml-3 text-[1.125rem] font-Iciel leading-[110%] font-normal group-hover:text-yellow-500 max-md:text-[0.67838rem] transition'>
               Khám phá ngay
              </span>
            </div>
          </div>
</Fade>
     <Fade triggerOnce={true}>   <div className='w-[0.0625rem] h-[26.3125rem] bg-[rgba(28,32,28,0.10)] mx-[4.81rem] max-md:hidden'></div></Fade>
<Fade direction='up' triggerOnce={true}>
          <div className='w-[44.875rem] pt-[3.37rem]'>
            <h2 className='font-SVNLagu text-[3.415rem] font-semibold leading-1.3 text-grey-900 mb-[0.94rem] max-md:text-[1.5rem] max-md:mb-[0.62rem] [&>p>strong]:text-yellow-500 [&>p>strong]:font-semibold max-md:w-[20rem]' dangerouslySetInnerHTML={{__html:data?.heading}}></h2>
            <span className='text-justify font-Iciel text-[1.125rem] font-normal leading-1.5 max-md:text-[0.875rem] text-grey-900 block max-md:w-[21.875rem]'> 
             {data?.desc}
            </span>
          </div>
</Fade>
      </div>
    <Fade direction='up' fraction={0} triggerOnce={true}>  <SlideOnlyImages data={data?.slide} className={'!h-[33.9375rem]'} /></Fade>
    </section>
  )
}

export default ConnectLove
