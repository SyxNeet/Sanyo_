import React from 'react'
import Image from 'next/image'
const ItemOperate = () => {
  return (
    <div className='relative'>
      <Image
        src='/images/dich-vu/imgbg.png'
        width={1000}
        height={1000}
        className='w-full h-full object-cover'
      />
      <div className='absolute w-[90%] h-[25%] top-[70%] left-[5%] flex pt-[0.75rem] overflow-hidden flex-col px-[2.41rem] justify-center-center bg-[rgba(0,0,0,0.30)] backdrop-blur-[20px] rounded-[1rem]'>
        <div className='w-[24.6875rem]'>
          <h3 className='font-SVNLagu text-white text-[1.25rem] font-semibold leading-1.4 uppercase'>
            Hướng dẫn lí thuyết về quy trình
          </h3>
          <span className='font-Iciel text-[0.875rem] leading-1.5 font-normal text-white'>
            Quy trình an toàn trong thang máy, cách vận hành, xử lý tình huống
            đơn giản trong lúc chờ cán bộ của đơn vị lắp đặt khi gặp sự cố, phổ
            biến mọi thao tác, sử dụng máy đúng quy định, vệ sinh đơn giản với
            thang máy
          </span>
        </div>
      </div>
    </div>
  )
}

export default ItemOperate
