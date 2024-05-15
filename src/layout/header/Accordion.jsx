import {useEffect, useRef, useState} from 'react'
import AccordionLink from './AccordionLink'
import Link from 'next/link'
import Image from 'next/image'
import {clsx} from 'clsx'

export default function Accordion({
  text,
  accordionData,
  isLastChild,
  href,
  setIsOpenModalMenu,
}) {
  const accordionRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    if (isOpen) {
      accordionRef.current.style.maxHeight =
        accordionRef.current.scrollHeight + 'px'
      accordionRef.current.style.opacity = 1
    } else {
      accordionRef.current.style.opacity = 0
      accordionRef.current.style.maxHeight = null
    }
  }, [isOpen])
  return (
    <>
      <button
        className='flex flex-col text-grey-0 text-1.25 font-Iciel'
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className={clsx('flex flex-row items-center w-full transition-300', {
            'text-yellow-500': isOpen,
          })}
        >
          {text}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='13'
            height='6'
            viewBox='0 0 13 6'
            fill='none'
            className={clsx('w-[0.8125rem] h-2 ml-auto transition-300', {
              'rotate-180 [&_path]:fill-yellow-500': isOpen,
            })}
          >
            <path
              d='M6.5 6L0.870833 -1.06037e-06L12.1292 -7.61308e-08L6.5 6Z'
              fill='white'
            />
          </svg>
        </div>
        <nav
          ref={accordionRef}
          className='grid w-full grid-cols-1 gap-2 overflow-hidden opacity-0 max-h-0 transition-500'
        >
          <div className='w-full' />
          {accordionData.map((item, i) => {
            return (
              <AccordionLink
                key={i}
                text={item.text}
                href={item.href}
                isLastChild={i === accordionData.length - 1}
                setIsOpenModalMenu={setIsOpenModalMenu}
              />
            )
          })}
          {href && (
            <>
              <div className='w-full h-[0.0625rem] opacity-50 bg-grey-0/10' />
              <Link
                href={href}
                className='flex flex-row items-center text-0.875 text-yellow-500 font-Iciel leading-1.5 font-medium mx-auto pt-2'
              >
                XEM TẤT CẢ
                <Image
                  src={`/images/layout/header/arrow-right-yellow.svg`}
                  alt='xem them'
                  className='w-[0.785rem] h-[0.9rem] ml-[0.62rem]'
                  width={120}
                  height={120}
                />
              </Link>
            </>
          )}
        </nav>
      </button>
    </>
  )
}
