
import DetailElevatorMb from '@/components/detailElevator/mb'
import DetailElevator from '@/components/detailElevator/pc'
import React from 'react'

const ListElevator = ({isMobile,data,dataElevator}) => {
  return (
    <section className='mt-[7.13rem] max-md:mt-12'>
      {!isMobile ? (
        <>
          {(data?.elevator_parameters||dataElevator[0]?.data.reverse()).map((item, index) => (
            <DetailElevator
              key={index}
              type={index % 2 === 0}
              data={item}
              index={index}
              title={data?.title||dataElevator[0].title}
            />
          ))}
        </>
      ) : (
        <>
          {(data?.elevator_parameters||dataElevator[0]?.data.reverse()).map((item, index) => (
            <DetailElevatorMb
              key={index}
              data={item}
              index={index}
              title={data?.title||dataElevator[0].title}
            />
          ))}
        </>
      )}
    </section>
  )
}

export default ListElevator
