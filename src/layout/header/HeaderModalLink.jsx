import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

export default function HeaderModalLink({
  isLink,
  href,
  text,
  handleOnMouseEnter,
  handleOnMouseLeave,
  handleOnClick,
  isActive,
}) {
  if (isLink) {
    return (
      <Link
        href={href}
        className='relative w-fit font-Iciel text-1.25 flex flex-row items-center group opacity-60 hover:opacity-100 transition-300 py-[0.9rem]'
        onClick={handleOnClick}
        onMouseEnter={handleOnMouseLeave}
      >
        <Image
          src={`/images/layout/header/arrow-right-yellow-long.svg`}
          alt={text}
          className='w-[2.3125rem] h-[0.4375rem] absolute top-1/2 left-0 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-500'
          width={120}
          height={120}
        />
        <span className='text-white translate-x-0 group-hover:translate-x-11 transition-500 group-hover:text-yellow-500'>
          {text}
        </span>
      </Link>
    )
  } else {
    return (
      <button
        className={clsx(
          'relative w-fit font-Iciel text-1.25 flex flex-row items-center group py-[0.9rem] transition-300',
          {
            'opacity-60 hover:opacity-100': !isActive,
          },
        )}
        onMouseEnter={handleOnMouseEnter}
      >
        <Image
          src={`/images/layout/header/arrow-right-yellow-long.svg`}
          alt={text}
          className={clsx(
            'w-[2.3125rem] h-[0.4375rem] absolute top-1/2 left-0 -translate-y-1/2 transition-500',
            {
              'opacity-0 group-hover:opacity-100': !isActive,
            },
          )}
          width={120}
          height={120}
        />
        <span
          className={clsx('text-white transition-500', {
            'text-white group-hover:text-yellow-500 group-hover:translate-x-11 ':
              !isActive,
            'text-yellow-500 translate-x-11': isActive,
          })}
        >
          {text}
        </span>
      </button>
    )
  }
}
