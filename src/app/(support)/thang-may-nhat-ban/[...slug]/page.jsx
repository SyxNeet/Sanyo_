import FamilyElevator from '@/sections/thang-may-page-details/FamilyElevator'
import React from 'react'
import getDataSlug from '@/lib/getDataSlug';
export default async function  page ({ searchParams, params }) {
  let data
  const { slug } = params;
  data = await getDataSlug(`/thang-may/${slug}`)
  const { viewport } = searchParams
  const isMobile = viewport?.includes('mobile')
  return (
    <FamilyElevator isMobile={isMobile} data={data}/>
  )
}

