import Link from 'next/link'
import React from 'react'

function FollowUs({data}) {
  return (
    <div className='flex max-md:mt-[1.53rem] max-md:mb-[2.62rem] max-md:flex-col'>
      <p className='font-averta text-[1.5rem] font-bold leading-1.4 text-white mr-[1.5rem] mb-2 md:whitespace-nowrap'>
        Theo dõi chúng tôi
      </p>

      <div className='flex flex-row'>
        <Link
          href={
            data?.lien_ket_facebook ||
            'https://www.facebook.com/ThangmaySanyoYusokiVietNam?mibextid=ZbWKwL'
          }
          className='block w-[2.25rem] h-[2.25rem] mr-[0.6rem] group'
          target='_blank'
        >
          <img
            src='/images/layout/footer/facebook.png'
            alt=''
            className='object-cover w-full h-full'
          />
        </Link>
        <Link
          href={
            data?.lien_ket_in ||
            'https://www.linkedin.com/in/sanyo-yusoki-vi%E1%BB%87t-nam-4283592a5/'
          }
          className='block w-[2.25rem] h-[2.25rem] mr-[0.6rem] group'
          target='_blank'
        >
          <img
            src='/images/layout/footer/linkedin.png'
            alt=''
            className='object-cover w-full h-full'
          />
        </Link>
        <Link
          href={data?.lien_ket_zalo || 'https://zalo.me/4574140570292753526'}
          className='block w-[2.25rem] h-[2.25rem] mr-[0.6rem] group'
          target='_blank'
        >
          <img
            src='/images/layout/footer/zalo.png'
            alt=''
            className='object-cover w-full h-full'
          />
        </Link>
      </div>
    </div>
  )
}

export default FollowUs
