'use client'

import {useEffect, useRef, useState} from 'react'
import {formatNumber} from '../../../utils/formatNumber'

const duration = 1200
const numRun = 20

export default function AchievedNum({num, text, startCounting, style}) {
  const [number, setNumber] = useState(0)
  const intervalRef = useRef(null)
  useEffect(() => {
    if (startCounting) {
      let jump = Math.round(num / numRun)
      let reminder = jump % 5
      if (reminder !== 0) {
        jump = jump + (5 - reminder)
      }
      let value = 0
      intervalRef.current = setInterval(() => {
        value += jump
        setNumber(value)
        if (value >= num) {
          clearInterval(intervalRef.current)
        }
      }, duration / numRun)
      return () => clearInterval(intervalRef.current)
    } else {
      setNumber(0)
    }
  }, [startCounting])
  return (
    <div
      className='flex flex-col items-center md:items-start'
      style={style}
    >
      <div className='flex flex-row items-start'>
        <h2 className='text-2.5 md:text-6.7 font-extrabold font-SVNLagu leading-1.4 bg-achieved-text bg-cover text-transparent bg-center w-fit bg-clip-text'>
          {formatNumber(number)}
        </h2>
        <span className='text-1.25 md:text-4.62 font-medium leading-1.4 md:ml-1 -translate-y-1 md:-translate-y-6 bg-achieved-text bg-cover text-transparent bg-top w-fit bg-clip-text'>
          +
        </span>
      </div>
      <p className='text-0.625 md:text-1.15 leading-1.2 text-grey-900 uppercase md:-mt-4'>
        {text}
      </p>
    </div>
  )
}
