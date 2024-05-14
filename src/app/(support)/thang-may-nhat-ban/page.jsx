import React from 'react'
import JapanElevator from '@/sections/JapanElevator'
import getData from '@/lib/getData'
import getDataSlug from '@/lib/getDataSlug'
import SupportLayout from '../layout'
export default async function page({searchParams, params}) {
  const {viewport} = searchParams


  const isMobile = viewport?.includes('mobile')
  let [dataJpElevator, dataSixReason,dataAllElevator,dataListEle] = await Promise.all([
    getData(`/pages/35`),
    getData(`/options/options/sixReasons`),
    getDataSlug(`/taxonomy-terms/type_elavator`),
    getDataSlug(`/elavator?id=35`)
  ]);
  return (
    <JapanElevator
      isMobile={isMobile}
      data={dataJpElevator}
      dataSixReason={dataSixReason}
      dataAllElevator={dataAllElevator}
      dataListEle={dataListEle}
    />
  )
}
SupportLayout.type="red"

