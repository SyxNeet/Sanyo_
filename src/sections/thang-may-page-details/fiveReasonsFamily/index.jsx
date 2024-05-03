'use client'
import React from 'react'
import {useState, useEffect, useRef} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import Link from 'next/link'
import ButtonSlide from '@/components/buttonSlideSixReasons/ButtonSLide'
import Image from 'next/image'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import {EffectFade, Navigation, Pagination} from 'swiper/modules'
import './styles.css'
const FiveReasonsFamily = ({isMobile}) => {
  const [maxHeight, setMaxHeight] = useState('25rem')
  const [maxHeightSecond, setMaxHeightSecond] = useState('25rem')
  const [activeIndex, setActiveIndex] = useState(0)
  const [showAll, setShowAll] = useState(false)
  const [showAllSecond, setShowAllSecond] = useState(false)
  const [useGSAPCheck, setUseGSAP] = useState(false)
  const imgFirstReason = useRef(null)
  const endFirstReason = useRef(null)
  const slideReason = useRef(null)
  const endSlideReason = useRef(null)
  const gsapInstance = useRef(null)
  const scrollTriggerInstance = useRef(null)
  const data = [
    'Bảo vệ và chống đẩy cửa',
    'Bảo vệ chống virus - vi khuẩn',
    'Chống cabin tự di chuyển',
    'Vật liệu buồng thang có độ bền cao',
    'Rèm an toàn hồng ngoại',
    'Hệ thống an toàn nhiều lớp',
    'Hệ thống lái thông minh',
    'Hệ thống lái thông minh',
    'Hệ thống lái thông minh',
  ]
  const dataSecond = [
    {
      title: 'HỆ THỐNG MÁY KÉO',
      desc: 'Máy kéo đồng bộ nam châm vĩnh cửu thế hệ mới được thiết kế bởi SANYO YUSOKI; Bộ mã hóa quay chất lượng quốc tế có độ chính xác cao nhận ra phản ứng chính xác của máy chính đối với hệ thống điều khiển; Sử dụng ổ trục và phanh hiệu suất cao, tuổi thọ siêu dài, độ ồn cực thấp; Thiết kế không cần hộp số, không cần thêm dầu bôi trơn, an toàn hơn và thân thiện với môi trường hơn.',
    },
    {
      title: 'HỆ THỐNG MÁY KÉO',
      desc: 'Máy kéo đồng bộ nam châm vĩnh cửu thế hệ mới được thiết kế bởi SANYO YUSOKI; Bộ mã hóa quay chất lượng quốc tế có độ chính xác cao nhận ra phản ứng chính xác của máy chính đối với hệ thống điều khiển; Sử dụng ổ trục và phanh hiệu suất cao, tuổi thọ siêu dài, độ ồn cực thấp; Thiết kế không cần hộp số, không cần thêm dầu bôi trơn, an toàn hơn và thân thiện với môi trường hơn.',
    },
    {
      title: 'HỆ THỐNG ĐIỀU KHIỂN',
      desc: 'Máy kéo đồng bộ nam châm vĩnh cửu thế hệ mới được thiết kế bởi SANYO YUSOKI; Bộ mã hóa quay chất lượng quốc tế có độ chính xác cao nhận ra phản ứng chính xác của máy chính đối với hệ thống điều khiển; Sử dụng ổ trục và phanh hiệu suất cao, tuổi thọ siêu dài, độ ồn cực thấp; Thiết kế không cần hộp số, không cần thêm dầu bôi trơn, an toàn hơn và thân thiện với môi trường hơn.',
    },
    {
      title: 'HỆ THỐNG CỬA AN TOÀN THÔNG MINH',
      desc: 'Máy kéo đồng bộ nam châm vĩnh cửu thế hệ mới được thiết kế bởi SANYO YUSOKI; Bộ mã hóa quay chất lượng quốc tế có độ chính xác cao nhận ra phản ứng chính xác của máy chính đối với hệ thống điều khiển; Sử dụng ổ trục và phanh hiệu suất cao, tuổi thọ siêu dài, độ ồn cực thấp; Thiết kế không cần hộp số, không cần thêm dầu bôi trơn, an toàn hơn và thân thiện với môi trường hơn.',
    },
    {
      title: 'HỆ THỐNG MÁY KÉO',
      desc: 'Máy kéo đồng bộ nam châm vĩnh cửu thế hệ mới được thiết kế bởi SANYO YUSOKI; Bộ mã hóa quay chất lượng quốc tế có độ chính xác cao nhận ra phản ứng chính xác của máy chính đối với hệ thống điều khiển; Sử dụng ổ trục và phanh hiệu suất cao, tuổi thọ siêu dài, độ ồn cực thấp; Thiết kế không cần hộp số, không cần thêm dầu bôi trơn, an toàn hơn và thân thiện với môi trường hơn.',
    },
    {
      title: 'HỆ THỐNG MÁY KÉO',
      desc: 'Máy kéo đồng bộ nam châm vĩnh cửu thế hệ mới được thiết kế bởi SANYO YUSOKI; Bộ mã hóa quay chất lượng quốc tế có độ chính xác cao nhận ra phản ứng chính xác của máy chính đối với hệ thống điều khiển; Sử dụng ổ trục và phanh hiệu suất cao, tuổi thọ siêu dài, độ ồn cực thấp; Thiết kế không cần hộp số, không cần thêm dầu bôi trơn, an toàn hơn và thân thiện với môi trường hơn.',
    },
  ]
  const dataThird = [
    {
      title: 'HỆ THỐNG MÁY KÉO',
      imgUrl: '/images/familyElevator/detailFE/slide1.png',
    },
    {
      title: 'HỆ THỐNG MÁY KÉO 2',
      imgUrl: '/images/familyElevator/detailFE/slide2.png',
    },
    {
      title: 'HỆ THỐNG CỬA AN TOÀN THÔNG MINH',
      imgUrl: '/images/familyElevator/detailFE/slide3.png',
    },
    {
      title: 'HỆ THỐNG MÁY KÉO 4',
      imgUrl: '/images/familyElevator/detailFE/slide1.png',
    },
    {
      title: 'HỆ THỐNG MÁY KÉO 5',
      imgUrl: '/images/familyElevator/detailFE/slide1.png',
    },
  ]
  const [expanded, setExpanded] = useState(
    Array(dataSecond?.length).fill(false),
  )
  const [expandedIndex, setExpandedIndex] = useState(0)
  //pin image first reason
  useEffect(() => {
    if (useGSAPCheck && !isMobile) {
      gsapInstance.current = gsap.to(imgFirstReason.current, {
        scrollTrigger: {
          trigger: imgFirstReason.current,
          pin: true,
          start: 'top top',
          endTrigger: endFirstReason.current,
          end: `bottom+=${77.8 * data.length - 400} center+=24.3%`,
          pinSpacing: false,
          anticipatePin: 1,
        },
      })
      scrollTriggerInstance.current = gsapInstance.current.scrollTrigger
    } else if (gsapInstance.current && scrollTriggerInstance.current) {
      gsapInstance.current.kill()
      scrollTriggerInstance.current.kill()
    }
  }, [useGSAPCheck, isMobile])
  //pin slide system
  useEffect(() => {
    if (!isMobile) {
      const animation = gsap.to(slideReason.current, {
        scrollTrigger: {
          trigger: slideReason.current,
          pin: true,
          start: 'top top',
          end: `${
            showAllSecond ? `bottom+=${63 * (dataSecond.length - 3)}` : 'bottom'
          } center+=20%`,
          pinSpacing: false,
          anticipatePin: 1,
          markers: true,
        },
      })

      return () => {
        animation.scrollTrigger.kill()
      }
    }
  }, [showAllSecond])

  //handle load more
  const handleLoadMore = () => {
    if (!showAll) {
      setMaxHeight(`${5.3 * data.length}rem`)
    } else {
      setMaxHeight('25rem')
    }
    setShowAll(!showAll)
    setUseGSAP(!useGSAPCheck)
  }
  //handle load more second
  const handleLoadMoreSecond = () => {
    if (!showAllSecond) {
      setMaxHeightSecond(`${5 * (dataSecond.length - 3) + 25}rem`)
    } else {
      setMaxHeightSecond('25rem')
    }
    setShowAllSecond(!showAllSecond)
  }
  //handle plus show desc
  const toggleItem = (index) => {
    const newExpanded = [...expanded]
    newExpanded[index] = !newExpanded[index]
    setExpanded(newExpanded)
    setExpandedIndex(index)
  }
  return (
    <section>
      <div className='flex justify-between pl-[5.75rem] pr-[5.84rem] items-end mt-[8.13rem] pb-[3.69rem] border-b border-[rgba(28,32,28,0.10)]'>
        <h2 className='w-[58.4375rem] font-SVNLagu uppercase text-[3.71738rem] leading-1.4 font-semibold'>
          5 LÝ DO LỰA CHỌN THANG MÁY GIA ĐÌNH SANYO YUSOKI
        </h2>
        <Link
          href={'/'}
          className=' w-fit  flex items-center group right-[6.25rem] bottom-[50%] max-md:bottom-0 max-md:left-0'
        >
          <ButtonSlide
            className={
              'w-[3.5rem] h-[3.5rem] border-yellow-500 group-hover:border-yellow-500 max-md:w-[2.11056rem] max-md:h-[2.11056rem] transition'
            }
            classNameSvg={
              'svgDance1 group-hover:text-yellow-500 max-d:w-[0.75rem] max-md:h-[0.75rem] md:w-[1rem] lg:w-[1.25rem] lg:h-[1.25rem] transition text-yellow-500'
            }
          />
          <span className='ml-4 max-md:ml-3 text-[1.125rem] font-Iciel leading-[110%] font-normal group-hover:text-yellow-500 max-md:text-[0.67838rem] transition'>
            Khám phá ngay
          </span>
        </Link>
      </div>
      {/* first reason */}
      <div
        className='flex border-b border-[rgba(28,32,28,0.10)] overflow-hidden'
        ref={endFirstReason}
      >
        <div className='w-[50%] relative'>
          <div className='absolute w-[9.375rem] h-[5.5625rem] bg-yellow-500 opacity-10 top-0 -right-[1rem] -z-[1]'></div>
          <div className='pl-[6.37rem] pt-[3rem] pr-[5.19rem] pb-12'>
            <h3 className='font-SVNLagu text-[3.125rem] leading-1.3 font-semibold mb-[1.5rem]'>
              An toàn và bảo mật
            </h3>
            <span className='font-Iciel text-[1.125rem] text-[rgba(28,32,28,0.70)] leading-1.5 font-normal mb-[3.75rem] block'>
              Thang máy được điều khiển bằng hệ thống lái thông minh và quá
              trình vận hành được kiểm soát theo thời gian thực bằng máy tính và
              hệ thống an toàn nhiều lớp bảo đảm an toàn tuyệt đối khi vận hành
            </span>
            <div
              className={`listSecurity  h-full overflow-hidden`}
              style={{maxHeight: maxHeight}}
            >
              {data.map((item, index) => (
                <div key={index}>
                  <span className='font-SVNLagu text-[1.75rem] border-b border-[rgba(28,32,28,0.10)] w-full block pb-[1.25rem] mb-[1.25rem]'>
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div
              className='flex items-center flex-row-reverse justify-start w-fit pt-6 cursor-pointer '
              onClick={handleLoadMore}
            >
              <Image
                src={'/images/familyElevator/detailFE/down.svg'}
                width={30}
                height={30}
                alt='down'
                className={`listSecurity w-[1.1875rem] h-[1.1875rem] ${
                  showAll ? 'transform -rotate-180' : 'transform rotate-0'
                }`}
              />
              <span className='uppercase text-[1.125rem] text-yellow-500 mr-[0.62rem] font-medium leading-1.5'>
                {showAll ? 'rút gọn' : 'xem thêm'}
              </span>
            </div>
          </div>
        </div>
        <Image
          ref={imgFirstReason}
          src={'/images/familyElevator/detailFE/5reason.png'}
          width={1000}
          height={1000}
          alt='5reasonsFamily'
          className='w-[50%] max-h-[49.25rem] '
        />
      </div>
      {/* second reason */}
      <div className='flex'>
        <div
          className='w-[50%] border-r border-[rgba(28,32,28,0.10)] relative max-h-[56.25rem] flex justify-end items-center'
          ref={slideReason}
        >
          <div className='absolute right-0 top-0 w-[9.375rem] h-[5.5625rem] bg-yellow-500 opacity-10'></div>
          <div className='absolute right-[9.375rem] top-[5.5625rem] w-[3.75rem] h-[3.4375rem] bg-yellow-500 opacity-10'></div>
          <Image
            src='/images/familyElevator/detailFE/bgslide.svg'
            width={200}
            height={200}
            className='absolute w-full h-full left-0 bottom-0 object-cover -z-10'
            alt='bg-slide'
          />
          <div className='titleSlide absolute bg-[rgba(0,0,0,0.4)] uppercase text-white  text-[1rem] font-Iciel leading-1.5 px-6 py-[0.62rem] rounded-[0.375rem] w-fit top-[2.56rem] left-[2rem] z-[999999] backdrop-blur-[12.5px]'>
            {dataThird[activeIndex].title}
          </div>
          <ButtonSlide
            className={
              'prevBtnRtwo absolute w-[3.5rem] h-[3.5rem] border-yellow-500 group-hover:border-yellow-500 max-md:w-[2.11056rem] max-md:h-[2.11056rem] transition left-[1.81rem] top-[50%] hover:bg-yellow-500  z-[999999] cursor-pointer'
            }
            classNameSvg={
              ' group-hover:text-white max-d:w-[0.75rem] max-md:h-[0.75rem] md:w-[1rem] lg:w-[1.25rem] lg:h-[1.25rem] transition text-yellow-500'
            }
          />
          <ButtonSlide
            className={
              'nextBtnRtwo absolute w-[3.5rem] h-[3.5rem] border-yellow-500 group-hover:border-yellow-500 max-md:w-[2.11056rem] max-md:h-[2.11056rem] transition top-[50%] right-[1.81rem] hover:bg-yellow-500  z-[999999] cursor-pointer'
            }
            classNameSvg={
              ' group-hover:text-white max-d:w-[0.75rem] max-md:h-[0.75rem] md:w-[1rem] lg:w-[1.25rem] lg:h-[1.25rem] transition text-yellow-500 rotate-180'
            }
          />
          <Swiper
            navigation={{
              nextEl: '.nextBtnRtwo',
              prevEl: '.prevBtnRtwo',
            }}
            effect={'fade'}
            fadeEffect={{crossFade: true}}
            slidesPerView={4}
            modules={[EffectFade, Navigation, Pagination]}
            className='mySwiperSystem'
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          >
            {dataThird.map((item, index) => (
              <SwiperSlide
                key={index}
                className='relative !flex !justify-center'
              >
                <div>
                  <Image
                    src={item.imgUrl}
                    alt='test'
                    width={1000}
                    height={1000}
                    className='w-[43.25rem] h-[33rem] object-contain '
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className='border-t w-[50%] border-[rgba(28,32,28,0.10)] mt-[7.12rem] relative'>
          <div className='absolute right-0 top-0 w-[9.375rem] h-[5.5625rem] bg-yellow-500 opacity-10'></div>
          <div className='absolute right-0 bottom-0 w-[14.125rem] h-[5.5625rem] bg-yellow-500 opacity-10'></div>
          <div className='absolute right-[9.375rem] bottom-full w-[3.75rem] h-[3.4375rem] bg-yellow-500 opacity-10'></div>
          <div className='pt-[3.12rem] pl-[3.94rem] pr-[6.37rem] pb-[7rem]'>
            <h3
              className={`font-SVNLagu text-[3.125rem] leading-1.3 font-semibold w-[31.125rem] mb-10 `}
            >
              Động cơ và hệ thống điều khiển
            </h3>
            <div
              className='secondReasons overflow-hidden'
              style={{height: maxHeightSecond}}
            >
              {dataSecond.map((item, index) => (
                <div
                  className={`itemShowmore mb-[1.25rem] border-b border-[rgba(28,32,28,0.10)] pb-5 ${
                    expandedIndex === index ? 'h-[15rem]' : 'h-[3.25rem]'
                  } overflow-hidden`}
                  key={index}
                >
                  <div
                    className='flex items-center justify-between mb-5 cursor-pointer'
                    onClick={() => toggleItem(index)}
                  >
                    <span
                      className={`text-[1.3125rem] font-SVNLagu font-medium leading-1.5 ${
                        expandedIndex === index ? 'text-yellow-500' : ''
                      }`}
                    >
                      {item.title}
                    </span>
                    <Image
                      src={
                        expandedIndex === index
                          ? '/images/familyElevator/detailFE/minus.svg'
                          : '/images/familyElevator/detailFE/plus.svg'
                      }
                      width={16}
                      height={16}
                      className='w-[1.25rem] h-[1.25rem]'
                    />
                  </div>
                  <span className='font-Iciel text-[1.125rem] font-normal leading-1.5 text-[rgba(28,32,28,0.70)]'>
                    {item.desc}
                  </span>
                </div>
              ))}
            </div>
            <div
              className='flex items-center flex-row-reverse justify-start w-fit pt-6 cursor-pointer '
              onClick={handleLoadMoreSecond}
            >
              <Image
                src={'/images/familyElevator/detailFE/down.svg'}
                width={30}
                height={30}
                alt='down'
                className={`listSecurity w-[1.1875rem] h-[1.1875rem] ${
                  showAllSecond ? 'transform -rotate-180' : 'transform rotate-0'
                }`}
              />
              <span className='uppercase text-[1.125rem] text-yellow-500 mr-[0.62rem] font-medium leading-1.5'>
                {showAllSecond ? 'rút gọn' : 'xem thêm'}
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* third reason */}
      <div>third reason</div>
      {/* fourth reason */}
      <div>fourth reason</div>
      {/* fifth reason */}
      <div>fifth reason</div>
    </section>
  )
}

export default FiveReasonsFamily
