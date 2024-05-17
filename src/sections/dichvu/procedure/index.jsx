'use client'
import React, {useRef, useState, useEffect} from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import {Swiper, SwiperSlide} from 'swiper/react'
import {useGSAP} from '@gsap/react'
import './styles.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'swiper/css'
import 'swiper/css/effect-fade'
import {EffectFade, Navigation, Pagination} from 'swiper/modules'
const Procedure = ({data}) => {
  const [item, setItem] = useState(data?.list_procedure[0])
  const [activeIndex, setActiveIndex] = useState(0)
  const swiperRef = useRef(null);
  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(activeIndex);
    }
  }, [activeIndex]);
  useEffect(() => {
    AOS.init()
  }, [])

  useEffect(() => {
    AOS.refresh()
  }, [item])

  const firstRef = useRef(null)
  useGSAP(() => {
    gsap.to(firstRef.current, {
      scrollTrigger: {
        trigger: firstRef.current,
        pin: true,
        start: 'top 0',
        end: 'bottom+=600 center',
        markers:true,
        onUpdate: (self) => {
          setTimeout(() => {
            if (self.progress < 0.2) {
              setItem(data?.list_procedure[0])
              setActiveIndex(0)
            } else if (self.progress < 0.4) {
              setItem(data?.list_procedure[1])
              setActiveIndex(1)
            } else if (self.progress < 0.6) {
              setItem(data?.list_procedure[2])
              setActiveIndex(2)
            } else if (self.progress < 0.8) {
              setItem(data?.list_procedure[3])
              setActiveIndex(3)
            } else {
              setItem(data?.list_procedure[4])
              setActiveIndex(4)
            }
          }, 1500)
        },
      },
    })
  })
  return (
    <section
      className='flex max-h-screen max-lg:max-h-[40vh] max-lg:h-[40vh] overflow-hidden'
      ref={firstRef}
    >
      <div className='w-[58%] pt-[10.6rem] pl-[4.75rem]'>
        <h2
          className=' font-SVNLagu text-[3rem] font-semibold leading-1.3 border-b border-[rgba(28,32,28,0.10)] pb-[2.31rem] mb-[3.75rem] [&>p>strong]:font-semibold [&>p>strong]:text-yellow-500'
          dangerouslySetInnerHTML={{__html: data?.heading}}
        ></h2>
        <div
          className='w-[48.7rem] h-[24.4rem]'
          data-aos='fade-up'
          key={item?.name_step}
        >
          <h3 className='font-SVNLagu font-semibold leading-1.3 text-[1.75rem] text-grey-800 mb-[0.94rem] [&>p>strong]:font-semibold' dangerouslySetInnerHTML={{__html:item?.name_step}}>
   
          </h3>
          <div className='mb-[1.62rem] font-Iciel text-[1.125rem] leading-1.5 font-normal text-grey-400'>
            {item?.desc}
          </div>
          {item?.list_steps.map((item, index) => (
            <div
              key={index}
              className='flex items-center mb-[1.25rem]'
            >
              <div className='w-[1.5rem] h-[1.5rem] rounded-[50%] bg-yellow-500 text-white font-SVNLagu text-[0.75rem] flex justify-center items-center mr-2'>
                {index + 1}
              </div>
              <span className='font-Iciel text-[1.125rem] leading-1.5 font-normal text-grey-400'>
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className='w-[42%]'>
        <Swiper
         ref={swiperRef}
        initialSlide={activeIndex}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          effect={'fade'}
          modules={[EffectFade, Navigation, Pagination]}
          className='mySwiper'
        >
          {(data?.list_procedure||[]).map((item, index) => (
            <SwiperSlide key={index}>
              <Image
                src={item?.img?.url}
                width={1500}
                height={1500}
                className='h-[100vh] max-lg:h-[40vh] object-cover'
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Procedure
