import React from 'react'
import JapanElevator from '@/sections/JapanElevator'
import getData from '@/lib/getData'
import getDataSlug from '@/lib/getDataSlug'
import SupportLayout from '../layout'
import {fetchMetaData} from '@/lib/fetchMetadata'
import {getMeta} from '@/lib/getMeta'

export async function generateMetadata({params}) {
  const result = await fetchMetaData(`/thang-may-nhat-ban/`)
  return getMeta(result, `/thang-may-nhat-ban/`)
}

export default async function page({searchParams, params}) {
  const {viewport} = searchParams
  const isMobile = viewport?.includes('mobile')
  let [
    dataJpElevator,
    dataSixReason,
    dataAllElevator,
    dataListEle,
    dataoutStanding,
  ] = await Promise.all([
    getData(`/pages/35`),
    getData(`/options/options/sixReasons`),
    getDataSlug(`/taxonomy-terms/type_elavator`),
    getDataSlug(`/elavator?id=35`),
    getDataSlug(`/feature_project?id=35`),
  ])
  return (
    <JapanElevator
      isMobile={isMobile}
      data={dataJpElevator}
      dataSixReason={dataSixReason}
      dataAllElevator={dataAllElevator}
      dataListEle={dataListEle}
      dataoutStanding={dataoutStanding}
    />
  )
}
SupportLayout.type = 'red'
