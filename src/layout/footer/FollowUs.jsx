import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function FollowUs() {
  return (
    <div className='flex max-md:mt-[1.53rem] max-md:mb-[2.62rem]'>
      <p className='font-averta text-[1.5rem] font-bold leading-1.4 text-white mr-[1.5rem]'>
        Theo dõi chúng tôi
      </p>

      <Link href={'/'}>
        <Image
          src={'/images/layout/footer/fbFooter.png'}
          alt='facebook'
          width={300}
          height={300}
          className='w-[2.31494rem] h-[2.31494rem] object-cover mr-[0.62rem]'
        />
      </Link>
      <Link href={'/'}>
        <Image
          src={'/images/layout/footer/insFooter.png'}
          alt='facebook'
          width={100}
          height={100}
          className='w-[2.31494rem] h-[2.31494rem] object-cover'
        />
      </Link>
    </div>
  )
}

export default FollowUs
