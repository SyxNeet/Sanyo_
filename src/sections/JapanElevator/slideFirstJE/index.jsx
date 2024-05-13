'use client'
import React, {useRef} from 'react'
import Link from 'next/link'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation, Pagination, Autoplay} from 'swiper/modules'
import Image from 'next/image'
import {exampleSLideJpElevator} from '/data/japanElevator'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import '../styles.css'
import ButtonSlide from '@/components/buttonSlideSixReasons/ButtonSLide'
const slideFirstJE = ({isMobile,data,dataAllElevator}) => {

  const dataAllElevatorNew = [dataAllElevator[8],dataAllElevator[7],dataAllElevator[6],dataAllElevator[5],dataAllElevator[4],dataAllElevator[3],dataAllElevator[2],dataAllElevator[1],dataAllElevator[0]]
  const firstRef = useRef(null)
  const outStandingProjectRef = useRef(null)
  const outStandingProjectEndRef = useRef(null)
  useGSAP(() => {
    if (!isMobile) {
      gsap.to(firstRef.current, {
        scrollTrigger: {
          trigger: firstRef.current,
          pin: true,
          start: 'top top',
          end: 'bottom top',
          pinSpacing: false,
          anticipatePin: 1
        },
      })
    }
  }, [isMobile])
  return (
    <section
      className='pt-4'
      id='sectionSunRise'
    >
      <div className='pl-[6.25rem] max-md:pl-3'>
        <Link
          href='/'
          className='text-[#33383E] opacity-50 font-Iciel font-medium text-sm leading-1.5 mr-[0.44rem] uppercase max-md:text-[0.625rem]'
        >
          Trang chủ /
        </Link>
        <Link
          href='/'
          className='text-[#33383E]  font-Iciel font-medium text-sm leading-1.5 mr-[0.44rem] uppercase max-md:text-[0.625rem]'
        >
          thang máy nhật bản
        </Link>
      </div>
      <div className='relative pt-[7.5rem] pb-[5rem] overflow-hidden max-md:pt-[3.96rem] max-md:pb-[1.55rem]'>
        <Image
          src={'/images/japanElevator/Sun.png'}
          alt='Sun image'
          width={500}
          height={500}
          className='absolute lg:top-[65%] md:top-[68%] left-[2%] w-[29.875rem] h-[29.875rem] max-md:left-[-11%] max-md:w-[10.50131rem] max-md:h-[10.50131rem]'
          id='sunRiseImg'
        />
        <Image
          src={'/images/japanElevator/hoasen.png'}
          width={500}
          height={500}
          alt='Hoa Sen'
          className='absolute right-[-7%] bottom-[-22%] md:hidden max-md:w-[6.9375rem] max-md:h-[6.875rem]'
          id='hoaSenImg'
        />
        <div className='relative flex flex-col w-fit items-end max-md:pl-3 max-md:items-start'>
          <Image
            src={'/images/japanElevator/logo.png'}
            width={500}
            height={500}
            alt='logo Sanyo'
            className='absolute w-[5.5rem] h-[5.5rem] left-full bottom-[70%] max-md:hidden'
          />
          <div className='relative flex flex-col w-fit pl-[10.25rem] items-end max-md:pl-3 max-md:items-start'>
            <h1 className=' text-[5.71719rem] font-SVNLagu font-semibold leading-[130%] max-md:text-[1.875rem] max-md:mb-3 [&>p>strong]:text-c-nht [&>p>strong]:font-semibold [&>p>strong]:font-SVNLagu' dangerouslySetInnerHTML={{__html:data?.heading}} >
           </h1>
            <div className='text-right w-[37.625rem] text-[1rem] text-[#6D7279] font-normal leading-1.5 max-md:text-[0.875rem] max-md:text-left max-md:w-[20.4375rem] [&>div>div>strong]:text-grey-900' dangerouslySetInnerHTML={{__html:!isMobile?data?.desc:data?.desc_mb}}>
            </div>
            </div>
      </div>
      </div>
      <div
        className='max-md:flex max-md:flex-col w-full'
        ref={firstRef}
      >
        <div className='max-md:flex order-3 px-3 max-md:pt[1.38rem] w-full items-center justify-between max-md:pt-[1.38rem] '>
          <div className='flex justify-between'>
            <ButtonSlide
              className={
                ' swiper-button-prev-thumbJE border-[#fff] transition ease-in cursor-pointer w-[3.20513rem] h-[3.20513rem] mr-[0.75rem] bg-grey-0 md:hover:border-[white] md:hover:bg-[#FE4127] max-md:bg-grey-0 max-md:border-[#FE4127] max-md:w-[2.5rem] max-md:h-[2.5rem] absolute z-20  top-[54%] left-[9%] max-md:relative max-md:left-[unset] max-md:top-[unset] '
              }
              classNameSvg={
                'w-[1rem] h-[1rem] text-[#FE4127] md:group-hover:text-white max-md:text-[#FE4127] max-md:w-[0.875rem] max-md:h-[0.875rem]'
              }
            />
            <ButtonSlide
              className={
                ' swiper-button-next-thumbJE border-[#fff] transition ease-in cursor-pointer w-[3.20513rem] h-[3.20513rem] mr-[0.75rem] bg-grey-0 md:hover:border-white md:hover:bg-[#FE4127] max-md:bg-grey-0 max-md:border-[#FE4127] max-md:w-[2.5rem] max-md:h-[2.5rem] absolute z-20  top-[54%] right-[9%] max-md:relative max-md:right-[unset] max-md:top-[unset] '
              }
              classNameSvg={
                'w-[1rem] h-[1rem] text-[#FE4127] md:group-hover:text-white max-md:text-[#FE4127] max-md:w-[0.875rem] max-md:h-[0.875rem] rotate-180'
              }
            />
          </div>
          <div className='relative w-[6.25rem]'>
            <div className='processSlideJE rounded-full'></div>
          </div>
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
          className='mySwiperOnlyImages w-screen order-1'
        >
          {dataAllElevatorNew?.map((img, index) => (
            <SwiperSlide
              key={index}
              className='!h-[41.5625rem] max-md:!h-[13.76756rem] '
            >
              <Image
                src={img.thumb||"https://ik.imagekit.io/tvlk/blog/2021/09/du-lich-anh-8-1024x576.jpg?tr=dpr-2,w-675"}
                alt={img.alt||"huy"}
                width={1500}
                height={1500}
                className='object-cover h-full rounded-[0.5rem] w-full'
              />
              <Link href={img.slug} className='absolute z-10 bottom-[9%] left-[3.43rem] max-md:left-4 max-md:bottom-[7%] hover:scale-105 transition duration-300 rounded-[0.34344rem] border-[0.458px] border-[#fff] bg-[rgba(0,0,0,0.40)] px-[1.37rem] py-[0.57rem] backdrop-blur-[11.44688606262207px] text-[0.91575rem] font-Iciel font-medium leading-1.5 uppercase text-white'>
                {img.title}
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default slideFirstJE
