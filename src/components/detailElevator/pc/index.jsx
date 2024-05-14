'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {Swiper, SwiperSlide} from 'swiper/react'
import ButtonSLide from '@/components/buttonSlideSixReasons/ButtonSLide'


// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
// import required modules
import {Navigation} from 'swiper/modules'
import './styles.css'
const DetailElevator = ({type = false, data, title,isJapan=false}) => {
  console.log(data)
  return (
    <div
      className={`flex border-t border-b border-[rgba(28,32,28,0.10)] detailElevator ${
        type ? 'justify-between' : 'flex-row-reverse w-ful justify-end pl-[6.25rem] border-t-0'
      } `}
    >
      <div
        className={`w-[48.0625rem] pt-[2.75rem] ${
          type ? ' ml-[6.25rem]' : 'ml-0 mr-[6.44rem]'
        }`}
      >
        <h3 className='font-SVNLagu font-medium text-xl text-grey-500 uppercase tracking-widest opacity-80 mb-1'>
          {title}
        </h3>
        <span className='font-SVNLagu text-[3.125rem] font-semibold leading-1.3 text-grey-900 mb-[1rem] '>
          {data?.title}
        </span>
        <div className='font-Iciel text-[rgba(28,32,28,0.70)] text-lg font-normal leading-1.5 mb-6'>
          {data?.thong_so_thang_may?.desc}
        </div>
        <div className='mb-[2.5rem]'>
          {data?.thong_so_thang_may?.elevator_parameters[0]?.list_advantages.map(
            (item, index) => {
              return (
                <div
                  key={index}
                  className='flex border-b border-[rgba(28,32,28,0.10)] pb-[0.87rem] mb-[0.87rem] items-center'
                >
                  <div className='bg-yellow-500 rounded-[50%] text-[0.75rem] font-semibold font-SVNLagu leading-1.5 w-[1.5rem] h-[1.5rem] flex items-center justify-center text-white mr-[0.62rem]'>
                    {index + 1}
                  </div>
                  <span className='font-Iciel text-lg leading-1.5 text-[rgba(28,32,28,0.70)]'>
                    {item?.advantages}
                  </span>
                </div>
              )
            },
          )}
        </div>
        <table className='mb-[3.12rem]'>
          <tbody>
            <tr>
              <th className='labelTable'>
                <div className='nameLabelTable'>
                  <span className='font-Iciel'>Rated Load</span>
                  <span className='font-Iciel'>(kg)</span>
                </div>
              </th>
              <th className='labelTable'>
                <div className='nameLabelTable'>
                  <span className='font-Iciel'>Rated Speed</span>
                  <span className='font-Iciel'>(m/s)</span>
                </div>
              </th>
              <th className='labelTable'>
                <div className='nameLabelTable'>
                  <span className='font-Iciel'>Traction</span>
                  <span className='font-Iciel'>Ratio</span>
                </div>
              </th>
              <th className='labelTable'>
                <div className='nameLabelTable'>
                  <span className='font-Iciel'>Cabin Size</span>
                  <span className='font-Iciel'>(W*D*H)</span>
                  <span className='font-Iciel'>(mm)</span>
                </div>
              </th>
              <th className='labelTable'>
                <div className='nameLabelTable'>
                  <span className='font-Iciel'>Door Opening</span>
                  <span className='font-Iciel'>(W*H)</span>
                  <span className='font-Iciel'>(mm)</span>
                </div>
              </th>
              <th className='labelTable'>
                <div className='nameLabelTable'>
                  <span className='font-Iciel'>Shaft Size</span>
                  <span className='font-Iciel'>(W*D)</span>
                  <span className='font-Iciel'>(mm)</span>
                </div>
              </th>
              <th className='labelTable'>
                <div className='nameLabelTable'>
                  <span className='font-Iciel'>Travel Height</span>
                  <span className='font-Iciel'>(mm)</span>
                </div>
              </th>
              <th className='labelTable'>
                <div className='nameLabelTable'>
                  <span className='font-Iciel'>Pit Depth</span>
                  <span className='font-Iciel'>(mm)</span>
                </div>
              </th>
              <th className='labelTable'>
                <div className='nameLabelTable'>
                  <span className='font-Iciel'>Over Height</span>
                  <span className='font-Iciel'>(mm)</span>
                </div>
              </th>
            </tr>
            <tr>
              <td className='parameter'>
                <div className='font-Iciel flex flex-col'>
                  <span className='border-b border-black py-2'>
                    {data?.thong_so_thang_may?.rated_load}
                  </span>
                  <span className='py-2'>
                    {data?.thong_so_thang_may?.rated_load_2}
                  </span>
                </div>
              </td>
              <td className='parameter'>
                <div className='font-Iciel'>
                  {data?.thong_so_thang_may?.rated_speed}
                </div>
              </td>
              <td className='parameter'>
                <div className='font-Iciel'>
                  {data?.thong_so_thang_may?.traction_ratio}
                </div>
              </td>
              <td className='parameter'>
                <div className='font-Iciel flex flex-col'>
                  <span className='border-b border-black py-2 px-1'>
                    {data?.thong_so_thang_may?.cabin_size}
                  </span>
                  <span className='py-2'>
                    {data?.thong_so_thang_may?.cabin_size_2}
                  </span>
                </div>
              </td>
              <td className='parameter'>
                <div className='font-Iciel flex flex-col'>
                  <span className='border-b border-black py-2'>
                    {data?.thong_so_thang_may?.door_opening}
                  </span>
                  <span className='py-2'>
                    {data?.thong_so_thang_may?.door_opening_2}
                  </span>
                </div>
              </td>
              <td className='parameter'>
                <div className='font-Iciel flex flex-col'>
                  <span className='border-b border-black py-2'>
                    {data?.thong_so_thang_may?.shaft_size}
                  </span>
                  <span className='py-2'>
                    {data?.thong_so_thang_may?.shaft_size}
                  </span>
                </div>
              </td>
              <td className='parameter'>
                <div className='font-Iciel'>
                  {data?.thong_so_thang_may?.travel_heigh}
                </div>
              </td>
              <td className='parameter'>
                <div className='font-Iciel'>
                  {data?.thong_so_thang_may?.pit_depth}
                </div>
              </td>
              <td className='parameter'>
                <div className='font-Iciel'>
                  {data?.thong_so_thang_may?.over_height}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <Link
          className='linkdowloadDE flex px-[2.44rem] bg-yellow-500 items-center w-fit rounded-full mb-[3.23rem]'
          href={'/'}
        >
          <span className='font-Iciel text-[0.875rem] text-grey-900 leading-1.5 font-medium mr-[0.81rem]'>
            TẢI BẢN VẼ KĨ THUẬT
          </span>
          <div className='w-[0.875rem] h-[3.5rem] relative overflow-hidden'>
            <Image
              src='/images/familyElevator/detailFE/vector.svg'
              width={16}
              height={16}
              className='w-full h-full absolute bottom-full left-0'
              alt='down'
            />
            <Image
              src='/images/familyElevator/detailFE/vector.svg'
              width={16}
              height={16}
              alt='down'
              className='w-full h-full absolute bottom-0 left-0'
            />
          </div>
        </Link>
      </div>
      <div className='w-[0.0625rem] bg-[rgba(28,32,28,0.10)] h-[full] ml-[3rem] mr-[3.69rem]'></div>
      <div className='pt-[3.5rem] relative'>
        <Swiper
          spaceBetween={30}
          navigation={{
            nextEl: '.swiper-button-next-CTtm',
            prevEl: '.swiper-button-prev-CTtm',
          }}
          slidesPerView={1.2}
          modules={[Navigation]}
          className='mySwiperThongSoThangMay w-[32.875rem]' 
        >
          {data?.thong_so_thang_may?.image?.map((item, index) => (
            <SwiperSlide key={index}>
              <Image
                src={item?.url}
                width={1000}
                height={1000}
                alt={item?.alt}
                className='w-full h-[42.65319rem] object-contains'
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='pr-[7rem]  h-[10%] '>
            <div className='flex w-full h-[10%] justify-between absolute top-[46%] translate-x-[-1.5rem] left-0 z-50'>
              <ButtonSLide
                className={
                  ` swiper-button-prev-CTtm ${isJapan?'border-c-nht hover:bg-c-nht':'!border-yellow-500 hover:!bg-yellow-500'} transition ease-in cursor-pointer w-[3.5rem] bg-white h-[3.5rem] mr-[0.75rem] md:hover:border-white md:hover:bg-[#FE4127] max-md:bg-yellow-500 max-md:border-yellow-500 max-md:w-[2.5rem] max-md:h-[2.5rem]`
                }
                classNameSvg={
                  `w-[1rem] h-[1rem]  ${isJapan?'text-c-nht':'text-yellow-500'} md:group-hover:text-white max-md:text-black max-md:w-[0.875rem] max-md:h-[0.875rem]` 
                }
                isJapan={isJapan}
              />
              <ButtonSLide
                className={
                  ` swiper-button-next-CTtm ${isJapan?'border-c-nht hover:bg-c-nht':'!border-yellow-500 hover:!bg-yellow-500'} transition ease-in cursor-pointer w-[3.5rem] bg-white h-[3.5rem] mr-[0.75rem] md:hover:border-white md:hover:bg-[#FE4127] max-md:bg-yellow-500 max-md:border-yellow-500 max-md:w-[2.5rem] max-md:h-[2.5rem]`
                }
                classNameSvg={
                  `w-[1rem] h-[1rem] ${isJapan?'text-c-nht':'text-yellow-500'} rotate-180 md:group-hover:text-white max-md:text-black max-md:w-[0.875rem] max-md:h-[0.875rem]`
                }
              />
            </div>
          </div>
      </div>
    </div>
  )
}

export default DetailElevator
