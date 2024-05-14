'use client'

import Image from 'next/image'
import {useEffect, useRef} from 'react'
import Dropdown from './Dropdown'
import DuAnItem from '@/components/danh-sach-du-an/DuAnItem'
import DropdownItem from './DropdownItem'
import gsap from 'gsap'
import DuAnPagination from '@/components/pagination/DuAnPagination'
import {useGSAP} from '@gsap/react'
import {generateLinkDuAnType} from '@/lib/generateLinkDuAnType'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

export default function DuAnNoiBat({
  isMobile,
  dataDanhSachDuAn,
  dataProject,
  page,
  country,
  type,
}) {
  const stickyRef = useRef(null)
  const pinRef = useRef(null)
  useEffect(() => {
    if (isMobile) {
      gsap.to(stickyRef.current, {
        scrollTrigger: {
          trigger: stickyRef.current,
          pin: true,
          start: 'top top',
          endTrigger: '.section-du-an',
          end: 'bottom bottom-=50%',
          pinSpacing: false,
          anticipatePin: 1,
          onToggle: (self) => {
            if (stickyRef.current) {
              const header = document.querySelector('.header')
              if (self.isActive) {
                header.style.opacity = 0
                header.style.pointerEvents = 'none'
              } else {
                header.style.opacity = 1
                header.style.pointerEvents = 'all'
              }
              stickyRef.current.style.transform = 'none'
            }
          },
        },
      })
    }
  }, [isMobile])
  useGSAP(() => {
    if (!isMobile) {
      gsap.to(pinRef.current, {
        scrollTrigger: {
          trigger: pinRef.current,
          pin: true,
          anticipatePin: 1,
          start: 'top top',
          endTrigger: '.section-du-an',
          end: 'bottom bottom',
          pinSpacer: false,
        },
      })
    }
  }, [isMobile])
  useGSAP(() => {
    ScrollTrigger.refresh()
  }, [page, country, type])
  return (
    <section className='section-du-an mb-[4rem] md:mb-[7rem]'>
      <div className='relative flex flex-col md:flex-row flex-nowrap px-3 md:px-[3.75rem] pt-8 md:pt-[5rem]'>
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
        <div
          ref={pinRef}
          className='md:basis-[27%] z-20 md:!mr-[3rem] md:py-[6.5rem] md:-translate-y-[5.5rem]'
        >
          <h2
            className='text-grey-900 font-SVNLagu text-1.875 md:text-3 font-semibold leading-1.2 uppercase [&_strong]:text-yellow-500 [&_strong]:font-semibold max-md:w-[64%] mb-3.5 [&_p]:block'
            dangerouslySetInnerHTML={{__html: dataDanhSachDuAn.heading}}
          ></h2>
          {!isMobile && (
            <p className='text-grey-500 text-justify font-Iciel text-1 leading-1.5'>
              {dataDanhSachDuAn.description}
            </p>
          )}
          <div
            ref={stickyRef}
            className='relative z-10 flex flex-row items-start w-full md:pt-6 max-md:justify-around max-md:py-2 max-md:bg-white'
          >
            <Dropdown
              icon={`/images/du-an/location.svg`}
              content='Quốc gia'
            >
              <DropdownItem
                href={`/du-an?page=${page}&country=all&type=${type}`}
                content='Tất cả'
                active={country.includes('all')}
              />
              <DropdownItem
                href={`/du-an?page=${page}&country=viet-nam&type=${type}`}
                content='VIỆT NAM'
                active={country.includes('viet-nam')}
              />
              <DropdownItem
                href={`/du-an?page=${page}&country=the-gioi&type=${type}`}
                content='THẾ GIỚI'
                active={country.includes('the-gioi')}
              />
            </Dropdown>
            <Dropdown
              icon={`/images/du-an/type.svg`}
              content='Loại thang máy'
              className='ml-2'
            >
              <DropdownItem
                href={`/du-an?page=${page}&country=${country}&type=all`}
                content='Tất cả'
                active={type.includes('all')}
              />
              <DropdownItem
                href={`/du-an?page=${page}&country=${country}&type=${generateLinkDuAnType(
                  type,
                  'thang-may-gia-dinh',
                )}`}
                content='Thang máy gia đình'
                active={type.includes('thang-may-gia-dinh')}
              />
              <DropdownItem
                href={`/du-an?page=${page}&country=${country}&type=${generateLinkDuAnType(
                  type,
                  'thang-may-tai-khach',
                )}`}
                content='Thang máy tải khách'
                active={type.includes('thang-may-tai-khach')}
              />
              <DropdownItem
                href={`/du-an?page=${page}&country=${country}&type=${generateLinkDuAnType(
                  type,
                  'thang-may-tai-hang',
                )}`}
                content='Thang máy tải hàng'
                active={type.includes('thang-may-tai-hang')}
                handleOnClick={() =>
                  handleChangeElevatorTypeList('thang-may-tai-hang')
                }
              />
              <DropdownItem
                href={`/du-an?page=${page}&country=${country}&type=${generateLinkDuAnType(
                  type,
                  'thang-may-quan-sat',
                )}`}
                content='Thang máy quan sát'
                active={type.includes('thang-may-quan-sat')}
                handleOnClick={() =>
                  handleChangeElevatorTypeList('thang-may-quan-sat')
                }
              />
              <DropdownItem
                href={`/du-an?page=${page}&country=${country}&type=${generateLinkDuAnType(
                  type,
                  'thang-may-benh-vien',
                )}`}
                content='Thang máy bệnh viện'
                active={type.includes('thang-may-benh-vien')}
                handleOnClick={() =>
                  handleChangeElevatorTypeList('thang-may-benh-vien')
                }
              />
              <DropdownItem
                href={`/du-an?page=${page}&country=${country}&type=${generateLinkDuAnType(
                  type,
                  'thang-may-o-to',
                )}`}
                content='Thang tải ô tô'
                active={type.includes('thang-may-o-to')}
                handleOnClick={() =>
                  handleChangeElevatorTypeList('thang-may-o-to')
                }
              />
              <DropdownItem
                href={`/du-an?page=${page}&country=${country}&type=${generateLinkDuAnType(
                  type,
                  'thang-may-thuc-pham',
                )}`}
                content='Thang tải thực phẩm'
                active={type.includes('thang-may-thuc-pham')}
                handleOnClick={() =>
                  handleChangeElevatorTypeList('thang-may-thuc-pham')
                }
              />
              <DropdownItem
                href={`/du-an?page=${page}&country=${country}&type=${generateLinkDuAnType(
                  type,
                  'thang-bang-chuyen',
                )}`}
                content='Thang băng chuyền'
                active={type.includes('thang-bang-chuyen')}
                handleOnClick={() =>
                  handleChangeElevatorTypeList('thang-bang-chuyen')
                }
              />
              <DropdownItem
                href={`/du-an?page=${page}&country=${country}&type=${generateLinkDuAnType(
                  type,
                  'thang-cuon',
                )}`}
                content='Thang cuốn'
                active={type.includes('thang-cuon')}
                handleOnClick={() => handleChangeElevatorTypeList('thang-cuon')}
              />
            </Dropdown>
          </div>
        </div>
        {/* TODO: to server */}
        <div className='md:basis-[71%] grid md:grid-cols-2 gap-3 md:gap-4 z-10 mt-3.5 shrink-0'>
          {dataProject.events.map((item, i) => {
            return (
              <DuAnItem
                key={i}
                imgFlagUrl={item.img_country.url}
                altImageFlag={item.img_country.alt}
                nameProject={item.title}
                imgProjectUrl={item.feature_image}
                altImageProject={item.excerpt}
                href={`/du-an/${item.detail_link}`}
              />
            )
          })}
          <DuAnPagination
            totalPage={dataProject.total_pages}
            activePage={page < 1 ? 0 : page - 1}
            country={country}
            type={type}
          />
        </div>
      </div>
    </section>
  )
}
