import getData from '@/lib/getData'
import SlideBanner from '@/sections/home/slideBanner/SlideBanner'
import CountUp from '@/sections/home/countUp/CountUp'
import OutStandingProject from '@/sections/home/outStandingProject/OutStandingProject'
import OutStandingProjectMb from '@/sections/home/outStandingProjectMb'
import News from '@/sections/home/news/News'
import {Suspense} from 'react'
import getDataSlug from '@/lib/getDataSlug'
import PartnerSection from '@/components/partner/PartnerSection'
import ValueDifferentAndJapanElevator from '@/sections/home/ValueDifferentAndJapanElevator'
import {fetchMetaData} from '@/lib/fetchMetadata'
import {getMeta} from '@/lib/getMeta'
import { Table } from 'lucide-react'

const pageId = 11
async function getBanner() {
  return getData(`/pages/${pageId}/banner`)
}
async function getTinhHoaThangMay() {
  return getData(`/pages/${pageId}/tinh_hoa_thang_may`)
}
async function getGiaTriKhacBiet() {
  return getData(`/pages/${pageId}/gia_tri_khac_biet`)
}
async function getSixReasons() {
  return getData(`/options/options/sixReasons`)
}
async function getPartner() {
  return getData(`/options/options/partner`)
}
async function getElevator() {
  return getData(`/elavator?id=${pageId}`, 'okhub')
}
async function getDataOutstandingProject() {
  return getDataSlug(`/homepage-projects`)
}
async function getDataNews() {
  return getDataSlug(`/news-on-home`)
}

export async function generateMetadata() {
  const result = await fetchMetaData('/trang-chu/')
  return getMeta(result, '', 'Trang chủ - SANYO YUSOKI')
}

export default async function Home({params, searchParams}) {
  const {viewport} = searchParams
  const isMobile = viewport?.includes('mobile')
    const [
    dataBanner,
    dataCountUp,
    dataValueDifferent,
    dataPlatFormElevator,
    dataPartner,
    dataSixReason,
    dataOutstandingProject,
    datanews,
  ] = await Promise.all([
    getBanner(pageId),
    getTinhHoaThangMay(pageId),
    getGiaTriKhacBiet(pageId),
    getElevator(),
    getPartner(),
    getSixReasons(),
    getDataOutstandingProject(),
    getDataNews(),
  ])
  return (
    <main>
      <SlideBanner
        isMobile={isMobile}
        dataBanner={dataBanner.banner}
      />
      <Suspense>
        <CountUp
          isMobile={isMobile}
          dataCountUp={dataCountUp.tinh_hoa_thang_may}
        />
        <ValueDifferentAndJapanElevator
          isMobile={isMobile}
          dataSixReason={dataSixReason}
          dataValueDifferent={dataValueDifferent.gia_tri_khac_biet}
          dataPlatFormElevator={dataPlatFormElevator}
        />
        {!isMobile ? (
          <OutStandingProject data={dataOutstandingProject} />
        ) : (
          <OutStandingProjectMb data={dataOutstandingProject} />
        )}
        <News
          isMobile={isMobile}
          data={datanews}
        />
        <PartnerSection
          isMobile={isMobile}
          data={dataPartner.partner}
        />
      </Suspense>
    </main>
  )
}
