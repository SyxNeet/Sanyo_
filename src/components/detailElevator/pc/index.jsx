'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {Swiper, SwiperSlide} from 'swiper/react'
import ButtonSLide from '@/components/buttonSlideSixReasons/ButtonSLide'
import {Fade} from 'react-awesome-reveal'
import 'swiper/css'
import 'swiper/css/navigation'
import {Navigation} from 'swiper/modules'
import './styles.css'

const DetailElevator = ({type = false, data, title, isJapan = false}) => {
  return (
    <div
      className={`flex border-t border-b border-[rgba(28,32,28,0.10)] detailElevator ${
        type
          ? 'justify-between'
          : 'flex-row-reverse w-full justify-end border-t-0'
      } `}
    >
      <div
        className={`w-[48.0625rem] pt-[2.75rem] ${
          type ? ' ml-[6.25rem]' : 'ml-0 mr-[6.44rem]'
        }`}
      >
        <Fade
          direction='up'
          triggerOnce={true}
        >
          <h3 className='mb-1 text-xl font-medium tracking-widest uppercase font-SVNLagu text-grey-500 opacity-80'>
            {title}
          </h3>
          <span className='font-SVNLagu text-[3.125rem] font-semibold leading-1.3 text-grey-900 mb-[1rem] '>
            {data?.title}
          </span>
          <div className='font-Iciel text-[rgba(28,32,28,0.70)] text-lg font-normal leading-1.5 mb-6'>
            {data?.thong_so_thang_may?.desc || data?.thong_so?.desc}
          </div>

          <div className='mb-[2.5rem]'>
            {(
              data?.thong_so_thang_may?.list_advantages ||
              data?.thong_so?.list_advantages ||
              []
            ).map((item, index) => {
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
            })}
          </div>
        </Fade>
        <Fade
          direction='up'
          fraction={0}
          triggerOnce={true}
        >
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
                  <div className='flex flex-col font-Iciel'>
                    <span className='py-2 border-b border-black'>
                      {data?.thong_so_thang_may?.rated_load ||
                        data?.thong_so?.rated_load}
                    </span>
                    <span className='py-2'>
                      {data?.thong_so_thang_may?.rated_load_2 ||
                        data?.thong_so?.rated_load_2}
                    </span>
                  </div>
                </td>
                <td className='parameter'>
                  <div className='font-Iciel'>
                    {data?.thong_so_thang_may?.rated_speed ||
                      data?.thong_so?.rated_speed}
                  </div>
                </td>
                <td className='parameter'>
                  <div className='font-Iciel'>
                    {data?.thong_so_thang_may?.traction_ratio ||
                      data?.thong_so?.traction_ratio}
                  </div>
                </td>
                <td className='parameter'>
                  <div className='flex flex-col font-Iciel'>
                    <span className='px-1 py-2 border-b border-black'>
                      {data?.thong_so_thang_may?.cabin_size ||
                        data?.thong_so?.cabin_size}
                    </span>
                    <span className='py-2'>
                      {data?.thong_so_thang_may?.cabin_size_2 ||
                        data?.thong_so?.cabin_size_2}
                    </span>
                  </div>
                </td>
                <td className='parameter'>
                  <div className='flex flex-col font-Iciel'>
                    <span className='py-2 border-b border-black'>
                      {data?.thong_so_thang_may?.door_opening ||
                        data?.thong_so?.door_opening}
                    </span>
                    <span className='py-2'>
                      {data?.thong_so_thang_may?.door_opening_2 ||
                        data?.thong_so?.door_opening_2}
                    </span>
                  </div>
                </td>
                <td className='parameter'>
                  <div className='flex flex-col font-Iciel'>
                    <span className='py-2 border-b border-black'>
                      {data?.thong_so_thang_may?.shaft_size ||
                        data?.thong_so?.shaft_size}
                    </span>
                    <span className='py-2'>
                      {data?.thong_so_thang_may?.shaft_size ||
                        data?.thong_so?.shaft_size_2}
                    </span>
                  </div>
                </td>
                <td className='parameter'>
                  <div className='font-Iciel'>
                    {data?.thong_so_thang_may?.travel_heigh ||
                      data?.thong_so?.travel_heigh}
                  </div>
                </td>
                <td className='parameter'>
                  <div className='font-Iciel'>
                    {data?.thong_so_thang_may?.pit_depth ||
                      data?.thong_so?.pit_depth}
                  </div>
                </td>
                <td className='parameter'>
                  <div className='font-Iciel'>
                    {data?.thong_so_thang_may?.over_height ||
                      data?.thong_so?.over_height}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </Fade>
        <Fade
          direction='up'
          fraction={0}
          triggerOnce={true}
        >
          <Link
            className='linkdowloadDE flex px-[2.44rem] bg-yellow-500 items-center w-fit rounded-full mb-[3.23rem]'
            href={`${data?.thong_so?.link}`}
            target='_blank'
          >
            <span className='font-Iciel text-[0.875rem] text-grey-900 leading-1.5 font-medium mr-[0.81rem]'>
              TẢI BẢN VẼ KĨ THUẬT
            </span>
            <div className='w-[0.875rem] h-[3.5rem] relative overflow-hidden'>
              <Image
                src='/images/familyElevator/detailFE/vector.svg'
                width={16}
                height={16}
                className='absolute left-0 w-full h-full bottom-full'
                alt='tải xuống bản vẽ kĩ thuật'
              />
              <Image
                src='/images/familyElevator/detailFE/vector.svg'
                width={16}
                height={16}
                alt='tải xuống bản vẽ kĩ thuật'
                className='absolute bottom-0 left-0 w-full h-full'
              />
            </div>
          </Link>
        </Fade>
      </div>

      <div
        className={`w-[0.0625rem] bg-[rgba(28,32,28,0.10)] h-[full] ${
          !type ? 'mr-[5.81rem] ml-[6.25rem]' : 'mr-[5.69rem] ml-[2.69rem] '
        }`}
      ></div>

      <Fade
        triggerOnce={true}
        direction='up'
        fraction={0}
      >
        <div
          className={`pt-[3.5rem] ${
            data?.thong_so?.image.length > 1 ||
            data?.thong_so_thang_may?.image?.length > 1
              ? type
                ? 'pr-0'
                : 'pl-0'
              : type
              ? 'pr-[7rem]'
              : 'pl-[7rem]'
          } relative`}
        >
          {data?.thong_so?.image.length < 2 ||
          data?.thong_so_thang_may?.image.lengt <= 2 ? (
            <>
              {' '}
              <Image
                src={
                  data?.thong_so?.image[0]?.url ||
                  data?.thong_so_thang_may[0]?.image?.url
                }
                width={1000}
                height={1000}
                alt={
                  data?.thong_so?.image[0]?.alt ||
                  data?.thong_so_thang_may?.image[0]?.alt
                }
                className='w-full h-[42.65319rem] object-contains'
              />
            </>
          ) : (
            <Swiper
              dir={!type ? 'rtl' : undefined}
              spaceBetween={30}
              speed={400}
              navigation={{
                nextEl: type
                  ? `.swiper-button-next-CTtm${data.id}`
                  : `.swiper-button-prev-CTtm${data.id}`,
                prevEl: type
                  ? `.swiper-button-prev-CTtm${data.id}`
                  : `.swiper-button-next-CTtm${data.id}`,
              }}
              slidesPerView={1.3}
              modules={[Navigation]}
              className={`mySwiperThongSoThangMay ${
                !type ? 'w-[32.875rem]' : 'w-[37.875rem]'
              }`}
            >
              {(data?.thong_so_thang_may?.image || data?.thong_so?.image).map(
                (item, index) => (
                  <SwiperSlide key={index}>
                    <Image
                      src={item?.url}
                      width={1000}
                      height={1000}
                      alt={item?.alt}
                      className='w-full h-[42.65319rem] object-contains'
                    />
                  </SwiperSlide>
                ),
              )}
            </Swiper>
          )}
          {(data?.thong_so?.image.length > 1 ||
            data?.thong_so_thang_may?.image?.length > 1) && (
            <div className='pr-[7rem] h-[10%] '>
              <div
                className={`flex w-[90%] h-[10%] justify-between absolute top-[46%]  left-0 z-50 [&>.swiper-button-lock]:!flex ${
                  !type ? 'translate-x-[5.5rem]' : 'translate-x-[-1.5rem]'
                }`}
              >
                <ButtonSLide
                  className={` ${`swiper-button-prev-CTtm${data.id}`} ${
                    isJapan
                      ? 'border-c-nht hover:bg-c-nht'
                      : '!border-yellow-500 hover:!bg-yellow-500'
                  } transition ease-in cursor-pointer w-[3.5rem] bg-white h-[3.5rem] mr-[0.75rem] md:hover:border-white md:hover:bg-[#FE4127] max-md:bg-yellow-500 max-md:border-yellow-500 max-md:w-[2.5rem] max-md:h-[2.5rem]`}
                  classNameSvg={`w-[1rem] h-[1rem]  ${
                    isJapan ? 'text-c-nht' : 'text-yellow-500'
                  } md:group-hover:text-white max-md:text-black max-md:w-[0.875rem] max-md:h-[0.875rem]`}
                  isJapan={isJapan}
                />
                <ButtonSLide
                  className={`  ${`swiper-button-next-CTtm${data.id}`} ${
                    isJapan
                      ? 'border-c-nht hover:bg-c-nht'
                      : '!border-yellow-500 hover:!bg-yellow-500'
                  } transition ease-in cursor-pointer w-[3.5rem] bg-white h-[3.5rem] mr-[0.75rem] md:hover:border-white md:hover:bg-[#FE4127] max-md:bg-yellow-500 max-md:border-yellow-500 max-md:w-[2.5rem] max-md:h-[2.5rem]`}
                  classNameSvg={`w-[1rem] h-[1rem] ${
                    isJapan ? 'text-c-nht' : 'text-yellow-500'
                  } rotate-180 md:group-hover:text-white max-md:text-black max-md:w-[0.875rem] max-md:h-[0.875rem]`}
                />
              </div>
            </div>
          )}
        </div>
      </Fade>
    </div>
  )
}

export default DetailElevator
