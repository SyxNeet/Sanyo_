import React from 'react'
import HeaderProject from './header'
import ListElevatorDuAn from './danh-sach-thang-may'
import ListOtherProjects from './danh-sach-du-an-khac'
import SixReasonJE from '../JapanElevator/sixReasonJE/sixReasonJE'
import Support from '@/layout/support'

const ProjectDetails = ({
  isMobile,
  dataSixReason,
  data,
  dataForm,
  dataOtherProjeject,
  dataListElevator,
  dataTypeElevator,
}) => {
  const {header, slide_image} = data?.posts[0]

  return (
    <main className='max-md:w-screen max-md:overflow-hidden'>
      <HeaderProject
        data={header}
        slide={slide_image}
        dataTypeElevator={dataTypeElevator}
      />
      <ListElevatorDuAn
        data={dataListElevator}
        isMobile={isMobile}
      />
      <ListOtherProjects data={dataOtherProjeject} />
      <SixReasonJE
        data={dataSixReason}
        isJapan={false}
      />
      <Support data={dataForm.contactForm} />
    </main>
  )
}

export default ProjectDetails
