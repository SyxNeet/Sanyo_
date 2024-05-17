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
import './style.css'

export default function News({isMobile,data}) {
  const listNews = data
  return (
    <section className='md:pt-[5.44rem] md:px-[4.69rem] pt-[2.94rem] '>
      <h4 className='sub-heading md:mb-[0.38rem] px-3'>DANH SÁCH TIN TỨC</h4>
      <div className='flex justify-between md:mb-[2.5rem] items-end px-3 max-md:pb-[0.88rem]'>
        <h2 className='font-text-grey-700 font-SVNLagu text-[3rem] font-semibold leading-1.4  max-md:text-[1.5rem]'>
          Dòng chảy <span className='text-yellow-500'>SANYO YUSOKI</span>
        </h2>
        <Link href={'/tin-tuc'}>
        <Button
          className='h-[3.5rem] max-md:hidden'
          isHover={true}
          isBlack={true}
          text={'XEM TẤT CẢ'}
        />
        </Link>
      </div>

      {!isMobile && (
        <div className='flex justify-between max-md:hidden'>
          <Link href={`/tin-tuc/${listNews?.posts[0]?.post_slug}`} className='w-[61.5rem] news_item_home h-[36rem] flex rounded-[0.625rem] mr-[2rem] overflow-hidden group' >
            <Link href={`/tin-tuc/${listNews?.posts[0]?.post_slug}`}>
              <Image
                src={listNews?.posts[0]?.thumbnail||'/images/home/danhSachTinTuc/imgNews2.png'}
                alt='image'
                quality={100}
                width={1000}
                height={800}
                className='h-full object-cover w-[42.1875rem]'
              />
            </Link>

            <div className='pt-[3.31rem] w-[19.3125] pl-[2rem] bg-grey-600 flex-1 relative overflow-hidden'>
              <div className='absolute right-0 bottom-0 size-[11rem] translate-x-[46%] translate-y-[60%] bg-yellow-500 rounded-full overflow-hidden'>
                <Image
                  src={'/images/home/danhSachTinTuc/arrow.svg'}
                  width={120}
                  height={120}
                  alt='icon'
                  className='itemnewsHome w-[1.1rem] h-[1.2rem] absolute top-[17%] left-[29%] object-cover group-hover:left-[68%] max-md:group-hover:left-[29%]'
                />
                  <Image
                  src={'/images/home/danhSachTinTuc/arrow.svg'}
                  width={120}
                  height={120}
                  alt='icon'
                  className=' itemnewsHome w-[1.1rem] h-[1.2rem] max-md:hidden absolute top-[17%] left-[-17%] object-cover group-hover:left-[29%]  transition duration-1000 ease-in'
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
                 {listNews?.posts[0]?.date}
                </span>
              </div>

              <h3 className='w-[16.125rem] pb-[1.88rem] mb-[1.81rem] border-b-[1px] solid border-[#555B61]  text-ellipsis line-clamp-4 text-white font-Iciel text-[1.3125rem] font-medium leading-1.4 uppercase'>
                <Link href={`/tin-tuc/${listNews?.posts[0]?.post_slug}`}>
                {listNews?.posts[0]?.title}
                </Link>
              </h3>
              <p className='pr-[1.44rem] text-white text-ellipsis line-clamp-[9] font-Iciel leading-1.7 lg:text-[0.875rem] opacity-70 text-[1.3rem] '>
              {listNews?.posts[0]?.description}
              </p>
            </div>
          </Link>
          <div className='flex flex-col flex-1'>
            {listNews?.posts?.slice(1)?.map((item, index) => (
              <NewsItemHome
                className={`${index === 0 ? 'mb-[1.5rem]' : ''}`}
                key={index}
                data={item}
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
            {listNews?.posts?.map((item, index) => (
              <SwiperSlide
                key={index}
                className='pl-3'
              >
                <NewsItemHome
                  className={`${index === 0 ? 'mb-[1.5rem]' : ''}`}
                  data={item}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </section>
  )
}
