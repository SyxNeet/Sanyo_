'use client'
import clsx from 'clsx'
import Image from 'next/image'
import LangDropdownPopup from './LangDropdownPopup'

export default function LangDropdown({isMobile, lang = 'vi'}) {
  return (
    
    <button
      className={clsx(
        'relative flex flex-row items-center font-Iciel leading-1.5 group',
        {
          'text-grey-700 text-1 font-medium': !isMobile,
          'text-0.75 text-grey-900': isMobile,
        },
      )}
    >
      <Image
        src={
          lang === 'vi'
            ? `/images/layout/header/vietnam-lang.png`
            : `/images/layout/header/english-lang.png`
        }
        alt={lang === 'vi' ? 'vietnam language' : 'english language'}
        className={clsx('rounded-[0.0625rem]', {
          'w-[1.75rem] h-[1.125rem] mr-[0.56rem]': !isMobile,
          'w-[1.1875rem] h-[0.6875rem] mr-[0.2rem]': isMobile,
        })}
        width={120}
        height={120}
        priority
      />
      {isMobile && lang === 'vi'
        ? 'VIE'
        : !isMobile && lang === 'vi'
        ? 'Việt Nam'
        : ''}
      {isMobile && lang === 'en'
        ? 'ENG'
        : !isMobile && lang === 'en'
        ? 'English'
        : ''}
      <Image
        src={`/images/layout/header/arrow-down.svg`}
        alt='arrow down'
        className={clsx('', {
          'w-[0.7rem] h-[0.5rem] ml-2': !isMobile,
          'w-[0.75rem] h-2 ml-[0.25rem]': isMobile,
        })}
        width={120}
        height={120}
        priority
      />
      <LangDropdownPopup
        isMobile={isMobile}
        lang={lang}
      />
    </button>
  )
}
