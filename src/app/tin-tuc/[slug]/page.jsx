import BreadcrumbContainer from '@/components/breadcrumb/BreadcrumbContainer'
import BreadcrumbLink from '@/components/breadcrumb/BreadcrumbLink'
import DetailNew from '@/sections/chi-tiet-tin-tuc/DetailNew'
import PlatFormElevator from '@/components/platForm'
import PlatFormMobile from '@/components/platFormMobile'
import getData from '@/lib/getData'
import getDataSlug from '@/lib/getDataSlug'
import News from '@/sections/chi-tiet-tin-tuc/News'
import './styles.css'
import Support from '@/layout/support'
import {fetchMetaData} from '@/lib/fetchMetadata'
import {getMeta} from '@/lib/getMeta'

async function getChiTietTinTuc(slug) {
  return getDataSlug(`/tin-tuc/${slug}`)
}
async function getDanhSachThangMay() {
  return getData(`/pages/11/danh_sach_thang_may`)
}
async function getSupport() {
  return getData(`/options/options/contactForm`)
}
async function getPosts(slug) {
  return getData(`/feature_post/${slug}`, 'okhub')
}
async function getElevatorBySlug(slug) {
  return getData(`/elavator_by_slug/${slug}`, 'okhub')
}

export async function generateMetadata({params}) {
  const result = await fetchMetaData(`/${params.slug}/`)
  return getMeta(result, `/tin-tuc/${params.slug}`)
}

export default async function TinTucPage({params, searchParams}) {
  const {viewport} = searchParams
  const isMobile = viewport.includes('mobile')
  const {slug} = params
  const [dataPost, dataPlatForm, dataSupport, dataPosts, dataPlatFormElevator] =
    await Promise.all([
      getChiTietTinTuc(slug),
      getDanhSachThangMay(),
      getSupport(),
      getPosts(slug),
      getElevatorBySlug(slug),
    ])
  return (
    <main>
      <BreadcrumbContainer className='pl-3 md:px-[3.75rem]'>
        <BreadcrumbLink href={`/`}>TRANG CHỦ</BreadcrumbLink>
        <BreadcrumbLink href={`/`}>DANH SÁCH TIN TỨC</BreadcrumbLink>
        <BreadcrumbLink isLastLink>
          CÁCH ÂM RA SAO KHI CĂN HỘ GIÁP VÁCH THANG MÁY CHUNG CƯ
        </BreadcrumbLink>
      </BreadcrumbContainer>
      <DetailNew
        isMobile={isMobile}
        data={dataPost}
      />
      {!isMobile ? (
        <PlatFormElevator dataPlatFormElevator={dataPlatFormElevator} />
      ) : (
        <PlatFormMobile dataPlatFormElevator={dataPlatFormElevator} />
      )}
      <News
        isMobile={isMobile}
        data={dataPosts}
      />
      <Support
        forLienHePage={false}
        isMobile={isMobile}
        data={dataSupport.contactForm}
      />
    </main>
  )
}
