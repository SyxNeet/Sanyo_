'use client'
import React, {useState, useEffect} from 'react'
import ButtonSLide from '../../components/buttonSlideSixReasons/ButtonSLide'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation, Pagination, FreeMode} from 'swiper/modules'
import { Fade } from 'react-awesome-reveal'
import 'swiper/css'
import './style.css'
import ReasonChoose from '../reasonChoose'
const SixReasons = ({isMobile, data, isJapan}) => {
  const slides = data?.sixReasons?.slide_six_reasons.slice(0, 6)
  const [activeSlide, setActiveSlide] = useState(0)
  const handleSlideChange = (swiper) => {
    setActiveSlide(swiper.activeIndex)
  }
  const breakpoints = {
    0: {
      slidesPerView: 1.1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 1.6,
      spaceBetween: 26,
    },
    1024: {
      slidesPerView: 1.9,
      spaceBetween: 26,
    },
  }
  return (
    <div className=' flex flex-col max-md:pl-0'>
      <div className='pl-[6.25rem] max-md:pl-0'>
<Fade direction='down' fraction={0} triggerOnce={true}>
          <h2
            className={`font-SVNLagu text-[3.125rem] font-semibold leading-[140%] w-[49rem] mb-3 max-md:mb-2 max-md:px-4 max-md:text-[1.5rem] max-md:order-1 max-md:w-[20.9375rem] [&>p>strong]:font-semibold ${
              isJapan ? '[&>p>strong]:text-c-nht' : '[&>p>strong]:text-yellow-500'
            }`}
  
            dangerouslySetInnerHTML={{__html: data?.sixReasons?.heading}}
          ></h2>
</Fade>
        <div className='flex justify-between mb-[1.96rem]'>
<Fade direction='left' triggerOnce={true}>
            <span
              className='w-[35rem] font-Iciel block text-base leading-[150%] font-normal mb-[0.5rem]  max-md:text-[0.875rem] max-md:text-justify max-md:px-4 max-md:w-full max-md:mb-6'
      
            >
              {data?.sixReasons?.desc}
            </span>
</Fade>
<Fade triggerOnce direction='right'>
            <div
              className='pr-[7rem] max-md:hidden'
     
            >
              <div className='flex'>
                <ButtonSLide
                  className={` swiper-button-prev-sixReasons ${
                    isJapan
                      ? 'border-c-nht hover:bg-c-nht'
                      : '!border-yellow-500 hover:!bg-yellow-500'
                  } transition ease-in cursor-pointer w-[3.5rem] h-[3.5rem] mr-[0.75rem] md:hover:border-white md:hover:bg-[#FE4127] max-md:bg-yellow-500 max-md:border-yellow-500 max-md:w-[2.5rem] max-md:h-[2.5rem]`}
                  classNameSvg={`w-[1rem] h-[1rem]  ${
                    isJapan ? 'text-c-nht' : 'text-yellow-500'
                  } md:group-hover:text-white max-md:text-black max-md:w-[0.875rem] max-md:h-[0.875rem]`}
                  isJapan={isJapan}
                />
                <ButtonSLide
                  className={` swiper-button-next-sixReasons ${
                    isJapan
                      ? 'border-c-nht hover:bg-c-nht'
                      : '!border-yellow-500 hover:!bg-yellow-500'
                  } transition ease-in cursor-pointer w-[3.5rem] h-[3.5rem] mr-[0.75rem] md:hover:border-white md:hover:bg-[#FE4127] max-md:bg-yellow-500 max-md:border-yellow-500 max-md:w-[2.5rem] max-md:h-[2.5rem]`}
                  classNameSvg={`w-[1rem] h-[1rem] ${
                    isJapan ? 'text-c-nht' : 'text-yellow-500'
                  } rotate-180 md:group-hover:text-white max-md:text-black max-md:w-[0.875rem] max-md:h-[0.875rem]`}
                />
              </div>
            </div>
</Fade>
        </div>
      </div>

      <div
        className='overflow-auto'
      >
        <Swiper
          className='mySwiperSix overflow-hidden !ml-[6.25rem] max-md:!ml-0'
          pagination={{
            type: 'fraction',
            el: '.swiper-pagination-sixReasons',
          }}
          freeMode={isMobile ? true : false}
          speed={800}
          navigation={{
            nextEl: '.swiper-button-next-sixReasons',
            prevEl: '.swiper-button-prev-sixReasons',
          }}
          breakpoints={breakpoints}
          modules={[Pagination, Navigation, FreeMode]}
          onSlideChange={handleSlideChange}
        >
          {slides?.map((slide, index) => (
            <SwiperSlide
              key={index}
              className='max-md:pl-3'
            >
              <ReasonChoose data={slide} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className='md:hidden flex px-3 mt-[1.5rem] justify-between'>
        <div className='flex'>
          <ButtonSLide
            className={`swiper-button-prev-sixReasons ${
              isJapan ? 'border-c-nht' : '!border-yellow-500'
            } transition ease-in cursor-pointer w-[3.5rem] h-[3.5rem] mr-[0.75rem] md:hover:border-white md:hover:bg-[#FE4127] ${
              !isJapan ? 'max-md:bg-yellow-500' : 'max-md:bg-c-nht'
            } ${
              isJapan ? 'max-md:border-c-nht' : 'max-md:border-yellow-500'
            } max-md:w-[2.5rem] max-md:h-[2.5rem]`}
            classNameSvg={`w-[1rem] h-[1rem] text-[#FE4127] ${
              isJapan ? 'text-[#FE4127]' : 'text-white'
            }  md:group-hover:text-white ${
              isJapan ? 'text-white' : 'text-black'
            } max-md:w-[0.875rem] max-md:h-[0.875rem]`}
          />
          <ButtonSLide
            className={`swiper-button-next-sixReasons  ${
              isJapan ? 'border-[#FE4127]' : 'border-yellow-500'
            }transition ease-in cursor-pointer w-[3.5rem] h-[3.5rem] mr-[0.75rem] md:hover:border-white md:hover:bg-[#FE4127] ${
              !isJapan ? 'max-md:bg-yellow-500' : 'max-md:bg-c-nht'
            } ${
              isJapan ? 'max-md:border-c-nht' : 'max-md:border-yellow-500'
            } max-md:w-[2.5rem] max-md:h-[2.5rem]`}
            classNameSvg={`w-[1rem] h-[1rem] ${
              isJapan ? 'text-[#FE4127]' : 'text-white'
            } rotate-180 md:group-hover:text-white ${
              isJapan ? 'text-white' : 'text-black'
            } max-md:w-[0.875rem] max-md:h-[0.875rem]`}
          />
        </div>
        <div
          className={`swiper-pagination-sixReasons hidden w-[4.3125rem] rounded-full  h-[2.5rem] bg-yellow-500 bg-opacity-10 max-md:flex items-center justify-center ${
            isJapan ? '!text-c-nht' : '!text-yellow-500'
          } font-Iciel text-sm `}
        ></div>
      </div>
    </div>
  )
}

export default SixReasons
