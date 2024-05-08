
import DichVu from '@/sections/dichvu'
import React from 'react'
import getDataSlug from '@/lib/getDataSlug'
export default async function page({ searchParams, params }) {
  const { slug } = params;
  let data;
  data = await getDataSlug(`/dich-vu/${slug}`)
  const { viewport } = searchParams
  const isMobile = viewport?.includes('mobile')
  return <div>
   <DichVu isMobile={isMobile} data={data}/>
  </div>
}
