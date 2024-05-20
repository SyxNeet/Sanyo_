import FamilyElevator from '@/sections/thang-may-page-details/FamilyElevator'
import React from 'react'
import getDataSlug from '@/lib/getDataSlug'
import {fetchMetaData} from '@/lib/fetchMetadata'
import {getMeta} from '@/lib/getMeta'

export async function generateStaticParams() {
  return [
    {slug: 'thang-may-gia-dinh'},
    {slug: 'thang-may-tai-khach'},
    {slug: 'thang-may-tai-hang'},
    {slug: 'thang-may-quan-sat'},
    {slug: 'thang-may-benh-vien'},
    {slug: 'thang-tai-o-to'},
    {slug: 'thang-tai-thuc-pham'},
    {slug: 'thang-cuon'},
    {slug: 'thang-bang-chuyen'},
  ]
}

export async function generateMetadata({params}) {
  const result = await fetchMetaData(`/type_elavator/${params.slug}/`)
  return getMeta(
    result,
    `/thang-may-nhat-ban/${params.slug}`,
    'Thang máy Nhật Bản - SANYO YUSOKI',
  )
}

export default async function page({searchParams, params}) {
  const {slug} = params
  const {viewport} = searchParams
  const isMobile = viewport?.includes('mobile')
  const [dataElevator, data] = await Promise.all([
    getDataSlug(`/list_elevator_in_category?slug=${slug}`),
    getDataSlug(`/detail_elevator/${slug}`),
  ])

  return (
    <FamilyElevator
      isMobile={isMobile}
      data={data}
      dataElevator={dataElevator}
    />
  )
}
