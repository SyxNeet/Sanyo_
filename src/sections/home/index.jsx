import PlatFormElevator from '@/components/platForm'
import ProjectItem from '@/components/projectItem'
import ReasonChoose from '@/components/reasonChoose'
import {Button} from '@/components/ui/button'
import React from 'react'

export default function HomePage() {
  return (
    <div>
      {/* component Reason  */}
      <ReasonChoose></ReasonChoose>

      {/* Component Button */}
      <Button
        isHover={true}
        text={'LIÊN HỆ NGAY'}
        isBlack={true}
      ></Button>

      {/* Component  platform  */}
      <PlatFormElevator />

      <ProjectItem />
    </div>
  )
}
