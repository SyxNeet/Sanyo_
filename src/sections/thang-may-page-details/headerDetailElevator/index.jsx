import React from 'react'
import Image from 'next/image'
import BreadcrumbContainer from '@/components/breadcrumb/BreadcrumbContainer'
import BreadcrumbLink from '@/components/breadcrumb/BreadcrumbLink'
const HeaderDetailElevator = () => {
  return (
    <section className=''>
      <BreadcrumbContainer>
        <BreadcrumbLink href='/'>TRANG CHỦ /</BreadcrumbLink>
        <BreadcrumbLink href='/'>THANG MÁY NHẬT BẢN /</BreadcrumbLink>
        <BreadcrumbLink isLastLink>THANG MÁY GIA ĐÌNH</BreadcrumbLink>
      </BreadcrumbContainer>
      <div className='mt-[2.36rem] border-b border-[rgba(28,32,28,0.10)] pb-[2.14rem]'>
        <div className='pl-[6.25rem] w-[61.875rem] '>
          <h1 className='relative font-SVNLagu text-[5.46506rem] font-semibold leading-1.3 text-grey-900 mb-[0.62rem]'>
            Thang máy GIA ĐÌNH
            <Image
              src={'/images/familyElevator/headerFamilyElevator/bonghoa.png'}
              alt='hoabg'
              width={500}
              height={500}
              className='absolute w-[8.3125rem] h-[8rem] -right-[6%] bottom-[30%]'
            />
          </h1>
          <p className='text-1 font-normal leading-1.5 font-Iciel'>
            Thang máy gia đình rất thích hợp cho các toà nhà bị hạn chế về diện
            tích, thang có thể được lắp đặt bằng cách cải tạo một khu vực thích
            hợp bên trong hoặc bên ngoài toà nhà vì vậy tính linh hoạt của thang
            máy gia đình rất cao
          </p>
        </div>
      </div>
      <div className='pl-[6.25rem] pt-[2.38rem] flex items-center'>
        <div className='flex flex-col'>
          <span className='uppercase text-1 font-medium leading-1.5 font-Iciel text-grey-500 opacity-80'>
            Tải trọng lên đến
          </span>
          <span className='font-SVNLagu text-2 font-semibold leading-1.5 py-2'>
            <span className='text-[3.3125rem]'>0.4 - 1.5</span>kg
          </span>
        </div>
        <div className='w-[0.0625rem] h-[5.125rem] bg-[rgba(28,32,28,0.10)] mx-10'></div>
        <div className='flex flex-col'>
          <span className='uppercase text-1 font-medium leading-1.5 font-Iciel text-grey-500 opacity-80'>
            Tốc độ
          </span>
          <span className='font-SVNLagu text-2 font-semibold leading-1.5  py-2'>
            <span className='text-[3.3125rem]'>0.4 - 1.5</span>m/s
          </span>
        </div>
        <div className='w-[0.0625rem] h-[5.125rem] bg-[rgba(28,32,28,0.10)] mx-10'></div>
        <di className='flex flex-col'>
          <span className='uppercase text-1 font-medium leading-1.5 font-Iciel text-grey-500 opacity-80'>
            diện tích tối thiểu
          </span>
          <span className='font-SVNLagu text-2 font-semibold leading-1.5  py-2'>
            từ <span className='text-[3.3125rem]'>0.95</span>m2
          </span>
        </di>
      </div>
    </section>
  )
}

export default HeaderDetailElevator
