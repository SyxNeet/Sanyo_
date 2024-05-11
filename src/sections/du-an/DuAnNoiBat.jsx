'use client'

import {cn} from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import {useRef, useState} from 'react'
import Dropdown from './Dropdown'
import DuAnItem from '@/components/danh-sach-du-an/DuAnItem'
import DropdownItem from './DropdownItem'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'

export default function DuAnNoiBat({isMobile}) {
  const ref = useRef(null)
  const [country, setCountry] = useState('all')
  const [elevatorTypeList, setElevatorTypeList] = useState(['all'])
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
    gsap.to(ref.current, {
      scrollTrigger: {
        trigger: ref.current,
        pin: true,
        anticipatePin: 1,
        start: 'top top',
        endTrigger: '.section',
        end: 'bottom top',
        pinSpacing: false,
      },
    })
  }, [])
  return (
    <section className='section relative flex flex-col md:flex-row flex-nowrap px-3 md:px-[3.75rem] pb-12 pt-8 md:pt-[5rem]'>
      {!isMobile && (
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
      <div className='md:basis-[28%] md:mr-[5rem] z-20'>
        <h2 className='text-grey-900 font-SVNLagu text-1.875 md:text-3 font-semibold leading-1.2 uppercase [&_strong]:text-yellow-500 [&_strong]:font-semibold max-md:w-[64%] mb-3.5'>
          DANH SÁCH dự án <strong>nổi bật</strong>
        </h2>
        {!isMobile && (
          <p className='text-grey-500 text-justify font-Iciel text-1 leading-1.5'>
            Đóng góp vào sự phát triển bền vững của ngành thang máy thông qua
            nghiên cứu và phát triển liên tục
          </p>
        )}
        <div
          ref={ref}
          className='relative flex flex-row items-start md:pt-8 max-md:justify-around pt-[0.8rem] max-md:pb-[0.8rem] z-10 bg-white'
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
          </Dropdown>
        </div>
      </div>
      {/* TODO: to server */}
      <div className='basis-[72%] grid md:grid-cols-2 gap-3 md:gap-4 z-10 mt-3.5'>
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
    </section>
  )
}
