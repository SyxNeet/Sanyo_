import React, {useState, useEffect, useRef} from 'react'
import Image from 'next/image'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/grid'
import ButtonSlide from '@/components/buttonSlideSixReasons/ButtonSLide'
import {Pagination, Navigation, Grid} from 'swiper/modules'
import CardDesign from '@/components/cardDesign'
import { Fade } from 'react-awesome-reveal'
import '../styles.css'
const FifthReason = ({isMobile, data}) => {
  const [active, setActive] = useState(0)
  const activeKey = data?.list_design[active]
  const activeItemRef = useRef(null);
  const activeArray = activeKey?.design?.list_product
  const swiperRef = useRef(null)
  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(0)
    }
  }, [active])

  const handleClick = (index) => {
    setActive(index);
    if (isMobile) {
      const noScrollBar = document.querySelector('.noScrollBar');
      const itemElement = document.querySelector('.itemList'); 
      if (noScrollBar && itemElement) {
        let scrollLeft;
        if (index === 0) {
          scrollLeft = 0;
        } else {
          scrollLeft = index * (itemElement.offsetWidth + 30);
        }
        noScrollBar.scroll({ left: scrollLeft, behavior: 'smooth' });
      }
    }
  };
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.on('slideChange', () => {
        let newIndex =
          (swiperRef.current.swiper.realIndex + 3) %
          swiperRef.current.swiper.slides.length
        setActiveIndex(newIndex)
      })
    }
  }, [])
  return (
    <div className='pt-[5.12rem]  bg-[#42484F] text-white relative h-[58rem] fiththReason max-md:h-fit w-full max-md:pt-[3rem] max-md:pb-1'>
      <Image
        src='/images/familyElevator/detailFE/bgReason5.svg'
        width={1000}
        height={1000}
        className='w-full h-full absolute bottom-0 right-0 object-cover z-[1] max-md:hidden'
        alt='bgReason5'
      />
      <div className='flex items-center mb-[3.38rem] pl-[6.25rem] max-md:mb-[1.5rem] max-md:pl-3' >
      <p className='font-SVNLagu text-[3.125rem] leading-1.3 font-semibold  max-md:text-[1.25rem]  md:hidden mr-1'>5. </p>
  <Fade direction='down' triggerOnce={true}>
        <h3 className='font-SVNLagu text-[4rem] font-semibold leading-1.5 max-md:text-[1.25rem]  [&>p>strong]:font-semibold [&>p>strong]:text-yellow-500  [&>p>strong]:uppercase' dangerouslySetInnerHTML={{__html:data?.heading}}>
        </h3>
  </Fade>
      </div>
     
        <div className='w-full overflow-x-auto noScrollBar'>
          <div className='flex ml-[6.25rem] border-b border-[rgba(255,255,255,0.20)] space-x-[4.94rem] relative z-10 mb-[3.06rem] w-fit max-md:ml-3 max-md:space-x-[1.69rem] max-md:max-w-fit max-md:w-fit overflow-x-auto max-md:mb-[1.84rem]'>
            {(data?.list_design||[]).map((key, index) => (
              <div
                key={index}
                ref={index === active ? activeItemRef : null}
                onClick={() => handleClick(index)}
                className={`${
                  active === index
                    ? 'text-[#E1C48D] border-b-4 border-[#E1C48D]'
                    : ''
                } cursor-pointer whitespace-nowrap overflow-auto font-Iciel text-[0.875rem] font-medium uppercase leading-1.5 pb-[1.25rem] hover:text-[#E1C48D] transition duration-150 max-md:pb-[0.81rem] max-md:text-[0.75rem] itemList`}
              >
                {key?.design?.name || 'hh'}
              </div>
            ))}
          </div>
        </div>


      <div>

          <Swiper
            ref={swiperRef}
            pagination={{
              type: 'progressbar',
              el: '.processFifth',
            }}
            speed={800}
            
            grid={{
              rows: isMobile ? 2 : 1,
              fill: 'row',
            }}
            slidesPerView={isMobile ? 2 : 3.6}
            loop={isMobile ? false : true}
            spaceBetween={isMobile ? 16 : 16}
            navigation={{
              nextEl: '.swiper-button-next-fifthRS',
              prevEl: '.swiper-button-prev-fifthRS',
            }}
            modules={[Pagination, Navigation, Grid]}
            className='mySwiper !ml-[6.25rem] max-md:!ml-0 max-md:!px-3'
          >
            {activeArray?.map((item, index) => (
              <SwiperSlide
                key={index}
                className={
                  index === activeIndex
                    ? 'brightness-50 max-md:brightness-100 transition duration-1000 ease-in-out'
                    : 'transition duration-1000 ease-in-out'
                }
              >
                <CardDesign data={item} />
              </SwiperSlide>
            ))}
          </Swiper>

      </div>
      <div className='flex absolute z-10 w-[100%] bottom-[32%] left-0 max-md:relative max-md:bottom-0 max-md:mt-[1.12rem] max-md:px-3 items-start max-md:justify-between mb-[2.5rem]'>
        <div className='flex justify-between w-full px-[4.5rem] max-md:justify-start max-md:w-fit max-md:px-0'>
          <ButtonSlide
            className={
              'swiper-button-prev-fifthRS border-yellow-500 bg-white transition ease-in cursor-pointer w-[3.5rem] h-[3.5rem] mr-[0.75rem] md:hover:border-white md:hover:bg-yellow-500 max-md:bg-white max-md:border-yellow-500 max-md:w-[2.5rem] max-md:h-[2.5rem]'
            }
            classNameSvg={
              'w-[1rem] h-[1rem]  text-yellow-500 md:group-hover:text-white  max-md:w-[0.875rem] max-md:h-[0.875rem]'
            }
          />
          <ButtonSlide
            className={
              'swiper-button-next-fifthRS border-yellow-500 bg-white transition ease-in cursor-pointer w-[3.5rem] h-[3.5rem] mr-[0.75rem] md:hover:border-white md:hover:bg-yellow-500 max-md:bg-white max-md:border-yellow-500 max-md:w-[2.5rem] max-md:h-[2.5rem]'
            }
            classNameSvg={
              'w-[1rem] h-[1rem] text-yellow-500 rotate-180 md:group-hover:text-white  max-md:w-[0.875rem] max-md:h-[0.875rem]'
            }
          />
        </div>
        <div className='w-[6.25rem] relative  md:hidden'>
          <div className='processFifth rounded-full w-full !bg-[#E6E9F6] [&>.swiper-pagination-progressbar-fill]:!bg-yellow-500'></div>
        </div>
      </div>
    </div>
  )
}

export default FifthReason
