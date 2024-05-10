'use client'

import {cn} from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import {useEffect, useRef, useState} from 'react'

export default function DuAnNoiBat() {
  const [isOpen, setIsOpen] = useState(false)
  const [countryList, setCountryList] = useState([])
  const ref = useRef(null)
  useEffect(() => {
    if (isOpen) {
      ref.current.style.maxHeight = ref.current.scrollHeight + 'px'
    } else {
      ref.current.style.maxHeight = '0px'
    }
  }, [isOpen])
  return (
    <section className='flex flex-row flex-nowrap px-[3.75rem] pb-12'>
      <div className='basis-[28%] mr-[5rem]'>
        <h2 className='text-grey-900 font-SVNLagu text-3 font-semibold leading-1.2 uppercase [&_strong]:text-yellow-500 [&_strong]:font-semibold mb-4'>
          DANH SÁCH dự án <strong>nổi bật</strong>
        </h2>
        <p className='text-grey-500 text-justify font-Iciel text-1 leading-1.5'>
          Đóng góp vào sự phát triển bền vững của ngành thang máy thông qua
          nghiên cứu và phát triển liên tục
        </p>
        <div className='flex flex-row mt-8'>
          <div className='flex flex-col border rounded-[1.43rem] border-grey-10 pt-1 pb-2'>
            <button
              className='flex flex-row items-center px-[1.2rem] pt-2.5 pb-1.5'
              onClick={() => setIsOpen(!isOpen)}
            >
              <Image
                src={`/images/du-an/location.svg`}
                alt=''
                className='size-[1.1875rem] mr-2'
                width={120}
                height={120}
              />
              <p className='text-grey-900 font-Iciel text-0.875 leading-1.5'>
                Quốc gia
              </p>
              <Image
                src={`/images/du-an/dropdown.svg`}
                alt=''
                className='w-[0.7rem] h-2 ml-6'
                width={120}
                height={120}
              />
            </button>
            <ul
              ref={ref}
              className='flex flex-col overflow-hidden transition-500 max-h-0 pt-0.5'
            >
              <li
                className='flex flex-row items-center px-4 py-2.5 flex-none'
                onClick={() => {
                  setCountryList((prevState) => {
                    let exist = false
                    prevState = prevState ?? []
                    prevState.filter((item) => {
                      if (item === 'all-country') {
                        exist = true
                      }
                      return item !== 'all-country'
                    })
                    if (!exist) {
                      return [...prevState, 'all-country']
                    }
                  })
                }}
              >
                <div
                  className={cn('size-[0.875rem] border border-grey-200 mr-2', {
                    'bg-yellow-500':
                      countryList && countryList.includes('all-country'),
                  })}
                ></div>
                <p className='text-grey-500 font-Iciel text-0.75 leading-1.5 uppercase'>
                  Tất cả
                </p>
              </li>
              <li className='flex flex-row items-center px-4 py-2.5 flex-none'>
                <div className='size-[0.875rem] border border-grey-200 mr-2'></div>
                <p className='text-grey-500 font-Iciel text-0.75 leading-1.5 uppercase'>
                  VIỆT NAm
                </p>
              </li>
              <li className='flex flex-row items-center px-4 py-2.5 flex-none'>
                <div className='size-[0.875rem] border border-grey-200 mr-2'></div>
                <p className='text-grey-500 font-Iciel text-0.75 leading-1.5 uppercase'>
                  THẾ GIỚI
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='basis-[72%]'></div>
    </section>
  )
}
