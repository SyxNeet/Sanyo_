'use client'

import Image from 'next/image'
import {forwardRef, useEffect} from 'react'
import gsap from 'gsap'

const LeadershipMessage = forwardRef(({isMobile}, ref) => {
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
      className='relative flex flex-col pt-6 mb-12 md:mb-24 md:pt-12 section-leader-message-container -z-10'
    >
      <Image
        src={`/images/about-us/bglanhdao.png`}
        alt='bgLeadership'
        className='absolute top-0 left-0 object-cover w-full h-full -z-10 max-md:hidden'
        width={1920}
        height={1080}
      />
      <Image
        src={`/images/about-us/bgmblandao.png`}
        alt='bgLeadership'
        className='absolute top-0 left-0 hidden object-cover w-full h-full -z-10 max-md:block'
        width={1920}
        height={1080}
      />
      <div className='flex w-full pt-12 overflow-hidden max-md:flex-row-reverse max-md:px-4 max-md:items-center'>
        <div className='relative w-[40%] flex justify-end'>
          <div className='sun w-[32.8125rem] h-[32.8125rem] bg-[#DAB571] absolute -z-[1] rounded-[50%] right-0 top-[-5%] md:top-[100%] transition max-md:w-[9.25rem] max-md:bg-transparent max-md:h-[9.25rem] max-md:bg-[linear-gradient(180deg,_#DAB571_0%,_rgba(218,_181,_113,_0.00)_62.11%)] max-md:left-0'></div>
          <Image
            src={`/images/about-us/lanhdao.png`}
            alt='leadership'
            className='w-[20.9375rem] max-md:w-[7.375rem] max-md:h-[12.625rem] object-contain'
            width={1920}
            height={1080}
          />
        </div>
        <div className='w-[60%] pl-[3.12rem] pt-[5%] max-md:pl-0'>
          <div className='w-[47rem] relative'>
            <Image
              src={`/images/about-us/dauphay.png`}
              alt='dauphay'
              className='w-16 h-[3.3125rem] top-0 right-0 absolute max-md:hidden'
              width={1920}
              height={1080}
            />
            <h2 className='font-SVNLagu text-[1.25rem] uppercase font-medium leading-1.5 mb-[1.56rem] text-[#484F57] opacity-80 max-md:text-[0.625rem] max-md:mb-2'>
              chia sẻ từ BAN lãnh đạo
            </h2>
            <h3 className='w-[44.25rem] font-SVNLagu text-[2.25rem] font-semibold leading-1.4 mb-2 max-md:w-[14.4375rem] max-md:text-[0.9375rem]'>
              Tập đoàn{' '}
              <strong className='font-semibold text-yellow-500'>
                thang máy Sanyo luôn tôn trọng niềm tin rằng
              </strong>{' '}
              "nền tảng vững chắc là nền tảng của sự phát triển chất lượng"
            </h3>
            <p className='w-[43.125rem] font-Iciel text-base leading-1.5 font-normal mb-[3.12rem] text-grey-900 max-md:hidden'>
              Tập đoàn thang máy Sanyo luôn tôn trọng niềm tin rằng "nền tảng
              vững chắc là nền tảng của sự phát triển chất lượng". Chúng tôi
              liên tục nâng cao năng lực R&D của mình cho đầy đủ các sản phẩm
              thang máy, nỗ lực cung cấp thang máy an toàn hơn và hiệu suất cao
              hơn cho toàn xã hội. Nỗ lực này nhằm đạt được sự công nhận toàn
              cầu về những phát triển mới trong ngành thang máy.
            </p>
            <span className='font-Iciel font-bold leading-1.5 text-[1.25rem] text-grey-900 max-md:hidden'>
              CEO SANYO YUSOKI
            </span>
          </div>
        </div>
      </div>
      <div className='w-full px-3 md:hidden'>
        <div className='bg-[linear-gradient(180deg,_rgba(209,179,123,0.40)_0%,_rgba(255,255,255,0.40)_19.12%)] border-yellow-500 border-[1px] px-3 pt-6 rounded-xl border-opacity-60 pb-6'>
          <p className='text-justify font-Iciel text-xs font-normal leading-1.5 pb-4'>
            Tập đoàn thang máy Sanyo luôn tôn trọng niềm tin rằng "nền tảng vững
            chắc là nền tảng của sự phát triển chất lượng". Chúng tôi liên tục
            nâng cao năng lực R&D của mình cho đầy đủ các sản phẩm thang máy, nỗ
            lực cung cấp thang máy an toàn hơn và hiệu suất cao hơn cho toàn xã
            hội. Nỗ lực này nhằm đạt được sự công nhận toàn cầu về những phát
            triển mới trong ngành thang máy.
          </p>
          <div className='flex flex-col'>
            <span className='font-Iciel text-[0.625rem] font-normal leading-1.5 mb-1'>
              Chia sẻ từ
            </span>
            <span className='italic text-xs font-normal leading-1.5'>
              CEO SANYO YUSOKI
            </span>
          </div>
        </div>
      </div>
    </section>
  )
})

export default LeadershipMessage