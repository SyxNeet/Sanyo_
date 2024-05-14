'use client'
import React,{useState} from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import {Swiper, SwiperSlide} from 'swiper/react'
import ButtonSLide from '@/components/buttonSlideSixReasons/ButtonSLide'
import {Navigation} from 'swiper/modules'
import Image from 'next/image'
import './styles.css'
const SlideTeamSanyo = ({isMobile,data}) => {
  // const data = [
  //   {
  //     img: '/images/dich-vu/kts.png',
  //     chucvu: 'Kiến trúc sư',
  //     name: 'Nguyễn Hữu Tiến',
  //     desc: 'Lorem ipsum dolor sit amet consectetur. Tristique semper feugiat et pharetra. Pretium proin netus semper nulla ut suspendisse faucibus enim. Pharetra pulvinar consectetur potenti tellus',
  //   },
  //   {
  //     img: '/images/dich-vu/kts2.png',
  //     chucvu: 'Designer',
  //     name: 'Trần Thị Lan',
  //     desc: 'Lorem ipsum dolor sit amet consectetur. Tristique semper feugiat et pharetra. Pretium proin netus semper nulla ut suspendisse faucibus enim. Pharetra pulvinar consectetur potenti tellus',
  //   },
  //   {
  //     img: '/images/dich-vu/kts3.png',
  //     chucvu: 'Kỹ sư xây dựng',
  //     name: 'Lê Văn Minh',
  //     desc: 'Lorem ipsum dolor sit amet consectetur. Tristique semper feugiat et pharetra. Pretium proin netus semper nulla ut suspendisse faucibus enim. Pharetra pulvinar consectetur potenti tellus',
  //   },
  //   {
  //     img: '/images/dich-vu/kts.png',
  //     chucvu: 'Lập trình viên',
  //     name: 'Nguyễn Văn A',
  //     desc: 'Lorem ipsum dolor sit amet consectetur. Tristique semper feugiat et pharetra. Pretium proin netus semper nulla ut suspendisse faucibus enim. Pharetra pulvinar consectetur potenti tellus',
  //   },
  //   {
  //     img: '/images/dich-vu/kts2.png',
  //     chucvu: 'Nhà thiết kế nội thất',
  //     name: 'Phạm Thị Hương',
  //     desc: 'Lorem ipsum dolor sit amet consectetur. Tristique semper feugiat et pharetra. Pretium proin netus semper nulla ut suspendisse faucibus enim. Pharetra pulvinar consectetur potenti tellus',
  //   },
  //   {
  //     img: '/images/dich-vu/kts3.png',
  //     chucvu: 'Quản lý dự án',
  //     name: 'Nguyễn Văn B',
  //     desc: 'Lorem ipsum dolor sit amet consectetur. Tristique semper feugiat et pharetra. Pretium proin netus semper nulla ut suspendisse faucibus enim. Pharetra pulvinar consectetur potenti tellus',
  //   },
  //   {
  //     img: '/images/dich-vu/kts.png',
  //     chucvu: 'Kỹ thuật viên',
  //     name: 'Trần Văn Cường',
  //     desc: 'Lorem ipsum dolor sit amet consectetur. Tristique semper feugiat et pharetra. Pretium proin netus semper nulla ut suspendisse faucibus enim. Pharetra pulvinar consectetur potenti tellus',
  //   },
  //   {
  //     img: '/images/dich-vu/kts3.png',
  //     chucvu: 'Kiểm định viên',
  //     name: 'Lê Thị Dung',
  //     desc: 'Lorem ipsum dolor sit amet consectetur. Tristique semper feugiat et pharetra. Pretium proin netus semper nulla ut suspendisse faucibus enim. Pharetra pulvinar consectetur potenti tellus',
  //   },
  // ]
  const [activeSlide, setActiveSlide] = useState(data?.list_staff[0]);

  const handleSlideChange = (swiper) => {
    const activeSlideIndex = swiper.realIndex;
    setActiveSlide(data?.list_staff[activeSlideIndex]);
  };
  return (
    <section className='mt-[8rem] max-md:mt-[3.13rem]'>
      <div className='mx-auto flex flex-col justify-center items-center mb-[3rem] max-md:w-[20.625rem] max-md:mb-[1.25rem]'>
        <h2 className='text-[3.125rem] font-SVNLagu font-semibold leading-1.3 text-yellow-500 max-md:text-[1.5rem] [&>p>strong]:font-semibold [&>p>strong]:text-yellow-500' dangerouslySetInnerHTML={{__html:data?.heading}}>
          
        </h2>
        <h3 className='text-[2.6875rem] text-center max-md:text-[1.25rem] text-grey-900 font-semibold leading-1.3 font-SVNLagu'>
          {data?.desc}
        </h3>
      </div>
      <Swiper
        navigation={{
            nextEl: '.swiper-button-next-team',
            prevEl: '.swiper-button-prev-team',
        }}
        loop={true}
        onSlideChange={handleSlideChange}
        modules={[Navigation]}
        slidesPerView={4}
        breakpoints={{
            0:{
                slidesPerView: 1.2,
            },
            768:{
                slidesPerView: 4,
            }
        }}
        centeredSlides={true}
        spaceBetween={isMobile? 8: 25}
        className='mySwiperTeamSanyo'
      >
        {(data?.list_staff || []).map((item, index) => (
          <SwiperSlide
            key={index}
            className={`!h-[31.9375rem] max-md:!h-[20.13119rem] `}
          >
            <Image
              src={item?.image?.url}
              alt={item?.image?.alt}
              width={1000}
              height={1000}
              className=' object-cover'
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='flex flex-col items-center'>
        <div className='flex items-center justify-between mt-[1.63rem] max-w-[29.9375rem] w-full max-md:max-w-none max-md:px-3'>
          <ButtonSLide
            className={
              ' swiper-button-prev-team border-yellow-500 transition ease-in cursor-pointer w-[3.5rem] h-[3.5rem]  md:hover:border-white md:hover:bg-yellow-500 max-md:bg-yellow-500 max-md:border-yellow-500 max-md:w-[2.5rem] max-md:h-[2.5rem]'
            }
            classNameSvg={
              'w-[1rem] h-[1rem] text-yellow-500 md:group-hover:text-white max-md:text-black max-md:w-[0.875rem] max-md:h-[0.875rem]'
            }
          />
          <div className='flex flex-col justify-center items-center'>
            <span className='font-Iciel text-[0.875rem] font-normal leading-1.5 uppercase text-grey-900 max-md:text-[0.625rem]'>{activeSlide?.chuc_vu}</span>
            <span className=' text-[1.375rem] font-extrabold leading-1.4 capitalize font-SVNLagu max-md:text-[1rem]'>{activeSlide?.name}</span>
          </div>
          <ButtonSLide
            className={
              ' swiper-button-next-team border-yellow-500 transition ease-in cursor-pointer w-[3.5rem] h-[3.5rem]  md:hover:border-white md:hover:bg-yellow-500 max-md:bg-yellow-500 max-md:border-yellow-500 max-md:w-[2.5rem] max-md:h-[2.5rem]'
            }
            classNameSvg={
              'w-[1rem] h-[1rem] text-yellow-500 rotate-180 md:group-hover:text-white max-md:text-black max-md:w-[0.875rem] max-md:h-[0.875rem]'
            }
          />
        </div>
        <div className='w-[30.9375rem] h-[0.0625rem] bg-[rgba(28,32,28,0.10)] my-4 max-md:w-[21.9375rem] max-md:my-[0.94rem]'></div>
        <span className='block w-[33.0625rem] max-md:w-full max-md:px-[1.44rem] max-md:mb-[2.5rem] text-[0.875rem] leading-1.5 font-Iciel text-center line-clamp-3 text-grey-500 max-md:text-[0.75rem]'>
            {activeSlide?.desc}
        </span>
      </div>
    </section>
  )
}

export default SlideTeamSanyo
