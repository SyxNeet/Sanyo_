import React from 'react'
import JapanElevator from '@/sections/JapanElevator'
import getData from '@/lib/getData'

export default async function page({searchParams, params}) {
  const {viewport} = searchParams

  const isMobile = viewport?.includes('mobile')
  let [dataJpElevator, dataSixReason] = await Promise.all([
    getData(`/pages/35`),
    getData(`/options/options/sixReasons`)
  ]);

  return (
    <JapanElevator
      isMobile={isMobile}
      data={dataJpElevator}
      dataSixReason={dataSixReason}
    />
  )
}
