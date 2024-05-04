'use client'
import React, {useState} from 'react'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import '../styles.css'
const FourthReason = ({lang, isMobile}) => {
  const dataSecond = [
    {
      title: 'Cửa chống cháy EI45',
      desc: 'là loại cửa có cấu tạo đặt biệt để có thể chịu lửa trong môi tường nhiệt độ cao lên đến 45 phút.',
    },
    {
      title: 'Cửa chống cháy EI60',
      desc: 'là loại cửa có cấu tạo đặt biệt để có thể chịu lửa trong môi tường nhiệt độ cao lên đến 45 phút.',
    },
    {
      title: 'Cửa chống cháy EI90',
      desc: 'là loại cửa có cấu tạo đặt biệt để có thể chịu lửa trong môi tường nhiệt độ cao lên đến 45 phút.',
    },
    {
      title: 'Cửa chống cháy EI120',
      desc: 'là loại cửa có cấu tạo đặt biệt để có thể chịu lửa trong môi tường nhiệt độ cao lên đến 45 phút.',
    },
    {
      title: 'Cửa chống cháy EI150',
      desc: 'là loại cửa có cấu tạo đặt biệt để có thể chịu lửa trong môi tường nhiệt độ cao lên đến 45 phút.',
    },
  ]
  const [maxHeightSecond, setMaxHeightSecond] = useState('25rem')
  const [showAllSecond, setShowAllSecond] = useState(false)
  const [expanded, setExpanded] = useState(
    Array(dataSecond?.length).fill(false),
  )
  const [expandedIndex, setExpandedIndex] = useState(0)
  const handleLoadMoreSecond = () => {
    if (!showAllSecond) {
      setMaxHeightSecond(`${5 * (dataSecond.length - 3) + 25}rem`)
    } else {
      setMaxHeightSecond('25rem')
    }
    setShowAllSecond(!showAllSecond)
  }
  const toggleItem = (index) => {
    const newExpanded = [...expanded]
    newExpanded[index] = !newExpanded[index]
    setExpanded(newExpanded)
    setExpandedIndex(index)
  }
  return (
    <div>
      {/* fourth reason */}
      <div className='bg-white relative z-[99999] flex h-[49.375rem] overflow-hidden max-md:flex-col-reverse max-md:h-fit'>
        <div className='w-[50%] relative max-h-[49.375rem] h-[49.375rem] overflow-hidden flex justify-center items-center max-md:w-full max-md:max-h-none max-md:h-[15.9375rem]'>
          <div className='absolute w-full h-full left-0 top-0 bg-black opacity-70 -z-[1] max-md:hidden'></div>
          <Image
            src='/images/familyElevator/detailFE/bgReason4.png'
            width={1000}
            height={1000}
            className='w-full h-full object-cover absolute -z-[2] top-0 left-0 max-md:h-[15.9375rem]'
            alt='bgReason4'
          />
          <Image
            src='/images/familyElevator/detailFE/fire.png'
            width={1000}
            height={1000}
            className='w-full h-full object-cover absolute -z-[1] bottom-0-0 left-0 max-md:hidden'
            alt='fire'
          />
          <div className='flex max-md:hidden'>
            <div className='flex flex-col justify-center items-center'>
              <Image
                src='/images/familyElevator/detailFE/reason41.png'
                width={1000}
                height={1000}
                className='w-[13.65931rem] h-[16.5625rem]'
                alt='reason41'
              />
              <span className='font-SVNLagu text-[3.125rem] uppercase font-semibold leading-1.3 text-white'>
                E
              </span>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <Image
                src='/images/familyElevator/detailFE/reason42.png'
                width={1000}
                height={1000}
                className='w-[13.65931rem] h-[16.5625rem]'
                alt='reason42'
              />
              <span className='font-SVNLagu text-[3.125rem] uppercase font-semibold leading-1.3 text-white'>
                I
              </span>
            </div>
          </div>
        </div>
        <div className='w-[50%]  relative max-md:w-full'>
          <div className='pt-[3.12rem] pl-[3.94rem] pr-[6.37rem] pb-[7rem] max-md:px-3 max-md:py-0 max-md:pt-[3.5rem]'>
            <h3
              className={`font-SVNLagu text-[3.125rem] leading-1.3 font-semibold w-[31.125rem] mb-[0.75rem] max-md:text-[1.25rem]`}
            >
              Cửa chống cháy đạt tiêu chuẩn EI
            </h3>
            <span className='font-Iciel text-[1.125rem] text-[rgba(28,32,28,0.70)] leading-1.5 font-normal mb-[1.88rem] block max-md:text-[0.875rem]'>Tiêu chuẩn EI trong chống cháy chính là bộ tiêu chuẩn quy định về giới hạn chịu lửa của các vật liệu chống cháy.</span>
            <div
              className='secondReasons'
            >
              {dataSecond.map((item, index) => (
                <div
                  className={`itemShowmore mb-[1.25rem] border-b border-[rgba(28,32,28,0.10)] pb-5 ${
                    expandedIndex === index ? 'h-[7.5rem] max-md:h-[6.5rem]' : 'h-[3.25rem] max-md:h-[2.75rem] max-md:last:border-none max-md:last:mb-0'
                  } overflow-hidden`}
                  key={index}
                >
                  <div
                    className='flex items-center justify-between mb-5 cursor-pointer'
                    onClick={() => toggleItem(index)}
                  >
                    <span
                      className={`text-[1.3125rem] font-SVNLagu font-medium leading-1.5 max-md:text-[1rem] ${
                        expandedIndex === index ? 'text-yellow-500' : ''
                      }`}
                    >
                      {item.title}
                    </span>
                    <Image
                      src={
                        expandedIndex === index
                          ? '/images/familyElevator/detailFE/minus.svg'
                          : '/images/familyElevator/detailFE/plus.svg'
                      }
                      alt='icon'
                      width={16}
                      height={16}
                      className='w-[1.25rem] h-[1.25rem]'
                    />
                  </div>
                  <span className='font-Iciel text-[1.125rem] font-normal leading-1.5 text-[rgba(28,32,28,0.70)] max-md:text-[0.875rem]'>
                    {item.desc}
                  </span>
                </div>
              ))}
            </div>
        
          </div>
        </div>
      </div>
    </div>
  )
}

export default FourthReason
