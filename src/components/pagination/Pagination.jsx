import {cn} from '@/lib/utils'
import {useState} from 'react'
import Image from 'next/image'

export default function Pagination({totalPage}) {
  const [activePage, setActivePage] = useState(0)
  return (
    <div className='flex flex-row items-center mx-auto mt-6 md:mt-12 w-fit'>
      <button
        className='flex items-center justify-center rounded-full size-8 mx-[0.25rem] md:mx-[0.33rem] select-none'
        onClick={() =>
          setActivePage((prevState) => {
            if (prevState >= 1) {
              return prevState - 1
            }
            return prevState
          })
        }
      >
        <Image
          src={`/images/tin-tuc/prev-pagination.svg`}
          alt=''
          width={120}
          height={120}
          className='size-[0.59rem]'
        />
      </button>
      {totalPage > 5 ? (
        <>
          <button
            href={`/`}
            className={cn(
              'flex items-center justify-center rounded-full bg-grey-100 size-8 text-0.875 font-medium leading-1.5 mx-[0.25rem] md:mx-[0.33rem] text-grey-0 select-none',
              {
                'bg-grey-900': activePage === 0,
              },
            )}
            onClick={() => setActivePage(0)}
          >
            1
          </button>
          {activePage >= 3 && (
            <button className='flex flex-row items-center justify-center rounded-full size-8 text-0.875 font-medium leading-1.5 bg-grey-0 mx-[0.25rem] md:mx-[0.33rem] select-none'>
              <Image
                src={`/images/tin-tuc/dot.svg`}
                alt=''
                width={120}
                height={120}
                className='block size-1'
              />
              <Image
                src={`/images/tin-tuc/dot.svg`}
                alt=''
                width={120}
                height={120}
                className='size-1 block mx-[0.25rem] md:mx-[0.33rem]'
              />
              <Image
                src={`/images/tin-tuc/dot.svg`}
                alt=''
                width={120}
                height={120}
                className='block size-1'
              />
            </button>
          )}
          {Array.from(Array(totalPage).keys()).map((item) => {
            if (
              item > 0 &&
              item < totalPage - 1 &&
              item >= activePage - 1 &&
              item <= activePage + 1
            ) {
              return (
                <button
                  className={cn(
                    'flex items-center justify-center rounded-full bg-grey-100 size-8 text-0.875 font-medium leading-1.5 mx-[0.25rem] md:mx-[0.33rem] text-grey-0 select-none',
                    {
                      'bg-grey-900': activePage === item,
                    },
                  )}
                  onClick={() => setActivePage(item)}
                >
                  {item + 1}
                </button>
              )
            }
          })}
          {activePage < totalPage - 3 && (
            <button className='flex flex-row items-center justify-center rounded-full size-8 text-0.875 font-medium leading-1.5 bg-grey-0 mx-[0.25rem] md:mx-[0.33rem] select-none'>
              <Image
                src={`/images/tin-tuc/dot.svg`}
                alt=''
                width={120}
                height={120}
                className='size-1'
              />
              <Image
                src={`/images/tin-tuc/dot.svg`}
                alt=''
                width={120}
                height={120}
                className='size-1 mx-[0.25rem] md:mx-[0.33rem]'
              />
              <Image
                src={`/images/tin-tuc/dot.svg`}
                alt=''
                width={120}
                height={120}
                className='size-1'
              />
            </button>
          )}
          {totalPage > 1 && (
            <button
              className={cn(
                'flex items-center justify-center rounded-full bg-grey-100 size-8 text-0.875 font-medium leading-1.5 mx-[0.25rem] md:mx-[0.33rem] text-grey-0 select-none',
                {
                  'bg-grey-900': activePage === totalPage - 1,
                },
              )}
              onClick={() => setActivePage(totalPage - 1)}
            >
              {totalPage}
            </button>
          )}
        </>
      ) : (
        <>
          {Array.from(Array(totalPage).keys()).map((item) => {
            return (
              <button
                className={cn(
                  'flex items-center justify-center rounded-full bg-grey-100 size-8 text-0.875 font-medium leading-1.5 mx-[0.25rem] md:mx-[0.33rem] text-grey-0 select-none',
                  {
                    'bg-grey-900': activePage === item,
                  },
                )}
                onClick={() => setActivePage(item)}
              >
                {item + 1}
              </button>
            )
          })}
        </>
      )}
      <button
        className='flex items-center justify-center rounded-full size-8 mx-[0.25rem] md:mx-[0.33rem] select-none'
        onClick={() =>
          setActivePage((prevState) => {
            if (prevState < totalPage - 1) {
              return prevState + 1
            }
            return prevState
          })
        }
      >
        <Image
          src={`/images/tin-tuc/next-pagination.svg`}
          alt=''
          width={120}
          height={120}
          className='size-[0.59rem]'
        />
      </button>
    </div>
  )
}
