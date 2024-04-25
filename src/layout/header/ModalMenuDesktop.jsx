import Image from 'next/image'
import Link from 'next/link'
import HeaderModalLink from './HeaderModalLink'
import HeaderModalExpand from './HeaderModalExpand'
import {
  modalMenuJapanElevator,
  modalMenuService,
} from '../../../data/header/modal-menu'
import clsx from 'clsx'

export default function ModalMenuDesktop({
  isOpenModalMenu,
  activeModalMenuLink,
  handleClickModalLink,
  setIsOpenModalMenu,
  activeModalMenuChildLink,
  setActiveModalMenuLink,
  setActiveModalMenuChildLink,
  lang,
}) {
  return (
    <>
      <div
        className={clsx(
          'fixed top-0 left-0 -z-20 w-full h-screen bg-black/70 transition-500',
          {
            'opacity-0 pointer-events-none': !isOpenModalMenu,
            'opacity-100 pointer-events-auto': isOpenModalMenu,
          },
        )}
        onClick={() => setIsOpenModalMenu(false)}
      />
      <div
        className={clsx(
          'pt-[5.5rem] transition-500 -z-10 bg-grey-600 h-screen transition-500 fixed top-0 left-0',
          {
            '-translate-x-full pointer-events-none': !isOpenModalMenu,
            'translate-x-0 pointer-events-auto': isOpenModalMenu,
            'max-w-[72.5rem]': activeModalMenuLink,
            'max-w-[27rem]': !activeModalMenuLink,
          },
        )}
      >
        <div className='flex flex-col pl-10 pt-11'>
          <Link
            href={`/${lang}`}
            className='flex flex-col mb-[1.74rem] hover-opacity w-fit'
            onClick={handleClickModalLink}
          >
            <Image
              src={`/images/layout/header/logo-name-white.svg`}
              alt='sanyo yusoki'
              className='w-[15rem] h-8 ml-1 mb-[0.38rem]'
              width={120}
              height={120}
            />
            <Image
              src={`/images/layout/header/logo-name-jap-white.svg`}
              alt='sanyo yusoki'
              className='w-[11rem] h-[0.7rem]'
              width={120}
              height={120}
            />
          </Link>
          <div className='flex flex-row items-center border-y-[0.0625rem] border-white/10 overflow-hidden'>
            <nav className='flex-none grid grid-cols-1 w-[24.5rem]'>
              <HeaderModalLink
                href={`${lang}/${modalMenuJapanElevator.href}`}
                text={modalMenuJapanElevator.text}
                isLink={false}
                handleOnMouseEnter={() =>
                  setActiveModalMenuLink(modalMenuJapanElevator.text)
                }
                handleOnMouseLeave={() => setActiveModalMenuLink('')}
                isActive={activeModalMenuLink === modalMenuJapanElevator.text}
              />
              <HeaderModalLink
                href={`/${lang}`}
                text={`GIỚI THIỆU`}
                isLink={true}
                handleOnMouseEnter={() => setActiveModalMenuLink(`GIỚI THIỆU`)}
                handleOnMouseLeave={() => setActiveModalMenuLink('')}
                isActive={activeModalMenuLink === `GIỚI THIỆU`}
              />
              <HeaderModalLink
                href={`${lang}/${modalMenuService.href}`}
                text={modalMenuService.text}
                isLink={false}
                handleOnMouseEnter={() =>
                  setActiveModalMenuLink(modalMenuService.text)
                }
                handleOnMouseLeave={() => setActiveModalMenuLink('')}
                isActive={activeModalMenuLink === modalMenuService.text}
              />
              <HeaderModalLink
                href={`/${lang}`}
                text={`DỰ ÁN NỔI BẬT`}
                isLink={true}
                handleOnMouseEnter={() =>
                  setActiveModalMenuLink(`DỰ ÁN NỔI BẬT`)
                }
                handleOnMouseLeave={() => setActiveModalMenuLink('')}
                isActive={activeModalMenuLink === `DỰ ÁN NỔI BẬT`}
              />
              <HeaderModalLink
                href={`/${lang}`}
                text={`BLOG`}
                isLink={true}
                handleOnMouseEnter={() => setActiveModalMenuLink(`BLOG`)}
                handleOnMouseLeave={() => setActiveModalMenuLink('')}
                isActive={activeModalMenuLink === `BLOG`}
              />
              <HeaderModalLink
                href={`/${lang}`}
                text={`LIÊN HỆ`}
                isLink={true}
                handleOnMouseEnter={() => setActiveModalMenuLink(`LIÊN HỆ`)}
                handleOnMouseLeave={() => setActiveModalMenuLink('')}
                isActive={activeModalMenuLink === `LIÊN HỆ`}
              />
            </nav>
            <div className='relative w-[41.25rem]'>
              <HeaderModalExpand
                activeModalMenuLink={activeModalMenuLink}
                activeModalMenuChildLink={activeModalMenuChildLink}
                setActiveModalMenuLink={setActiveModalMenuLink}
                setActiveModalMenuChildLink={setActiveModalMenuChildLink}
                text={modalMenuJapanElevator.text}
                data={modalMenuJapanElevator.child}
                href={`${lang}/${modalMenuJapanElevator.href}`}
                isFirst
              />
              <HeaderModalExpand
                activeModalMenuLink={activeModalMenuLink}
                activeModalMenuChildLink={activeModalMenuChildLink}
                setActiveModalMenuLink={setActiveModalMenuLink}
                setActiveModalMenuChildLink={setActiveModalMenuChildLink}
                text={modalMenuService.text}
                data={modalMenuService.child}
                href={`${lang}/${modalMenuService.href}`}
                isFirst={false}
              />
            </div>
          </div>
          <div
            className='flex flex-row overflow-hidden pt-9'
            onMouseEnter={() => {
              setActiveModalMenuLink(activeModalMenuLink)
              setActiveModalMenuChildLink(activeModalMenuChildLink)
            }}
            onMouseLeave={() => {
              setActiveModalMenuLink('')
              setActiveModalMenuChildLink('')
            }}
          >
            <div className='flex flex-col w-[27rem] shrink-0'>
              <span className='text-white text-1'>Theo dõi chúng tôi</span>
              <nav className='flex flex-row items-center mt-1'>
                <Link
                  href={`/${lang}`}
                  className='hover-opacity'
                >
                  <Image
                    src={`/images/layout/header/facebook.svg`}
                    alt='facebook'
                    className='size-[2rem]'
                    width={120}
                    height={120}
                  />
                </Link>
                <Link
                  href={`/${lang}`}
                  className='hover-opacity'
                >
                  <Image
                    src={`/images/layout/header/instagram.svg`}
                    alt='instagram'
                    className='size-[2rem] ml-2'
                    width={120}
                    height={120}
                  />
                </Link>
              </nav>
            </div>
            <button className='relative w-[20.4375rem] h-[5.3125rem] flex flex-row justify-center items-center hover-opacity flex-none ml-[20rem]'>
              <Image
                src={`/images/layout/header/contact-now.svg`}
                alt=''
                className='absolute top-0 left-0 object-cover w-full h-full -z-10'
                width={120}
                height={120}
              />
              <p className='text-1.375 uppercase font-SVNLagu text-grey-0 font-extrabold leading-1.2 text-center'>
                liên hệ ngay
              </p>
              <Image
                src={`/images/layout/header/arrow-right-white.svg`}
                alt=''
                className='w-[0.95rem] h-[1.05rem] ml-3'
                width={120}
                height={120}
              />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
