import React, {forwardRef} from 'react'
import Content from './content/Content'
import Slider from './slider/Slider'
import './style.css'

const PlatFormElevator = forwardRef(
  ({classNameBtn, classText, isBlack, isRed, dataPlatForm}, ref) => {
    return (
      <div
        ref={ref}
        className='relative bg-grey-600 md:py-[7.19rem] md:pl-[6.31rem] box-container-border z-10'
      >
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
  },
)

export default PlatFormElevator
