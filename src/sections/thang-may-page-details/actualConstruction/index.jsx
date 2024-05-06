import React from 'react'
import Image from 'next/image'
import './styles.css'
const ActualConstruction = ({isMobile,data}) => {
  return (
    <div className='px-[3.69rem] relative max-md:px-3 actual'>
      <div className='absolute top-0 right-0 w-[4rem] h-[2.3125rem] bg-yellow-500 opacity-10'></div>
      <div className='absolute top-[2.3125rem] right-[4rem] w-[1rem] h-[1rem] bg-yellow-500 opacity-10'></div>
      <h2 className='text-center text-[3rem] max-md:text-[1.5rem] max-md:pt-[4.56rem] max-md:mb-[1.5rem] font-semibold leading-1.4 text-grey-900 pt-[8.13rem] mb-[3.06rem] font-SVNLagu'>
        Công trình thực tế
      </h2>

      {isMobile ? (
        <div className='flex space-x-[0.53rem] '>
          <div className='w-[10.706rem] flex flex-col'>
            <Image
              src={data[0]?.image.url}
              alt={data[0]?.image.alt}
              width={1000}
              height={1000}
              className='h-[8.27581rem] mb-[0.53rem]'
            />
            <Image
              src={data[1]?.image.url}
              width={1000}
              alt={data[1]?.image.alt}
              height={1000}
              className='h-[10.18056rem] mb-[0.53rem]'
            />
            <Image
              src={data[2]?.image.url}
               alt={data[2]?.image.alt}
              width={1000}
              height={1000}
              className='h-[15.9605rem] mb-[0.53rem]'
            />
            <Image
              src={data[5]?.image.url}
              width={1000}
               alt={data[5]?.image.alt}
              height={1000}
              className='h-[15.9605rem]'
            />
          </div>
          <div className='w-[10.706rem] flex flex-col'>
            <Image
              src={data[3]?.image.url}
               alt={data[3]?.image.alt}
              width={1000}
              height={1000}
              className='h-[7.48763rem] mb-[0.53rem]'
            />
            <Image
              src={data[6]?.image.url}
               alt={data[6]?.image.alt}
              width={1000}
              height={1000}
              className='h-[6.43675rem] mb-[0.53rem] '
            />
            <Image
              src={data[4]?.image.url}
               alt={data[4]?.image.alt}
              width={1000}
              height={1000}
              className='h-[12.80781rem] mb-[0.53rem]'
            />
            <Image
              src={data[7]?.image.url}
               alt={data[7]?.image.alt}
              width={1000}
              height={1000}
              className='h-[16.02619rem] mb-[0.53rem]'
            />
            <Image
              src={data[3]?.image.url}
               alt={data[3]?.image.alt}
              width={1000}
              height={1000}
              className='h-[7.09356rem]'
            />
          </div>
        </div>
      ) : (
        <div className='flex space-x-[1.54rem] '>
          <div className='w-[29.83331rem] flex flex-col'>
            <Image
              src={data[0]?.image.url}
              width={1000}
               alt={data[0]?.image.alt}
              height={1000}
              className='h-[22.875rem] mb-[1.54rem]'
            />
            <Image
              src={data[1]?.image.url}
              width={1000}
               alt={data[1]?.image.alt}
              height={1000}
              className='h-[28.4375rem] mb-[1.54rem]'
            />
            <Image
              src={data[2]?.image.url}
               alt={data[2]?.image.alt}
              width={1000}
              height={1000}
              className='h-[44.625rem]'
            />
          </div>
          <div className='w-[29.83331rem] flex flex-col'>
            <Image
              src={data[3]?.image.url}
               alt={data[3]?.image.alt}
              width={1000}
              height={1000}
              className='h-[20.9375rem] mb-[1.54rem]'
            />
            <Image
              src={data[4]?.image.url}
               alt={data[4]?.image.alt}
              width={1000}
              height={1000}
              className='h-[33.6875rem] mb-[1.54rem]'
            />
            <Image
              src={data[3]?.image.url}
               alt={data[3]?.image.alt}
              width={1000}
              height={1000}
              className=''
            />
          </div>
          <div className='w-[29.83331rem] flex flex-col'>
            <Image
              src={data[5]?.image.url}
               alt={data[5]?.image.alt}
              width={1000}
              height={1000}
              className='h-[37.8125rem] mb-[1.54rem] '
            />
            <Image
              src={data[6]?.image.url}
               alt={data[6]?.image.alt}
              width={1000}
              height={1000}
              className=' h-[20.9375rem] mb-[1.54rem]'
            />
            <Image
              src={data[7]?.image.url}
               alt={data[7]?.image.alt}
              width={1000}
              height={1000}
              className=''
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default ActualConstruction
