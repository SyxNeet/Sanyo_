'use client'
import Image from 'next/image'
import {useEffect, useRef, useState} from 'react'

export default function CountItem({num, desc, className}) {
  const [isVisible, setIsVisible] = useState(false)
  const [number, setNumber] = useState(0)
  const numberRef = useRef()

  useEffect(() => {
    const onScroll = () => {
      if (numberRef.current) {
        const rect = numberRef.current?.getBoundingClientRect()
        const viewHeight = Math.max(
          numberRef.current.clientHeight || 0,
          window.innerHeight || 0,
        )
        if (rect.top <= viewHeight && rect.bottom >= 0) {
          setIsVisible(true)
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    let setTimeOutId = null
    if (isVisible) {
      setTimeOutId = setTimeout(() => {
        if (number < parseInt(num)) {
          setNumber((pre) => pre + 1)
        }
      }, 2000 / parseInt(num))
    } else {
      setNumber(0)
    }
    return () => {
      setTimeOutId && clearTimeout(setTimeOutId)
    }
  }, [number, isVisible, num])
  return (
    <div
      className={`relative md:w-[17.86rem] md:h-[20.45rem] md:rounded-[0.45775rem] border-[0.8px] solid border-[#E9E9E9] ${className}`}
    >
      <Image
        src={'/images/home/sectionCount/layout.svg'}
        alt='layout'
        width={300}
        height={300}
        quality={100}
        className='absolute left-0 bottom-0 w-full object-fill'
      />
      <div className='relative w-fit md:left-[1.73rem] md:top-[2.16rem]'>
        <span
          ref={numberRef}
          className='text-yellow-500 font-SVNLagu lg:text-[4.47175rem] font-medium leading-1.2'
        >
          {number < 10 ? `0${number}` : number}
        </span>
        {/* <Image src={'/images/home/sectionCount/plus.svg'} alt="plus" width={100} height={100} className='' /> */}
        <span className='text-yellow-500 font-SVNLagu font-[300] lg:text-[2.79488rem] leading-1.2 absolute'>
          +
        </span>
      </div>
      <h4 className='absolute md:top-[7.53rem] md:left-[1.73rem] md:w-[13.58019rem] text-grey-700 font-SVNLagu lg:text-[1.22069rem] font-semibold leading-1.4'>
        {desc}
      </h4>
    </div>
  )
}