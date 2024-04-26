import clsx from 'clsx'
import Link from 'next/link'
import Image from 'next/image'

export default function HeaderModalExpand({
  activeModalMenuLink,
  activeModalMenuChildLink,
  setActiveModalMenuLink,
  setActiveModalMenuChildLink,
  text,
  data,
  href,
  isFirst,
  handleOnClick
}) {
  return (
    <div
      className={clsx('flex flex-row items-center transition-500', {
        'opacity-0 pointer-events-none': activeModalMenuLink !== text,
        'opacity-100 pointer-events-auto': activeModalMenuLink === text,
        'absolute top-0 left-0 w-full h-full': !isFirst,
      })}
      onMouseEnter={() => setActiveModalMenuLink(text)}
      onMouseLeave={() => setActiveModalMenuLink('')}
    >
      <nav
        className='flex-none flex flex-col w-[21rem] border-x-[0.0625rem] border-white/10 h-full grow'
        onMouseOver={() => {
          setActiveModalMenuLink(text)
        }}
        onMouseLeave={() => setActiveModalMenuLink('')}
      >
        {data.map((item2, i2) => {
          return (
            <Link
              href={item2.href}
              className='font-Iciel text-0.875 leading-1.5 uppercase opacity-60 px-6 py-[0.62rem] text-white border-b-[0.0625rem] border-white/10 hover:text-yellow-500 transition-300 hover:opacity-100 flex flex-row items-center group'
              onMouseEnter={() => {
                setActiveModalMenuLink(text)
                setActiveModalMenuChildLink(item2.text)
              }}
              onMouseLeave={() => {
                setActiveModalMenuLink('')
                setActiveModalMenuChildLink('')
              }}
              onClick={handleOnClick}
            >
              {item2.text}
              <Image
                src={`/images/layout/header/arrow-right-yellow.svg`}
                alt={item2.text}
                className='size-[0.75rem] ml-auto opacity-0 group-hover:opacity-100 transition-300'
                width={120}
                height={120}
              />
            </Link>
          )
        })}
        {href && (
          <Link
            href={href}
            className='font-Iciel text-0.875 leading-1.5 uppercase px-6 py-[0.8rem] text-white font-bold underline hover:bg-yellow-500 transition-300 text-center'
            onMouseEnter={() => setActiveModalMenuLink(text)}
            onMouseLeave={() => setActiveModalMenuLink('')}
            onClick={handleOnClick}
          >
            XEM TẤT CẢ
          </Link>
        )}
      </nav>
      <div
        className='relative flex-none w-[21.875rem] self-stretch'
        onMouseEnter={() => setActiveModalMenuLink(text)}
      >
        {data.map((item2, i2) => {
          return (
            <Image
              src={item2.src}
              alt=''
              className={clsx('object-cover w-full h-full transition-500', {
                'absolute top-0 left-0': i2 !== 0,
                'opacity-0 pointer-events-none':
                  activeModalMenuChildLink !== item2.text,
                'opacity-100 pointer-events-auto':
                  activeModalMenuChildLink === item2.text,
              })}
              onMouseEnter={() => {
                setActiveModalMenuLink(text)
                setActiveModalMenuChildLink(item2.text)
              }}
              onMouseLeave={() => {
                setActiveModalMenuLink('')
                setActiveModalMenuChildLink('')
              }}
              width={1920}
              height={1080}
            />
          )
        })}
      </div>
    </div>
  )
}
