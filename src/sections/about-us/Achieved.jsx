'use client'

import {useEffect, useState} from 'react'
import {achieved} from '../../../data/ve-chung-toi/achieved'
import AchievedNum from '@/components/achieved/AchievedNum'

export default function Achieved({isMobile}) {
  const [startCounting, setStartCounting] = useState(true)
  useEffect(() => {
    const fnc = () => {
      const container = document.querySelector('.achieved-num-container')
      const rect = container.getBoundingClientRect()
      if (
        (rect.top >= 0 && rect.top < window.innerHeight) ||
        (rect.top <= 0 &&
          Math.abs(rect.top) < Math.abs(parseFloat(container.offsetHeight)))
      ) {
        setStartCounting(true)
      } else {
        setStartCounting(false)
      }
    }
    window.addEventListener('scroll', fnc)
    return () => window.removeEventListener('scroll', fnc)
  }, [])
  return (
    <>
      <section className='h-[35.8125rem] flex flex-row'>
        <div className='relative basis-[60%]'>
          <div className='absolute top-0 left-0 w-[4.9375rem] h-[4.6875rem] opacity-15 bg-yellow-500' />
          <div className='absolute top-0 right-0 w-[4.4375rem] h-[4.1875rem] opacity-15 bg-yellow-500'>
            <div className='absolute bottom-0 left-0 w-[2.3125rem] h-[2.1875rem] opacity-[6.67] bg-yellow-500 -translate-x-full translate-y-full' />
          </div>
          <h3 className='text-grey-500 font-SVNLagu text-1.25 font-medium tracking-0.1 uppercase pt-[4.2rem] ml-[8.1rem] w-[17.8125rem] mb-[2.2rem]'>
            Những điều chúng tôi đã đạt được
          </h3>

          <div className='achieved-num-container grid grid-cols-2 items-center ml-[7.56rem] gap-y-[1.56rem] gap-x-[11.4rem]'>
            {achieved.map((item, i) => {
              return (
                <AchievedNum
                  key={i}
                  {...item}
                  startCounting={startCounting}
                />
              )
            })}
          </div>
        </div>
        <div className='basis-[40%] h-12 bg-green-500'></div>
      </section>
    </>
  )
}
