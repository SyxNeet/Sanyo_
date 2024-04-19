
import React from 'react'
import SixReasons from '@/components/sixReasons'
import SlideOnlyImages from '@/components/slideOnlyImages'
import LeadershipMesssage from '@/components/LeadershipMessage'
import ItemOutStandingProject from '@/components/itemOutstandingProject'
export default function DichVu() {
  return (
    <div className='pt-9'>
      {/* component Slide auto play  */}
    <SlideOnlyImages/>
    {/* component 6 reasons  */}
    <SixReasons/>
    {/* component chia sẻ từ ban lãnh đạo  */}
    <LeadershipMesssage/>
      {/* component item outstanding project  */}
      <ItemOutStandingProject/>
    </div>
  )
}
