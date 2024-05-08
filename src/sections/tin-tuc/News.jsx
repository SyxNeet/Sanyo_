'use client'

import Image from 'next/image'
import Link from 'next/link'
import Pagination from '@/components/pagination/Pagination'
import {cn} from '@/lib/utils'

export default function News({
  isMobile,
  dataNews,
  dataPosts,
  activePage,
  category,
  searchParams,
}) {
  return (
    <section className='pb-[3.12rem] md:pb-[6.5rem] mt-[2rem] md:mt-[4.12rem]'>
      <div className='flex flex-col mb-5 md:flex-row md:items-center md:mb-8'>
        <h1
          className='text-1.875 md:text-3 font-semibold text-grey-900 leading-1.3 font-SVNLagu [&_strong]:text-yellow-500 [&_strong]:font-semibold'
          dangerouslySetInnerHTML={{__html: dataNews.heading}}
        ></h1>
        <nav className='ml-auto max-md:overflow-x-auto max-md:flex max-md:flex-row max-md:flex-nowrap max-md:mt-3 max-md:-mr-3'>
          <Link
            href={`${process.env.NEXT_PUBLIC_HOST_URL}/tin-tuc`}
            className={cn(
              'text-grey-600 border-grey-200 border font-Iciel text-0.75 md:text-1 leading-1.5 px-[1.19rem] py-[0.56rem] md:px-[1.31rem] md:py-[0.81rem] rounded-full flex-none transition-300',
              {
                'text-grey-900 bg-yellow-500 border-yellow-500':
                  !category,
              },
            )}
          >
            Tất cả
          </Link>
          <Link
            href={`${process.env.NEXT_PUBLIC_HOST_URL}/tin-tuc?category=tip-su-dung-thang-may`}
            className={cn(
              'text-grey-600 border border-grey-200 rounded-full font-Iciel text-0.75 md:text-1 leading-1.5 px-[1.19rem] py-[0.56rem] md:px-[1.31rem] md:py-[0.81rem] ml-3 flex-none transition-300',
              {
                'text-grey-900 bg-yellow-500 border-yellow-500':
                  category === 'tip-su-dung-thang-may',
              },
            )}
          >
            Tip sử dụng thang máy
          </Link>
          <Link
            href={`${process.env.NEXT_PUBLIC_HOST_URL}/tin-tuc?category=tin-tuc-doanh-nghiep`}
            className={cn(
              'text-grey-600 border border-grey-200 rounded-full font-Iciel text-0.75 md:text-1 leading-1.5 px-[1.19rem] py-[0.56rem] md:px-[1.31rem] md:py-[0.81rem] ml-3 flex-none transition-300',
              {
                'text-grey-900 bg-yellow-500 border-yellow-500':
                  category === 'tin-tuc-doanh-nghiep',
              },
            )}
          >
            Tin tức doanh nghiệp
          </Link>
        </nav>
      </div>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
        <div className='md:col-span-2 md:row-span-3 h-[15.65rem] md:h-[36.375rem]'>
          {dataPosts && (
            <Link
              href={`/tin-tuc/${dataPosts.events[0].detail_link}`}
              className='relative block w-full h-full rounded-[0.75rem] overflow-hidden group'
            >
              <Image
                src={dataPosts.events[0].feature_image}
                alt=''
                className='absolute top-0 left-0 object-cover w-full h-full group-hover:scale-110 transition-500'
                width={1920}
                height={1080}
              />
              <div className='absolute left-[0.6rem] bottom-[0.5rem] md:bottom-6 md:left-6 rounded-[0.5rem] w-[20.7rem] md:w-[40.5625rem] pl-[0.92rem] md:pl-8 pr-[1.05rem] md:pr-[2.83rem] pt-[0.76rem] md:pt-5 pb-[1.2rem] md:pb-7 border border-transparent group-hover:border-yellow-500 transition-500 transition-500 z-10'>
                <div className='absolute top-0 left-0 w-full h-full backdrop-blur-md rounded-[0.5rem] bg-black/35 group-hover:bg-black/45 transition-500 -z-10' />
                <div className='flex flex-row items-center mb-[0.39rem] md:mb-4'>
                  <Image
                    src={`/images/tin-tuc/calendar.svg`}
                    alt=''
                    className='size-[0.785rem] md:size-[0.875rem] mr-1 md:mr-2'
                    width={120}
                    height={120}
                  />
                  <p className='font-Iciel text-[0.655rem] md:text-0.875 leading-1.5 text-grey-0'>
                    {dataPosts.events[0].date}
                  </p>
                </div>
                <h3 className='text-0.785 md:text-1.25 font-SVNLagu text-grey-0 leading-1.4 uppercase mb-[0.39rem] md:mb-3 group-hover:text-yellow-500 transition-500 font-medium'>
                  {dataPosts.events[0].title}
                </h3>
                <p className='text-grey-0 line-clamp-2 text-0.785 md:text-1 leading-1.5 font-Iciel opacity-70'>
                  {dataPosts.events[0].excerpt}
                </p>
              </div>
            </Link>
          )}
        </div>
        {dataPosts && (
          <>
            {dataPosts.events.slice(1, 4).map((item) => {
              return (
                <Link
                  href={`item.detail_link`}
                  className='relative rounded-[0.75rem] border border-[#E9E9E9] flex flex-row items-center p-[0.79rem] md:px-[1.13rem] md:py-4 overflow-hidden group max-md:-mt-2 first-of-type:mt-0'
                >
                  <div className='size-[8rem] md:size-[9.3125rem] overflow-hidden rounded-[0.5rem] flex-none'>
                    <Image
                      src={item.feature_image}
                      alt=''
                      className='size-full object-cover
                       rounded-[0.5rem] group-hover:scale-[1.15] transition-500'
                      width={1920}
                      height={1080}
                    />
                  </div>
                  <div className='ml-[0.65rem] md:ml-5 flex flex-col'>
                    <h3 className='text-grey-900 font-SVNLagu text-0.785 md:text-1 font-semibold leading-1.4 uppercase line-clamp-2 group-hover:text-yellow-500 transition-500 mb-[0.35rem]'>
                      {item.title}
                    </h3>
                    <p className='text-0.785 md:text-0.875 text-grey-500 leading-1.5 line-clamp-2 opacity-70 mb-[0.675rem]'>
                      {item.excerpt}
                    </p>
                    <div className='flex flex-row items-center'>
                      <Image
                        src={`/images/tin-tuc/calendar-black.svg`}
                        alt=''
                        className='size-[0.785rem] md:size-[0.875rem] mr-1 md:mr-2'
                        width={120}
                        height={120}
                      />
                      <p className='font-Iciel text-[0.655rem] md:text-0.875 leading-1.5 text-grey-500'>
                        {item.date}
                      </p>
                    </div>
                  </div>
                  <div className='absolute right-0 bottom-0 size-[6rem] md:size-[7rem] translate-x-[46%] translate-y-[60%] bg-yellow-500 rounded-full overflow-hidden'>
                    <div className='absolute top-[16%] left-[25%] md:left-[29%] flex flex-row -translate-x-[90%] group-hover:translate-x-0 transition-500'>
                      <Image
                        src={'/images/home/danhSachTinTuc/arrow.svg'}
                        width={120}
                        height={120}
                        alt='icon'
                        className='w-[0.75rem] h-[0.85rem] md:w-[0.9rem] md:h-[1em] object-cover'
                      />
                      <Image
                        src={'/images/home/danhSachTinTuc/arrow.svg'}
                        width={120}
                        height={120}
                        alt='icon'
                        className='w-[0.75rem] h-[0.85rem] md:w-[0.9rem] md:h-[1em] object-cover ml-[3.5rem]'
                      />
                    </div>
                  </div>
                </Link>
              )
            })}
          </>
        )}
      </div>
      <div className='grid grid-cols-1 md:grid-cols-4 mt-[0.52rem] md:mt-5 gap-y-[0.52rem] md:gap-x-4 md:gap-y-5'>
        {dataPosts && (
          <>
            {dataPosts.events.slice(4).map((item) => {
              return (
                <Link
                  href={`/tin-tuc/${item.detail_link}`}
                  className='relative md:h-[25rem] flex flex-row max-md:items-center max-md:p-[0.79rem] md:flex-col rounded-[0.75rem] overflow-hidden border border-[#E9E9E9] group hover:border-yellow-500 transition-500 pb-[1.5rem]'
                >
                  <div className='max-md:size-[8rem] rounded-t-[0.5rem] flex-none md:h-[60%] overflow-hidden'>
                    <Image
                      src={item.feature_image}
                      alt=''
                      width={1920}
                      height={1080}
                      className='h-full object-cover w-full group-hover:scale-[1.15] transition-500'
                    />
                  </div>
                  <div className='max-md:ml-[0.65rem] md:mt-[1.56rem] grid grid-cols-1 md:px-[1.37rem] md:gap-2'>
                    <h3 className='line-clamp-2 text-grey-900 font-SVNLagu text-0.785 md:text-1 font-semibold leading-1.4 uppercase group-hover:text-yellow-500 transition-500 max-md:mb-[0.35rem]'>
                      {item.title}
                    </h3>
                    <p className='text-grey-500 font-Iciel text-0.785 md:text-0.875 opacity-70 leading-1.5 line-clamp-2 max-md:mb-[0.675rem]'>
                      {item.excerpt}
                    </p>
                    <div className='flex flex-row items-center'>
                      <Image
                        src={`/images/tin-tuc/calendar-black.svg`}
                        alt=''
                        width={120}
                        height={120}
                        className='size-[0.785rem] md:size-[0.875rem]'
                      />
                      <p className='text-grey-500 text-[0.655rem] md:text-0.875 leading-1.5 font-Iciel ml-1 md:ml-2'>
                        {item.date}
                      </p>
                    </div>
                  </div>
                  <div className='absolute right-0 bottom-0 size-[6rem] md:size-[7rem] translate-x-[46%] translate-y-[60%] bg-yellow-500 rounded-full overflow-hidden'>
                    <div className='absolute top-[16%] left-[25%] md:left-[29%] flex flex-row -translate-x-[90%] group-hover:translate-x-0 transition-500'>
                      <Image
                        src={'/images/home/danhSachTinTuc/arrow.svg'}
                        width={120}
                        height={120}
                        alt='icon'
                        className='w-[0.75rem] h-[0.85rem] md:w-[0.9rem] md:h-[1em] object-cover'
                      />
                      <Image
                        src={'/images/home/danhSachTinTuc/arrow.svg'}
                        width={120}
                        height={120}
                        alt='icon'
                        className='w-[0.75rem] h-[0.85rem] md:w-[0.9rem] md:h-[1em] object-cover ml-[3.5rem]'
                      />
                    </div>
                  </div>
                </Link>
              )
            })}
          </>
        )}
      </div>
      <Pagination
        totalPage={dataPosts ? dataPosts.total_pages : 1}
        activePage={activePage}
        searchParams={searchParams}
        category={category}
      />
      {!isMobile && (
        <div className='absolute bottom-0 left-0 w-[6.25rem] h-[4.25rem] bg-yellow-500 opacity-15'>
          <div className='w-[2.375rem] h-8 bg-yellow-500 absolute top-0 right-0 -translate-y-full translate-x-full' />
        </div>
      )}
    </section>
  )
}
