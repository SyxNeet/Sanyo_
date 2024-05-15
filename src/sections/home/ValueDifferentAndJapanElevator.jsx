'use client'

import ValueDifferent from './valueDifferent/ValueDifferent'
import PlatFormElevator from '@/components/platForm'
import PlatFormMobile from '@/components/platFormMobile'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import {useRef} from 'react'

// NOTE: category trong chi tiet tin tuc thanh cua tin tuc do

export default function ValueDifferentAndJapanElevator({
  isMobile,
  dataValueDifferent,
  dataPlatFormElevator,
}) {
  const firstRef = useRef(null)
  const secondRef = useRef(null)
  useGSAP(() => {
    if (!isMobile) {
      gsap.to(firstRef.current, {
        scrollTrigger: {
          trigger: firstRef.current,
          pin: true,
          anticipatePin: 1,
          start: 'bottom bottom',
          endTrigger: secondRef.current,
          end: 'top top',
          pinSpacing: false,
          pinSpacer: false
        },
      })
    }
  }, [isMobile])
  return (
    <>
      <ValueDifferent
        ref={firstRef}
        isMobile={isMobile}
        dataSixReason={dataSixReason}
        dataValueDifferent={dataValueDifferent}
      />
      {!isMobile ? (
        <PlatFormElevator
          ref={secondRef}
          dataPlatFormElevator={dataPlatFormElevator}
        />
      ) : (
        <PlatFormMobile dataPlatFormElevator={dataPlatFormElevator} />
      )}
    </>
  )
}
