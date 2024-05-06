
import DetailElevatorMb from '@/components/detailElevator/mb'
import DetailElevator from '@/components/detailElevator/pc'
import React from 'react'

const ListElevator = ({isMobile, data}) => {
  return (
    <section className='mt-[7.13rem] max-md:mt-12'>
      {!isMobile ? (
        <>
          {data?.elevator_parameters?.map((item, index) => (
            <DetailElevator
              key={index}
              type={index % 2 === 0}
              data={item}
              title={data.title}
            />
          ))}
        </>
      ) : (
        <>
          {data?.elevator_parameters?.map((item, index) => (
            <DetailElevatorMb
              key={index}
              data={item}
              title={data.title}
            />
          ))}
        </>
      )}
    </section>
  )
}

export default ListElevator
