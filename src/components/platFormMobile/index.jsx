'use client'

import Content from '../platForm/content/Content'
import Slider from './slider/Slider'

function PlatFormMobile({dataElevatorBySlug}) {
  return (
    <section className='box-container-border bg-grey-600 pt-[2rem] pb-[3.19rem]'>
      <Content
        className={'max-md:mb-[1.25rem]'}
        title={dataElevatorBySlug?.title}
        description={dataElevatorBySlug?.desc}
      />
      <Slider data={dataElevatorBySlug.elavators} />
    </section>
  )
}

export default PlatFormMobile
