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
  handleOnClick,
  dataImage,
}) {
  return (
    <div
      className={clsx('flex flex-row items-center transition-500', {
        'opacity-0 pointer-events-none': activeModalMenuLink !== text,
        'opacity-100 pointer-events-auto': activeModalMenuLink === text,
        'absolute top-0 left-0 w-full h-full': !isFirst,
      })}
      onMouseEnter={() => setActiveModalMenuLink(text)}
    >
      <nav
        className='flex-none flex flex-col w-[21rem] border-x-[0.0625rem] border-white/10 h-full grow'
        onMouseOver={() => {
          setActiveModalMenuLink(text)
        }}
      >
        {data.map((item1, i1) => {
          return (
            <Link
              key={i1}
              href={item1.href}
              className='font-Iciel text-0.875 leading-1.5 uppercase opacity-60 px-6 py-[0.62rem] text-white border-b-[0.0625rem] border-white/10 hover:text-yellow-500 transition-300 hover:opacity-100 flex flex-row items-center group'
              onMouseEnter={() => {
                setActiveModalMenuLink(text)
                setActiveModalMenuChildLink(item1.text)
              }}
              onMouseLeave={() => {
                setActiveModalMenuChildLink('')
              }}
              onClick={handleOnClick}
            >
              {item1.text}
              <Image
                src={`/images/layout/header/arrow-right-yellow.svg`}
                alt={item1.text}
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
            onMouseEnter={() => {
              setActiveModalMenuLink(text)
              setActiveModalMenuChildLink('xem-tat-ca')
            }}
            onMouseLeave={() => {
              setActiveModalMenuChildLink('')
            }}
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
        {href ? (
          <>
            {dataImage?.map((item2, i2) => {
              if (i2 < dataImage?.length - 1) {
                return (
                  <Image
                    key={i2}
                    src={item2}
                    alt=''
                    className={clsx(
                      'object-cover w-full h-full transition-500',
                      {
                        'absolute top-0 left-0': i2 !== 0,
                        'opacity-0 pointer-events-none':
                          activeModalMenuChildLink !== data[i2]?.text,
                        'opacity-100 pointer-events-auto':
                          activeModalMenuChildLink === data[i2]?.text,
                      },
                    )}
                    onMouseEnter={() => {
                      setActiveModalMenuLink(text)
                      setActiveModalMenuChildLink(data[i2]?.text)
                    }}
                    onMouseLeave={() => {
                      setActiveModalMenuChildLink('')
                    }}
                    width={1920}
                    height={1080}
                  />
                )
              } else {
                return (
                  <Image
                    key={i2}
                    src={item2.url}
                    alt={item2.alt ?? 'thang máy nhật bản'}
                    className={clsx(
                      'absolute top-0 left-0 object-cover w-full h-full transition-500',
                      {
                        'opacity-0 pointer-events-none':
                          activeModalMenuChildLink !== 'xem-tat-ca',
                        'opacity-100 pointer-events-auto':
                          activeModalMenuChildLink === 'xem-tat-ca',
                      },
                    )}
                    onMouseEnter={() => {
                      setActiveModalMenuLink(text)
                      setActiveModalMenuChildLink('xem-tat-ca')
                    }}
                    onMouseLeave={() => {
                      setActiveModalMenuChildLink('')
                    }}
                    width={1920}
                    height={1080}
                  />
                )
              }
            })}
          </>
        ) : (
          <>
            {dataImage?.map((item2, i2) => {
              return (
                <Image
                  key={i2}
                  src={item2}
                  alt={item2.alt ?? 'thang máy'}
                  className={clsx('object-cover w-full h-full transition-500', {
                    'absolute top-0 left-0': i2 !== 0,
                    'opacity-0 pointer-events-none':
                      activeModalMenuChildLink !== data[i2]?.text,
                    'opacity-100 pointer-events-auto':
                      activeModalMenuChildLink === data[i2]?.text,
                  })}
                  onMouseEnter={() => {
                    setActiveModalMenuLink(text)
                    setActiveModalMenuChildLink(data[i2]?.text)
                  }}
                  onMouseLeave={() => {
                    setActiveModalMenuChildLink('')
                  }}
                  width={1920}
                  height={1080}
                />
              )
            })}
          </>
        )}
      </div>
    </div>
  )
}
