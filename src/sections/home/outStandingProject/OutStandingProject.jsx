'use client'
import Image from 'next/image'
import './style.css'
import ItemOutStandingProject from '@/components/itemOutstandingProject'
import {Button} from '@/components/ui/button'
import Link from 'next/link'

export default function OutStandingProject({data}) {
  const arr = data
  const arr1 = data?.slice(0, 4);
  const arr2 = data?.slice(4, 8).concat(data.slice(0, Math.max(0, 4 - data.slice(4, 8).length)));
  const arr3 = data?.slice(8, 12).concat(data.slice(0, Math.max(0, 4 - data.slice(8, 12).length)));
  return (
    <section className='box-container-border md:pt-[7.5rem] flex flex-col justify-center items-center relative'>
      <div className='absolute left-0 right-0 top-[10.5rem] rotate-180 overlay_slide_outstanding'></div>
      <div className='absolute left-0 right-0 bottom-[-0.5rem] overlay_slide_outstanding'></div>
      <h4 className='sub-heading md:mb-[1.88rem]'>
        DỰ ÁN NỔI BẬT CỦA CHÚNG TÔI
      </h4>
      <Image
        src={'/images/home/duAnNoiBat/sanyologo.png'}
        alt='logo'
        width={1500}
        height={400}
        className='md:w-[68.5rem] md:h-[8.9375rem] object-cover absolute top-[10.3rem] z-[11]'
      />

      {/* slide */}
      <div className='flex relative max-md:flex-col md:h-[75rem] overflow-hidden'>
        <div className='flex md:gap-[0.75rem] overflow-hidden md:w-full max-md:mt-[2rem]'>
          <div className='relative z-10 flex flex-col maquee'>
            <div className='flex flex-col gap-[0.75rem] items-center justify-center maquee-animate md:mb-[0.75rem]'>
              {arr1?.map((item, index) => (
                <ItemOutStandingProject key={index} data={item}/>
              ))}
            </div>
            <div className='flex flex-col gap-[0.75rem] items-center maquee-animate'>
              {arr1?.map((item, index) => (
                <ItemOutStandingProject key={index} data={item}/>
              ))}
            </div>
          </div>
          <div className='relative z-10 flex flex-col maquee'>
            <div className='flex flex-col gap-[0.75rem] items-center justify-center maquee-animate2 md:mb-[0.75rem]'>
              {arr2?.map((item, index) => (
                <ItemOutStandingProject key={index} data={item}/>
              ))}
            </div>
            <div className='flex flex-col gap-[0.75rem] items-center maquee-animate2'>
              {arr2?.map((item, index) => (
                <ItemOutStandingProject key={index} data={item}/>
              ))}
            </div>
          </div>
          <div className='relative z-10 flex flex-col maquee'>
            <div className='flex flex-col gap-[0.75rem] items-center justify-center maquee-animate md:mb-[0.75rem]'>
              {arr3?.map((item, index) => (
                <ItemOutStandingProject key={index} data={item}/>
              ))}
            </div>
            <div className='flex flex-col gap-[0.75rem] items-center maquee-animate'>
              {arr3?.map((item, index) => (
                <ItemOutStandingProject key={index} data={item}/>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Link
        href='/du-an'
        className='absolute bottom-0 z-[12]'
      >
        <Button
          className='border-none  bg-hover_button'
          text={'XEM TẤT CẢ'}
          isHover={false}
          isBlack={true}
        />
      </Link>
    </section>
  )
}
