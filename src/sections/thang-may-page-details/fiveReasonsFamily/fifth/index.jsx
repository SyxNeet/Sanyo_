import React, {useState, useEffect, useRef} from 'react'
import Image from 'next/image'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/grid';
import ButtonSlide from '@/components/buttonSlideSixReasons/ButtonSLide'
import {Pagination, Navigation,Grid} from 'swiper/modules'
import CardDesign from '@/components/cardDesign'
import '../styles.css'
const FifthReason = ({isMobile}) => {
  console.log(isMobile)
  const [active, setActive] = useState(0)
  const data = {
    'COP and HOP': [
      {
        name: 'COP and HOP 1',
        id: 'CH01',
        imgUrl: '/images/familyElevator/detailFE/gach.png',
      },
      {
        name: 'COP and HOP 2',
        id: 'CH02',
        imgUrl: '/images/familyElevator/detailFE/gach.png',
      },
      {
        name: 'COP and HOP 3',
        id: 'CH03',
        imgUrl: '/images/familyElevator/detailFE/gach.png',
      },
      {
        name: 'COP and HOP 4',
        id: 'CH04',
        imgUrl: '/images/familyElevator/detailFE/gach.png',
      },
      {
        name: 'COP and HOP 5',
        id: 'CH05',
        imgUrl: '/images/familyElevator/detailFE/gach.png',
      },
      {
        name: 'COP and HOP 6',
        id: 'CH06',
        imgUrl: '/images/familyElevator/detailFE/gach.png',
      },
    ],
    'Floor Design': [
      {
        name: 'Floor Design 1',
        id: 'FD01',
        imgUrl: '/images/familyElevator/detailFE/gach.png',
      },
      {
        name: 'Floor Design 2',
        id: 'FD02',
        imgUrl: '/images/familyElevator/detailFE/gach.png',
      },
      {
        name: 'Floor Design 3',
        id: 'FD03',
        imgUrl: '/images/familyElevator/detailFE/gach.png',
      },
      {
        name: 'Floor Design 4',
        id: 'FD04',
        imgUrl: '/images/familyElevator/detailFE/gach.png',
      },
      {
        name: 'Floor Design 5',
        id: 'FD05',
        imgUrl: '/images/familyElevator/detailFE/gach.png',
      },
      {
        name: 'Floor Design 6',
        id: 'FD06',
        imgUrl: '/images/familyElevator/detailFE/gach.png',
      },
    ],
    'Ceiling Design': [
      {
        name: 'Ceiling Design 1',
        id: 'CD01',
        imgUrl: '/images/familyElevator/detailFE/gach.png',
      },
      {
        name: 'Ceiling Design 2',
        id: 'CD02',
        imgUrl: '/images/familyElevator/detailFE/gach.png',
      },
      {
        name: 'Ceiling Design 3',
        id: 'CD03',
        imgUrl: '/images/familyElevator/detailFE/gach.png',
      },
      {
        name: 'Ceiling Design 4',
        id: 'CD04',
        imgUrl: '/images/familyElevator/detailFE/gach.png',
      },
      {
        name: 'Ceiling Design 5',
        id: 'CD05',
        imgUrl: '/images/familyElevator/detailFE/gach.png',
      },
      {
        name: 'Ceiling Design 6',
        id: 'CD06',
        imgUrl: '/images/familyElevator/detailFE/gach.png',
      },
    ],
    'Handrail Design': [
      {
        name: 'Handrail Design 1',
        id: 'HD01',
        imgUrl: '/images/familyElevator/detailFE/gach.png',
      },
      {
        name: 'Handrail Design 2',
        id: 'HD02',
        imgUrl: '/images/familyElevator/detailFE/gach.png',
      },
      {
        name: 'Handrail Design 3',
        id: 'HD03',
        imgUrl: '/images/familyElevator/detailFE/gach.png',
      },
      {
        name: 'Handrail Design 4',
        id: 'HD04',
        imgUrl: '/images/familyElevator/detailFE/gach.png',
      },
      {
        name: 'Handrail Design 5',
        id: 'HD05',
        imgUrl: '/images/familyElevator/detailFE/gach.png',
      },
      {
        name: 'Handrail Design 6',
        id: 'HD06',
        imgUrl: '/images/familyElevator/detailFE/gach.png',
      },
    ],
    'Door Finishing': [
      {
        name: 'Door Finishing 1',
        id: 'DF01',
        imgUrl: '/images/familyElevator/detailFE/gach.png',
      },
      {
        name: 'Door Finishing 2',
        id: 'DF02',
        imgUrl: '/images/familyElevator/detailFE/gach.png',
      },
      {
        name: 'Door Finishing 3',
        id: 'DF03',
        imgUrl: '/images/familyElevator/detailFE/gach.png',
      },
      {
        name: 'Door Finishing 4',
        id: 'DF04',
        imgUrl: '/images/familyElevator/detailFE/gach.png',
      },
      {
        name: 'Door Finishing 5',
        id: 'DF05',
        imgUrl: '/images/familyElevator/detailFE/gach.png',
      },
      {
        name: 'Door Finishing 6',
        id: 'DF06',
        imgUrl: '/images/familyElevator/detailFE/gach.png',
      },
    ],
  }

  const activeKey = Object?.keys(data)[active]
  const activeArray = data[activeKey]
  const swiperRef = useRef(null)
  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(0)
    }
  }, [active])

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.on('slideChange', () => {
        let newIndex = (swiperRef.current.swiper.realIndex + 3) % swiperRef.current.swiper.slides.length;
        setActiveIndex(newIndex);
      });
    }
  }, []);
  return (
    <div className='pt-[5.12rem]  bg-[#42484F] text-white relative h-[58rem] fiththReason max-md:h-fit w-full overflow-hidden'>
      <Image
        src='/images/familyElevator/detailFE/bgReason5.svg'
        width={1000}
        height={1000}
        className='w-full h-full absolute bottom-0 right-0 object-cover z-[1] max-md:hidden'
        alt='bgReason5'
      />
      <h3 className='font-SVNLagu text-[4rem] font-normal leading-1.5 mb-[3.38rem] pl-[6.25rem] max-md:pl-3 max-md:text-[1.25rem]'>
        Đa dạng lựa chọn thiết kế
      </h3>
      <div className='flex ml-[6.25rem] border-b border-[rgba(255,255,255,0.20)] space-x-[4.94rem] relative z-10 mb-[3.06rem] w-fit max-md:ml-3 max-md:space-x-[1.69rem] max-md:w-[36.8rem] overflow-auto max-md:mb-[1.84rem]'>
        {Object?.keys(data).map((key, index) => (
          <div
            key={index}
            onClick={() => setActive(index)}
            className={`${
              active === index
                ? 'text-[#E1C48D] border-b-4 border-[#E1C48D]'
                : ''
            } cursor-pointer whitespace-nowrap font-Iciel text-[0.875rem] font-medium uppercase leading-1.5 pb-[1.25rem] hover:text-[#E1C48D] transition duration-150 max-md:pb-[0.81rem]`}
          >
            {key}
          </div>
        ))}
      </div>


      <div>
        <Swiper
          ref={swiperRef}
          pagination={{
            type: 'progressbar',
            el: '.processFifth',
          }}
          grid={{
            rows: isMobile?2:1,
            fill: "row",
          }}
          slidesPerView={isMobile?2:3.6}
          loop={isMobile?false:true}
          spaceBetween={!isMobile?8:16}
          navigation={{
            nextEl: '.swiper-button-next-fifthRS',
            prevEl: '.swiper-button-prev-fifthRS',
          }}
          modules={[Pagination, Navigation,Grid]}
          className='mySwiper !ml-[6.25rem] max-md:!ml-0 max-md:!px-3'
        >
          {activeArray?.map((item, index) => (
            <SwiperSlide key={index}  className={index === activeIndex ? 'brightness-50 max-md:brightness-100' : ''}>
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
