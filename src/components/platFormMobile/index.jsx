'use client'
import Content from '../platForm/content/Content'
import Slider from './slider/Slider'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation, Pagination, Autoplay} from 'swiper/modules'
function PlatFormMobile() {
  return (
    <section className='box-container-border bg-grey-600 pt-[1.69rem] pb-[3.19rem]'>
      <Content
        className={'max-md:mb-[1.25rem]'}
        title={'Thang máy Nhật Bản SANYO YUSOKI'}
        description={
          'Chúng tôi tin rằng với một nền móng vững chắc sẽ cho ra đời những sản phẩm thang máy chất lượng nhất.'
        }
      />
      <Slider />
    </section>
  )
}

export default PlatFormMobile
