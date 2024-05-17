'use client'
import { useState, useEffect } from 'react';
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
  dataSixReason,
}) {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const firstRef = useRef(null)
  const secondRef = useRef(null)
  useGSAP(() => {
    if (windowWidth > 1024) {
      gsap.to(firstRef.current, {
        scrollTrigger: {
          trigger: firstRef.current,
          pin: true,
          anticipatePin: 1,
          start: 'bottom bottom',
          endTrigger: secondRef.current,
          end: 'top top',
          pinSpacing: false,
          pinSpacer: false,
        },
      });
    }
  }, [windowWidth]);

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
