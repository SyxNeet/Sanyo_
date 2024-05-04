import React from 'react'
import JapanElevator from '@/sections/JapanElevator'
import getData from '@/lib/getData'

export default async function page({searchParams, params}) {
  const {viewport} = searchParams

  const isMobile = viewport?.includes('mobile')
  let dataJpElevator
  dataJpElevator = await getData(`/pages/35`)
  return (
    <JapanElevator
      isMobile={isMobile}
      data={dataJpElevator}
    />
  )
}
