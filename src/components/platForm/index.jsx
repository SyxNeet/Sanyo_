import React, {forwardRef} from 'react'
import Content from './content/Content'
import Slider from './slider/Slider'
import './style.css'

const PlatFormElevator = forwardRef(({dataPlatFormElevator}, ref) => {
  return (
    <div
      ref={ref}
      className='relative bg-grey-600 md:py-[7.19rem] md:pl-[6.31rem] box-container-border z-10'
    >
      <Content
        title={dataPlatFormElevator?.title}
        description={dataPlatFormElevator?.desc}
      />
      <Slider data={dataPlatFormElevator.elavators} />
    </div>
  )
})

export default PlatFormElevator
