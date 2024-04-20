'use client'
import React, {useRef, useState} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import {Navigation, Pagination, Autoplay} from 'swiper/modules'
import Image from 'next/image'
import './style.css'
export default function SlideOnPage() {
  const slideImages = [
    {
      heading: 'KẾT NỐI YÊU THƯƠNG',
      desc: 'Thang máy gia đình không chỉ là phương tiện di chuyển, mà còn là cầu nối giữa các khoảnh khắc yêu thương, làm tình cảm gia đình trở nên ấm áp gần gũi hơn',
    },
    {
      heading: 'DỊCH VỤ TẬN TÂM',
      desc: 'Chúng tôi cung cấp dịch vụ hỗ trợ 24/7. Đội ngũ kĩ sư bảo trì bảo dưỡng chuyên môn cao, giàu kinh nghiệm và tận tâm với khách',
    },
    {
      heading: 'CÔNG NGHỆ NHẬT BẢN',
      desc: 'Chúng tôi sản xuất 20.000 thang máy hàng năm với công nghệ xử lý theo Nhật Bản và dây chuyển xử lý tự động PSBB của Phần Lan',
    },
    {
      heading: 'BẢO VỆ MÔI TRƯỜNG',
      desc: 'Chúng tôi sử dụng 100% lớp phủ năng lượng quang. Điều này giúp tiết kiệm 80% năng lượng so với truyền thống',
    },
    {
      heading: 'CÔNG NGHỆ IOT HIỆN ĐẠI',
      desc: 'Thang máy được điều khiển bằng hệ thống lái thông minh và quá trình vận hành được kiểm soát theo thời gian thực bằng máy tính và hệ thống an toàn nhiều lớp bảo đảm an toàn tuyệt đối khi vận hành',
    },
  ]
  const swiperRef = useRef()
  const [indexSlider, setIndexSlider] = useState(0)
  const handleSlideChange = (swiper) => {
    setIndexSlider(swiper.realIndex)
  }
  return (
    <div className='relative w-full md:h-screen'>
      {/* pagination */}
      <div className='absolute md:left-[5.62rem] md:bottom-[2.81rem] z-[2] flex'>
        {Array?.from(slideImages)?.map((item, index) => (
          <div
            className={`md:w-[1rem] md:h-[1rem] md:mr-[1rem] rounded-[50%] bg-gray-800 bg-opacity-20 relative ${
              indexSlider === index ? 'border-[0.25rem] solid border-white' : ''
            }`}
          >
            <div
              className={`md:w-[0.25rem] md:h-[0.25rem] flex flex-shrink-0 rounded-[50%] ${
                indexSlider === index ? '' : 'bg-white'
              } absolute -translate-x-1/2 -translate-y-1/2 top-[50%] left-[50%]`}
            ></div>
          </div>
        ))}
      </div>
      <div className='md:w-[3.625rem] absolute top-[50%] right-[3.25rem] -translate-x-1/2 -translate-y-1/2 z-[2] flex flex-col items-center md:h-[8.75rem] md:rounded-[0.35rem] bg-white bg-opacity-20 md:pt-[0.31rem]'>
        <div className='md:w-[2.9375rem] flex items-center justify-center md:h-[3.4375rem] md:rounded-[0.25rem] bg-white relative'>
          {Array.from(slideImages)?.map((item, index) => (
            <span
              className={`${
                indexSlider === index
                  ? 'font-grey-800 font-SVNLagu lg:text-[1.25rem] font-[800] leading-1.5'
                  : 'hidden'
              }`}
            >
              0{index + 1}
            </span>
          ))}
        </div>
        <button className='md:mt-[0.82rem] swiper-button-next-custom-home'>
          <Image
            src={'/images/home/slideFirstPage/btnUp.svg'}
            alt='btn'
            width={100}
            height={100}
            className='md:w-[1.82956rem] md:h-[1.30681rem] object-cover'
          />
        </button>
        <button className='rotate-180 md:mt-[0.82rem] swiper-button-prev-custom-home'>
          <Image
            src={'/images/home/slideFirstPage/btnUp.svg'}
            alt='btn'
            width={100}
            height={100}
            className='md:w-[1.82956rem] md:h-[1.30681rem] object-cover'
          />
        </button>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        className='slide_first_onPage size-full'
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 3000,
        }}
        onSlideChange={handleSlideChange}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper
        }}
        pagination={{
          el: '.swiper-pagination-custom-home',
        }}
        navigation={{
          nextEl: '.swiper-button-next-custom-home',
          prevEl: '.swiper-button-prev-custom-home',
        }}
      >
        {slideImages.map((item, index) => (
          <SwiperSlide key={index}>
            <Image
              src={'/images/home/slideFirstPage/slide1.png'}
              alt='image'
              width={1920}
              height={1000}
              quality={100}
              className='size-full object-cover z-[-1] absolute inset-0'
            />
            <div className='relative md:top-[4.25rem] md:left-[4.06rem]'>
              <h2 className='heading-slide'>{item.heading}</h2>
              <p className='md:w-[45.5rem] md:mt-[0.37rem] text-white lg:text-[1.125rem] font-medium leading-1.5 font-Iciel'>
                {item.desc}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
