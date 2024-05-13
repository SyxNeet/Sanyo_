'use client'

import Image from 'next/image'
import {useEffect, useRef, useState} from 'react'
import Dropdown from './Dropdown'
import DuAnItem from '@/components/danh-sach-du-an/DuAnItem'
import DropdownItem from './DropdownItem'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import DuAnPagination from '@/components/pagination/DuAnPagination'

export default function DuAnNoiBat({isMobile, dataDanhSachDuAn, dataProject}) {
  const ref = useRef(null)
  const pinRef = useRef(null)
  const [country, setCountry] = useState('all')
  const [elevatorTypeList, setElevatorTypeList] = useState(['all'])
  // TODO
  useEffect(() => {}, [])
  const handleChangeCountry = (value) => {
    setCountry(value)
  }
  const handleChangeElevatorTypeList = (value) => {
    setElevatorTypeList((prevState) => {
      if (prevState.includes(value)) {
        return prevState.filter(
          (item) => item !== value || prevState.length === 1,
        )
      }
      return [...prevState, value]
    })
  }
  useGSAP(() => {
    if (isMobile) {
      gsap.to(ref.current, {
        scrollTrigger: {
          trigger: ref.current,
          pin: true,
          anticipatePin: 1,
          start: 'top top',
          endTrigger: '.section-du-an',
          end: 'bottom top',
          pinSpacing: false,
          onToggle: (self) => {
            const header = document.querySelector('.header')
            if (self.isActive) {
              header.style.opacity = 0
              header.style.pointerEvents = 'none'
            } else {
              header.style.opacity = 1
              header.style.pointerEvents = 'all'
            }
          },
        },
      })
    } else {
      gsap.to(pinRef.current, {
        scrollTrigger: {
          trigger: pinRef.current,
          pin: true,
          anticipatePin: 1,
          start: 'top top',
          endTrigger: '.section-du-an',
          end: 'bottom bottom',
          pinSpacer: false,
          // onToggle: (self) => {
          //   const header = document.querySelector('.header')
          //   if (self.isActive) {
          //     header.style.opacity = 0
          //     header.style.pointerEvents = 'none'
          //   } else {
          //     header.style.opacity = 1
          //     header.style.pointerEvents = 'all'
          //   }
          // },
        },
      })
    }
  }, [isMobile])
  return (
    <section className='section-du-an mb-[7rem]'>
      <div className='relative flex flex-col md:flex-row flex-nowrap px-3 md:px-[3.75rem] pt-8 md:pt-[5rem]'>
        {!isMobile &&(
          <>
            <Image
              src={`/images/du-an/du-an-bg.jpg`}
              alt=''
              width={1920}
              height={1080}
              className='absolute w-full h-[66.75rem] opacity-25 top-0 left-0 object-cover -translate-y-1/4 object-right'
            />
            <div
              className='absolute top-0 left-0 w-full h-[66.75rem] -translate-y-1/4'
              style={{
                background:
                  'linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.00) 45.5%, rgba(255, 255, 255, 0.38) 78.5%, #FFF 100%)',
              }}
            />
          </>
        )}
        {/* TODO: to client */}
        <div
          ref={pinRef}
          className='md:basis-[27%] md:!mr-[3rem] z-20 py-[6.5rem] -translate-y-[5.5rem]'
        >
          <h2
            className='text-grey-900 font-SVNLagu text-1.875 md:text-3 font-semibold leading-1.2 uppercase [&_strong]:text-yellow-500 [&_strong]:font-semibold max-md:w-[64%] mb-3.5 md:mr-4'
            dangerouslySetInnerHTML={{__html: dataDanhSachDuAn.heading}}
          ></h2>
          {!isMobile && (
            <p className='text-grey-500 text-justify font-Iciel text-1 leading-1.5'>
              {dataDanhSachDuAn.description}
            </p>
          )}
          <div
            ref={ref}
            className='relative flex flex-row items-start md:pt-8 max-md:justify-around pt-[0.8rem] max-md:pb-[0.8rem] z-10 max-md:bg-white w-full'
          >
            <Dropdown
              icon={`/images/du-an/location.svg`}
              content='Quốc gia'
            >
              <DropdownItem
                content='Tất cả'
                active={country.includes('all')}
                handleOnClick={() => handleChangeCountry('all')}
              />
              <DropdownItem
                content='VIỆT NAM'
                active={country.includes('vietnam')}
                handleOnClick={() => handleChangeCountry('vietnam')}
              />
              <DropdownItem
                content='THẾ GIỚI'
                active={country.includes('the-gioi')}
                handleOnClick={() => handleChangeCountry('the-gioi')}
              />
            </Dropdown>
            <Dropdown
              icon={`/images/du-an/type.svg`}
              content='Loại thang máy'
              className='ml-2'
            >
              <DropdownItem
                content='Tất cả'
                active={elevatorTypeList.includes('all')}
                handleOnClick={() => handleChangeElevatorTypeList('all')}
              />
              <DropdownItem
                content='Thang máy gia đình'
                active={elevatorTypeList.includes('thang-may-gia-dinh')}
                handleOnClick={() =>
                  handleChangeElevatorTypeList('thang-may-gia-dinh')
                }
              />
              <DropdownItem
                content='Thang máy tải khách'
                active={elevatorTypeList.includes('thang-may-tai-khach')}
                handleOnClick={() =>
                  handleChangeElevatorTypeList('thang-may-tai-khach')
                }
              />
              <DropdownItem
                content='Thang máy tải hàng'
                active={elevatorTypeList.includes('thang-may-tai-hang')}
                handleOnClick={() =>
                  handleChangeElevatorTypeList('thang-may-tai-hang')
                }
              />
              <DropdownItem
                content='Thang máy quan sát'
                active={elevatorTypeList.includes('thang-may-quan-sat')}
                handleOnClick={() =>
                  handleChangeElevatorTypeList('thang-may-quan-sat')
                }
              />
              <DropdownItem
                content='Thang máy bệnh viện'
                active={elevatorTypeList.includes('thang-may-benh-vien')}
                handleOnClick={() =>
                  handleChangeElevatorTypeList('thang-may-benh-vien')
                }
              />
              <DropdownItem
                content='Thang tải ô tô'
                active={elevatorTypeList.includes('thang-may-o-to')}
                handleOnClick={() =>
                  handleChangeElevatorTypeList('thang-may-o-to')
                }
              />
              <DropdownItem
                content='Thang tải thực phẩm'
                active={elevatorTypeList.includes('thang-may-thuc-pham')}
                handleOnClick={() =>
                  handleChangeElevatorTypeList('thang-may-thuc-pham')
                }
              />
              <DropdownItem
                content='Thang cuốn'
                active={elevatorTypeList.includes('thang-cuon')}
                handleOnClick={() => handleChangeElevatorTypeList('thang-cuon')}
              />
            </Dropdown>
          </div>
        </div>
        {/* TODO: to server */}
        <div className='md:basis-[71%] grid md:grid-cols-2 gap-3 md:gap-4 z-10 mt-3.5 shrink-0'>
          <DuAnItem
            imgFlagUrl={`/images/du-an/country-1.png`}
            altImageFlag={`/`}
            nameProject={'Biệt thự Phú Quốc, Việt Nam'}
            imgProjectUrl={`/images/du-an/du-an-1.png`}
            altImageProject={`/`}
            href={`/`}
          />
          <DuAnItem
            imgFlagUrl={`/images/du-an/country-2.png`}
            altImageFlag={`/`}
            nameProject={'Laos Vientiane New World project, Vientiane, Laos'}
            imgProjectUrl={`/images/du-an/du-an-1.png`}
            altImageProject={`/`}
            href={`/`}
          />
          <DuAnItem
            imgFlagUrl={`/images/du-an/country-1.png`}
            altImageFlag={`/`}
            nameProject={'Biệt thự Phú Quốc, Việt Nam'}
            imgProjectUrl={`/images/du-an/du-an-1.png`}
            altImageProject={`/`}
            href={`/`}
          />
          <DuAnItem
            imgFlagUrl={`/images/du-an/country-2.png`}
            altImageFlag={`/`}
            nameProject={'Laos Vientiane New World project, Vientiane, Laos'}
            imgProjectUrl={`/images/du-an/du-an-2.jpg`}
            altImageProject={`/`}
            href={`/`}
          />
          <DuAnItem
            imgFlagUrl={`/images/du-an/country-1.png`}
            altImageFlag={`/`}
            nameProject={'Biệt thự Phú Quốc, Việt Nam'}
            imgProjectUrl={`/images/du-an/du-an-1.png`}
            altImageProject={`/`}
            href={`/`}
          />
          <DuAnItem
            imgFlagUrl={`/images/du-an/country-2.png`}
            altImageFlag={`/`}
            nameProject={'Laos Vientiane New World project, Vientiane, Laos'}
            imgProjectUrl={`/images/du-an/du-an-2.jpg`}
            altImageProject={`/`}
            href={`/`}
          />
          <DuAnItem
            imgFlagUrl={`/images/du-an/country-1.png`}
            altImageFlag={`/`}
            nameProject={'Biệt thự Phú Quốc, Việt Nam'}
            imgProjectUrl={`/images/du-an/du-an-1.png`}
            altImageProject={`/`}
            href={`/`}
          />
          <DuAnItem
            imgFlagUrl={`/images/du-an/country-2.png`}
            altImageFlag={`/`}
            nameProject={'Laos Vientiane New World project, Vientiane, Laos'}
            imgProjectUrl={`/images/du-an/du-an-2.jpg`}
            altImageProject={`/`}
            href={`/`}
          />
        </div>
      </div>
      <DuAnPagination
        totalPage={12}
        activePage={0}
      />
    </section>
  )
}
