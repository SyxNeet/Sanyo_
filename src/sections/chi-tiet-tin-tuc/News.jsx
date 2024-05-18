'use client'

import SlideDanhSachTinTuc from '@/components/danh-sach-tin-tuc/SlideDanhSachTinTuc'
import {Button} from '@/components/ui/button'
import Link from 'next/link'
import {Fade} from 'react-awesome-reveal'

export default function News({isMobile, dataPosts, dataChiTietTinTuc}) {
  return (
    <section className='pt-10 md:pt-[6rem] px-3 md:px-[6.25rem]'>
      <div className='flex flex-row items-end mb-5 md:mb-10'>
        <div>
          <Fade
            direction='down'
            triggerOnce
          >
            <h3 className='text-grey-500 font-SVNLagu text-0.875 md:text-1.25 font-medium leading-1.5 tracking-0.1 opacity-80'>
              DANH SÁCH TIN TỨC
            </h3>
          </Fade>
          <Fade
            direction='up'
            triggerOnce
          >
            <h2
              className='text-1.875 md:text-3 font-SVNLagu text-grey-900 font-semibold leading-1.4 [&_strong]:font-semibold [&_strong]:text-yellow-500 [&_strong]:uppercase'
              dangerouslySetInnerHTML={{__html: dataChiTietTinTuc.tieu_de}}
            ></h2>
          </Fade>
        </div>
        {!isMobile && (
          <Fade
            direction='right'
            triggerOnce
            className='ml-auto'
          >
            <Link
              href={`/tin-tuc`}
              className='mb-2'
            >
              <Button
                isHover
                isBlack
                text='XEM TẤT CẢ'
              />
            </Link>
          </Fade>
        )}
      </div>
      <SlideDanhSachTinTuc
        isMobile={isMobile}
        data={dataPosts}
      />
      {isMobile && (
        <Link href={`/tin-tuc`}>
          <Button
            isHover={false}
            text={'XEM TẤT CẢ'}
            isBlack={true}
            className='max-md:bg-yellow-500 max-md:border-none'
          />
        </Link>
      )}
    </section>
  )
}
