import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function NewsItemHome({className}) {
  return (
    <div
      className={`h-[17.25rem] rounded-[0.625rem] news_item_home relative flex items-end overflow-hidden ${className}`}
    >
      <Link
        className='absolute size-full'
        href={'/'}
      >
        <Image
          src={'/images/home/danhSachTinTuc/imgNews.png'}
          alt='image'
          quality={100}
          width={500}
          height={400}
          className='object-cover size-full'
        />
        <div className='absolute right-0 top-0 md:bottom-0 size-[8text-grey-400  max-md:px-[0.75rem] max-md:text-grey-800 font-Iciel leading-1.7 md:uppercase md:mt-[0.75rem] mt-[0.5rem] md:text-[1.3rem] lg:text-[0.875rem] text-[1.125rem] max-md:font-semibold max-md:leading-1.4 max-md:pb-[1.69rem] max-md:border-b-[1px] border-grey-500 border-opacity-10rem] translate-x-[46%] -translate-y-[62%] md:translate-y-[60%] bg-yellow-500 rounded-full'>
          <Image
            src={'/images/home/danhSachTinTuc/arrow.svg'}
            width={120}
            height={120}
            alt='icon'
            className='w-[0.9rem] h-[1em] absolute bottom-[18%] left-[30%] object-cover'
          />
        </div>
      </Link>

      <div className='md:pl-[1.19rem] md:pb-[1.5rem] relative max-md:px-3 max-md:mb-[1.13rem]'>
        <div className='flex items-center mb-[0.5rem]'>
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
        <h3 className='text-white font-Iciel text-[0.875rem] font-medium leading-1.5 md:w-[17.5rem] line-clamp-2 text-ellipsis'>
          <Link href={'/'}>
            Các ưu điểm và tính năng nổi trội của thang máy SANYO
          </Link>
        </h3>
      </div>
    </div>
  )
}

export default NewsItemHome
