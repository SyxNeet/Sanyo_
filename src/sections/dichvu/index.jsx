'use client'
import React,{useEffect} from 'react'
import Procedure from './procedure'
import HeaderDichVu from './header'
import ProcedureMb from './procedure/indexMb'
import ProductionLineSectionDV from './productLineDV'
import Certification from './Certification'
import Operate from './van-hanh-thang-may'
import SlideTeamSanyo from './doi-ngu-nhan-vien'
import ActualConstruction from '../thang-may-page-details/actualConstruction'
import AOS from 'aos'
import "aos/dist/aos.css"
export default function DichVu({isMobile ,data}) {
  console.log(data)
  const {header,slideCommit,certificate,procedure,operate_elevator,list_team,actual_construction}=data?.posts[0]

  useEffect(() => {
    AOS.init({duration:2500});
  }, [])
  return (
    <main>
      <HeaderDichVu isMobile={isMobile} data={header||{}}/>
      {isMobile ? <ProcedureMb  data={procedure||{}}/> : <Procedure data={procedure||{}}/>}
      <ProductionLineSectionDV data={slideCommit||{}} isMobile={isMobile}/>
      <Certification isMobile={isMobile} data={certificate||{}}/>
      <Operate isMobile={isMobile} data={operate_elevator||{}}/>
      <SlideTeamSanyo isMobile={isMobile} data={list_team||{}}/>
      <ActualConstruction isMobile={isMobile} data={actual_construction||{}}/>
    </main>
  )
}
