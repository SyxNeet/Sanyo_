import DetailElevatorMb from '@/components/detailElevator/mb'
import DetailElevator from '@/components/detailElevator/pc'
import React from 'react'

const ListElevator = (isMobile) => {
  return (
    <section className='mt-[7.13rem] max-md:mt-12'>
      
      {isMobile ? (
        <>
          <DetailElevator type={true} />
          <DetailElevator type={false} />
        </>
      ) : (
        <>
          <DetailElevatorMb />
          <DetailElevatorMb />
        </>
      )}
    </section>
  )
}

export default ListElevator
