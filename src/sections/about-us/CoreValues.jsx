'use client'

import Image from 'next/image'
import Link from 'next/link'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import {useRef, useState} from 'react'
import {coreValues} from '../../../data/core-values'
import clsx from 'clsx'

export default function CoreValues({isMobile}) {
  const firstRef = useRef(null)
  const secondRef = useRef(null)
  const [activeImage, setActiveImage] = useState(0)
  useGSAP(() => {
    gsap.to(firstRef.current, {
      scrollTrigger: {
        trigger: firstRef.current,
        pin: true,
        start: 'top top',
        end: 'bottom top',
        pinSpacing: false,
      },
    })
    gsap.to(secondRef.current, {
      scrollTrigger: {
        trigger: secondRef.current,
        endTrigger: '.section-container',
        pin: true,
        start: 'top top',
        end: 'bottom bottom',
        markers: true,
      },
    })
  }, [])
  return (
    <>
      <div className=''>
        <section
          ref={firstRef}
          className='sticky top-0 h-[80vh] -z-10'
        >
          <h2 className='text-center uppercase text-2'>
            Chia sẻ từ BAN lãnh đạo
          </h2>
          {Array.from({length: 20}, (_, i) => i + 1).map((_, i) => {
            return <p className='mx-4'>{i}</p>
          })}
        </section>
        <section className='flex flex-row section-container'>
          <div
            ref={secondRef}
            className='basis-[65%] h-screen sticky top-0'
          >
            {coreValues.map((item, i) => {
              return (
                <Image
                  src={item.src}
                  alt={item.alt}
                  className={clsx('absolute top-0 left-0 object-cover w-full transition-300', {
                    'opacity-100': activeImage === i,
                    'opacity-0': activeImage !== i,
                  })}
                  width={1920}
                  height={1080}
                />
              )
            })}
          </div>
          <div className='basis-[35%]'>
            <h2 className='text-3 font-SVNLagu font-semibold leading-1.3 text-grey-900 pl-[2.94rem] pt-[5.56rem] pr-[6.5rem] pb-[2.94rem]'>
              Giá trị cốt lõi của{' '}
              <strong className='text-yellow-500'>SANYO YUSOKI</strong>
            </h2>
            <nav>
              {coreValues.map((item, i) => {
                return (
                  <Link
                    href={item.href}
                    className='pr-[1.88rem] pl-[2.94rem] py-[2.75rem] flex flex-row items-start border-t hover:bg-yellow-500 group transition-300'
                    onMouseEnter={() => setActiveImage(i)}
                  >
                    <div>
                      <h3 className='font-SVNLagu text-2.25 font-medium leading-1.3 text-yellow-500 mb-[0.44rem] group-hover:text-white transition-300'>
                        {item.title}
                      </h3>
                      <p className='text-1.125 font-Iciel font-medium leading-1.5 text-grey-500 group-hover:text-white transition-300'>
                        {item.content}
                      </p>
                    </div>
                    <svg
                      width='33'
                      height='38'
                      viewBox='0 0 33 38'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                      className='ml-[1.69rem] w-[1.875rem] h-[2.3125rem] shrink-0 group-hover:[&_path]:stroke-white [&_path]:transition-300'
                    >
                      <path
                        d='M1 37.001L31.001 7'
                        stroke='#DAB571'
                        stroke-width='2.57143'
                      />
                      <path
                        d='M4.00439 7H31.0053V34.0009'
                        stroke='#DAB571'
                        stroke-width='2.57143'
                      />
                    </svg>
                  </Link>
                )
              })}
            </nav>
          </div>
        </section>
      </div>
      <div className='h-screen bg-green-500' />
    </>
  )
}
