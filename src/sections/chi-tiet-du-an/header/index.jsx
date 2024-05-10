import React from 'react'
import BreadcrumbContainer from '@/components/breadcrumb/BreadcrumbContainer'
import BreadcrumbLink from '@/components/breadcrumb/BreadcrumbLink'
import Image from 'next/image'
const HeaderProject = () => {
    
  return (
    
    <section className='border-b border-[rgba(28,32,28,0.10)] pb-[3.28rem]'>
      <BreadcrumbContainer className='pl-3 md:pl-[6.25rem]'>
        <BreadcrumbLink href={`/`}>TRANG CHỦ</BreadcrumbLink>
        <BreadcrumbLink href={`/`}>DANH SÁCH DỰ ÁN</BreadcrumbLink>
        <BreadcrumbLink isLastLink>DỰ ÁN BIỆT THỰ PHÚ QUỐC</BreadcrumbLink>
      </BreadcrumbContainer>
      <div className='ml-[6.25rem] mt-[3.31rem] '>
        <h1 className='font-SVNLagu text-[4.375rem] font-semibold leading-1.2 text-gray-900 mb-[1.12rem]'>Dự án biệt thự Phú Quốc</h1>
        <span className='font-Iciel block leading-1.5 font-normal text-[1rem] w-[50.0625rem]'>Việc thi công lắp đặt thang máy phải tuân thủ theo quy trình, quy phạm và tiêu chuẩn hiện hành. Các công trình các quy mô khác nhau sẽ tương ứng với các biện pháp thi công khác nhau.</span>
      </div>
      <div className='flex space-x-[5rem] ml-[6.25rem] mt-[3.41rem]'>
            <div className='flex items-center'>
                <Image src='/images/chi-tiet-du-an/house.svg' width={60} height={60} alt='house-icon' className='w-[3.7185rem] h-[3.7185rem] mr-[0.5rem]'/>
                <div className='flex flex-col justify-center'>
                    <span className='text-[#A9A9A9] uppercase text-[0.86763rem] font-Iciel font-normal  leading-1.5 mb-1'>
                            chủ đầu tư
                    </span>
                    <span className='text-grey-900 font-semibold uppercase'>
                        anh hưng
                    </span>
                </div>
            </div>
            <div className='flex items-center'>
                <Image src='/images/chi-tiet-du-an/location.svg' width={60} height={60} alt='house-icon' className='w-[3.7185rem] h-[3.7185rem] mr-[0.5rem]'/>
                <div className='flex flex-col'>
                    <span className='text-[#A9A9A9] uppercase text-[0.86763rem] font-Iciel font-normal  leading-1.5 mb-1'>
                            địa điểm
                    </span>
                    <span className='text-grey-900 font-semibold uppercase'>
                        việt nam
                    </span>
                </div>
            </div>
            <div className='flex items-center'>
                <Image src='/images/chi-tiet-du-an/cal.svg' width={60} height={60} alt='house-icon' className='w-[3.7185rem] h-[3.7185rem] mr-[0.5rem]'/>
                <div className='flex flex-col'>
                    <span className='text-[#A9A9A9] uppercase text-[0.86763rem] font-Iciel font-normal  leading-1.5 mb-1'>
                            thời gian
                    </span>
                    <span className='text-grey-900 font-semibold uppercase'>
                    02/2024 - 03/2024
                    </span>
                </div>
            </div>
            <div className='flex items-center'>
                <Image src='/images/chi-tiet-du-an/button.svg' width={60} height={60} alt='house-icon' className='w-[3.7185rem] h-[3.7185rem] mr-[0.5rem]'/>
                <div className='flex flex-col'>
                    <span className='text-[#A9A9A9] uppercase text-[0.86763rem] font-Iciel font-normal  leading-1.5 mb-1'>
                            loại thang máy
                    </span>
                    <span className='text-grey-900 font-semibold uppercase'>
                    THANG MÁY GIA ĐÌNH
                    </span>
                </div>
            </div>
      </div>
      
    </section>
  )
}

export default HeaderProject
