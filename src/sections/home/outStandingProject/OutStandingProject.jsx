import Image from 'next/image'
import './style.css'
import ItemOutStandingProject from '@/components/itemOutstandingProject'
import {Button} from '@/components/ui/button'
import Link from 'next/link'

export default function OutStandingProject() {
  const arr = Array(4).fill(0)
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
        quality={100}
        className='md:w-[68.5rem] md:h-[8.9375rem] object-cover absolute top-[10.3rem] z-[11]'
      />

      {/* slide */}
      <div className='flex relative max-md:flex-col md:h-[75rem] overflow-hidden'>
        <div className='flex md:gap-[0.75rem] overflow-hidden md:w-full max-md:mt-[2rem]'>
          <div className='flex flex-col relative z-10 maquee'>
            <div className='flex flex-col gap-[0.75rem] items-center justify-center maquee-animate md:mb-[0.75rem]'>
              {arr?.map((item, index) => (
                <ItemOutStandingProject key={index} />
              ))}
            </div>
            <div className='flex flex-col gap-[0.75rem] items-center maquee-animate'>
              {arr?.map((item, index) => (
                <ItemOutStandingProject key={index} />
              ))}
            </div>
          </div>
          <div className='flex flex-col relative z-10 maquee'>
            <div className='flex flex-col gap-[0.75rem] items-center justify-center maquee-animate2 md:mb-[0.75rem]'>
              {arr?.map((item, index) => (
                <ItemOutStandingProject key={index} />
              ))}
            </div>
            <div className='flex flex-col gap-[0.75rem] items-center maquee-animate2'>
              {arr?.map((item, index) => (
                <ItemOutStandingProject key={index} />
              ))}
            </div>
          </div>
          <div className='flex flex-col relative z-10 maquee'>
            <div className='flex flex-col gap-[0.75rem] items-center justify-center maquee-animate md:mb-[0.75rem]'>
              {arr?.map((item, index) => (
                <ItemOutStandingProject key={index} />
              ))}
            </div>
            <div className='flex flex-col gap-[0.75rem] items-center maquee-animate'>
              {arr?.map((item, index) => (
                <ItemOutStandingProject key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Link
        href='/'
        className='absolute bottom-0 z-[12]'
      >
        <Button
          className=' bg-hover_button border-none'
          text={'XEM TẤT CẢ'}
          isHover={false}
          isBlack={true}
        />
      </Link>
    </section>
  )
}