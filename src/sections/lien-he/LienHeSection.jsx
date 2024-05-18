'use client'

import Support from '@/layout/support'
import Image from 'next/image'
import {Fade} from 'react-awesome-reveal'

export default function LienHeSection({isMobile, data}) {
  return (
    <section className='flex flex-col xl:flex-row flex-nowrap xl:px-[3.75rem] px-3 pt-6 pb-10 xl:pt-12 xl:pb-24'>
      <Support
        className='xl:basis-1/2'
        forLienHePage
        data={data}
      />
      <div className='xl:basis-1/2 max-xl:mt-[2.19rem]'>
        <div className='xl:ml-[3.25rem] max-xl:p-4 max-xl:border border-yellow-500 rounded-[0.625rem] max-xl:bg-[linear-gradient(180deg,rgba(209,179,123,0.20)_0%,rgba(255,255,255,0.20)_100%)]'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1694.6552418871843!2d105.81276048524417!3d20.9807337259846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135acee88cfe381%3A0xd4739d48e410af2e!2zTmcuIDY2IMSQxrDhu51uZyBLaW0gR2lhbmcsIMSQ4bqhaSBLaW0sIEhvw6BuZyBNYWksIEjDoCBO4buZaSwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1714073374880!5m2!1sen!2s'
            width='1920'
            height='700'
            allowfullscreen=''
            loading='lazy'
            referrerpolicy='no-referrer-when-downgrade'
          ></iframe>
          <div className='mt-4 xl:mt-[1.75rem] grid grid-cols-1 gap-1 xl:gap-3'>
            <Fade
              direction='right'
              cascade
              triggerOnce
              damping={0.15}
            >
              <div className='flex flex-row items-0start xl:items-center'>
                <Image
                  src={`/images/lien-he/location.svg`}
                  alt='Địa chỉ: Số 6BT2 ngõ 66 Kim Giang - Hoàng Mai - Hà Nội'
                  className='mr-[0.62rem] size-[0.875rem] xl:size-[1.25rem] max-xl:mt-[0.3rem]'
                  width={120}
                  height={120}
                />
                <p className='font-Iciel text-0.875 xl:text-1 leading-1.5 text-grey-500'>
                  {data.location}
                </p>
              </div>
              <div className='flex flex-row items-start xl:items-center'>
                <Image
                  src={`/images/lien-he/hotline.svg`}
                  alt='Hotline: 0983859969 - 0393580688'
                  className='mr-[0.62rem] size-[0.875rem] xl:size-[1.25rem] max-xl:mt-[0.3rem]'
                  width={120}
                  height={120}
                />
                <p className='font-Iciel text-0.875 xl:text-1 leading-1.5 text-grey-500'>
                  Hotline: {data.hotline}
                </p>
              </div>
              <div className='flex flex-row items-start xl:items-center'>
                <Image
                  src={`/images/lien-he/mail.svg`}
                  alt='Email: sales@sanyo-yusoki.vn'
                  className='mr-[0.62rem] size-[0.875rem] xl:size-[1.25rem] max-xl:mt-[0.3rem]'
                  width={120}
                  height={120}
                />
                <p className='font-Iciel text-0.875 xl:text-1 leading-1.5 text-grey-500'>
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
