'use client'
import React, {useRef} from 'react'
import Link from 'next/link'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation, Pagination} from 'swiper/modules'
import Image from 'next/image'
import logoImgJE from '../../../public/images/japanElevator/logo.png'
import logoImgTextJE from '../../../public/images/japanElevator/logotext.png'
import sunImg from '../../../public/images/japanElevator/sun.png'
import {exampleSLideJpElevator,outStandingProject} from '../../../data/japanElevator'
import imgHoaSen from '../../../public/images/japanElevator/hoasen.png'
import imgDownArrow from '../../../public/images/japanElevator/down.png'
import imgItem1 from '../../../public/images/japanElevator/item1.png'
import imgItem2 from '../../../public/images/japanElevator/item2.png'
import dauphayImg from '../../../public/images/japanElevator/dauphayje.png'
import bgImgSixReasons from '../../../public/images/japanElevator/bg6reasons.png'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import './styles.css'
import ButtonSlide from '@/components/buttonSlideSixReasons/ButtonSLide'
import SlideOnlyImages from '@/components/slideOnlyImages'
import PlatFormElevator from '@/components/platForm'
import Slider from '@/components/platForm/slider/Slider'
import {Button} from '@/components/ui/button'
import SixReasons from '@/components/sixReasons'
import ItemOutStandingProject from '@/components/itemOutstandingProject'
import Support from '@/layout/support'

