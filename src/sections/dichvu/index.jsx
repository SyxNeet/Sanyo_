import React from 'react'
import SixReasons from '@/components/sixReasons'
import LeadershipMessage from '@/components/LeadershipMessage'
import ItemOutStandingProject from '@/components/itemOutstandingProject'
import SlideOnlyImagesDownload from '@/components/slideOnlyImagesWithDowload'
export default function DichVu() {
  return (
    <div className='pt-9'>
      {/* component Slide auto play  */}
      <SlideOnlyImagesDownload />
      {/* component 6 reasons  */}
      <SixReasons />
      {/* component chia sẻ từ ban lãnh đạo  */}
      <LeadershipMesssage />
=======
      {/* component item outstanding project  */}
      <ItemOutStandingProject />
    </div>
  )
}
