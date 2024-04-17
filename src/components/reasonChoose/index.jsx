import Image from 'next/image'
import React from 'react'
import './style.css'
import Link from 'next/link'

export default function ReasonChoose() {
  return (
    <div className='rounded-[1.25rem] w-fit relative reason_item'>
      <Image
        src={'/images/layout/lydoluachon/lydoluachon1.png'}
        alt='reason'
        width={800}
        height={500}
        className='md:w-[49.1875rem] md:h-[33.125rem] object-cover rounded-[1.25rem] w-[23.49927rem] h-[28.91654rem]'
      />
      <Link
        className='absolute max-md:flex-col flex bg-blur_Reason backdrop-blur-[12.5px] md:rounded-[0.5rem] rounded-[0.80527rem] 
          justify-between md:items-center  md:bottom-[0.88rem] md:left-[0.94rem] md:right-[0.94rem] 
          md:pl-[1.44rem] md:pb-[1.09rem] md:pt-[1.16rem] md:pr-[2.06rem]
          bottom-[0.59rem] left-[0.51rem] right-[0.51rem] pt-[1.39rem] pl-[1.24rem] pb-[1.24rem] pr-[1.32rem] reason_overlay'
        href={'/'}
      >
        <div className='md:w-[21.875rem] max-md:mb-[1.24rem]'>
          <h4 className='font-SVNLagu md:text-[1.25rem] font-[600] md:leading-[1.5] text-grey-50'>
            SMART SHARING CORE
          </h4>
          <p className='font-Iciel md:text-[0.875rem] leading-[1.5] opacity-80 text-white'>
            Hãy sống xanh, hãy sống ý nghĩa - bảo vệ môi trường là sự lựa chọn
            thông minh.
          </p>
        </div>

        <div className='flex items-center'>
          <span className='md:hidden text-white font-Iciel text-[0.73206rem] font-medium leading-[1.4] opacity-80'>
            Tìm hiểu thêm
          </span>
          <Image
            src='/images/layout/lydoluachon/iconPlus.svg'
            width={100}
            height={100}
            className='md:w-[2.125rem] md:h-[2.125rem] max-md:hidden'
          />
          <Image
            src='/images/layout/lydoluachon/row.svg'
            width={100}
            height={100}
            className='w-[1.02489rem] h-[0.87818rem] md:w-[2.125rem] md:h-[2.125rem] max-md:ml-[0.51rem]'
          />
        </div>
      </Link>
    </div>
  )
}
