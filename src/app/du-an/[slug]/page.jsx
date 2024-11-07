import React from 'react'
import ProjectDetails from '@/sections/chi-tiet-du-an'
import getDataSlug from '@/lib/getDataSlug'
import getData from '@/lib/getData'
import {fetchMetaData} from '@/lib/fetchMetadata'
import {getMeta} from '@/lib/getMeta'

export async function generateStaticParams() {
  const projects = await getData('/all_projects', 'okhub')
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({params}) {
  const result = await fetchMetaData(`/du-an/${params.slug}`)
  return getMeta(
    result,
    `/du-an/${params.slug}`,
    'Chi tiết dự án - SANYO YUSOKI',
  )
}

export default async function page({searchParams, params}) {
  const {slug} = params
  const {viewport} = searchParams
  const isMobile = viewport?.includes('mobile')
  let [
    dataSixReason,
    dataDetails,
    dataForm,
    dataListElevator,
    dataOtherProjeject,
    dataTypeElevator,
  ] = await Promise.all([
    getData(`/options/options/sixReasons`),
    getDataSlug(`/du-an/${slug}`),
    getData(`/options/options/contactForm`),
    getDataSlug(`/elevator_project/${slug}`),
    getDataSlug(`/other_project/${slug}`),
    getDataSlug(`/project-categories/${slug}`),
  ])
  return (
    <ProjectDetails
      isMobile={isMobile}
      dataSixReason={dataSixReason}
      dataForm={dataForm}
      dataListElevator={dataListElevator}
      dataOtherProjeject={dataOtherProjeject}
      data={dataDetails}
      dataTypeElevator={dataTypeElevator}
    />
  )
}
