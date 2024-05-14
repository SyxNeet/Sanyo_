'use client'
import React from 'react'
import DetailElevatorMb from '@/components/detailElevator/mb'
import DetailElevator from '@/components/detailElevator/pc'
const ListElevatorDuAn = ({data,isMobile,isJapan=false}) => {
  return (
    <section className='relative'>
      <div className='flex relative border-b border-[rgba(28,32,28,0.10)]'>
        <div className='absolute w-[5.8125rem] h-[4.6875rem] bg-yellow-500 opacity-10 top-0 left-0 max-md:w-[4rem] max-md:h-[2.3125rem]'></div>
        <div className='absolute md:hidden top-[2.3125rem] left-[4rem] w-[1rem] h-[1rem] bg-yellow-500 opacity-10'></div>
        <div className='w-[70%] pl-[5.85rem] relative max-md:w-full max-md:pl-0'>
          <h2 className='text-[4.375rem] font-semibold leading-1.2 font-SVNLagu text-gray-900 mb-4 mt-[8.31rem] max-md:text-center max-md:text-[1.5rem] max-md:mt-[3.93rem] [&>p>strong]:text-yellow-500 [&>p>strong]:font-semibold [&>p>strong]:uppercase' dangerouslySetInnerHTML={{__html:data?.title}}>

          </h2>
          <span className='uppercase font-Iciel w-[51.25rem] leading-[170%] text-[1.125rem] mb-[5.5rem] block text-grey-500 max-md:hidden'>
           {data?.desc}
          </span>
        </div>
        <div className='border-l border-[rgba(28,32,28,0.10)] relative w-[30%] max-md:hidden'>
            <div className='w-[8rem] h-[4.6875rem] bg-yellow-500 opacity-10 bottom-0 left-0 absolute'></div>
            <div className='w-[8rem] h-[4.6875rem] bg-yellow-500 opacity-10 top-0 right-0 absolute'></div>
            <div className='w-[2rem] h-[2rem] bg-yellow-500 opacity-10 top-[4.6875rem] right-[8rem] absolute'></div>
        </div>
      </div>
      <div>
      {!isMobile ? (
        <>
          {(data?.elavators || []).map((item, index) => (
            <DetailElevator
              key={index}
              type={index % 2 === 0}
              data={item}
              title={"Thang máy dùng trong dự án"}
            />
          ))}
        </>
      ) : (
        <>
          {data?.elevator_parameters?.map((item, index) => (
            <DetailElevatorMb
              key={index}
              data={item}
              title={"Thang máy dùng trong dự án"}
            />
          ))}
        </>
      )}
      </div>
    </section>
  )
}

export default ListElevatorDuAn
