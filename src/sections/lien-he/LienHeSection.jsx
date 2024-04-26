import Support from '@/layout/support'
import Image from 'next/image'

export default function LienHeSection({isMobile, lang}) {
  return (
    <section className='flex flex-row flex-nowrap px-[3.75rem] pt-12 pb-16'>
      <Support
        className='basis-1/2'
        forLienHePage
      />
      <p className='basis-1/2'>
        <div className='ml-[3.25rem]'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1694.6552418871843!2d105.81276048524417!3d20.9807337259846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135acee88cfe381%3A0xd4739d48e410af2e!2zTmcuIDY2IMSQxrDhu51uZyBLaW0gR2lhbmcsIMSQ4bqhaSBLaW0sIEhvw6BuZyBNYWksIEjDoCBO4buZaSwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1714073374880!5m2!1sen!2s'
            width='1920'
            height='700'
            className='border-none w-[45.5625rem] h-[25.125rem] rounded-[0.375rem]'
            allowfullscreen=''
            loading='lazy'
            referrerpolicy='no-referrer-when-downgrade'
          ></iframe>
          <div className='grid grid-cols-1 mt-[1.75rem] gap-[0.75rem]'>
            <div className='flex flex-row items-center'>
              <Image
                src={`/images/lien-he/location.svg`}
                alt='Địa chỉ: Số 6BT2 ngõ 66 Kim Giang - Hoàng Mai - Hà Nội'
                className='mr-[0.62rem] size-[1.25rem]'
                width={120}
                height={120}
              />
              <p className='font-Iciel text-1 leading-1.5 text-grey-500'>
                Địa chỉ: Số 6BT2 ngõ 66 Kim Giang - Hoàng Mai - Hà Nội
              </p>
            </div>
            <div className='flex flex-row items-center'>
              <Image
                src={`/images/lien-he/hotline.svg`}
                alt='Hotline: 0983859969 - 0393580688'
                className='mr-[0.62rem] size-[1.25rem]'
                width={120}
                height={120}
              />
              <p className='font-Iciel text-1 leading-1.5 text-grey-500'>
                Hotline: 0983859969 - 0393580688
              </p>
            </div>
            <div className='flex flex-row items-center'>
              <Image
                src={`/images/lien-he/mail.svg`}
                alt='Email: sales@sanyo-yusoki.vn'
                className='mr-[0.62rem] size-[1.25rem]'
                width={120}
                height={120}
              />
              <p className='font-Iciel text-1 leading-1.5 text-grey-500'>
                Email: sales@sanyo-yusoki.vn
              </p>
            </div>
          </div>
        </div>
      </p>
    </section>
  )
}
