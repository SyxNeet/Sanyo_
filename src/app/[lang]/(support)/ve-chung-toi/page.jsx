import getData from '@/lib/getData'
import './styles.css'
import SlideOnlyImagesDownload from '@/components/slideOnlyImagesWithDowload'
import BreadcrumbContainer from '@/components/breadcrumb/BreadcrumbContainer'
import BreadcrumbLink from '@/components/breadcrumb/BreadcrumbLink'
import LeaderShipMessageAndCoreValues from '@/sections/about-us/LeaderShipMessageAndCoreValues'
import Achieved from '@/sections/about-us/Achieved'
import ProductionLineSection from '@/sections/about-us/ProductionLineSection'
import PartnerSection from '@/components/partner/PartnerSection'

async function getLeadershipMessage(pageId) {
  return getData(`/pages/${pageId}/leadershipMessage`)
}
async function getGreatExperience(pageId) {
  return getData(`/pages/${pageId}/greatExperience`)
}
async function getCoreValues(pageId) {
  return getData(`/pages/${pageId}/coreValues`)
}
async function getAchieved(pageId) {
  return getData(`/pages/${pageId}/achieved`)
}
async function getService(pageId) {
  return getData(`/pages/${pageId}/service`)
}
async function getPartnerEn(pageId) {
  return getData(`/options/options/partnerEn`)
}
async function getPartnerVi(pageId) {
  return getData(`/options/options/partnerVi`)
}
let pageId

export default async function AboutUsPage({searchParams, params}) {
  const {viewport} = searchParams
  const isMobile = viewport.includes('mobile')
  const {lang} = params
  if (lang === 'vi') {
    pageId = 188
  } else {
    pageId = 193
  }
  const [
    dataGreatExperience,
    dataLeadershipMessage,
    dataCoreValues,
    dataAchieved,
    dataService,
    dataPartner,
  ] = await Promise.all([
    getGreatExperience(pageId),
    getLeadershipMessage(pageId),
    getCoreValues(pageId),
    getAchieved(pageId),
    getService(pageId),
    lang === 'vi' ? getPartnerVi() : getPartnerEn(),
  ])
  return (
    <main>
      <BreadcrumbContainer>
        <BreadcrumbLink href={`/`}>TRANG CHỦ /</BreadcrumbLink>
        <BreadcrumbLink isLastLink>VỀ CHÚNG TÔI</BreadcrumbLink>
      </BreadcrumbContainer>
      <SlideOnlyImagesDownload data={dataGreatExperience.greatExperience} />
      <LeaderShipMessageAndCoreValues
        isMobile={isMobile}
        dataLeadershipMessage={dataLeadershipMessage.leadershipMessage}
        dataCoreValues={dataCoreValues.coreValues}
      />
      <Achieved
        isMobile={isMobile}
        data={dataAchieved.achieved}
      />
      <ProductionLineSection
        isMobile={isMobile}
        data={dataService.service}
      />
      <PartnerSection
        isMobile={isMobile}
        data={lang === 'vi' ? dataPartner.partnerVi : dataPartner.partnerEn}
      />
    </main>
  )
}
