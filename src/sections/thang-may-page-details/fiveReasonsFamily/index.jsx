'use client'
import React from 'react'
import {useState, useEffect, useRef} from 'react'
import Link from 'next/link'
import ButtonSlide from '@/components/buttonSlideSixReasons/ButtonSLide'
import Image from 'next/image'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import './styles.css'
const FiveReasonsFamily = ({lang, isMobile}) => {
  const [maxHeight, setMaxHeight] = useState('25rem')
  const [showAll, setShowAll] = useState(false)
  const [useGSAPCheck, setUseGSAP] = useState(false)
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
  const imgFirstReason = useRef(null)
  const endFirstReason = useRef(null)
  const gsapInstance = useRef(null)
  const scrollTriggerInstance = useRef(null)

  useEffect(() => {
    if (useGSAPCheck && !isMobile) {
      gsapInstance.current = gsap.to(imgFirstReason.current, {
        scrollTrigger: {
          trigger: imgFirstReason.current,
          pin: true,
          start: 'top top',
          endTrigger: endFirstReason.current,
          end: `bottom+=${77.8 * data.length - 400} center+=24.3%`,
          pinSpacing: false,
          anticipatePin: 1,
          markers: true,
        },
      })
      scrollTriggerInstance.current = gsapInstance.current.scrollTrigger
    } else if (gsapInstance.current && scrollTriggerInstance.current) {
      gsapInstance.current.kill()
      scrollTriggerInstance.current.kill()
    }
  }, [useGSAPCheck, isMobile])
  const handleLoadMore = () => {
    if (!showAll) {
      setMaxHeight(`${5.3 * data.length}rem`)
    } else {
      setMaxHeight('25rem')
    }
    setShowAll(!showAll)
    setUseGSAP(!useGSAPCheck)
  }
  return (
    <section>
      <div className='flex justify-between pl-[5.75rem] pr-[5.84rem] items-end mt-[8.13rem] pb-[3.69rem] border-b border-[rgba(28,32,28,0.10)]'>
        <h2 className='w-[58.4375rem] font-SVNLagu uppercase text-[3.71738rem] leading-1.4 font-semibold'>
          5 LÝ DO LỰA CHỌN THANG MÁY GIA ĐÌNH SANYO YUSOKI
        </h2>
        <Link
          href={'/'}
          className=' w-fit  flex items-center group right-[6.25rem] bottom-[50%] max-md:bottom-0 max-md:left-0'
        >
          <ButtonSlide
            className={
              'w-[3.5rem] h-[3.5rem] border-yellow-500 group-hover:border-yellow-500 max-md:w-[2.11056rem] max-md:h-[2.11056rem] transition'
            }
            classNameSvg={
              'svgDance1 group-hover:text-yellow-500 max-d:w-[0.75rem] max-md:h-[0.75rem] md:w-[1rem] lg:w-[1.25rem] lg:h-[1.25rem] transition text-yellow-500'
            }
          />
          <span className='ml-4 max-md:ml-3 text-[1.125rem] font-Iciel leading-[110%] font-normal group-hover:text-yellow-500 max-md:text-[0.67838rem] transition'>
            {lang === 'vi' ? 'Khám phá ngay' : 'Discover now'}
          </span>
        </Link>
      </div>
      <div
        className='flex border-b border-[rgba(28,32,28,0.10)] overflow-hidden'
        ref={endFirstReason}
      >
        <div className='w-[50%] relative'>
          <div className='absolute w-[9.375rem] h-[5.5625rem] bg-yellow-500 opacity-10 top-0 -right-[1rem] -z-[1]'></div>
          <div className='pl-[6.37rem] pt-[3rem] pr-[5.19rem] pb-12'>
            <h3 className='font-SVNLagu text-[3.125rem] leading-1.3 font-semibold mb-[1.5rem]'>
              An toàn và bảo mật
            </h3>
            <span className='font-Iciel text-[1.125rem] text-[rgba(28,32,28,0.70)] leading-1.5 font-normal mb-[3.75rem] block'>
              Thang máy được điều khiển bằng hệ thống lái thông minh và quá
              trình vận hành được kiểm soát theo thời gian thực bằng máy tính và
              hệ thống an toàn nhiều lớp bảo đảm an toàn tuyệt đối khi vận hành
            </span>
            <div
              className={`listSecurity  h-full overflow-hidden`}
              style={{maxHeight: maxHeight}}
            >
              {data.map((item, index) => (
                <div key={index}>
                  <span className='font-SVNLagu text-[1.75rem] border-b border-[rgba(28,32,28,0.10)] w-full block pb-[1.25rem] mb-[1.25rem]'>
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
                className={`listSecurity w-[1.1875rem] h-[1.1875rem] ${
                  showAll ? 'transform -rotate-180' : 'transform rotate-0'
                }`}
              />
              <span className='uppercase text-[1.125rem] text-yellow-500 mr-[0.62rem] font-medium leading-1.5'>
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
          ref={imgFirstReason}
          src={'/images/familyElevator/detailFE/5reason.png'}
          width={1000}
          height={1000}
          alt='5reasonsFamily'
          className='w-[50%] max-h-[49.25rem] '
        />
      </div>
      <div>second reason</div>
    </section>
  )
}

export default FiveReasonsFamily
