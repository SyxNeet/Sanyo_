import {useRef, useEffect} from 'react'
import Image from 'next/image'
import {cn} from '@/lib/utils'

export default function Dropdown({
  icon,
  content,
  children,
  className,
  isOpen,
  setIsOpen,
}) {
  const ref = useRef(null)
  useEffect(() => {
    if (isOpen) {
      ref.current.style.maxHeight = ref.current.scrollHeight + 'px'
      ref.current.style.opacity = 1
    } else {
      ref.current.style.maxHeight = '0px'
      ref.current.style.opacity = 0
    }
  }, [isOpen])
  return (
    <div
      className={cn(
        'flex flex-col border rounded-[1.43rem] border-grey-100 md:pt-1 md:pb-1 bg-grey-0',
        className,
      )}
    >
      <button
        className='flex flex-row items-center px-[0.9rem] pt-3 pb-[0.625rem] md:px-[1.2rem] md:pt-2.5 md:pb-1.5'
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image
          src={icon}
          alt=''
          className='size-[0.8125rem] md:size-[1.1875rem] mr-2'
          width={120}
          height={120}
        />
        <p className='text-grey-900 font-Iciel text-0.75 md:text-0.875 leading-1.5 max-md:uppercase'>
          {content}
        </p>
        <Image
          src={`/images/du-an/dropdown.svg`}
          alt=''
          className={cn('w-[0.7rem] h-2 ml-6 transition-300', {
            'rotate-180': isOpen,
          })}
          width={120}
          height={120}
        />
      </button>
      <ul
        ref={ref}
        className='flex flex-col overflow-hidden transition-500 max-h-0 pt-0.5 opacity-0'
      >
        {children}
      </ul>
    </div>
  )
}
