import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function NewsItemHome({className}) {
  return (
    <div
      className={`h-[17.25rem] rounded-[0.625rem] news_item_home relative flex items-end overflow-hidden ${className}`}
    >
      <div className='absolute z-[1] right-0 bg-yellow-500 w-[4.55769rem] h-[3.49163rem] rounded-tl-full bottom-0 max-md:bottom-[unset] max-md:top-0 max-md:bg-yellow-500 max-md:w-[3.70063rem] max-md:h-[2.835rem] max-md:rounded-bl-full'>
        {/* <Image
          src={'/images/home/danhSachTinTuc/Intersect.svg '}
          width={100}
          height={100}
          alt='icon'
          className='w-[4.55769rem] h-[3.49163rem] max-md:hidden'
        /> */}
        <Image
          src={'/images/home/danhSachTinTuc/arrow.svg'}
          width={100}
          height={100}
          alt='icon'
          className='w-[1.01875rem] h-[1.126rem] absolute top-[50%] left-[50%] object-cover max-md:top-[25%]'
        />
      </div>
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
          className='size-full object-cover'
        />
      </Link>

      <div className='md:pl-[1.19rem] md:pb-[1.5rem] relative max-md:px-3 max-md:mb-[1.13rem]'>
        <div className='flex items-center mb-[0.5rem]'>
          <Image
            src={'/images/home/danhSachTinTuc/callendar.svg'}
            alt='callendar'
            width={100}
            height={100}
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
