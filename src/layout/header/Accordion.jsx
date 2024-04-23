import {useEffect, useRef, useState} from 'react'
import AccordionLink from './AccordionItem'
import {clsx} from 'clsx'

export default function Accordion({title, accordionData, isLastChild, showMore}) {
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
          {title}
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
          className='grid w-full grid-cols-1 gap-4 overflow-hidden opacity-0 max-h-0 transition-500'
        >
          <div className='w-full h-[1.12rem]' />
          {accordionData.map((item, i) => {
            return (
              <AccordionLink
                key={i}
                text={item.text}
                href={item.href}
                isLastChild={i === accordionData.length - 1}
              />
            )
          })}
        </nav>
      </button>
      {!isLastChild && (
        <div className='w-full h-[0.3rem] rounded-full bg-grey-0 opacity-5' />
      )}
    </>
  )
}
