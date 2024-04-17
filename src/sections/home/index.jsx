import ReasonChoose from '@/components/reasonChoose'
import {Button} from '@/components/ui/button'
import React from 'react'

export default function HomePage() {
  return (
    <div>
      <ReasonChoose></ReasonChoose>
      <Button
        isHover={true}
        text={'LIÊN HỆ NGAY'}
      ></Button>
    </div>
  )
}
