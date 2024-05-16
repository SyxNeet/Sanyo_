'use client'
import React from 'react'
import {useState, useEffect, useRef} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import ButtonSlide from '@/components/buttonSlideSixReasons/ButtonSLide'
import Image from 'next/image'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import {EffectFade, Navigation, Pagination} from 'swiper/modules'
import '../styles.css'
import {Fade} from 'react-awesome-reveal'
const SecondReasons = ({lang, isMobile, data}) => {
  const [maxHeightSecond, setMaxHeightSecond] = useState('24.5rem')
  const [activeIndex, setActiveIndex] = useState(0)
  const [showAllSecond, setShowAllSecond] = useState(false)
  const [expanded, setExpanded] = useState(
    Array(data?.list_system?.length).fill(false),
  )
  const [expandedIndex, setExpandedIndex] = useState(0)

  //handle load more second
  const handleLoadMoreSecond = () => {
    if (!showAllSecond) {
      setMaxHeightSecond(
        `${
          isMobile
            ? 5 * (data?.list_system?.length - 3) + 25
            : 4.5 * (data?.list_system?.length - 3) + 25
        }rem`,
      )
    } else {
      setMaxHeightSecond('24.5rem')
    }
    setShowAllSecond(!showAllSecond)
  }
  //handle plus show desc
  const toggleItem = (index) => {
    const newExpanded = [...expanded]
    newExpanded[index] = !newExpanded[index]
    setExpanded(newExpanded)
    setExpandedIndex(index)
  }
  return (
    <div>
      {/* second reason */}
      <div className='flex'>
        <div className='w-[50%] border-r border-[rgba(28,32,28,0.10)] relative  flex justify-end items-center overflow-hidden max-h-[56.25rem] h-[56.25rem] max-md:hidden max-md:border-none'>
          <div className='absolute right-0 top-0 w-[9.375rem] h-[5.5625rem] bg-yellow-500 opacity-10 max-md:hidden'></div>
          <div className='absolute right-[9.375rem] top-[5.5625rem] w-[3.75rem] h-[3.4375rem] bg-yellow-500 opacity-10 max-md:hidden'></div>

          <Image
            src='/images/familyElevator/detailFE/bgslide.svg'
            width={200}
            height={200}
            className='absolute w-full h-full left-0 bottom-0 object-cover -z-10'
            alt='bg-slide'
          />
            <div className='titleSlide absolute bg-[rgba(0,0,0,0.4)] uppercase text-white  text-[1rem] font-Iciel leading-1.5 px-6 py-[0.62rem] rounded-[0.375rem] w-fit top-[2.56rem] left-[2rem] z-[999999] backdrop-blur-[12.5px]'>
              {data?.slide[activeIndex]?.name}
            </div>
          <ButtonSlide
            className={
              'prevBtnRtwo absolute w-[3.5rem] h-[3.5rem] border-yellow-500 group-hover:border-yellow-500 max-md:w-[2.11056rem] max-md:h-[2.11056rem] transition left-[1.81rem] top-[50%] hover:bg-yellow-500  z-[999999] cursor-pointer'
            }
            classNameSvg={
              ' group-hover:text-white max-d:w-[0.75rem] max-md:h-[0.75rem] md:w-[1rem] lg:w-[1.25rem] lg:h-[1.25rem] transition text-yellow-500'
            }
          />
          <ButtonSlide
            className={
              'nextBtnRtwo absolute w-[3.5rem] h-[3.5rem] border-yellow-500 group-hover:border-yellow-500 max-md:w-[2.11056rem] max-md:h-[2.11056rem] transition top-[50%] right-[1.81rem] hover:bg-yellow-500  z-[999999] cursor-pointer'
            }
            classNameSvg={
              ' group-hover:text-white max-d:w-[0.75rem] max-md:h-[0.75rem] md:w-[1rem] lg:w-[1.25rem] lg:h-[1.25rem] transition text-yellow-500 rotate-180'
            }
          />
          <Swiper
            navigation={{
              nextEl: '.nextBtnRtwo',
              prevEl: '.prevBtnRtwo',
            }}
            effect={'fade'}
            fadeEffect={{crossFade: true}}
            slidesPerView={4}
            modules={[EffectFade, Navigation, Pagination]}
            className='mySwiperSystem'
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          >
            {(data?.slide || []).map((item, index) => (
              <SwiperSlide
                key={index}
                className='relative !flex !justify-center'
              >
                <div>
                  <Image
                    src={item?.image?.url}
                    alt={item?.image?.alt}
                    width={1000}
                    height={1000}
                    className='w-[43.25rem] h-[33rem] object-contain '
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className='border-t w-[50%] border-[rgba(28,32,28,0.10)] mt-[7.12rem] relative max-md:w-full max-md:mt-8 max-md:border-none '>
          <div className='absolute right-0 top-0 w-[9.375rem] h-[5.5625rem] bg-yellow-500 opacity-10 max-md:hidden'></div>
          <div className='absolute right-0 bottom-0 w-[14.125rem] h-[5.5625rem] bg-yellow-500 opacity-10 max-md:hidden'></div>
          <div className='absolute right-[9.375rem] bottom-full w-[3.75rem] h-[3.4375rem] bg-yellow-500 opacity-10 max-md:hidden'></div>
      <Fade direction='right'>
            <div className='pt-[3.12rem] pl-[3.94rem] pr-[6.37rem] pb-[7rem] max-md:py-0 max-md:px-3'>
              <h3
                className={`font-SVNLagu text-[3.125rem] leading-1.3 font-semibold w-[31.125rem] mb-10 max-md:w-full max-md:text-[1.25rem] max-md:mb-[1.12rem] `}
              >
                <span className='font-SVNLagu text-[3.125rem] leading-1.3 font-semibold mb-[1.5rem] max-md:text-[1.25rem] max-md:mb-2 md:hidden'>
                  2.{' '}
                </span>
                {data?.heading}
              </h3>
              <div
                className='secondReasons overflow-hidden'
                style={{height: maxHeightSecond}}
              >
                {(data?.list_system || []).map((item, index) => (
                  <div
                    className={`itemShowmore mb-[1.25rem] border-b border-[rgba(28,32,28,0.10)] pb-5 ${
                      expandedIndex === index ? 'h-[16rem]' : 'h-[3rem]'
                    } overflow-hidden`}
                    key={index}
                  >
                    <div
                      className='flex items-center justify-between mb-5 cursor-pointer'
                      onClick={() => toggleItem(index)}
                    >
                      <span
                        className={`text-[1.3125rem] font-SVNLagu font-medium leading-1.5 max-md:text-[1rem] ${
                          expandedIndex === index ? 'text-yellow-500' : ''
                        }`}
                      >
                        {item.name}
                      </span>
                      <Image
                        src={
                          expandedIndex === index
                            ? '/images/familyElevator/detailFE/minus.svg'
                            : '/images/familyElevator/detailFE/plus.svg'
                        }
                        width={16}
                        height={16}
                        className='w-[1.25rem] h-[1.25rem]'
                        alt='icon'
                      />
                    </div>
                    <span className='font-Iciel text-[1.125rem] font-normal leading-1.5 text-[rgba(28,32,28,0.70)] max-md:text-[0.875rem]'>
                      {item.desc}
                    </span>
                  </div>
                ))}
              </div>
              <div
                className='flex items-center flex-row-reverse justify-start w-fit pt-6 cursor-pointer '
                onClick={handleLoadMoreSecond}
              >
                <Image
                  src={'/images/familyElevator/detailFE/down.svg'}
                  width={30}
                  height={30}
                  alt='down'
                  className={`listSecurity w-[1.1875rem] h-[1.1875rem] max-md:w-[0.8125rem] max-md:h-[0.8125rem]${
                    showAllSecond ? 'transform -rotate-180' : 'transform rotate-0'
                  }`}
                />
                <span className='uppercase text-[1.125rem] text-yellow-500 mr-[0.62rem] font-medium leading-1.5 max-md:text-[0.875rem]'>
                  {showAllSecond
                    ? lang === 'en'
                      ? 'see less'
                      : 'rút gọn'
                    : lang === 'en'
                    ? 'see more'
                    : 'xem thêm'}
                </span>
              </div>
            </div>
      </Fade>
        </div>
      </div>
    </div>
  )
}

export default SecondReasons
