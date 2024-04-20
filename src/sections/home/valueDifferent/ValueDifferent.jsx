import Image from 'next/image'
import React from 'react'
import SlideValue from './SlideValue'

function ValueDifferent() {
  return (
    <section className='md:h-[76.6rem] box-container-border relative w-full md:pt-[12.63rem] md:pb-[11.69rem]'>
      <Image
        src={'/images/home/giaTriKhacBiet/background.png'}
        alt='bg'
        width={1920}
        height={1500}
        quality={100}
        className='absolute object-cover size-full inset-0 box-container-border'
      />
      <h4 className='sub-heading md:pl-[10.6rem] md:mb-[1.31rem]'>
        KIẾN TẠO GIÁ TRỊ KHÁC BIỆT
      </h4>
      <div className='relative md:pl-[6.31rem] md:w-[61.25rem] md:mb-[4.44rem]'>
        <p className=' text-grey-700 font-SVNLagu md:text-[2.5rem] font-semibold leading-1.4'>
          "Mong muốn của chúng tôi là bảo đảm những tiêu chuẩn cao nhất nhằm
          phục vụ khách hàng cho mọi nhu cầu liên quan đến thang máy"
        </p>
      </div>
      {/* slide */}
      <SlideValue />
    </section>
  )
}

export default ValueDifferent
