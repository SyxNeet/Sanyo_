import React from 'react'
import ProjectDetails from '@/sections/chi-tiet-du-an'
import getDataSlug from '@/lib/getDataSlug'
import getData from '@/lib/getData'
export default async function page({searchParams, params}) {
  const {slug} = params
  const {viewport} = searchParams
  const isMobile = viewport?.includes('mobile')
  let [dataSixReason, dataDetails, dataForm] = await Promise.all([
    getData(`/options/options/sixReasons`),
    getDataSlug(`/du-an/${slug}`),
    getData(`/options/options/contactForm`),
  ])
  return (
    <ProjectDetails
      dataSixReason={dataSixReason}
      dataForm={dataForm}
      data={dataDetails}
      isMobile={isMobile}
    />
  )
}
