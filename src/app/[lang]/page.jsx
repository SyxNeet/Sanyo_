import HomePage from '@/sections/home'
import getData from '@/lib/getData'
import SlideBanner from '@/sections/home/slideBanner/SlideBanner'
import CountUp from '@/sections/home/countUp/CountUp'
import OutStandingProject from '@/sections/home/outStandingProject/OutStandingProject'
import OutStandingProjectMb from '@/sections/home/outStandingProjectMb'
import News from '@/sections/home/news/News'
import {Suspense} from 'react'
import PartnerSection from '@/components/partner/PartnerSection'
import ValueDifferentAndJapanElevator from '@/sections/home/ValueDifferentAndJapanElevator'

export default async function Home({params, searchParams}) {
  const {viewport} = searchParams
  const {lang} = params
  const isMobile = viewport?.includes('mobile')
  let getDataHomeReq
  if (lang === 'vi') {
    getDataHomeReq = await getData('/pages/11')
  } else {
    getDataHomeReq = await getData('/pages/14')
  }

  const dataBanner = getDataHomeReq?.acf?.banner
  const dataCountUp = getDataHomeReq?.acf?.tinh_hoa_thang_may
  const dataValueDifferent = getDataHomeReq?.acf?.gia_tri_khac_biet
  const dataPlatForm = getDataHomeReq?.acf?.danh_sach_thang_may
  // const dataPartner = getDataHomeReq?.acf?.partner

  return (
    <main>
      <SlideBanner
        isMobile={isMobile}
        dataBanner={dataBanner}
      />
      <Suspense>
        <CountUp
          isMobile={isMobile}
          dataCountUp={dataCountUp}
          lang={lang}
        />
        <ValueDifferentAndJapanElevator
          dataValueDifferent={dataValueDifferent}
          dataPlatForm={dataPlatForm}
        />
        {!isMobile ? <OutStandingProject /> : <OutStandingProjectMb />}
        <News />
        <PartnerSection isMobile={isMobile} />
      </Suspense>
    </main>
  )
}
