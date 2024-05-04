'use client'
import React from 'react'
import {useState, useEffect, useRef} from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import '../styles.css'
const FirstReason = ({lang, isMobile}) => {
  console.log(isMobile)
  const [maxHeight, setMaxHeight] = useState(!isMobile ? '25rem' : '11.25rem')
  const [showAll, setShowAll] = useState(false)
  const [useGSAPCheck, setUseGSAP] = useState(false)
  const imageRef = useRef(null);
  const data = [
    'Bảo vệ và chống đẩy cửa',
    'Bảo vệ chống virus - vi khuẩn',
    'Chống cabin tự di chuyển',
    'Vật liệu buồng thang có độ bền cao',
    'Rèm an toàn hồng ngoại',
    'Hệ thống an toàn nhiều lớp',
    'Hệ thống lái thông minh',
    'Hệ thống lái thông minh',
    'Hệ thống lái thông minh',
  ]
  //handle load more
  const handleLoadMore = () => {
    if (!showAll) {
      setMaxHeight(`${5.3 * data.length}rem`)
    } else {
      isMobile ? setMaxHeight('11.25rem') : setMaxHeight('25rem')
    }
    setShowAll(!showAll)
    setUseGSAP(!useGSAPCheck)
  }
  //pin image
  useGSAP(() => {
    gsap.to(imageRef.current, {
      scrollTrigger: {
        trigger: imageRef.current,
        pin: true,
        start: 'top top',
        end: 'bottom top',
        pinSpacing: false,
        anticipatePin: 1
      },
    })
  }, [])
  return (
    <div
      className='flex border-b border-[rgba(28,32,28,0.10)] overflow-hidden max-md:flex-col'
    >
      <div className='w-[50%] relative max-md:w-full'>
        <div className='absolute w-[9.375rem] h-[5.5625rem] bg-yellow-500 opacity-10 top-0 -right-[1rem] -z-[1] max-md:hidden'></div>
        <div className='pl-[6.37rem] pt-[3rem] pr-[5.19rem] pb-12 max-md:px-4 max-md:pt-0 max-md:pb-[2rem]'>
          <h3 className='font-SVNLagu text-[3.125rem] leading-1.3 font-semibold mb-[1.5rem] max-md:text-[1.25rem] max-md:mb-2'>
            An toàn và bảo mật
          </h3>
          <span className='font-Iciel text-[1.125rem] text-[rgba(28,32,28,0.70)] leading-1.5 font-normal mb-[3.75rem] block max-md:text-[0.875rem] max-md:mb-[2rem]'>
            Thang máy được điều khiển bằng hệ thống lái thông minh và quá trình
            vận hành được kiểm soát theo thời gian thực bằng máy tính và hệ
            thống an toàn nhiều lớp bảo đảm an toàn tuyệt đối khi vận hành
          </span>
          <div
            className={`listSecurity  h-full overflow-hidden`}
            style={{maxHeight: maxHeight}}
          >
            {data.map((item, index) => (
              <div key={index}>
                <span className='font-SVNLagu text-[1.75rem] border-b border-[rgba(28,32,28,0.10)] w-full block pb-[1.25rem] mb-[1.25rem] max-md:text-[1rem] max-md:mb-[0.68rem] max-md:pb-[0.68rem]'>
                  {item}
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
      </div>
      <Image
        ref={imageRef}
        src={'/images/familyElevator/detailFE/5reason.png'}
        width={1000}
        height={1000}
        alt='5reasonsFamily'
        className=' h-[49.25rem] max-md:w-full w-[50%]'
      />
    </div>
  )
}

export default FirstReason
