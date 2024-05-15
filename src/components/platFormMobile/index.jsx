'use client'

import Content from '../platForm/content/Content'
import Slider from './slider/Slider'

function PlatFormMobile({dataPlatFormElevator}) {
  return (
    <section className='box-container-border bg-grey-600 pt-[2rem] pb-[3.19rem]'>
      <Content
        className={'max-md:mb-[1.25rem]'}
        title={dataPlatFormElevator?.title}
        description={dataPlatFormElevator?.desc}
      />
      <Slider data={dataPlatFormElevator.elavators} />
    </section>
  )
}

export default PlatFormMobile
