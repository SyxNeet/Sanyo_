'use client'
import React, {useEffect, useRef, useState} from 'react'

function useCount({num, text, desc}) {
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
    <div className='flex flex-col h-fit'>
      <div className='flex md:gap-[0.56rem] gap-[0.37rem] items-baseline'>
        <span
          ref={numberRef}
          className='font-averta text-textSecondary md:text-[4.0625rem] text-[2.875rem] font-[900]  uppercase tracking-[-0.20313rem]'
        >
          {number < 10 ? `0${number}` : number}
        </span>
        <span className='font-mark text-textSecondary  whitespace-nowrap md:text-[1.5rem] text-[0.9375rem] font-[700] leading-[1.5] tracking-[-0.075rem]'>
          {text}
        </span>
      </div>
      <p className='text-subTextColor line-clamp-2 xl:w-[11.4rem] max-md:w-[6.75rem] md:w-[11rem] font-averta md:text-[1rem] text-[0.75rem] font-semibold'>
        {desc}
      </p>
    </div>
  )
}

export default useCount
