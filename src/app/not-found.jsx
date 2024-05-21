import {Button} from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
  return (
    <main className='relative flex justify-center w-full h-screen'>
      <Image
        src={`/images/404/404-bg.jpg`}
        alt='Page not found'
        width={1920}
        height={1080}
        className='absolute top-0 left-0 object-cover w-full h-full opacity-15'
      />
      <div
        className='absolute top-0 left-0 w-full h-full'
        style={{
          background:
            'lightgray 0px -27.523px / 100% 107.212% no-repeat, lightgray -499.275px -593.015px / 139.875% 162.824% no-repeat, #D9D9D9',
        }}
      />
      <div className='z-10 mt-[5.84rem] md:mt-[8rem] flex flex-col'>
        <Link
          href={`/`}
          className='flex flex-row gap-[0.67rem] md:gap-[0.92rem] mb-[0.72rem] md:mb-4'
        >
          <Image
            src={`/images/404/logo.svg`}
            alt='SANYO YUSOKI'
            width={120}
            height={120}
            className='size-[2.75rem] md:size-[3.75rem]'
          />
          <div className='flex flex-col gap-[0.32rem] md:gap-[0.43rem]'>
            <Image
              src={`/images/404/logo-text.svg`}
              alt='SANYO YUSOKI'
              width={120}
              height={120}
              className='w-[12.56rem] h-[1.68rem] md:w-[17.2rem] md:h-[2.3rem]'
            />
            <Image
              src={`/images/404/logo-text-jap.svg`}
              alt='SANYO YUSOKI'
              width={120}
              height={120}
              className='w-[12.56rem] h-[0.8rem] md:w-[17.2rem] md:h-[1.1rem]'
            />
          </div>
        </Link>
        <div className='mx-auto w-fit'>
          <h1 className='font-semibold text-center uppercase text-grey-900 font-SVNLagu text-[5.84rem] md:text-8 leading-1.1'>
            404
          </h1>
          <h2 className='text-grey-800 opacity-80 leading-1.5 text-[0.73rem] md:text-1 font-Iciel text-center mb-[1.46rem] md:mb-8'>
            PAGE NOT FOUND
          </h2>
          <Link href={`/`}>
            <Button
              text='VỀ TRANG CHỦ'
              isHover
              isBlack
              className='w-full'
            />
          </Link>
        </div>
      </div>
    </main>
  )
}
