'use client'

import Support from '@/layout/support'
import Image from 'next/image'
import {Fade} from 'react-awesome-reveal'

export default function LienHeSection({isMobile, data}) {
  return (
    <section className='flex flex-col xl:flex-row gap-y-16 flex-nowrap md:px-[3.75rem] px-3 pt-6 pb-10 md:pt-12 md:pb-24'>
      <Support
        className='md:basis-1/2'
        forLienHePage
        data={data}
      />
      <div className='md:basis-1/2 max-md:mt-[2.19rem]'>
        <div className='xl:ml-[3.25rem] max-md:p-4 max-md:border border-yellow-500 rounded-[0.625rem] max-md:bg-[linear-gradient(180deg,rgba(209,179,123,0.20)_0%,rgba(255,255,255,0.20)_100%)]'>
          <Fade triggerOnce>
            <div dangerouslySetInnerHTML={{__html: data.googleMap}} />
          </Fade>
          <div className='mt-4 md:mt-[1.75rem] grid grid-cols-1 gap-1 md:gap-3'>
            <Fade
              direction='up'
              cascade
              triggerOnce
              damping={0.1}
            >
              <div className='flex flex-row items-0start md:items-center'>
                <Image
                  src={`/images/lien-he/location.svg`}
                  alt='Địa chỉ: Số 6BT2 ngõ 66 Kim Giang - Hoàng Mai - Hà Nội'
                  className='mr-[0.62rem] size-[0.875rem] md:size-[1.25rem] max-md:mt-[0.3rem]'
                  width={120}
                  height={120}
                />
                <p className='font-Iciel text-0.875 md:text-1 leading-1.5 text-grey-500'>
                  {data.location}
                </p>
              </div>
              <div className='flex flex-row items-start md:items-center'>
                <Image
                  src={`/images/lien-he/hotline.svg`}
                  alt='Hotline: 0983859969 - 0393580688'
                  className='mr-[0.62rem] size-[0.875rem] md:size-[1.25rem] max-md:mt-[0.3rem]'
                  width={120}
                  height={120}
                />
                <p className='font-Iciel text-0.875 md:text-1 leading-1.5 text-grey-500'>
                  Hotline: {data.hotline}
                </p>
              </div>
              <div className='flex flex-row items-start md:items-center'>
                <Image
                  src={`/images/lien-he/mail.svg`}
                  alt='Email: sales@sanyo-yusoki.vn'
                  className='mr-[0.62rem] size-[0.875rem] md:size-[1.25rem] max-md:mt-[0.3rem]'
                  width={120}
                  height={120}
                />
                <p className='font-Iciel text-0.875 md:text-1 leading-1.5 text-grey-500'>
                  Email: {data.email}
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  )
}
