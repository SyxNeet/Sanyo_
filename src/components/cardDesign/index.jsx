'use client'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const CardDesign = ({data}) => {
  return (
    <div className='bg-[white] rounded-xl h-[32.625rem] flex flex-col relative max-md:h-full max-md:rounded-none select-none	'>
      <Image
        src='/images/familyElevator/detailFE/bgslide.svg'
        width={200}
        height={200}
        className='absolute w-full h-full left-0 bottom-0 object-cover z-[1]'
        alt='chi tiết thang máy'
      />
      <span className='text-[#454545] font-Iciel font-bold leading-1.4 uppercase text-[1rem] mt-[1.39rem] ml-[1.25rem] max-md:text-[0.64775rem] max-md:mt-[0.56rem] max-md:ml-2 max-md:mb-[0.08rem]'>
        {data?.name || 'name'}
      </span>
      <span className='text-[#454545] font-Iciel font-medium leading-1.4 uppercase text-[0.875rem] ml-[1.25rem] mb-[4.61rem] max-md:text-[0.56681rem] max-md:mb-[1.15rem] max-md:ml-2'>
        Mã sp:{data?.id}
      </span>
      <Image
        src={data?.image?.url || '/images/cophop/gach.png'}
        alt={data?.image?.alt}
        width={1200}
        height={1200}
        quality={100}
        className='w-[18.0625rem] h-[18.0625rem] relative z-10 mx-auto max-md:w-[8.375rem] max-md:h-[8.375rem] max-md:mb-4'
      />
<Link href={data.link||""} className='text-[1rem] relative z-10 text-grey-900 font-Iciel bg-yellow-500 w-fit mx-auto px-[1.5rem] py-[0.75rem] rounded-full uppercase font-normal mt-[1.5rem] hover:bg-white shadow-2xl hover:text-yellow-500 transition ease-in duration-75 hover:border hover:border-yellow-500'>Chi tiết</Link>    </div>
  )
}

export default CardDesign
