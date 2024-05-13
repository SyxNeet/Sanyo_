import React from 'react'
import Procedure from './procedure'
import HeaderDichVu from './header'
import ProcedureMb from './procedure/indexMb'
import ProductionLineSectionDV from './productLineDV'
import Certification from './Certification'
import Operate from './van-hanh-thang-may'
import SlideTeamSanyo from './doi-ngu-nhan-vien'
import ActualConstruction from '../thang-may-page-details/actualConstruction'
export default function DichVu({isMobile ,data}) {

  const {header,slideCommit,certificate,procedure,operate_elevator,list_team,actual_construction}=data?.posts[0]
  return (
    <main className='pt-9'>
      <HeaderDichVu isMobile={isMobile} data={header}/>
      {isMobile ? <ProcedureMb  data={procedure}/> : <Procedure data={procedure}/>}
      <ProductionLineSectionDV data={slideCommit} isMobile={isMobile}/>
      <Certification isMobile={isMobile} data={certificate}/>
      <Operate isMobile={isMobile} data={operate_elevator}/>
      <SlideTeamSanyo isMobile={isMobile} data={list_team}/>
      <ActualConstruction isMobile={isMobile} data={actual_construction}/>
    </main>
  )
}
