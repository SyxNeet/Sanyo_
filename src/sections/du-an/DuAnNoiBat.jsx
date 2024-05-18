'use client'

import Image from 'next/image'
import {useEffect, useRef, useState} from 'react'
import DuAnItem from '@/components/danh-sach-du-an/DuAnItem'
import gsap from 'gsap'
import DuAnPagination from '@/components/pagination/DuAnPagination'
import {useGSAP} from '@gsap/react'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import LoaiThangMayDropdown from './LoaiThangMayDropdown'
import QuocGiaDropdown from './QuocGiaDropdown'
import DanhSachDuAnSkeleton from '@/components/danh-sach-du-an/DanhSachDuAnSkeleton'
import {Fade} from 'react-awesome-reveal'

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
  const [isLoading, setIsLoading] = useState(true)
  console.log(isMobile)
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
    if (!isMobile && !isLoading) {
      gsap.to('.du-an-item', {
        scale: 1,
        stagger: 0.12,
        autoAlpha: 1,
        duration: 1,
      })
    }
  }, [page, country, type, isMobile, isLoading, dataProject])
  useEffect(() => {
    setIsLoading(false)
    // setTimeout(() => ScrollTrigger.refresh(), 20)
  }, [page, country, type, dataProject])
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
            <QuocGiaDropdown
              isMobile={isMobile}
              page={page}
              country={country}
              type={type}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            />
            <LoaiThangMayDropdown
              isMobile={isMobile}
              page={page}
              country={country}
              type={type}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            />
          </div>
        </div>
        <div className='md:basis-[71%] grid md:grid-cols-2 gap-3 md:gap-4 z-10 mt-3.5 shrink-0'>
          {isLoading ? (
            <DanhSachDuAnSkeleton />
          ) : (
            <>
              {dataProject.events.length > 0 ? (
                <>
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
                        page={page}
                        country={country}
                        type={type}
                        isMobile={isMobile}
                      />
                    )
                  })}
                </>
              ) : (
                <h3 className='col-span-2 py-4 text-2xl text-center font-Iciel text-grey-900'>
                  Hiện tại không có dự án nào.
                </h3>
              )}
            </>
          )}
          <Fade
            direction='up'
            triggerOnce
            className='md:col-span-2'
          >
            <DuAnPagination
              totalPage={dataProject.total_pages}
              activePage={page < 1 ? 0 : page - 1}
              country={country}
              type={type}
            />
          </Fade>
        </div>
      </div>
    </section>
  )
}
