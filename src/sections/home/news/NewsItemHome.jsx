import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import './style.css'
function NewsItemHome({className, data}) {
  return (
    <div
      className={`h-[17.25rem] rounded-[0.625rem] group news_item_home relative flex items-end overflow-hidden ${className}`}
    >
      <Link
        className='absolute size-full'
        href={`tin-tuc/${data?.post_slug}`}
      >
        <Image
          src={data?.thumbnail||"https://cms.sanyoyusoki.com/wp-content/uploads/2024/05/service-2.jpg"}
          alt='image'
          quality={100}
          width={500}
          height={400}
          className='object-cover size-full'
        />
        <div className='absolute overflow-hidden right-0 top-0 md:bottom-0 md:top-auto size-[8rem] translate-x-[48%] -translate-y-[62%] md:translate-y-[60%] bg-yellow-500 rounded-full z-[12]'>
          <Image
            src={'/images/home/danhSachTinTuc/arrow.svg'}
            width={120}
            height={120}
            alt='icon'
            className='itemnewsHome w-[0.9rem] group-hover:left-[68%] h-[1em] absolute bottom-[17%] md:top-[17%] left-[30%] md:left-[29%] object-cover max-md:group-hover:left-[29%]'
          />
          <Image
            src={'/images/home/danhSachTinTuc/arrow.svg'}
            width={120}
            height={120}
            alt='icon'
            className='itemnewsHome w-[0.9rem] h-[1em] absolute max-md:hidden bottom-[17%] md:top-[17%] left-[30%] md:left-[-25%] object-cover group-hover:left-[29%] transition duration-1000 ease-in'
          />
        </div>
      </Link>

      <div className='md:pl-[1.19rem] md:pb-[1.5rem] relative max-md:mx-3 max-md:mb-[1.13rem] z-20 bg-transparent'>
        <div className='flex items-center mb-[0.5rem]'>
          <Image
            src={'/images/home/danhSachTinTuc/callendar.svg'}
            alt='callendar'
            width={120}
            height={120}
            className='w-[0.75rem] h-[0.75rem] object-cover'
          />
          <span className='text-white font-Iciel text-[0.625rem] lg:text-[1.3rem] leading-1.3 ml-[0.25rem]'>
            {data?.date}
          </span>
        </div>
        <h3 className='text-white font-Iciel text-[0.875rem] lg:text-[1.3rem] font-medium leading-1.5 md:w-[17.5rem] line-clamp-2 text-ellipsis'>
          <Link href={`tin-tuc/${data?.post_slug}`}>{data?.title}</Link>
        </h3>
      </div>
      <Image
        src={'/images/home/danhSachTinTuc/bg-deco.svg'}
        alt='background deco'
        className='absolute bottom-0 left-0 z-10 object-cover w-full'
        width={120}
        height={120}
      />
    </div>
  )
}

export default NewsItemHome
