'use client'
import React from 'react'
import {useState, useEffect, useRef} from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import '../styles.css'
import {Fade} from 'react-awesome-reveal'
const FirstReason = ({lang, isMobile, data}) => {
  const [maxHeight, setMaxHeight] = useState(!isMobile ? '25rem' : '11.25rem')
  const [showAll, setShowAll] = useState(false)
  const [useGSAPCheck, setUseGSAP] = useState(false)
  const imageRef = useRef(null)
  const endRef = useRef(null)

  //handle load more
  const handleLoadMore = () => {
    if (!showAll) {
      setMaxHeight(`${5.3 * data?.list_functions?.length}rem`)
    } else {
      isMobile ? setMaxHeight('11.25rem') : setMaxHeight('25rem')
    }
    setShowAll(!showAll)
    setUseGSAP(!useGSAPCheck)
  }
  //follow bottom

  return (
    <div className='flex border-b border-[rgba(28,32,28,0.10)] overflow-hidden max-md:flex-col max-md:overflow-visible max-md:mb-[18.5rem]'>
      <div
        className='w-[50%] relative max-md:w-full'
        ref={endRef}
      >
        <div className='absolute w-[9.375rem] h-[5.5625rem] bg-yellow-500 opacity-10 top-0 -right-[1rem] -z-[1] max-md:hidden'></div>
        <Fade direction='left'>
          <div className='pl-[6.37rem] pt-[3rem] pr-[5.19rem] pb-12 max-md:px-4 max-md:pt-0 max-md:pb-[2rem]'>
            <h3 className='font-SVNLagu text-[3.125rem] leading-1.3 font-semibold mb-[1.5rem] max-md:text-[1.25rem] max-md:mb-2'>
              <span className='font-SVNLagu text-[3.125rem] leading-1.3 font-semibold mb-[1.5rem] max-md:text-[1.25rem] max-md:mb-2 md:hidden'>
                1.{' '}
              </span>
              {data?.heading}
            </h3>
            <span className='font-Iciel text-[1.125rem] text-[rgba(28,32,28,0.70)] leading-1.5 font-normal mb-[3.75rem] block max-md:text-[0.875rem] max-md:mb-[2rem]'>
              {data?.desc}
            </span>
            <div
              className={`listSecurity  h-full overflow-hidden`}
              style={{maxHeight: maxHeight}}
            >
              {(data?.list_functions || []).map((item, index) => (
                <div key={index}>
                  <span className='font-SVNLagu text-[1.75rem] border-b border-[rgba(28,32,28,0.10)] w-full block pb-[1.25rem] mb-[1.25rem] max-md:text-[1rem] max-md:mb-[0.68rem] max-md:pb-[0.68rem]'>
                    {item?.function}
                  </span>
                </div>
              ))}
            </div>

            <div
              className='flex items-center flex-row-reverse justify-start w-fit pt-6 cursor-pointer '
              onClick={handleLoadMore}
            >
              <Image
                src={'/images/familyElevator/detailFE/down.svg'}
                width={30}
                height={30}
                alt='down'
                className={`listSecurity w-[1.1875rem] h-[1.1875rem]  max-md:w-[0.8125rem] max-md:h-[0.8125rem]${
                  showAll ? 'transform -rotate-180' : 'transform rotate-0'
                }`}
              />
              <span className='uppercase text-[1.125rem] text-yellow-500 mr-[0.62rem] font-medium leading-1.5 max-md:text-[0.875rem]'>
                {showAll
                  ? lang === 'en'
                    ? 'see less'
                    : 'rút gọn'
                  : lang === 'en'
                  ? 'see more'
                  : 'xem thêm'}
              </span>
            </div>
          </div>
        </Fade>
      </div>
      <div className='w-[50%] max-md:w-full max-md:relative overflow-visible'>
<Fade triggerOnce={true} direction='right'>
          <Image
            ref={imageRef}
            src={data?.image?.url}
            width={1000}
            height={1000}
            alt={data?.image?.alt}
            className=' h-[49.25rem] w-[100%] max-md:h-[22.25rem]'
          />
</Fade>
        <Image
          ref={imageRef}
          src={data?.image_mb_first?.url}
          width={1000}
          height={1000}
          alt={data?.image_mb_first?.alt}
          className='md:hidden absolute w-[11.1875rem] h-[18.3125rem] z-10 top-[86%] left- pt-[0.75rem] pr-[0.75rem] bg-white'
        />
        <Image
          ref={imageRef}
          src={data?.image_mb_second?.url}
          width={1000}
          height={1000}
          alt={data?.image_mb_second?.alt}
          className='md:hidden absolute w-[12.3125rem] h-[17.5625rem] right-0 top-[22.95rem]'
        />
      </div>
    </div>
  )
}

export default FirstReason
