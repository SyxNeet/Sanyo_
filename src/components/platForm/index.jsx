import React from 'react'
import Content from './content/Content'
import Slider from './slider/Slider'
import './style.css'

export default function PlatFormElevator({
  classNameBtn,
  classText,
  isBlack,
  isRed,
  dataPlatForm,
}) {
  return (
    <div className='bg-grey-600 md:py-[7.19rem] md:pl-[6.31rem] box-container-border'>
      <Content
        title={dataPlatForm?.title}
        description={dataPlatForm?.desc}
        classNameBtn={classNameBtn}
        classText={classText}
        isBlack={isBlack}
        isRed={isRed}
      />
      {/* Component Slider platform */}
      <Slider />
    </div>
  )
}
