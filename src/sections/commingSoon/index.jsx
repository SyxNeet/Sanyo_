import React from 'react'
import Image from 'next/image'

const CommingSoon = ({dictionary}) => {
  return (
    <div className='w-screen h-screen relative flex justify-center items-center'>
      <Image
        src={'/images/layout/commingSoon/bg.jpg'}
        alt='bg comming'
        className='absolute w-full h-full top-0 left-0 -z-[1] object-cover'
      />
      <div className='flex-col items-center flex justify-center text-center'>
        <Image
          src={'/images/layout/commingSoon/logo.png'}
          alt='logo Sanyo'
          className='md:w-[21rem] w-[70%]'
        />
        <h1 className='text-[1.5rem] md:text-[3rem] lg:w-[63%] md:w-[90%]  uppercase mt-[0.94rem] font-SVNLagu font-[600]'>
          {dictionary
            ? dictionary.comming
            : 'Please wait while content is loading...'}
        </h1>
      </div>
    </div>
  )
}

export default CommingSoon
