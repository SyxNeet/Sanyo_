import React from 'react'
import Content from './content/Content'
import Slider from './slider/Slider'
import './style.css'

export default function PlatFormElevator() {
  return (
    <div className='bg-grey-600 md:py-[7.19rem] md:pl-[6.31rem] box-container-border'>
      <Content
        title={'Thang máy Nhật Bản SANYO YUSOKI'}
        description={
          'Chúng tôi tin rằng với một nền móng vững chắc sẽ cho ra đời những sản phẩm thang máy chất lượng nhất. SANYO YUSOKI vẫn liên tục đầu tư cho Nghiên cứu Phát triển (R&D) tất cả các dòng thang máy'
        }
      />

      {/* Component Slider platform */}

      <Slider />
    </div>
  )
}
