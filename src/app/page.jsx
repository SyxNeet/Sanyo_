import getData from '@/lib/getData'
import SlideBanner from '@/sections/home/slideBanner/SlideBanner'
import CountUp from '@/sections/home/countUp/CountUp'
import OutStandingProject from '@/sections/home/outStandingProject/OutStandingProject'
import OutStandingProjectMb from '@/sections/home/outStandingProjectMb'
import News from '@/sections/home/news/News'
import {Suspense} from 'react'
import PartnerSection from '@/components/partner/PartnerSection'
import ValueDifferentAndJapanElevator from '@/sections/home/ValueDifferentAndJapanElevator'

async function getBanner(pageId) {
  return getData(`/pages/${pageId}/banner`)
}
async function getTinhHoaThangMay(pageId) {
  return getData(`/pages/${pageId}/tinh_hoa_thang_may`)
}
async function getGiaTriKhacBiet(pageId) {
  return getData(`/pages/${pageId}/gia_tri_khac_biet`)
}
async function getDanhSachThangMay(pageId) {
  return getData(`/pages/${pageId}/danh_sach_thang_may`)
}
// TODO:
async function getPartnerVi() {
  return getData(`/options/options/partnerVi`)
}
const pageId = 11

export default async function Home({params, searchParams}) {
  const {viewport} = searchParams
  const isMobile = viewport?.includes('mobile')
  const [
    dataBanner,
    dataCountUp,
    dataValueDifferent,
    dataPlatForm,
    dataPartner,
  ] = await Promise.all([
    getBanner(pageId),
    getTinhHoaThangMay(pageId),
    getGiaTriKhacBiet(pageId),
    getDanhSachThangMay(pageId),
    getPartnerVi(),
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
          dataValueDifferent={dataValueDifferent.gia_tri_khac_biet}
          dataPlatForm={dataPlatForm.danh_sach_thang_may}
        />
        {!isMobile ? <OutStandingProject /> : <OutStandingProjectMb />}
        <News isMobile={isMobile} />
        <PartnerSection
          isMobile={isMobile}
          data={dataPartner.partnerVi}
        />
      </Suspense>
    </main>
  )
}
