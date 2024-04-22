'use client'
import React, {useRef} from 'react'
import Link from 'next/link'

import Image from 'next/image'
import logoImgJE from '/public/images/japanElevator/logo.png'
import logoImgTextJE from '/public/images/japanElevator/logotext.png'


import imgItem1 from '/public/images/japanElevator/item1.png'
import imgItem2 from '/public/images/japanElevator/item2.png'
import dauphayImg from '/public/images/japanElevator/dauphayje.png'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import '../styles.css'
import ButtonSlide from '@/components/buttonSlideSixReasons/ButtonSLide'
const PerfectChoiceJE = () => {
  return (
    <div>
              <section className='relative z-10 pt-[10.18rem] max-md:pt-[4.07rem]'>
        <div className='w-[112.25rem] h-[112.25rem] absolute rounded-[50%] top-0 right-[84%] opacity-50 bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(254,65,39,0.60)_0%,_rgba(254,65,39,0.00)_100%)]'></div>
        <div className='w-[12.375rem] h-[5.375rem] max-md:w-[4.375rem] max-md:h-[1.875rem] absolute right-0 top-0 bg-c-nht opacity-10'></div>
        <div className='w-[3.5625rem] h-[3.5625rem] max-md:w-[1.3125rem] max-md:h-[1.1875rem] max-md:top-[1.875rem] max-md:right-[4.375rem] bg-c-nht opacity-10 absolute right-[12.375rem] top-[5.375rem]'></div>
        <div className='relative w-[55.9375rem] ml-[7.69rem] max-md:ml-[0.75rem] max-md:w-[20.9375rem]'>
          <Image
            src={logoImgJE}
            alt='logo Sanyo'
            className='h-[5.375rem] w-[5.375rem] absolute left-[102%] bottom-[80%] max-md:hidden'
          />
          <Image
            src={logoImgTextJE}
            alt='logoText'
            className='w-full h-[7.37475rem] mb-[1.76rem] max-md:h-[2.76038rem] max-md:mb-[0.44rem]'
          />
          <span className='block font-SVNLagu text-[3rem] text-grey-700 font-semibold leading-1.2 max-md:text-[1.12288rem] '>
            sự lựa chọn hoàn hảo dành cho bạn
          </span>
        </div>
        <div className='w-full h-[3.5rem] relative mb-[3.63rem] max-md:h-[2.11056rem] max-md:mb-[1.71rem] max-md:ml-3 max-md:mt-[1.1rem]'>
          <Link
            href={'/'}
            className=' w-fit absolute flex items-center group right-[6.25rem] bottom-[50%] max-md:bottom-0 max-md:left-0'
          >
            <ButtonSlide
              className={
                'w-[3.5rem] h-[3.5rem] border-[#282B30] group-hover:border-[#FE4127] max-md:w-[2.11056rem] max-md:h-[2.11056rem]'
              }
              classNameSvg={
                'svgDance group-hover:text-[#FE4127] max-d:w-[0.75rem] max-md:h-[0.75rem] md:w-[1rem] lg:w-[1.25rem] lg:h-[1.25rem]'
              }
            />
            <span className='ml-4 max-md:ml-3 text-[1.125rem] font-Iciel leading-[110%] font-normal group-hover:text-c-nht max-md:text-[0.67838rem]'>
              Khám phá ngay
            </span>
          </Link>
        </div>
        <div className='flex h-[35.9375rem] w-full max-md:flex-col max-md:h-fit'>
          <Image
            src={imgItem1}
            alt='item1'
            className='w-[51%] h-full object-cover max-md:w-full max-md:h-[15.625rem]'
          />
          <div className='relative w-[49%] pt-[13.94rem] pl-[4rem] pr-[3.44rem] pb-[7.94rem]  max-md:pt-[0] max-md:pb-2 max-md:pl-[4.56rem] max-md:pr-[1.31rem] max-md:w-full max-md:translate-y-[-2rem]'>
            <div className='md:hidden bg-[linear-gradient(0deg,_rgba(255,255,255,1)_24%,_rgba(255,255,255,0)_100%)] w-full absolute bottom-[66%] left-0 h-[6rem] '></div>
            <div className='absolute left-0 top-0 w-[6.0625rem] h-[5.75rem] max-md:top:[0] bg-c-nht opacity-10 max-md:w-[2.375rem] max-md:h-[2.5rem]'></div>
            <div className='absolute left-[6.0625rem] top-[5.75rem] w-[3.5625rem] h-[3.5625rem] bg-c-nht opacity-10 max-md:w-[1.25rem] max-md:h-[1.0625rem] max-md:top-[2.5rem] max-md:left-[2.375rem]'></div>
            <div className='h-full w-full relative'>
              <Image
                src={dauphayImg}
                alt='dau phay'
                className='absolute left-0 top-[5%] w-[1.375rem] h-[1.375rem] max-md:w-[0.92688rem] max-md:h-[0.92688rem] max-md:top-[3%]'
              />
              <Image
                src={dauphayImg}
                alt='dau phay'
                className='w-[1.375rem] h-[1.375rem] absolute bottom-[5%] left-[37%] dauphay2 max-md:w-[0.92688rem] max-md:h-[0.92688rem] max-md:left-[68%]'
              />
              <p className='font-SVNLagu text-gray-900 font-semibold leading-1.4 text-[2rem] max-md:text-[1.125rem]'>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Thang máy
                gia đình không chỉ là phương tiện di chuyển, mà còn là cầu nối
                giữa các khoảnh khắc yêu thương, làm tình cảm gia đình trở nên
                gần gũi và ấm áp hơn bao giờ hết.
              </p>
            </div>
          </div>
        </div>
        <div className='h-[27.25rem] flex w-full max-md:flex-col-reverse max-md:w-full max-md:h-fit relative'>
          <div className='md:hidden w-[2.1875rem] h-[2.1875rem] bg-c-nht opacity-10 absolute bottom-full right-0'></div>
          <div className='w-[51%] relative max-md:w-full'>
            <div className='absolute top-0 right-0 w-[3.5625rem] h-[3.5625rem] bg-c-nht opacity-10 max-md:top-[unset] max-md:bottom-0 max-md:w-[2.1875rem] max-md:h-[2.125rem]'></div>
            <div className='md:hidden w-[0.875rem] h-[0.6875rem] bg-c-nht opacity-10 absolute bottom-[2.125rem] right-[2.1875rem]'></div>
            <div className='w-full pt-[7.13rem] pl-[6.19rem] pr-[7.62rem] pb-[8.31rem] max-md:pt-[2.63rem] max-md:px-3 max-md:pb-[3.38rem]'>
              <h2 className='text-c-nht font-SVNLagu text-xl font-medium tracking-[0.1rem] uppercase leading-1.5 mb-6 max-md:mb-3'>
                chăm sóc <br className='md:hidden' /> những người yêu thương
              </h2>
              <p className='font-Iciel font-normal text-lg leading-1.5 text-[rgba(28,32,28,0.70)] max-md:text-[0.875rem]'>
                Rất nhiều các căn hộ thông tầng hay Duplex hay các Vilas biệt
                thự được hưởng lợi ích từ việc lắp thang máy. Thang máy giúp
                việc đi lại giữa các tầng hay các toà nhà thuận tiện hơn, điều
                này đặc biệt có ý nghĩa khi chủ nhà có người già hay trẻ em, đi
                thang máy sẽ an toàn hơn hạn chế việc ngã hay trượt chân như khi
                đi thang bộ.
              </p>
            </div>
          </div>
          <Image
            src={imgItem2}
            alt='item2'
            className='w-[49%] object-cover h-full max-md:w-full'
          />
        </div>
      </section>
    </div>
  )
}

export default PerfectChoiceJE