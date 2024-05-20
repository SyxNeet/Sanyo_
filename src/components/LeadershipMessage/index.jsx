'use client'

import Image from 'next/image'
import {forwardRef, useEffect} from 'react'
import gsap from 'gsap'
import {Fade} from 'react-awesome-reveal'

const LeadershipMessage = forwardRef(({isMobile, data}, ref) => {
  useEffect(() => {
    if (!isMobile) {
      const fnc = () => {
        const sectionLeaderMessageContainer = document.querySelector(
          '.section-leader-message-container',
        )
        const rect = sectionLeaderMessageContainer.getBoundingClientRect()
        if (
          rect.top > 0 &&
          rect.top <=
            parseFloat(window.innerHeight) - parseFloat(rect.height) / 2
        ) {
          gsap.to('.sun', {top: '17%', duration: 0.5})
        }
      }
      window.addEventListener('scroll', fnc)
      return () => window.removeEventListener('scroll', fnc)
    }
  }, [isMobile])
  return (
    <section
      ref={ref}
      className='relative flex flex-col section-leader-message-container max-md:mb-[2.5rem] md:min-h-[40rem]'
    >
      {isMobile && (
        <div className='absolute left-0 w-full h-12 bottom-1/3 bg-gradient-to-t from-white to-white/0' />
      )}
      {!isMobile && (
        <Fade className='-z-10'>
          <Image
            src={`/images/about-us/bglanhdao.png`}
            alt='bgLeadership'
            className='absolute top-0 left-0 object-cover w-full h-full'
            width={1920}
            height={1080}
          />
        </Fade>
      )}
      {isMobile && (
        <Image
          src={`/images/about-us/bgmblandao.png`}
          alt='bgLeadership'
          className='absolute top-0 left-0 object-cover w-full h-2/3 -z-10'
          width={1920}
          height={1080}
        />
      )}
      <div className='flex w-full overflow-hidden max-md:flex-row-reverse max-md:px-4 max-md:items-center max-md:pt-[4rem]'>
        <Fade
          triggerOnce
          className='w-[40%]'
        >
          <div className='relative flex justify-end'>
            <div className='sun w-[32.8125rem] h-[32.8125rem] bg-[#DAB571] absolute -z-[1] rounded-[50%] right-0 top-[-5%] md:top-[100%] transition max-md:w-[9.25rem] max-md:bg-transparent max-md:h-[9.25rem] max-md:bg-[linear-gradient(180deg,_rgba(218,_181,_113,_0.5)_0%,_rgba(218,_181,_113,_0.00)_62.11%)] max-md:left-0'></div>
            <Image
              src={data?.image?.url}
              alt={data?.image?.alt ?? 'lãnh đạo'}
              className='w-[20.9375rem] max-md:w-[7.375rem] object-cover'
              width={1920}
              height={1080}
            />
          </div>
        </Fade>
        <div className='w-[60%] pl-[3.12rem] pt-[5.5rem] max-md:pl-0'>
          <div className='w-[47rem] relative'>
            {!isMobile && (
              <Fade triggerOnce>
                <Image
                  src={`/images/about-us/dauphay.png`}
                  alt='dauphay'
                  className='w-16 h-[3.3125rem] top-0 right-0 absolute'
                  width={1920}
                  height={1080}
                />
              </Fade>
            )}
            <Fade
              direction='up'
              triggerOnce
            >
              <h2 className='font-SVNLagu text-[1.25rem] uppercase font-medium leading-1.5 mb-[1.56rem] text-[#484F57] opacity-80 max-md:text-[0.625rem] max-md:mb-2'>
                chia sẻ từ BAN lãnh đạo
              </h2>
            </Fade>
            <Fade
              direction='up'
              triggerOnce
            >
              <h3
                className='w-[44.25rem] font-SVNLagu text-[2.25rem] font-semibold leading-1.4 mb-2 max-md:w-[14.4375rem] max-md:text-[0.9375rem] [&_strong]:font-semibold [&_strong]:text-yellow-500'
                dangerouslySetInnerHTML={{__html: data?.heading}}
              ></h3>
            </Fade>
            <Fade
              direction='up'
              triggerOnce
            >
              <p className='w-[43.125rem] font-Iciel text-base leading-1.5 font-normal mb-[3.12rem] text-grey-900 max-md:hidden'>
                {data?.description}
              </p>
            </Fade>
            <Fade triggerOnce>
              <span className='font-Iciel font-bold leading-1.5 text-[1.25rem] text-grey-900 max-md:hidden'>
                {data?.name}
              </span>
            </Fade>
          </div>
        </div>
      </div>
      {isMobile && (
        <div className='relative z-10 w-full px-3'>
          <div className='bg-[linear-gradient(180deg,_rgba(209,179,123,0.40)_0%,_rgba(255,255,255,0.40)_19.12%)] border-yellow-500 border-[1px] px-[1.125rem] pt-6 rounded-xl border-opacity-60 pb-6'>
            <p className='text-justify font-Iciel text-xs font-normal leading-1.5 pb-4'>
              {data.description}
            </p>
            <div className='flex flex-col'>
              <span className='font-Iciel text-[0.625rem] font-normal leading-1.5 mb-1 text-grey-500'>
                Chia sẻ từ
              </span>
              <span className='italic text-xs font-normal leading-1.5'>
                {data?.name}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  )
})

export default LeadershipMessage
