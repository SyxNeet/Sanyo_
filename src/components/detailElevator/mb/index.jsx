'use client'
import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import './styles.css'
const DetailElevatorMb = ({data, title, index}) => {
  const [tableWidths, setTableWidths] = useState([])
  const [visibleWidths, setVisibleWidths] = useState([])
  const [progressWidths, setProgressWidths] = useState([])


  useEffect(() => {
    const tableElements = document.querySelectorAll('.tableInfoEmb table')
    const containerElements = document.querySelectorAll('.tableInfoEmb')

    if (tableElements.length > 0 && containerElements.length > 0) {
      const newTableWidths = []
      const newVisibleWidths = []

      tableElements.forEach((tableElement, index) => {
        newTableWidths[index] = tableElement.offsetWidth
        newVisibleWidths[index] = containerElements[index].offsetWidth

        const handleScroll = () => {
          const updatedVisibleWidths = [...visibleWidths]
          updatedVisibleWidths[index] =
            containerElements[index].scrollLeft +
            containerElements[index].offsetWidth
          setVisibleWidths(updatedVisibleWidths)
        }

        containerElements[index].addEventListener('scroll', handleScroll)
        return () => {
          containerElements[index].removeEventListener('scroll', handleScroll)
        }
      })

      setTableWidths(newTableWidths)
      setVisibleWidths(newVisibleWidths)
    }
  }, [])

  useEffect(() => {
    const newProgressWidths = visibleWidths.map((visibleWidth, index) => {
      return Math.min(
        Math.round((visibleWidth / tableWidths[index]) * 100),
        100,
      )
    })
    setProgressWidths(newProgressWidths)
  }, [visibleWidths, tableWidths])
  return (
    <div className='px-3'>
      <div className='boxed w-full h-[62.4375rem] bg-[linear-gradient(180deg,rgba(218,181,113,1)_26%,_rgba(171,171,171,0)_100%)] p-[1px] rounded-2xl'>
        <div className='boxed-child w-full h-full bg-[linear-gradient(0deg,_rgba(255,255,255,1)_61%,_rgba(236,225,202,1)_100%)] rounded-2xl pt-[1.5rem]'>
          <div className='flex flex-col justify-center items-center'>
            <h3 className='text-[0.625rem] uppercase font-medium tracking-[0.05rem] leading-1.5 font-SVNLagu mb-2 text-grey-500 opacity-80'>
              {title}
            </h3>
            <span className='font-SVNLagu text-[1.25rem] font-semibold leading-1.3 mb-[1.33rem]'>
              {data?.title}
            </span>
          </div>
          <Image
            src={data?.thong_so_thang_may?.image[0]?.url}
            width={500}
            height={500}
            alt={data?.image?.alt}
            className='bg-transparent w-[14.875rem] h-[23.6875rem] object-cover mx-auto'
          />
          <span className='mt-[1.44rem] text-grey-600 font-Iciel text-xs leading-1.5 font-normal px-[0.88rem] block'>
            {data?.thong_so_thang_may?.desc}
          </span>
          <div className='px-[0.88rem] mt-[0.75rem] [&>.infoBox:first-child]:border-t [&>.infoBox:first-child]:pt-[0.38rem]'>
            {data?.thong_so_thang_may?.elevator_parameters[0]?.list_advantages?.map(
              (item, index) => {
                return (
                  <div
                    key={index}
                    className='infoBox flex border-b border-[rgba(28,32,28,0.10)] pb-[0.38rem] mb-[0.38rem] items-start'
                  >
                    <div className='bg-yellow-500 rounded-[50%] text-[0.53125rem] font-semibold font-SVNLagu leading-1.5 w-[1.0625rem] h-[1.0625rem] flex items-center justify-center text-white mr-[0.27rem]'>
                      {index + 1}
                    </div>
                    <span className='font-Iciel text-[0.75rem] leading-1.5 text-[rgba(28,32,28,0.70)] block w-[90%]'>
                      {item?.advantages}
                    </span>
                  </div>
                )
              },
            )}
          </div>
          <div className='pl-[0.88rem] overflow-auto tableInfoEmb mt-[1.59rem]'>
            <table className='w-[49.25rem]'>
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
          </div>
          <div className='relative pt-[1.06rem]'>
            <div className='overflow-hidden h-1 mb-[2rem] text-xs flex bg-[#E6E9F6] rounded-full w-[6.25rem] mx-auto'>
              <div
                className={`processTable shadow-none flex flex-col text-center rounded-full whitespace-nowrap text-white justify-center bg-yellow-500 `}
                style={{width: `${progressWidths[index]}%`}}
              ></div>
            </div>
          </div>
          <Link
            className='flex px-[1.62rem] bg-yellow-500 items-center w-fit rounded-full mb-[3.23rem] justify-center mx-auto py-3'
            href={'/'}
          >
            <span className='font-Iciel text-[0.75rem] text-grey-900 leading-1.5 font-medium mr-[0.5rem]'>
              TẢI BẢN VẼ KĨ THUẬT
            </span>
            <Image
              src='/images/familyElevator/detailFE/vector.svg'
              width={16}
              height={16}
              className='w-[0.66963rem] h-[0.76525rem] object-cover'
              alt='down'
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DetailElevatorMb
