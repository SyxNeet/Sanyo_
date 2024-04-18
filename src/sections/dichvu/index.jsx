
import React from 'react'
import SixReasons from '@/components/sixReasons'
import SlideOnlyImages from '@/components/slideOnlyImages'
export default function DichVu() {
  return (
    <div className='pt-9'>
      {/* component Slide auto play  */}
    <SlideOnlyImages/>
    {/* component 6 reasons  */}
    <SixReasons/>
    </div>
  )
}
