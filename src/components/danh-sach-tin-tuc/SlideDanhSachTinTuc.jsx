'use client'

import {Swiper, SwiperSlide} from 'swiper/react'
import Link from 'next/link'
import Image from 'next/image'
import {Pagination, Navigation} from 'swiper/modules'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function SlideDanhSachTinTuc({isMobile}) {
  return (
    <div className='relative max-md:mb-4'>
      <Swiper
        slidesPerView={1.05}
        spaceBetween={
          !isMobile
            ? (window.innerWidth / 100) * 1
            : (window.innerWidth / 100) * 4.267 * 0.56
        }
        navigation={{enabled: true, prevEl: '.prev-btn', nextEl: '.next-el'}}
        modules={[Navigation, Pagination]}
        breakpoints={{
          768: {
            slidesPerView: 4,
          },
        }}
        pagination={{type: 'progressbar'}}
        className='swiper-danh-sach-tin-tuc'
      >
        {Array.from(Array(10).keys()).map((item, i) => {
          return (
            <SwiperSlide key={i}>
              <Link
                href={`/`}
                className='relative h-[15rem] md:h-[25rem] flex flex-col rounded-[0.75rem] overflow-hidden border border-[#E9E9E9] group hover:border-yellow-500 transition-500 md:pb-[1.5rem]'
              >
                <div className='rounded-[0.5rem] md:rounded-t-[0.5rem] flex-none h-full md:h-[60%] overflow-hidden'>
                  <Image
                    src={`/images/tin-tuc/news-1.png`}
                    alt=''
                    width={1920}
                    height={1080}
                    className='h-full object-cover w-full group-hover:scale-[1.15] transition-500'
                  />
                </div>
                {isMobile && (
                  <div className='absolute left-[0.7rem] bottom-[0.6rem] md:bottom-6 md:left-6 rounded-[0.5rem] w-[19.3rem] md:w-[40.5625rem] pl-[0.92rem] md:pl-8 pr-[1.05rem] md:pr-[2.83rem] pt-[0.76rem] md:pt-5 pb-[1.2rem] md:pb-7 border border-transparent group-hover:border-yellow-500 transition-500 transition-500 z-10'>
                    <div className='absolute top-0 left-0 w-full h-full backdrop-blur-md rounded-[0.5rem] bg-black/35 group-hover:bg-black/45 transition-500 -z-10' />
                    <div className='flex flex-row items-center mb-[0.39rem] md:mb-4'>
                      <Image
                        src={`/images/tin-tuc/calendar.svg`}
                        alt=''
                        className='size-[0.785rem] md:size-[0.875rem] mr-1 md:mr-2'
                        width={120}
                        height={120}
                      />
                      <p className='font-Iciel text-[0.625rem] md:text-0.875 leading-1.5 text-grey-0'>
                        26/04/2022
                      </p>
                    </div>
                    <h3 className='text-0.75 md:text-1.25 font-SVNLagu text-grey-0 leading-1.4 uppercase mb-[0.39rem] md:mb-3 group-hover:text-yellow-500 transition-500 font-medium'>
                      Cách âm ra sao khi căn hộ giáp vách thang máy chung cư?
                    </h3>
                    <p className='text-grey-0 line-clamp-2 text-0.75 md:text-1 leading-1.5 font-Iciel opacity-70'>
                      Tôi đang sống trong một căn hộ ở tầng 8 của một toà chung
                      cư. Phòng ngủ tuy đã cách vách thang máy bởi một khu bếp
                      rồi mà lúc thang chạy vẫn có tiếng kêu ù ù. Vì tòa nhà
                      đông người, nhu cầu đi lại nhiều nên tiếng động này ảnh
                      hưởng không nhỏ đến sinh hoạt của cả gia đình tôi. Phòng
                      ngủ tuy đã cách vách thang máy bởi một khu bếp rồi mà lúc
                      thang chạy vẫn có tiếng kêu ù ù. Vì tòa nhà đông người,
                      nhu cầu đi lại nhiều nên tiếng động này ảnh hưởng không
                      nhỏ đến sinh hoạt của cả gia đình tôi.
                    </p>
                  </div>
                )}
                {!isMobile && (
                  <>
                    <div className='mt-[1.56rem] grid grid-cols-1 px-[1.37rem] gap-2'>
                      <h3 className='line-clamp-2 text-grey-900 font-SVNLagu text-1 font-semibold leading-1.4 uppercase group-hover:text-yellow-500 transition-500'>
                        Cách âm ra sao khi căn hộ giáp vách thang máy chung cư?
                      </h3>
                      <p className='text-grey-500 font-Iciel text-0.875 opacity-70 leading-1.5 line-clamp-2'>
                        Tôi đang sống trong một căn hộ ở tầng 8 của một toà
                        chung cư. Phòng ngủ tuy đã cách vách thang máy bởi một
                        khu bếp rồi mà lúc thang chạy vẫn có tiếng kêu ù ù. Vì
                        tòa nhà đông người, nhu cầu đi lại nhiều nên tiếng động
                        này ảnh hưởng không nhỏ đến sinh hoạt của cả gia đình
                        tôi. Phòng ngủ tuy đã cách vách thang máy bởi một khu
                        bếp rồi mà lúc thang chạy vẫn có tiếng kêu ù ù. Vì tòa
                        nhà đông người, nhu cầu đi lại nhiều nên tiếng động này
                        ảnh hưởng không nhỏ đến sinh hoạt của cả gia đình tôi.
                      </p>
                      <div className='flex flex-row items-center'>
                        <Image
                          src={`/images/tin-tuc/calendar-black.svg`}
                          alt=''
                          width={120}
                          height={120}
                          className='size-[0.875rem]'
                        />
                        <p className='text-grey-500 text-0.875 leading-1.5 font-Iciel ml-2'>
                          26/04/2022
                        </p>
                      </div>
                    </div>
                    <div className='absolute right-0 bottom-0 size-[7rem] translate-x-[46%] translate-y-[60%] bg-yellow-500 rounded-full overflow-hidden'>
                      <div className='absolute top-[16%] left-[29%] flex flex-row -translate-x-[90%] group-hover:translate-x-0 transition-500'>
                        <Image
                          src={'/images/home/danhSachTinTuc/arrow.svg'}
                          width={120}
                          height={120}
                          alt='icon'
                          className='w-[0.9rem] h-[1em] object-cover'
                        />
                        <Image
                          src={'/images/home/danhSachTinTuc/arrow.svg'}
                          width={120}
                          height={120}
                          alt='icon'
                          className='w-[0.9rem] h-[1em] object-cover ml-[3.5rem]'
                        />
                      </div>
                    </div>
                  </>
                )}
              </Link>
            </SwiperSlide>
          )
        })}
      </Swiper>
      {!isMobile && (
        <>
          <button className='absolute left-0 z-10 -translate-x-1/2 prev-btn bottom-1/2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='64'
              height='64'
              viewBox='0 0 64 64'
              fill='none'
              className='size-[3.5rem] group'
              style={{filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))'}}
            >
              <g filter='url(#filter0_d_4504_65425)'>
                <g clip-path='url(#clip0_4504_65425)'>
                  <circle
                    cx='28'
                    cy='28'
                    r='27.5'
                    transform='matrix(-1 0 0 1 60 0)'
                    stroke='url(#paint0_linear_4504_65425)'
                  />
                  <circle
                    cx='28'
                    cy='28'
                    r='28'
                    transform='matrix(-1 0 0 1 60 0)'
                    className='fill-white group-hover:fill-yellow-500 transition-300'
                  />
                  <path
                    d='M23.8098 27.9472L35.3742 19V25.7104L40 27.9472L35.3742 30.184V36.8945L23.8098 27.9472Z'
                    className='fill-yellow-500 group-hover:fill-white transition-300'
                  />
                </g>
              </g>
              <defs>
                <filter
                  id='filter0_d_4504_65425'
                  x='0'
                  y='0'
                  width='64'
                  height='64'
                  filterUnits='userSpaceOnUse'
                  color-interpolation-filters='sRGB'
                >
                  <feFlood
                    flood-opacity='0'
                    result='BackgroundImageFix'
                  />
                  <feColorMatrix
                    in='SourceAlpha'
                    type='matrix'
                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                    result='hardAlpha'
                  />
                  <feOffset dy='4' />
                  <feGaussianBlur stdDeviation='2' />
                  <feComposite
                    in2='hardAlpha'
                    operator='out'
                  />
                  <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
                  />
                  <feBlend
                    mode='normal'
                    in2='BackgroundImageFix'
                    result='effect1_dropShadow_4504_65425'
                  />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='effect1_dropShadow_4504_65425'
                    result='shape'
                  />
                </filter>
                <linearGradient
                  id='paint0_linear_4504_65425'
                  x1='28'
                  y1='0'
                  x2='28'
                  y2='56'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stop-color='#D1B37B' />
                  <stop
                    offset='1'
                    stop-color='#E4B867'
                  />
                </linearGradient>
                <clipPath id='clip0_4504_65425'>
                  <rect
                    width='56'
                    height='56'
                    rx='28'
                    transform='matrix(-1 0 0 1 60 0)'
                    fill='white'
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
          <button className='absolute right-0 z-10 translate-x-1/2 next-el bottom-1/2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='64'
              height='64'
              viewBox='0 0 64 64'
              fill='none'
              className='size-[3.5rem] group'
              style={{filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))'}}
            >
              <g filter='url(#filter0_d_4504_65426)'>
                <g clip-path='url(#clip0_4504_65426)'>
                  <circle
                    cx='32'
                    cy='28'
                    r='27.5'
                    stroke='url(#paint0_linear_4504_65426)'
                  />
                  <circle
                    cx='32'
                    cy='28'
                    r='28'
                    className='fill-white group-hover:fill-yellow-500 transition-300'
                  />
                  <path
                    d='M40.1902 27.9472L28.6258 19V25.7104L24 27.9472L28.6258 30.184V36.8945L40.1902 27.9472Z'
                    className='fill-yellow-500 group-hover:fill-white transition-300'
                  />
                </g>
              </g>
              <defs>
                <filter
                  id='filter0_d_4504_65426'
                  x='0'
                  y='0'
                  width='64'
                  height='64'
                  filterUnits='userSpaceOnUse'
                  color-interpolation-filters='sRGB'
                >
                  <feFlood
                    flood-opacity='0'
                    result='BackgroundImageFix'
                  />
                  <feColorMatrix
                    in='SourceAlpha'
                    type='matrix'
                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                    result='hardAlpha'
                  />
                  <feOffset dy='4' />
                  <feGaussianBlur stdDeviation='2' />
                  <feComposite
                    in2='hardAlpha'
                    operator='out'
                  />
                  <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
                  />
                  <feBlend
                    mode='normal'
                    in2='BackgroundImageFix'
                    result='effect1_dropShadow_4504_65426'
                  />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='effect1_dropShadow_4504_65426'
                    result='shape'
                  />
                </filter>
                <linearGradient
                  id='paint0_linear_4504_65426'
                  x1='32'
                  y1='0'
                  x2='32'
                  y2='56'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stop-color='#D1B37B' />
                  <stop
                    offset='1'
                    stop-color='#E4B867'
                  />
                </linearGradient>
                <clipPath id='clip0_4504_65426'>
                  <rect
                    x='4'
                    width='56'
                    height='56'
                    rx='28'
                    fill='white'
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
        </>
      )}
    </div>
  )
}
