import clsx from 'clsx'
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
        className='relative w-full font-Iciel text-1.25 flex flex-row items-center group opacity-60 hover:opacity-100 transition-300 py-[0.9rem]'
        onClick={handleOnClick}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='38'
          height='8'
          viewBox='0 0 38 8'
          fill='none'
          className='w-[2.3125rem] h-[0.4375rem] absolute top-1/2 left-0 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-500'
        >
          <rect
            x='34'
            y='3.5'
            width='2'
            height='34'
            transform='rotate(90 34 3.5)'
            fill='url(#paint0_linear_5107_1608)'
          />
          <circle
            cx='33.7039'
            cy='4.20487'
            r='3.70487'
            fill='url(#paint1_linear_5107_1608)'
          />
          <defs>
            <linearGradient
              id='paint0_linear_5107_1608'
              x1='35'
              y1='3.5'
              x2='35'
              y2='37.5'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#D1B37B' />
              <stop
                offset='1'
                stopColor='#D1B37B'
                stopOpacity='0'
              />
            </linearGradient>
            <linearGradient
              id='paint1_linear_5107_1608'
              x1='33.7039'
              y1='0.5'
              x2='33.7039'
              y2='7.90973'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#D1B37B' />
              <stop
                offset='1'
                stopColor='#E4B867'
              />
            </linearGradient>
          </defs>
        </svg>
        <span className='text-white translate-x-0 group-hover:translate-x-11 transition-500 group-hover:text-yellow-500'>
          {text}
        </span>
      </Link>
    )
  } else {
    return (
      <button
        className={clsx(
          'relative w-full font-Iciel text-1.25 flex flex-row items-center group py-[0.9rem] transition-300',
          {
            'opacity-60 hover:opacity-100': !isActive,
          },
        )}
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='38'
          height='8'
          viewBox='0 0 38 8'
          fill='none'
          className={clsx(
            'w-[2.3125rem] h-[0.4375rem] absolute top-1/2 left-0 -translate-y-1/2 transition-500',
            {
              'opacity-0 group-hover:opacity-100': !isActive,
            },
          )}
        >
          <rect
            x='34'
            y='3.5'
            width='2'
            height='34'
            transform='rotate(90 34 3.5)'
            fill='url(#paint0_linear_5107_1608)'
          />
          <circle
            cx='33.7039'
            cy='4.20487'
            r='3.70487'
            fill='url(#paint1_linear_5107_1608)'
          />
          <defs>
            <linearGradient
              id='paint0_linear_5107_1608'
              x1='35'
              y1='3.5'
              x2='35'
              y2='37.5'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#D1B37B' />
              <stop
                offset='1'
                stopColor='#D1B37B'
                stopOpacity='0'
              />
            </linearGradient>
            <linearGradient
              id='paint1_linear_5107_1608'
              x1='33.7039'
              y1='0.5'
              x2='33.7039'
              y2='7.90973'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#D1B37B' />
              <stop
                offset='1'
                stopColor='#E4B867'
              />
            </linearGradient>
          </defs>
        </svg>
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
