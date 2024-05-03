import FamilyElevator from '@/sections/thang-may-page-details/FamilyElevator'
import React from 'react'

const page = ({ searchParams, params }) => {
  const { viewport } = searchParams
  const isMobile = viewport?.includes('mobile')
  return (
    <FamilyElevator isMobile={isMobile}/>
  )
}

export default page