import Image from 'next/image'
import React from 'react'
import './style.css'
import Link from 'next/link'

export default function ReasonChoose() {
  return (

    <div className='rounded-[1.25rem] w-full relative reason_item'>
      <Image
        src={'/images/reasonChoose/lydoluachon1.png'}
        alt='reason'
        width={800}
        height={500}
        className='md:w-full md:h-[33.125rem] object-cover rounded-[1.25rem] w-[23.49927rem] h-[28.91654rem]'
      />
      <Link
        className=' max-md:flex-col flex overflow-hidden relative h-fit backdrop-blur-[12.5px] rounded-[0.75rem] justify-between md:items-center
          md:pl-[1.44rem] md:pr-[2.06rem]
          bottom-[0.59rem] pt-[1.19rem] pl-[1.06rem] pb-[1.06rem] pr-[1.12rem] reason_overlay'
        href={'/'}
      >
       <Image
          src={'/images/reasonChoose/Hoverbox.svg'}
          alt='box'
          width={200}
          height={200}
          quality={100}
          className='absolute inset-0 w-full'
        />
        <div className='md:w-[21.875rem] max-md:mb-[1.06rem]'>
          <h4 className='font-SVNLagu md:text-[0.875rem] font-[600] md:leading-[1.5] text-grey-50'>
            SMART SHARING CORE
          </h4>
          <p className='font-Iciel lg:text-[0.875rem] text-[0.75rem] leading-[1.5] opacity-80 text-white'>
            Hãy sống xanh, hãy sống ý nghĩa - bảo vệ môi trường là sự lựa chọn
            thông minh.
          </p>
        </div>

        <div className='flex items-center'>
          <span className='md:hidden text-white font-Iciel text-[0.625rem] font-medium leading-[1.4] opacity-80'>
            Tìm hiểu thêm
          </span>
          <Image
            src='/images/reasonChoose/iconPlus.svg'
            width={100}
            height={100}
            className='md:w-[2.125rem] md:h-[2.125rem] max-md:hidden'
            alt='icon'
          />
          <Image
            alt='icon'
            src='/images/reasonChoose/row.svg'
            width={100}
            height={100}
            className='w-[0.875rem] h-[0.74975rem] md:w-[2.125rem] md:h-[2.125rem] max-md:ml-[0.51rem]'
          />
        </div>
      </Link>
    </div>
  )
}
