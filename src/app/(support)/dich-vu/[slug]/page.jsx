import DichVu from '@/sections/dichvu'
import React from 'react'
import getDataSlug from '@/lib/getDataSlug'
import {fetchMetaData} from '@/lib/fetchMetadata'
import {getMeta} from '@/lib/getMeta'

export async function generateMetadata({params}) {
  const result = await fetchMetaData(`/dich-vu/${params.slug}/`)
  return getMeta(
    result,
    `/dich-vu/${params.slug}`,
    `Dịch vụ - SANYO YUSOKI`,
  )
}

export default async function page({searchParams, params}) {
  const {slug} = params
  let data
  data = await getDataSlug(`/dich-vu/${slug}`)
  const {viewport} = searchParams
  const isMobile = viewport?.includes('mobile')
  return (
    <div>
      <DichVu
        isMobile={isMobile}
        data={data}
      />
    </div>
  )
}
