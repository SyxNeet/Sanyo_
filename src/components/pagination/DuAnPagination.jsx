import {cn} from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

export default function DuAnPagination({totalPage, activePage, category}) {
  return (
    <div className='flex flex-row items-center mx-auto mt-6 md:mt-12 w-fit'>
      <Link
        href={`${process.env.NEXT_PUBLIC_HOST_URL}/tin-tuc?page=${
          activePage > 1 ? parseInt(activePage) - 1 : 1
        }${category && `&category=${category}`}`}
        className='flex items-center justify-center rounded-full size-8 mx-[0.25rem] md:mx-[0.33rem] select-none'
      >
        <Image
          src={`/images/tin-tuc/prev-pagination.svg`}
          alt=''
          width={120}
          height={120}
          className='size-[0.59rem]'
        />
      </Link>
      {totalPage > 5 ? (
        <>
          <Link
            href={`${process.env.NEXT_PUBLIC_HOST_URL}/tin-tuc?page=1${
              category && `&category=${category}`
            }`}
            className={cn(
              'flex items-center justify-center rounded-full bg-grey-100 size-8 text-0.875 font-medium leading-1.5 mx-[0.25rem] md:mx-[0.33rem] text-grey-0 select-none',
              {
                'bg-grey-900': activePage === 0,
              },
            )}
          >
            1
          </Link>
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
                <Link
                  href={`${process.env.NEXT_PUBLIC_HOST_URL}/tin-tuc?page=${
                    item + 1
                  }${category && `&category=${category}`}`}
                  className={cn(
                    'flex items-center justify-center rounded-full bg-grey-100 size-8 text-0.875 font-medium leading-1.5 mx-[0.25rem] md:mx-[0.33rem] text-grey-0 select-none',
                    {
                      'bg-grey-900': activePage === item,
                    },
                  )}
                >
                  {item + 1}
                </Link>
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
            <Link
              href={`${
                process.env.NEXT_PUBLIC_HOST_URL
              }/tin-tuc?page=${totalPage}${
                category && `&category=${category}`
              }`}
              className={cn(
                'flex items-center justify-center rounded-full bg-grey-100 size-8 text-0.875 font-medium leading-1.5 mx-[0.25rem] md:mx-[0.33rem] text-grey-0 select-none',
                {
                  'bg-grey-900': activePage === totalPage - 1,
                },
              )}
            >
              {totalPage}
            </Link>
          )}
        </>
      ) : (
        <>
          {Array.from(Array(totalPage).keys()).map((item) => {
            return (
              <Link
                href={`${process.env.NEXT_PUBLIC_HOST_URL}/tin-tuc?page=${
                  item + 1
                }${category && `&category=${category}`}`}
                className={cn(
                  'flex items-center justify-center rounded-full bg-grey-100 size-8 text-0.875 font-medium leading-1.5 mx-[0.25rem] md:mx-[0.33rem] text-grey-0 select-none',
                  {
                    'bg-grey-900': activePage === item,
                  },
                )}
              >
                {item + 1}
              </Link>
            )
          })}
        </>
      )}
      <Link
        href={`${process.env.NEXT_PUBLIC_HOST_URL}/tin-tuc?page=${
          activePage < totalPage - 1 ? parseInt(activePage) + 2 : totalPage
        }${category && `&category=${category}`}`}
        className='flex items-center justify-center rounded-full size-8 mx-[0.25rem] md:mx-[0.33rem] select-none'
      >
        <Image
          src={`/images/tin-tuc/next-pagination.svg`}
          alt=''
          width={120}
          height={120}
          className='size-[0.59rem]'
        />
      </Link>
    </div>
  )
}
