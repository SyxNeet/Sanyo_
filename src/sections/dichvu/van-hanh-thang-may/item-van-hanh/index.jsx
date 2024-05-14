'use client'
import React,{useState} from 'react'
import Image from 'next/image'
import './styles.css'
const ItemOperate = ({data}) => {
  const [seeAll,setSeeAll] =useState(false);
  const handleSeeAll =()=>{
    setSeeAll(!seeAll)
  }
  return (
    <div className='relative group itemOper rounded-[0.75rem] overflow-hidden max-md:h-[22.1rem] h-[22.125rem]'>
      <Image
        src={data?.image?.url}
        alt={data?.image?.alt}
        width={1000}
        height={1000}
        className='w-full h-full object-cover group-hover:brightness-50'
      />
      <div className={`absolute w-[90%] h-[25%] top-[70%] left-[5%] flex pt-[0.7rem] max-md:h-[37%] max-md:pt-[0.5rem] overflow-hidden flex-col px-[2.41rem] justify-center-center bg-[rgba(0,0,0,0.30)] backdrop-blur-[20px] rounded-[1rem] group-hover:top-[5%] max-md:group-hover:top-[60%] max-md:top-[60%] transition duration-1000 ease-in-out group-hover:h-[90%] max-md:group-hover:h-[37%] contentItem group-hover:justify-center group-hover:items-center max-md:px-[0.69rem] ${seeAll?'max-md:!top-[5%] !h-[90%] items-center justify-center':''}`}>
        <div className='w-[24.6875rem] max-md:w-[16.0625rem]'>
          <h3 className='font-SVNLagu text-white text-[1.25rem] font-semibold leading-1.4 uppercase max-md:text-[0.9375rem] max-md:border-b max-md:border-white border-opacity-50 max-md:pb-[0.44rem] max-md:mb-[0.44rem] md:flex space-x-[4px] max-md:space-x-0' dangerouslySetInnerHTML={{__html:data?.title}}>
            
          </h3>
          <span className={`font-Iciel text-[0.875rem] leading-1.5 font-normal text-white line-clamp-2 group-hover:line-clamp-[13] max-md:text-[0.75rem]  max-md:group-hover:line-clamp-2 ${seeAll?'!line-clamp-none':''}`} dangerouslySetInnerHTML={{__html:data?.desc}}>
            
          </span>
          <span className='text-yellow-500 text-[0.75rem] font-medium leading-1.5 underline md:hidden mt-2 uppercase' onClick={handleSeeAll}>{seeAll?'thu gọn':'xem thêm'}</span>
        </div>
      </div>
    </div>
  )
}

export default ItemOperate
