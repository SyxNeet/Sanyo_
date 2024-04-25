'use client'
import {Button} from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import NewsItemHome from './NewsItemHome'
import './style.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
export default function News({isMobile}) {
  const listNews = Array(3).fill(0)
  return (
    <section className='md:pt-[5.44rem] md:px-[4.69rem] pt-[2.94rem] '>
      <h4 className='sub-heading md:mb-[0.38rem] px-3'>DANH SÁCH TIN TỨC</h4>
      <div className='flex justify-between md:mb-[2.5rem] items-end px-3 max-md:pb-[0.88rem]'>
        <h2 className='font-text-grey-700 font-SVNLagu text-[3rem] font-semibold leading-1.4  max-md:text-[1.5rem]'>
          Dòng chảy SANYO YUSOKI
        </h2>
        <Button
          className='h-[3.5rem] max-md:hidden'
          isHover={true}
          isBlack={true}
          text={'XEM TẤT CẢ'}
        />
      </div>

      {!isMobile && (
        <div className='flex justify-between max-md:hidden'>
          <div className='w-[61.5rem] news_item_home h-[36rem] flex rounded-[0.625rem] mr-[2rem] overflow-hidden'>
            <Link href={'/'}>
              <Image
                src={'/images/home/danhSachTinTuc/imgNews2.png'}
                alt='image'
                quality={100}
                width={1000}
                height={800}
                className='h-full object-cover w-[42.1875rem]'
              />
            </Link>

            <div className='pt-[3.31rem] w-[19.3125] pl-[2rem] bg-grey-600 flex-1 relative '>
              <div className='absolute right-0 bottom-0 bg-yellow-500 w-[4.55769rem] h-[3.49163rem] rounded-tl-full '>
                {/* <Image
                src={'/images/home/danhSachTinTuc/Intersect.svg'}
                width={120}
                height={120}
                alt='icon'
                className='w-[4.55769rem] h-[3.49163rem]'
              /> */}
                <Image
                  src={'/images/home/danhSachTinTuc/arrow.svg'}
                  width={120}
                  height={120}
                  alt='icon'
                  className='w-[1.01875rem] h-[1.126rem] absolute top-[50%] left-[50%] object-cover'
                />
              </div>
              <div className='flex items-center mb-[1.31rem]'>
                <Image
                  src={'/images/home/danhSachTinTuc/callendar.svg'}
                  alt='callendar'
                  width={120}
                  height={120}
                  className='w-[0.75rem] h-[0.75rem] object-cover'
                />
                <span className='text-white font-Iciel text-[0.75rem] leading-1.3 ml-[0.25rem]'>
                  26/04/2022
                </span>
              </div>

              <h3 className='w-[16.125rem] pb-[1.88rem] mb-[1.81rem] border-b-[1px] solid border-[#555B61]  text-ellipsis line-clamp-4 text-white font-Iciel text-[1.3125rem] font-medium leading-1.4 uppercase'>
                <Link href={'/'}>
                  Cách âm ra sao khi căn hộ giáp vách thang máy chung cư?
                </Link>
              </h3>
              <p className='pr-[1.44rem] text-white text-ellipsis line-clamp-[9] font-Iciel leading-1.7 text-[0.875rem] opacity-70'>
                Tôi đang sống trong một căn hộ ở tầng 8 của một toà chung cư.
                Phòng ngủ tuy đã cách vách thang máy bởi một khu bếp rồi mà lúc
                thang chạy vẫn có tiếng kêu ù ù. Vì tòa nhà đông người, nhu cầu
                đi lại nhiều nên tiếng động này ảnh hưởng không nhỏ đến sinh
                hoạt của cả gia đình tôi.
              </p>
            </div>
          </div>
          <div className='flex flex-col flex-1'>
            {listNews?.slice(1)?.map((item, index) => (
              <NewsItemHome
                className={`${index === 0 ? 'mb-[1.5rem]' : ''}`}
                key={index}
              />
            ))}
          </div>
        </div>
      )}
      {isMobile && (
        <div className='md:hidden'>
          <Swiper
            navigation={false}
            className='mySwiperNewsHome'
            slidesPerView={1.6}
            spaceBetween={0}
          >
            {listNews?.slice(1)?.map((item, index) => (
              <SwiperSlide
                key={index}
                className='pl-3'
              >
                <NewsItemHome
                  className={`${index === 0 ? 'mb-[1.5rem]' : ''}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </section>
  )
}
