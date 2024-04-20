'use client'
import React, {useRef} from 'react'
import Link from 'next/link'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation,Pagination} from 'swiper/modules'
import Image from 'next/image'
import logoImgJE from '../../../public/images/japanElevator/logo.png'
import sunImg from '../../../public/images/japanElevator/sun.png'
import {exampleSLideJpElevator} from '../../../data/japanElevator'
import imgHoaSen from '../../../public/images/japanElevator/hoasen.png'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import 'swiper/css'
import './styles.css'
import ButtonSlide from '@/components/buttonSlideSixReasons/ButtonSLide'

const JapanElevator = ({isMobile}) => {
  const firstRef = useRef(null)
  useGSAP(() => {
    gsap.to(firstRef.current, {
      scrollTrigger: {
        trigger: firstRef.current,
        pin: true,
        start: 'top top',
        end: 'bottom top',
        pinSpacing: false,
      },
    })
  }, [])
  return (
    <div className=''>
      <section
        className='pt-4'
        id='sectionSunRise'
      >
        <div className='pl-[6.25rem] max-md:pl-3'>
          <Link
            href='/'
            className='text-[#33383E] opacity-50 font-Iciel font-medium text-sm leading-1.5 mr-[0.44rem] uppercase'
          >
            Trang chủ /
          </Link>
          <Link
            href='/'
            className='text-[#33383E]  font-Iciel font-medium text-sm leading-1.5 mr-[0.44rem] uppercase '
          >
            thang máy nhật bản
          </Link>
        </div>
        <div className='relative pt-[7.5rem] pb-[5rem] overflow-hidden max-md:pt-[3.96rem] max-md:pb-[1.55rem]'>
          <Image
            src={sunImg}
            alt='Sun image'
            className='absolute top-[65%] left-[2%] w-[29.875rem] h-[29.875rem] max-md:left-[-11%] max-md:w-[10.50131rem] max-md:h-[10.50131rem]'
            id='sunRiseImg'
          />
          <Image
            src={imgHoaSen}
            alt='Hoa Sen'
            className='absolute right-[-7%] bottom-[-22%] md:hidden'
            id='hoaSenImg'
          />
          <div className='relative flex flex-col w-fit pl-[10.25rem] items-end max-md:pl-3 max-md:items-start'>
            <Image
              src={logoImgJE}
              alt='logo Sanyo'
              className='absolute w-[5.5rem] h-[5.5rem] left-full bottom-[70%] max-md:hidden'
            />
            <h1 className=' text-[5.71719rem] font-SVNLagu font-semibold leading-[130%] max-md:text-[1.875rem] max-md:mb-3'>
              Thang máy Nhật Bản
            </h1>
            <p className='text-right w-[37.625rem] text-[1rem] text-[#6D7279] font-normal leading-1.5 max-md:text-[0.875rem] max-md:text-left max-md:w-[20.4375rem]'>
              {isMobile
                ? 'SANYO YUSOKI đã và đang tiếp tục cống hiến và liên tục đổi mới để góp phần vào sự phát triển của ngành thang máy. Chúng tôi tin rằng với một nền móng vững chắc sẽ cho ra đời những sản phẩm thang máy chất lượng nhất'
                : 'SANYO YUSOKI đã và đang tiếp tục cống hiến và liên tục đổi mới để góp phần vào sự phát triển của ngành thang máy.'}
            </p>
          </div>
        </div>
      </section>
      <div
        class='slideThumbJE max-md:flex max-md:flex-col'
        ref={firstRef}
      >
        <div className='max-md:flex order-3 px-3 max-md:pt[1.38rem]'>
          <div className='flex justify-between'>
            <ButtonSlide
              className={
                ' swiper-button-prev-thumbJE border-[#fff] transition ease-in cursor-pointer w-[3.20513rem] h-[3.20513rem] mr-[0.75rem] bg-white md:hover:border-[white] md:hover:bg-white max-md:bg-white max-md:border-[#FE4127] max-md:w-[2.5rem] max-md:h-[2.5rem] absolute z-20  top-[54%] left-[9%] max-md:relative max-md:left-[unset] max-md:top-[unset]'
              }
              classNameSvg={
                'w-[1rem] h-[1rem] text-[#FE4127] md:group-hover:text-white max-md:text-[#FE4127] max-md:w-[0.875rem] max-md:h-[0.875rem]'
              }
            />
            <ButtonSlide
              className={
                ' swiper-button-next-thumbJE border-[#fff] transition ease-in cursor-pointer w-[3.20513rem] h-[3.20513rem] mr-[0.75rem] bg-white md:hover:border-white md:hover:bg-white max-md:bg-white max-md:border-[#FE4127] max-md:w-[2.5rem] max-md:h-[2.5rem] absolute z-20  top-[54%] right-[9%] max-md:relative max-md:right-[unset] max-md:top-[unset]'
              }
              classNameSvg={
                'w-[1rem] h-[1rem] text-[#FE4127] md:group-hover:text-white max-md:text-[#FE4127] max-md:w-[0.875rem] max-md:h-[0.875rem] rotate-180'
              }
            />
          </div>
          <div className='processSlideJE md:hidden'></div>
        </div>
        <Swiper
          navigation={{
            nextEl: '.swiper-button-next-thumbJE',
            prevEl: '.swiper-button-prev-thumbJE',
          }}
          pagination={{
            type: 'progressbar',
            el: '.processSlideJE',
          }}
          breakpoints={{
            0: {
              slidesPerView: 1.2,
              spaceBetween: 12,
            },
            768: {
              slidesPerView: 1.3,
              spaceBetween: 30,
            },
          }}
          modules={[Pagination, Navigation]}
          className='mySwiperOnlyImages order-1'
        >
          {exampleSLideJpElevator.map((img, index) => (
            <SwiperSlide
              key={index}
              className={`!h-[42.92581rem] max-md:!h-[13.76756rem] !w-[fit-content]`}
            >
              <div className='relative w-full h-full'>
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={1500}
                  height={1500}
                  className='object-cover h-full rounded-[0.5rem] w-full relative z-[1]'
                />
                <span className='absolute z-10 bottom-[20%] left-[3.43rem] max-md:left-4 max-md:bottom-[7%] rounded-[0.34344rem] border-[0.458px] border-[#fff] bg-[rgba(0,0,0,0.40)] px-[1.37rem] py-[0.57rem] backdrop-blur-[11.44688606262207px] text-[0.91575rem] font-Iciel font-medium leading-1.5 uppercase text-white'>
                  {img.title}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className='h-[300vh] bg-pink-500 relative z-10'>ajhsdhakjs</div>
    </div>
  )
}

export default JapanElevator
