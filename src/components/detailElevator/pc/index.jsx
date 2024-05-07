'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import './styles.css'
const DetailElevator = ({ type = false,data,title}) => {
  return (
    <div
      className={`flex border-t border-b border-[rgba(28,32,28,0.10)] detailElevator ${
        type ? '' : 'flex-row-reverse w-ful justify-end pl-[6.25rem] border-t-0'
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
          {data?.name}
        </span>
        <div className='font-Iciel text-[rgba(28,32,28,0.70)] text-lg font-normal leading-1.5 mb-6'>
          {data?.desc}
        </div>
        <div className='mb-[2.5rem]'>
          {data?.list_advantages?.map((item, index) => {
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
                  <span className='border-b border-black py-2'>{data?.rated_load}</span>
                  <span className='py-2'>{data?.rated_load_2}</span>
                </div>
              </td>
              <td className='parameter'>
                <div className='font-Iciel'>{data?.rated_speed}</div>
              </td>
              <td className='parameter'>
                <div className='font-Iciel'>{data?.traction_ratio}</div>
              </td>
              <td className='parameter'>
                <div className='font-Iciel flex flex-col'>
                  <span className='border-b border-black py-2 px-1'>{data?.cabin_size}</span>
                  <span className='py-2'>{data?.cabin_size_2}</span>
                </div>
              </td>
              <td className='parameter'>
                <div className='font-Iciel flex flex-col'>
                  <span className='border-b border-black py-2'>{data?.door_opening}</span>
                  <span className='py-2'>{data?.door_opening_2}</span>
                </div>
              </td>
              <td className='parameter'>
                <div className='font-Iciel flex flex-col'>
                  <span className='border-b border-black py-2'>{data?.shaft_size}</span>
                  <span className='py-2'>{data?.shaft_size}</span>
                </div>
              </td>
              <td className='parameter'>
                <div className='font-Iciel'>{data?.travel_height}</div>
              </td>
              <td className='parameter'>
                <div className='font-Iciel'>{data?.pit_depth}</div>
              </td>
              <td className='parameter'>
                <div className='font-Iciel'>{data?.over_height}</div>
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
      <div className='w-[0.0625rem] bg-[rgba(28,32,28,0.10)] h-[full] ml-[3rem] mr-[5.69rem]'></div>
      <div className='pt-[3.5rem]'>
        <Image
          src={data?.image?.url }
          width={1000}
          height={1000}
          alt={data?.image?.alt}
          className='w-[26.82738rem] h-[42.65319rem] object-cover'
        />
      </div>
    </div>
  )
}

export default DetailElevator