const JapanElevator = ({isMobile}) => {
  const firstRef = useRef(null)
  const outStandingProjectRef = useRef(null)
  const outStandingProjectEndRef = useRef(null)
  useGSAP(() => {
    gsap.to(firstRef.current, {
      scrollTrigger: {
        trigger: firstRef.current,
        pin: true,
        start: isMobile ? 'top top' : 'center top',
        end: 'bottom top',
        pinSpacing: false,
      },
    })
    !isMobile&& gsap.to(outStandingProjectRef.current, {
        scrollTrigger: {
          trigger: outStandingProjectRef.current,
          pin: true,
          start:'top-=150 top',
          endTrigger: outStandingProjectEndRef.current,
          end: 'bottom center+=20%',
          pinSpacing: false,
        },
      })
    
  }, [])
  
  return (
    <div className='overflow-hidden'>
      <section
        className='pt-4'
        id='sectionSunRise'
      >
        <div className='pl-[6.25rem] max-md:pl-3'>
          <Link
            href='/'
            className='text-[#33383E] opacity-50 font-Iciel font-medium text-sm leading-1.5 mr-[0.44rem] uppercase max-md:text-[0.625rem]'
          >
            Trang chủ /
          </Link>
          <Link
            href='/'
            className='text-[#33383E]  font-Iciel font-medium text-sm leading-1.5 mr-[0.44rem] uppercase max-md:text-[0.625rem]'
          >
            thang máy nhật bản
          </Link>
        </div>
        <div className='relative pt-[7.5rem] pb-[5rem] overflow-hidden max-md:pt-[3.96rem] max-md:pb-[1.55rem]'>
          <Image
            src={sunImg}
            alt='Sun image'
            className='absolute lg:top-[65%] md:top-[100%] left-[2%] w-[29.875rem] h-[29.875rem] max-md:left-[-11%] max-md:w-[10.50131rem] max-md:h-[10.50131rem]'
            id='sunRiseImg'
          />
          <Image
            src={imgHoaSen}
            alt='Hoa Sen'
            className='absolute right-[-7%] bottom-[-22%] md:hidden'
            id='hoaSenImg'
          />
          <div className='relative flex flex-col w-fit pl-[10.25rem] items-end max-md:pl-3 max-md:items-start'>
            <Image
              src={logoImgJE}
              alt='logo Sanyo'
              className='absolute w-[5.5rem] h-[5.5rem] left-full bottom-[70%] max-md:hidden'
            />
            <h1 className=' text-[5.71719rem] font-SVNLagu font-semibold leading-[130%] max-md:text-[1.875rem] max-md:mb-3'>
              Thang máy Nhật Bản
            </h1>
            <p className='text-right w-[37.625rem] text-[1rem] text-[#6D7279] font-normal leading-1.5 max-md:text-[0.875rem] max-md:text-left max-md:w-[20.4375rem]'>
              {isMobile
                ? 'SANYO YUSOKI đã và đang tiếp tục cống hiến và liên tục đổi mới để góp phần vào sự phát triển của ngành thang máy. Chúng tôi tin rằng với một nền móng vững chắc sẽ cho ra đời những sản phẩm thang máy chất lượng nhất'
                : 'SANYO YUSOKI đã và đang tiếp tục cống hiến và liên tục đổi mới để góp phần vào sự phát triển của ngành thang máy.'}
            </p>
          </div>
        </div>
      </section>
      <div
        className='max-md:flex max-md:flex-col w-full'
        ref={firstRef}
      >
        <div className='max-md:flex order-3 px-3 max-md:pt[1.38rem] w-full items-center justify-between max-md:pt-[1.38rem] '>
          <div className='flex justify-between'>
            <ButtonSlide
              className={
                ' swiper-button-prev-thumbJE border-[#fff] transition ease-in cursor-pointer w-[3.20513rem] h-[3.20513rem] mr-[0.75rem] bg-white md:hover:border-[white] md:hover:bg-[#FE4127] max-md:bg-white max-md:border-[#FE4127] max-md:w-[2.5rem] max-md:h-[2.5rem] absolute z-20  top-[54%] left-[9%] max-md:relative max-md:left-[unset] max-md:top-[unset] '
              }
              classNameSvg={
                'w-[1rem] h-[1rem] text-[#FE4127] md:group-hover:text-white max-md:text-[#FE4127] max-md:w-[0.875rem] max-md:h-[0.875rem]'
              }
            />
            <ButtonSlide
              className={
                ' swiper-button-next-thumbJE border-[#fff] transition ease-in cursor-pointer w-[3.20513rem] h-[3.20513rem] mr-[0.75rem] bg-white md:hover:border-white md:hover:bg-[#FE4127] max-md:bg-white max-md:border-[#FE4127] max-md:w-[2.5rem] max-md:h-[2.5rem] absolute z-20  top-[54%] right-[9%] max-md:relative max-md:right-[unset] max-md:top-[unset] '
              }
              classNameSvg={
                'w-[1rem] h-[1rem] text-[#FE4127] md:group-hover:text-white max-md:text-[#FE4127] max-md:w-[0.875rem] max-md:h-[0.875rem] rotate-180'
              }
            />
          </div>
          <div className='relative w-[6.25rem]'>
            <div className='processSlideJE rounded-full'></div>
          </div>
        </div>
        <Swiper
          navigation={{
            nextEl: '.swiper-button-next-thumbJE',
            prevEl: '.swiper-button-prev-thumbJE',
          }}
          pagination={{
            type: 'progressbar',
            el: '.processSlideJE',
          }}
          breakpoints={{
            0: {
              slidesPerView: 1.2,
              spaceBetween: 12,
            },
            768: {
              slidesPerView: 1.3,
              spaceBetween: 30,
            },
          }}
          modules={[Pagination, Navigation]}
          className='mySwiperOnlyImages w-screen order-1'
        >
          {exampleSLideJpElevator.map((img, index) => (
            <SwiperSlide
              key={index}
              className='!h-[42.92581rem] max-md:!h-[13.76756rem] '
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={1500}
                height={1500}
                className='object-cover h-full rounded-[0.5rem] w-full'
              />
              <span className='absolute z-10 bottom-[9%] left-[3.43rem] max-md:left-4 max-md:bottom-[7%] rounded-[0.34344rem] border-[0.458px] border-[#fff] bg-[rgba(0,0,0,0.40)] px-[1.37rem] py-[0.57rem] backdrop-blur-[11.44688606262207px] text-[0.91575rem] font-Iciel font-medium leading-1.5 uppercase text-white'>
                {img.title}
              </span>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <section className='mt-[2.25rem] relative z-10 box-container-border bg-white productLineJE max-md:mt-[1.25rem]'>
        <div className='w-[114.75rem] h-[114.75rem] absolute z-10 top-0 left-[60%] max-md:left-[62%] max-md:w-[29.125rem] max-md:h-[29.125rem] rounded-[50%] opacity-50 bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(254,_65,_39,_0.60)_0%,_rgba(254,_65,_39,_0.00)_100%)]'></div>
        <div className='pt-[9rem] pl-[6.25rem] flex max-md:px-4 max-md:pt-[2rem]'>
          <div className='border-r-[1px] border-[rgba(28,32,28,0.10)] pb-[5.38rem] pr-[6.63rem] max-md:border-none max-md:px-0 max-md:pb-5'>
            <h2 className='w-[50.0625rem] font-SVNLagu text-[3.125rem] font-semibold leading-1.3 mb-[2.06rem] max-md:hidden'>
              Dây chuyền sản xuất với <br /> CÔNG NGHỆ NHẬT BẢN hiện đại
            </h2>
            <h2 className='md:hidden w-full font-SVNLagu text-[1.5rem] font-bold leading-1.3 mb-2'>
              Dây chuyền sản xuất với CÔNG NGHỆ NHẬT BẢN
            </h2>
            <span className='w-[47.875rem] block font-Iciel text-[1.125rem] font-normal leading-1.7 uppercase max-md:capitalize max-md:w-full text-[#6D7279] max-md:text-sm'>
              CHÚNG TÔI SẢN XUẤT 20.000 THANG MÁY & THANG HÀNG NĂM VỚI CÔNG NGHỆ
              XỬ LÝ THÉP NHẬT BẢN VÀ DÂY CHUYỀN XỬ LÝ TỰ ĐỘNG PSBB CỦA PHẦN LAN
            </span>
          </div>
          <Link
            href={'/'}
            className='dowloadfileJE w-[10.6875rem] h-[10.6875rem] rounded-[50%] ml-[14rem] bg-[#FE4127] flex items-center justify-center flex-col relative mt-[1%] max-md:hidden z-10'
          >
            <span className='font-Iciel text-[1.22144rem] w-[5.875rem] text-center font-normal leading-1.2 mb-1 text-white'>
              Tải xuống profile
            </span>
            <div className='w-[2rem] h-[1.9085rem] overflow-hidden relative'>
              <Image
                src={imgDownArrow}
                alt='download'
                className='downArrowTop absolute left-0 bottom-full'
              />
              <Image
                src={imgDownArrow}
                alt='download'
                className='downArrowBottom absolute left-0 bottom-[5%]'
              />
              <div className='absolute w-[68%] left-[17%] bottom-0 h-[2px] rounded-full bg-white'></div>
            </div>
          </Link>
        </div>
        <SlideOnlyImages className='!h-[41.5625rem]' />
      </section>
      <section className='relative z-10 pt-[10.18rem] max-md:pt-[4.07rem]'>
        <div className='w-[112.25rem] h-[112.25rem] absolute rounded-[50%] top-0 right-[84%] opacity-50 bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(254,65,39,0.60)_0%,_rgba(254,65,39,0.00)_100%)]'></div>
        <div className='w-[12.375rem] h-[5.375rem] max-md:w-[4.375rem] max-md:h-[1.875rem] absolute right-0 top-0 bg-c-nht opacity-10'></div>
        <div className='w-[3.5625rem] h-[3.5625rem] max-md:w-[1.3125rem] max-md:h-[1.1875rem] max-md:top-[1.875rem] max-md:right-[4.375rem] bg-c-nht opacity-10 absolute right-[12.375rem] top-[5.375rem]'></div>
        <div className='relative w-[55.9375rem] ml-[7.69rem] max-md:ml-[0.75rem] max-md:w-[20.9375rem]'>
          <Image
            src={logoImgJE}
            alt='logo Sanyo'
            className='h-[5.375rem] w-[5.375rem] absolute left-[102%] bottom-[80%] max-md:hidden'
          />
          <Image
            src={logoImgTextJE}
            alt='logoText'
            className='w-full h-[7.37475rem] mb-[1.76rem] max-md:h-[2.76038rem] max-md:mb-[0.44rem]'
          />
          <span className='block font-SVNLagu text-[3rem] text-grey-700 font-semibold leading-1.2 max-md:text-[1.12288rem] '>
            sự lựa chọn hoàn hảo dành cho bạn
          </span>
        </div>
        <div className='w-full h-[3.5rem] relative mb-[3.63rem] max-md:h-[2.11056rem] max-md:mb-[1.71rem] max-md:ml-3 max-md:mt-[1.1rem]'>
          <Link
            href={'/'}
            className=' w-fit absolute flex items-center group right-[6.25rem] bottom-[50%] max-md:bottom-0 max-md:left-0'
          >
            <ButtonSlide
              className={
                'w-[3.5rem] h-[3.5rem] border-[#282B30] group-hover:border-[#FE4127] max-md:w-[2.11056rem] max-md:h-[2.11056rem]'
              }
              classNameSvg={
                'svgDance group-hover:text-[#FE4127] max-d:w-[0.75rem] max-md:h-[0.75rem]'
              }
            />
            <span className='ml-4 max-md:ml-3 text-[1.125rem] font-Iciel leading-[110%] font-normal group-hover:text-c-nht max-md:text-[0.67838rem]'>
              Khám phá ngay
            </span>
          </Link>
        </div>
        <div className='flex h-[35.9375rem] w-full max-md:flex-col max-md:h-fit'>
          <Image
            src={imgItem1}
            alt='item1'
            className='w-[51%] h-full object-cover max-md:w-full max-md:h-[15.625rem]'
          />
          <div className='relative w-[49%] pt-[13.94rem] pl-[4rem] pr-[3.44rem] pb-[7.94rem]  max-md:pt-[0] max-md:pb-2 max-md:pl-[4.56rem] max-md:pr-[1.31rem] max-md:w-full max-md:translate-y-[-2rem]'>
            <div className='md:hidden bg-[linear-gradient(0deg,_rgba(255,255,255,1)_24%,_rgba(255,255,255,0)_100%)] w-full absolute bottom-[66%] left-0 h-[6rem] '></div>
            <div className='absolute left-0 top-0 w-[6.0625rem] h-[5.75rem] max-md:top:[0] bg-c-nht opacity-10 max-md:w-[2.375rem] max-md:h-[2.5rem]'></div>
            <div className='absolute left-[6.0625rem] top-[5.75rem] w-[3.5625rem] h-[3.5625rem] bg-c-nht opacity-10 max-md:w-[1.25rem] max-md:h-[1.0625rem] max-md:top-[2.5rem] max-md:left-[2.375rem]'></div>
            <div className='h-full w-full relative'>
              <Image
                src={dauphayImg}
                alt='dau phay'
                className='absolute left-0 top-[5%] w-[1.375rem] h-[1.375rem] max-md:w-[0.92688rem] max-md:h-[0.92688rem] max-md:top-[3%]'
              />
              <Image
                src={dauphayImg}
                alt='dau phay'
                className='w-[1.375rem] h-[1.375rem] absolute bottom-[5%] left-[37%] dauphay2 max-md:w-[0.92688rem] max-md:h-[0.92688rem] max-md:left-[68%]'
              />
              <p className='font-SVNLagu text-gray-900 font-semibold leading-1.4 text-[2rem] max-md:text-[1.125rem]'>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Thang máy
                gia đình không chỉ là phương tiện di chuyển, mà còn là cầu nối
                giữa các khoảnh khắc yêu thương, làm tình cảm gia đình trở nên
                gần gũi và ấm áp hơn bao giờ hết.
              </p>
            </div>
          </div>
        </div>
        <div className='h-[27.25rem] flex w-full max-md:flex-col-reverse max-md:w-full max-md:h-fit relative'>
          <div className='md:hidden w-[2.1875rem] h-[2.1875rem] bg-c-nht opacity-10 absolute bottom-full right-0'></div>
          <div className='w-[51%] relative max-md:w-full'>
            <div className='absolute top-0 right-0 w-[3.5625rem] h-[3.5625rem] bg-c-nht opacity-10 max-md:top-[unset] max-md:bottom-0 max-md:w-[2.1875rem] max-md:h-[2.125rem]'></div>
            <div className='md:hidden w-[0.875rem] h-[0.6875rem] bg-c-nht opacity-10 absolute bottom-[2.125rem] right-[2.1875rem]'></div>
            <div className='w-full pt-[7.13rem] pl-[6.19rem] pr-[7.62rem] pb-[8.31rem] max-md:pt-[2.63rem] max-md:px-3 max-md:pb-[3.38rem]'>
              <h2 className='text-c-nht font-SVNLagu text-xl font-medium tracking-[0.1rem] uppercase leading-1.5 mb-6 max-md:mb-3'>
                chăm sóc <br className='md:hidden' /> những người yêu thương
              </h2>
              <p className='font-Iciel font-normal text-lg leading-1.5 text-[rgba(28,32,28,0.70)] max-md:text-[0.875rem]'>
                Rất nhiều các căn hộ thông tầng hay Duplex hay các Vilas biệt
                thự được hưởng lợi ích từ việc lắp thang máy. Thang máy giúp
                việc đi lại giữa các tầng hay các toà nhà thuận tiện hơn, điều
                này đặc biệt có ý nghĩa khi chủ nhà có người già hay trẻ em, đi
                thang máy sẽ an toàn hơn hạn chế việc ngã hay trượt chân như khi
                đi thang bộ.
              </p>
            </div>
          </div>
          <Image
            src={imgItem2}
            alt='item2'
            className='w-[49%] object-cover h-full max-md:w-full'
          />
        </div>
      </section>
      <section className='relative pt-[7.5rem] max-md:pt-[2.37rem]'>
        <div className='absolute w-[6.0625rem] h-[5.75rem] top-0 left-0 bg-c-nht opacity-10 max-md:hidden'></div>
        <div className='w-[112.25rem] h-[112.25rem] rounded-[50%] opacity-50 bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(254,65,39,0.60)_0%,_rgba(254,65,39,0.00)_100%)] absolute right-[80%] top-[-25%] -z-10'></div>
        <div className='w-[112.25rem] h-[112.25rem] rounded-[50%] opacity-50 bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(254,65,39,0.60)_0%,_rgba(254,65,39,0.00)_100%)] absolute left-[80%] top-[-25%] -z-10 max-md:w-[29.125rem] max-md:h-[29.125rem] max-md:top-[-30%] max-md:left-[57%]'></div>
        <div className='pl-[6.31rem] flex items-end justify-between pr-[3.56rem] max-md:px-3'>
          <div className='w-[55.625rem]'>
            <h2 className='text-[3.125rem] font-SVNLagu font-semibold leading-1.3 text-grey-900 mb-4 max-md:text-2xl max-md:leading-1.3  max-md:mb-[0.62rem]' >
              Thang máy Nhật Bản SANYO YUSOKI
            </h2>
            <span className='text-[1.125rem] font-Iciel leading-1.7 font-normal uppercase text-[#42484F] max-md:text-[0.875rem]'>
              Chúng tôi tin rằng với một nền móng vững chắc sẽ cho ra đời những
              sản phẩm thang máy chất lượng nhất. SANYO YUSOKI vẫn liên tục đầu
              tư cho Nghiên cứu Phát triển (R&D) tất cả các dòng thang máy
            </span>
          </div>
          <Button
            isRed={true}
            text={'XEM TẤT CẢ'}
            isHover={true}
            isBlack={true}
            classHover={'group-hover'}
            classtext={'group-hover:text-white'}
            className='max-md:hidden'
          />
        </div>

        <Slider />
      </section>
      <div className='relative sixReasonsJE'>
        <div className='absolute bottom-0 left-0 bg-[linear-gradient(0deg,rgba(255,255,255,1)_3%,_rgba(255,255,255,0)_100%)] w-full h-[30%] -z-[1]'>
        </div>
        <Image
          src={bgImgSixReasons}
          alt='bg-6reason'
          className='w-full h-full -z-10 absolute object-cover'
        />
        <SixReasons />
      </div>
      <section className='pt-[8.69rem] pl-[5.38rem] pr-[3.5rem] flex w-full max-md:flex-col max-md:px-0 max-md:pt-12'>
        <div className='w-[25%] flex flex-col h-fit mr-[2%]' ref={outStandingProjectRef} >
          {
            isMobile ? (<div>
              <h2 className='text-[1.5rem font-SVNLagu font-semibold leading-1.3 px-3]'>Dự án NỔI BẬT</h2>
            </div>):(<div>
              <h2 className='text-[3rem] font-SVNLagu font-semibold leading-1.2 mb-[1.2rem]'>Dự án NỔI BẬT của chúng tôi</h2>
          <span className='font-Iciel text-base font-normal leading-1.5 mb-[2.24rem]'>
            Thang máy Sanyo vẫn liên tục đầu tư cho Nghiên cứu Phát triển (R&D)
            tất cả các dòng thang máy để phù hợp với thị hiếu người tiêu dùng và
            đảm bảo an toàn và chất lượng vận hành cao nhất xứng đáng với niềm
            tin và sự ghi nhận của người tiêu dùng cũng như đóng góp vào sự phát
            triển của ngành thang máy trên toàn thế giới
          </span>
            </div>)
          }
          <Button
            className='w-fit max-md:hidden'
            isRed={true}
            text={'XEM TẤT CẢ'}
            isHover={true}
            isBlack={true}
            classHover={'group-hover'}
            classtext={'group-hover:text-white'}
          />
        </div>
        {isMobile ? (
            <div>PC</div>
          ) : (
            <div  className='flex flex-wrap w-[73%]'
            ref={outStandingProjectEndRef}>
              {outStandingProject.map((item, index) => (
                <ItemOutStandingProject
                  key={index}
                  width='32.1875rem'
                  height='25.5rem'
                  imgFlagUrl={item.imgFlagUrl}
                  className={`rounded-[0.75rem] w-[32.1875rem] h-[25.5rem] ${
                    (index + 1) % 2 === 0 ? 'lg:ml-4 mb-4 md:ml-2 ' : ''
                  }`}
                  altImageFlag={item.altFlag}
                  nameProject={item.nameProject}
                  imgProjectUrl={item.imgProjectUrl}
                  altImageProject={item.alt}
                  link={item.link}
                />
              ))}
            </div>
          )}
      </section>
    </div>
  )
}

export default JapanElevator
