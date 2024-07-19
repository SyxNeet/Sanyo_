import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import {
  modalMenuJapanElevator,
  modalMenuService,
} from '../../../data/header/modal-menu'
import Accordion from './Accordion'
import LangDropdownPopup from '@/components/header/LangDropdownPopup'
import {createPortal} from 'react-dom'
import GoogleTranslate from '@/components/Language'

export default function ModalMenuMobile({
  isOpenModalMenu,
  isMobile,
  setIsOpenModalMenu,
  data,
}) {
  return createPortal(
    <div
      className={clsx(
        'fixed top-0 left-0 z-[100] w-full h-screen transition-500  overflow-y-auto flex justify-end ',
        {
          'translate-x-full': !isOpenModalMenu,
        },
      )}
    >
      <div className='absolute w-full h-full bg-grey-600 opacity-40'></div>
      <div className='w-[45%] bg-grey-600 px-[0.87rem] py-4 relative z-[99] max-md:w-full h-fit min-h-screen'>
        <div className='flex flex-row items-center w-full'>
          <Link
            href={`/`}
            className='flex flex-col'
            onClick={() => setIsOpenModalMenu(false)}
          >
            <Image
              src={`/images/layout/header/logo-name-white.svg`}
              alt='sanyo yusoki'
              className='w-[9rem] h-[1.2rem] ml-1'
              width={120}
              height={120}
            />
            <Image
              src={`/images/layout/header/logo-name-jap-white.svg`}
              alt='sanyo yusoki'
              className='w-[6.62rem] h-[0.41rem] mt-[0.31rem]'
              width={120}
              height={120}
            />
          </Link>
          <button
            className='ml-auto'
            onClick={() => setIsOpenModalMenu(false)}
          >
            <Image
              src={`/images/layout/header/x-mark-white.svg`}
              alt='close modal menu'
              className='size-5'
              width={120}
              height={120}
            />
          </button>
        </div>
        <div className='grid grid-cols-1 gap-[1.12rem] mt-[1.7rem]'>
          <Accordion
            text={modalMenuJapanElevator.text}
            accordionData={modalMenuJapanElevator.child}
            href={modalMenuJapanElevator.href}
            setIsOpenModalMenu={setIsOpenModalMenu}
          />
          <div className='w-full h-[0.3rem] rounded-full bg-grey-0 opacity-5' />
          <Accordion
            text={modalMenuService.text}
            accordionData={modalMenuService.child}
            setIsOpenModalMenu={setIsOpenModalMenu}
          />
          <div className='w-full h-[0.3rem] rounded-full bg-grey-0 opacity-5' />
          <Link
            href={`/du-an`}
            className='flex flex-row items-center text-grey-0 text-1.25 font-Iciel'
            onClick={() => setIsOpenModalMenu(false)}
          >
            DỰ ÁN NỔI BẬT
          </Link>
          <div className='w-full h-[0.3rem] rounded-full bg-grey-0 opacity-5' />
          <Link
            href={`/ve-chung-toi`}
            className='flex flex-row items-center text-grey-0 text-1.25 font-Iciel'
            onClick={() => setIsOpenModalMenu(false)}
          >
            VỀ CHÚNG TÔI
          </Link>
        </div>
        <div className='mt-[3rem] flex flex-row items-end mb-[1.56rem]'>
          <div className='flex flex-col'>
            <Link
              href={`/tin-tuc`}
              className='mb-3 text-grey-0 text-0.875 font-Iciel  md:text-[1.3rem]'
              onClick={() => setIsOpenModalMenu(false)}
            >
              TIN TỨC
            </Link>
            <Link
              href={`/lien-he`}
              className='text-grey-0 text-0.875 font-Iciel  md:text-[1.3rem]'
              onClick={() => setIsOpenModalMenu(false)}
            >
              LIÊN HỆ
            </Link>
          </div>
          {/* <div className='flex flex-col ml-auto mr-10'>
            <p className='mb-1 text-grey-0/60 text-0.625 font-Iciel leading-1.4'>
              Chọn ngôn ngữ
            </p>
           <GoogleTranslate/>
          </div> */}
        </div>
        <div className='flex flex-col mb-[0.88rem] '>
          <p className='text-grey-0 font-Iciel text-0.75 leading-1.5 opacity-60  md:text-[1.3rem]'>
            Địa chỉ
          </p>
          <p className='font-Iciel text-0.875 leading-1.5 text-grey-0  md:text-[1.3rem]'>
            Số 8BT2 ngõ 66 Kim Giang - Hoàng Mai - Hà Nội
          </p>
        </div>
        <div className='flex flex-col mb-[1.88rem]'>
          <p className='text-grey-0 font-Iciel text-0.75 leading-1.5 opacity-60  md:text-[1.3rem]'>
            Hotline:{' '}
          </p>
          <p className='font-Iciel text-0.875 leading-1.5 text-grey-0  md:text-[1.3rem]'>
            0983859969 - 0393580688
          </p>
        </div>
        <Link
          href={`/lien-he`}
          className='w-full py-3 text-center border border-yellow-500 bg-yellow-500 rounded-full font-Iciel text-grey-900 text-0.75 font-medium leading-1.5 block mb-[0.88rem] md:text-[1.3rem]'
          onClick={() => setIsOpenModalMenu(false)}
        >
          ĐĂNG KÍ TƯ VẤN
        </Link>
        <div className='flex flex-row items-center justify-center pb-[5rem]'>
          <Link
            href={
              data?.lien_ket_facebook ||
              'https://www.facebook.com/ThangmaySanyoYusokiVietNam?mibextid=ZbWKwL'
            }
            className='block w-[2.25rem] h-[2.25rem] mr-[0.6rem] group'
            target='_blank'
          >
<img
            src='/images/layout/footer/facebook.png'
            alt=''
            className='object-cover w-full h-full'
          />
          </Link>
          <Link
            href={
              data?.lien_ket_in ||
              'https://www.linkedin.com/in/sanyo-yusoki-vi%E1%BB%87t-nam-4283592a5/'
            }
            className='block w-[2.25rem] h-[2.25rem] mr-[0.6rem] group'
            target='_blank'
          >
            <img
            src='/images/layout/footer/linkedin.png'
            alt=''
            className='object-cover w-full h-full'
          />
          </Link>
          <Link
            href={data?.lien_ket_zalo || 'https://zalo.me/4574140570292753526'}
            className='block w-[2.25rem] h-[2.25rem] mr-[0.6rem] group'
            target='_blank'
          >
            <img
            src='/images/layout/footer/zalo.png'
            alt=''
            className='object-cover w-full h-full'
          />
          </Link>
        </div>
      </div>
    </div>,
    document.body,
  )
}
