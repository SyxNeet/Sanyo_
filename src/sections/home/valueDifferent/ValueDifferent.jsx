import Image from 'next/image'
import React from 'react'
import SlideValue from './SlideValue'

function ValueDifferent({isMobile, dataValueDifferent}) {
  console.log('dataValueDifferent', dataValueDifferent)
  return (
    <section className='md:h-[76.6rem] box-container-border w-full  relative max-md:pb-[3.25rem]'>
      <div className='relative  pt-[3.19rem] md:pt-[12.63rem] md:pb-[11.69rem]'>
        <Image
          src={
            !isMobile
              ? dataValueDifferent?.background?.url
              : '/images/home/giaTriKhacBiet/backgroundMb.png'
          }
          alt={dataValueDifferent?.background?.alt}
          width={1920}
          height={1500}
          quality={100}
          className='absolute object-cover size-full inset-0 box-container-border'
        />
        <h4
          className='sub-heading md:pl-[10.6rem] md:mb-[1.31rem] max-md:px-[0.75rem] mb-[0.44rem]'
          dangerouslySetInnerHTML={{__html:dataValueDifferent?.title}}
        ></h4>
        <div className='relative md:pl-[6.31rem] md:w-[61.25rem] md:mb-[4.44rem] mb-[1.94rem] max-md:ml-[0.75rem] w-[17.4375rem]'>
          <div className=' text-grey-700 font-SVNLagu md:text-[2.5rem] text-[1.125rem] font-semibold leading-1.4' dangerouslySetInnerHTML={{__html:dataValueDifferent?.desc}}>
          </div>
        </div>
        {/* slide */}
        <SlideValue isMobile={isMobile} />
      </div>
      <button className='md:w-[3.5rem] max-md:mt-[1.5rem] max-md:ml-[0.75rem] max-md:mr-[0.38rem] md:h-[3.5rem] rounded-[50%] bg-grey-0 shadow_btn md:absolute left-[6.13rem] z-[1] btn-prev-cus-value w-[2.5rem] h-[2.5rem] max-md:bg-yellow-500'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='17'
          height='18'
          viewBox='0 0 17 18'
          fill='none'
          className='md:w-[0.875rem] md:h-[1rem] w-[0.66963rem] h-[0.76525rem]'
        >
          <path
            d='M0.809772 8.94723L12.3742 0V6.71042L17 8.94723L12.3742 11.184V17.8945L0.809772 8.94723Z'
            fill={isMobile ? '#1E2125' : '#DAB571'}
          />
        </svg>
      </button>
      <button className='md:w-[3.5rem] max-md:mt-[1.5rem] md:h-[3.5rem] rounded-[50%] bg-grey-0 right-[6.13rem] z-[1] shadow_btn md:absolute btn-next-cus-value w-[2.5rem] h-[2.5rem] max-md:bg-yellow-500'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='14'
          height='16'
          viewBox='0 0 14 16'
          fill='none'
          className='md:w-[0.875rem] md:h-[1rem] w-[0.66963rem] h-[0.76525rem]'
        >
          <path
            d='M14 8L4 0L4 6L0 8L4 10L4 16L14 8Z'
            fill={isMobile ? '#1E2125' : '#DAB571'}
          />
        </svg>
      </button>
    </section>
  )
}

export default ValueDifferent
