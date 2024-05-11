import React from 'react'
import HeaderProject from './header'
import ListElevatorDuAn from './danh-sach-thang-may'
import ListOtherProjects from './danh-sach-du-an-khac'
import SixReasonJE from '../JapanElevator/sixReasonJE/sixReasonJE'
import Support from '@/layout/support'

const ProjectDetails = ({dataSixReason,data,dataForm}) => {
  const {header,list_elevator_in_project}=data?.posts[0]
  return (
    <main className='max-md:w-screen max-md:overflow-hidden'>
        <HeaderProject data={header}/>
        <ListElevatorDuAn data={list_elevator_in_project}/>
        <ListOtherProjects/>
        <SixReasonJE data={dataSixReason} isJapan={false}/>
        <Support data={dataForm.contactForm}/>
    </main>
  )
}

export default ProjectDetails