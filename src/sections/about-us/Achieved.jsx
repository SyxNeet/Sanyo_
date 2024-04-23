'use client'

import {useEffect, useState} from 'react'
import {achieved} from '../../../data/ve-chung-toi/achieved'
import AchievedNum from '@/components/achieved/AchievedNum'
import Image from 'next/image'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'

export default function Achieved({isMobile}) {
  const [startCounting, setStartCounting] = useState(true)
  useEffect(() => {
    let firstRun = false
    const fnc = () => {
      if (!firstRun) {
        const container = document.querySelector('.achieved-num-container')
        const rect = container.getBoundingClientRect()
        if (
          (rect.top >= 0 && rect.top < window.innerHeight) ||
          (rect.top <= 0 &&
            Math.abs(rect.top) < Math.abs(parseFloat(container.offsetHeight)))
        ) {
          setStartCounting(true)
          firstRun = true
        } else {
          setStartCounting(false)
        }
      }
    }
    window.addEventListener('scroll', fnc)
    return () => window.removeEventListener('scroll', fnc)
  }, [])
  useGSAP(() => {
    if (!isMobile) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.achieved-num-container',
          start: 'top bottom-=20%',
          end: 'bottom top',
          once: true,
        },
      })
      tl.to(
        '.japan',
        {
          scale: 1,
          duration: 0.8,
        },
        '>+=0.4',
      )
    }
  }, [isMobile])
  return (
    <>
      <section className='md:h-[35.8125rem] flex flex-col md:flex-row items-stretch'>
        <div className='relative md:basis-[60%] mb-[1.88rem]'>
          {!isMobile && (
            <>
              <div className='absolute top-0 left-0 w-[4.9375rem] h-[4.6875rem] opacity-15 bg-yellow-500' />
              <div className='absolute top-0 right-0 w-[4.4375rem] h-[4.1875rem] opacity-15 bg-yellow-500'>
                <div className='absolute bottom-0 left-0 w-[2.3125rem] h-[2.1875rem] opacity-[6.67] bg-yellow-500 -translate-x-full translate-y-full' />
              </div>
            </>
          )}
          {!isMobile && (
            <h3 className='text-grey-500 font-SVNLagu text-1.25 font-medium tracking-0.1 uppercase pt-[4.2rem] ml-[8.1rem] w-[17.8125rem] mb-[2.2rem]'>
              Những điều chúng tôi đã đạt được
            </h3>
          )}
          {isMobile && (
            <div className='mb-[1.13rem]'>
              <h2 className='w-[80%] mx-auto text-grey-900 text-center font-SVNLagu text-1.5 font-semibold leading-1.3 mb-2'>
                Những điều chúng tôi đã đạt{' '}
                <strong className='font-semibold leading-1.3 text-yellow-500 uppercase'>
                  đạt được
                </strong>
              </h2>
              <p className='w-[88%] mx-auto text-center text-0.75 leading-1.5 font-Iciel text-grey-700'>
                Đóng góp vào sự phát triển bền vững của ngành thang máy thông
                qua nghiên cứu và phát triển liên tục
              </p>
            </div>
          )}
          <div className='w-[84%] md:w-full mx-auto achieved-num-container grid grid-cols-2 items-center md:ml-[7.56rem] gap-y-[1.56rem] md:gap-x-[11.4rem]'>
            {achieved.map((item, i) => {
              return (
                <AchievedNum
                  key={i}
                  {...item}
                  style={
                    isMobile
                      ? {order: `${i === 1 ? 2 : i === 2 ? 1 : i}`}
                      : undefined
                  }
                  startCounting={startCounting}
                />
              )
            })}
          </div>
        </div>
        <div className='relative md:basis-[40%] h-[24.375rem] md:h-auto flex flex-row items-center justify-center'>
          <Image
            src={`/images/about-us/achieved-deco-background.svg`}
            alt='japan'
            className='absolute object-contain md:h-[80%] w-full -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 -z-10'
            width={1920}
            height={1080}
          />
          <div className='relative h-full md:h-[85%] w-full overflow-hidden'>
            <Image
              src={`/images/about-us/japan.png`}
              alt=''
              className='absolute object-contain h-full scale-[6] -translate-x-1/2 -translate-y-1/2 japan top-1/2 left-1/2'
              style={{transformOrigin: '49% 65%'}}
              width={1920}
              height={1080}
            />
          </div>
        </div>
      </section>
    </>
  )
}
