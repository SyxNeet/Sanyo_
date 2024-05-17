'use client'
import Image from 'next/image'
import CountItem from './CountItem'
import {Button} from '@/components/ui/button'
import Link from 'next/link'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import {useRef} from 'react'

export default function CountUp({dataCountUp}) {
  const imageRef = useRef(null)
  const rightRef = useRef(null)
  useGSAP(() => {
    if (window?.innerWidth > 1024) {
      gsap.to(imageRef.current, {
        scrollTrigger: {
          trigger: imageRef.current,
          pin: true,
          start: 'top top',
          endTrigger: rightRef?.current,
          end: 'bottom bottom',
          pinSpacing: false,
          anticipatePin: 1
        },
      })
    }
  }, [])
  return (
    <section className='flex max-md:flex-col-reverse md:h-[76.6rem] relative max-md:py-[3.37rem] max-md:border-t-[0.579px] solid border-yellow-500 max-md:border-b-0 max-md:bg-home_count'>
      <Image
        ref={imageRef}
        src={'/images/home/sectionCount/imageCount.png'}
        alt='image'
        width={1000}
        height={1000}
        className='md:w-[56rem] md:h-screen max-md:mt-[1.81rem] h-[31.4375rem] w-[21.9375rem] object-cover ml-auto mr-auto max-md:border-[0.579px] max-md:solid border-yellow-500 max-md:rounded-[0.625rem]'
      />
      <div className='md:hidden absolute h-[9.25rem] left-[1.62rem] right-[1.62rem] bottom-[4.37rem] bg-[#000] bg-opacity-30 backdrop-blur-[6px] rounded-[0.5rem]'>
        <div className='flex justify-center pt-[1.69rem]'>
          <Image
            src={'/images/home/sectionCount/logosanyo.svg'}
            alt='logo'
            width={200}
            height={200}
            className='w-[2.45963rem] h-[2.45963rem] object-cover'
          />
          <div>
            <Image
              src={'/images/home/sectionCount/sanyomb.svg'}
              alt='sanyo'
              width={300}
              height={300}
              className='w-[11.30481rem] h-[1.51363rem] object-contain'
            />
            <h4 className='text-[0.632rem] font-Iciel text-white leading-1.3 uppercase'>
              {dataCountUp?.title}
            </h4>
          </div>
        </div>
      </div>
      <div
        ref={rightRef}
        className='md:ml-[3rem] md:pr-[3.75rem] md:pt-[6.88rem] max-md:pb-[4.06rem] border-b-[1px] solid border-grey-500 border-opacity-10 relative'
      >
        <Image
          src='/images/home/sectionCount/layoutBoxMb.svg'
          alt='box'
          width={120}
          height={120}
          className='w-[3.25rem] h-[3.125rem] object-cover absolute right-0 bottom-0 md:hidden'
        />
        <Image
          src={'/images/home/sectionCount/logo.png'}
          alt='logo'
          width={500}
          height={300}
          quality={100}
          className='w-[30.75rem] h-[4.06rem] object-cover max-md:hidden'
        />
        <h3 className='font-SVNLagu  max-md:px-[0.75rem] md:text-[2.125rem] text-[0.625rem] leading-1.5 max-md:tracking-[0.05rem] font-semibold md:leading-[1.2] uppercase md:text-yellow-500 text-grey-500 opacity-80 md:mt-[0.75rem]'>
          {dataCountUp?.title}
        </h3>
        <div className='text-grey-400  max-md:px-[0.75rem] max-md:font-medium max-md:text-grey-800 font-Iciel leading-1.7 md:uppercase md:mt-[0.75rem] mt-[0.5rem] md:text-[1.3rem] lg:text-[0.875rem] text-[1.125rem]  max-md:leading-1.4 max-md:pb-[1.69rem] max-md:border-b-[1px] border-grey-500 border-opacity-10 [&>p>strong]:font-medium max-md:[&>p>strong]:text-yellow-500 max-md:[&>p>strong]:font-medium' dangerouslySetInnerHTML={{__html:dataCountUp?.description}}>
          
        </div>
        <div className='grid grid-cols-2 max-md:px-[0.81rem] max-md:mt-[1.81rem] md:gap-x-[1.17rem] md:gap-y-[1.48rem] gap-x-[3.31rem] gap-y-[1.75rem] md:mt-[3.4rem]'>
          {dataCountUp?.list_info?.map((item, index) => (
            <CountItem
              key={index}
              num={item?.num}
              desc={item?.desc}
              className={`${
                (index + 1) % 2 === 0 ? 'relative md:translate-y-[3.81rem]' : ''
              }`}
            />
          ))}
        </div>
      </div>

      <Link
        className='absolute md:bottom-[5.88rem] md:right-[28%] bottom-[6rem] max-md:left-[7rem] md:pt-4'
        href={`/ve-chung-toi`}
      >
        <Button
          text='VỀ CHÚNG TÔI'
          isBlack={true}
          isHover={true}
          className={'max-md:border-none'}
        />
      </Link>
    </section>
  )
}
