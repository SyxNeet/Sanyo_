import React from 'react'
import JapanElevator from '@/sections/JapanElevator'
import getData from '@/lib/getData'
import { getDictionary } from '@/dictionaries/dictionaries'
export default async function page({ searchParams, params }) {
  const { viewport } = searchParams
  const {lang}=params
  
  const isMobile = viewport?.includes('mobile')
  let dataJpElevator;
  if (params?.lang === 'vi') {
    dataJpElevator = await getData(`/pages/35`)
  } else {
    dataJpElevator = await getData(`/pages/37`)
  }
  return <JapanElevator isMobile={isMobile} lang={lang} data={dataJpElevator}/>
}