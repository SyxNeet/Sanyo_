import clsx from 'clsx'
import Link from 'next/link'
import Image from 'next/image'

export default function LangDropdown({isMobile}) {
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
        src={`/images/layout/header/vietnam-lang.png`}
        alt='vietnam language'
        className={clsx('', {
          'w-[1.75rem] h-[1.125rem] mr-[0.56rem]': !isMobile,
          'w-[1.1875rem] h-[0.6875rem] mr-[0.2rem]': isMobile,
        })}
        width={120}
        height={120}
      />
      {isMobile ? 'VIE' : 'Việt Nam'}
      <Image
        src={`/images/layout/header/arrow-down.svg`}
        alt='arrow down'
        className={clsx('', {
          'w-[0.7rem] h-[0.5rem] ml-2': !isMobile,
          'w-[0.75rem] h-2 ml-[0.25rem]': isMobile,
        })}
        width={120}
        height={120}
      />
      <div
        className={clsx(
          'absolute bottom-0 pt-2 translate-y-full opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-300 font-normal',
          {
            'left-0': isMobile,
            'left-1/2 -translate-x-1/2': !isMobile,
          },
        )}
      >
        <ul
          className={clsx('w-max bg-grey-0 rounded-[0.375rem]', {
            'py-3 px-[1.24rem]': !isMobile,
            'py-[0.63rem] px-2': isMobile,
          })}
          style={{
            boxShadow:
              'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
          }}
        >
          <li className=''>
            <Link
              href={`/`}
              className={clsx(
                'flex flex-row items-center font-Iciel leading-1.5 text-grey-700',
                {
                  'text-[1rem]': !isMobile,
                  'text-0.75': isMobile,
                },
              )}
            >
              <Image
                src={`/images/layout/header/radio-active.svg`}
                alt='vietnam'
                className={clsx('', {
                  'mr-[0.88rem] size-[0.875rem]': !isMobile,
                  'mr-[0.56rem] size-[0.875rem]': isMobile,
                })}
                width={120}
                height={120}
              />
              Việt Nam
            </Link>
          </li>
          <li className='mt-[0.3rem]'>
            <Link
              href={`/`}
              className={clsx(
                'flex flex-row items-center font-Iciel leading-1.5 text-grey-700',
                {
                  'text-[1rem]': !isMobile,
                  'text-0.75': isMobile,
                },
              )}
            >
              <Image
                src={`/images/layout/header/radio.svg`}
                alt='english'
                className={clsx('', {
                  'mr-[0.88rem] size-[0.875rem]': !isMobile,
                  'mr-[0.56rem] size-[0.875rem]': isMobile,
                })}
                width={120}
                height={120}
              />
              English
            </Link>
          </li>
        </ul>
      </div>
    </button>
  )
}
