'use client'

import Image from 'next/image'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import './styles.css'
import 'swiper/css'
import 'swiper/css/effect-fade'
import {useEffect, useRef, useState} from 'react'
import {useDetectDirectionScroll} from '@/hooks/useDetectDirectionScroll'
import {cn} from '@/lib/utils'

const scrollLengthPerItem = 300

const Procedure = ({data}) => {
  const sectionRef = useRef(null)
  const pinElementsRef = useRef(null)
  const [activePinElement, setActivePinElement] = useState(0)
  const directionScroll = useDetectDirectionScroll()
  useEffect(() => {
    pinElementsRef.current = document.querySelectorAll('.pin-element')
  }, [data])
  useGSAP(() => {
    const scrollPerPinElement = 1 / (pinElementsRef.current?.length ?? 1)
    gsap.to(sectionRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        pin: true,
        anticipatePin: 1,
        start: 'top top',
        end: `+=${scrollLengthPerItem * (pinElementsRef.current?.length ?? 1)}`,
        preventOverlaps: true,
        fastScrollEnd: true,
        onUpdate: (self) => {
          const x = self.progress % scrollPerPinElement
          setActivePinElement(
            Math.min(
              Math.max(
                Math.round(
                  (self.progress + scrollPerPinElement - x) /
                    scrollPerPinElement -
                    1,
                ),
                0,
              ),
              (pinElementsRef.current?.length ?? 1) - 1,
            ),
          )
        },
      },
    })
  }, [data])
  useGSAP(() => {
    const tl = gsap.timeline({})
    if (directionScroll === 'down') {
      if (activePinElement > 0) {
        tl.to(pinElementsRef.current[activePinElement - 1], {
          autoAlpha: 0,
          duration: 0.3,
          overwrite: true,
        })
        tl.to(pinElementsRef.current[activePinElement], {
          autoAlpha: 1,
          duration: 0.3,
        })
      }
    } else if (directionScroll === 'up') {
      if (activePinElement < pinElementsRef.current.length - 1) {
        tl.to(pinElementsRef.current[activePinElement + 1], {
          autoAlpha: 0,
          duration: 0.3,
          overwrite: true,
        })
        tl.to(pinElementsRef.current[activePinElement], {
          autoAlpha: 1,
          duration: 0.3,
        })
      }
    }
  }, [activePinElement, directionScroll, data])
  return (
    <section
      className='relative h-[49.25rem]'
      ref={sectionRef}
    >
      {data.list_procedure.map((item, i) => {
        return (
          <div
            key={i}
            className={cn(
              'absolute top-0 left-0 flex flex-row w-full h-full opacity-0 pin-element flex-nowrap',
              {
                'opacity-100': i === 0,
              },
            )}
          >
            <div className='basis-[57.625%] pt-[8rem] pl-[4.75rem]'>
              <h2
                className='text-grey-900 font-SVNLagu text-3 font-semibold leading-1.3 [&_strong]:text-yellow-500 [&_strong]:font-semibold [&_strong]:uppercase mb-[3rem]'
                dangerouslySetInnerHTML={{__html: data.heading}}
              />
              <h3
                className='text-grey-800 font-SVNLagu text-1.75 font-semibold leading-1.3 mb-[0.94rem]'
                dangerouslySetInnerHTML={{__html: item.name_step}}
              />
              <p className='w-[48.6875rem] text-justify text-grey-400 font-Iciel text-1.125 leading-1.5 mb-[1.63rem]'>
                {item.desc}
              </p>
              <div className='grid grid-cols-1 gap-5'>
                {item.list_steps.map((step, j) => {
                  return (
                    <div
                      key={j}
                      className='flex flex-row items-start'
                    >
                      <div className='rounded-full size-6 bg-yellow-500 text-0.75 text-grey-0 font-SVNLagu flex flex-row justify-center items-center font-semibold leading-1.5 mt-px'>
                        {j + 1}
                      </div>
                      <p className='text-grey-400 font-SVNLagu text-1.125 leading-1.5 ml-2'>
                        {step.name}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className='basis-[42.375%]'>
              <Image
                src={item.img.url}
                alt={item.img.alt ?? item.name_step}
                className='object-cover w-full h-full'
                width={1290}
                height={1080}
              />
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default Procedure
