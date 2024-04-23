'use client'
import Content from '../platForm/content/Content'
import Slider from './slider/Slider'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation, Pagination, Autoplay} from 'swiper/modules'
function PlatFormMobile({dataPlatForm}) {
  return (
    <section className='box-container-border bg-grey-600 pt-[1.69rem] pb-[3.19rem]'>
      <Content
        className={'max-md:mb-[1.25rem]'}
        title={dataPlatForm?.title}
        description={dataPlatForm?.desc}
      />
      <Slider />
    </section>
  )
}

export default PlatFormMobile
