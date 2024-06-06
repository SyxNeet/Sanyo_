import BreadcrumbContainer from '@/components/breadcrumb/BreadcrumbContainer'
import BreadcrumbLink from '@/components/breadcrumb/BreadcrumbLink'
import DetailNew from '@/sections/chi-tiet-tin-tuc/DetailNew'
import PlatFormElevator from '@/components/platForm'
import PlatFormMobile from '@/components/platFormMobile'
import getData from '@/lib/getData'
import News from '@/sections/chi-tiet-tin-tuc/News'
import './styles.css'
import Support from '@/layout/support'
import {fetchMetaData} from '@/lib/fetchMetadata'
import {getMeta} from '@/lib/getMeta'

async function getChiTietTinTuc() {
  return getData(`/options/options/bai_viet_noi_bat`)
}
async function getTinTuc(slug) {
  return getData(`/tin-tuc/${slug}`, 'okhub')
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

export async function generateStaticParams() {
  const posts = await getData('/all_posts', 'okhub')
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({params}) {
  const result = await fetchMetaData(`/${params.slug}/`)
  return getMeta(
    result,
    `/tin-tuc/${params.slug}`,
    'Chi tiết tin tức - SANYO YUSOKI',
  )
}

export default async function TinTucPage({params, searchParams}) {
  const {viewport} = searchParams
  const isMobile = viewport.includes('mobile')
  const {slug} = params
  const [
    dataPost,
    dataSupport,
    dataPosts,
    dataPlatFormElevator,
    dataChiTietTinTuc,
  ] = await Promise.all([
    getTinTuc(slug),
    getSupport(),
    getPosts(slug),
    getElevatorBySlug(slug),
    getChiTietTinTuc(),
  ])
  return (
    <main>
      <BreadcrumbContainer className='pl-3 md:px-[3.75rem]'>
        <BreadcrumbLink href={`/`}>TRANG CHỦ</BreadcrumbLink>
        <BreadcrumbLink href={`/tin-tuc`}>DANH SÁCH TIN TỨC</BreadcrumbLink>
        <BreadcrumbLink isLastLink>
          CÁCH ÂM RA SAO KHI CĂN HỘ GIÁP VÁCH THANG MÁY CHUNG CƯ
        </BreadcrumbLink>
      </BreadcrumbContainer>
      <DetailNew
        isMobile={isMobile}
        data={dataPost}
      />
      {dataPlatFormElevator && (
        <>
          {!isMobile ? (
            <PlatFormElevator dataPlatFormElevator={dataPlatFormElevator} />
          ) : (
            <PlatFormMobile dataPlatFormElevator={dataPlatFormElevator} />
          )}
        </>
      )}
      <News
        isMobile={isMobile}
        dataPosts={dataPosts}
        dataChiTietTinTuc={dataChiTietTinTuc.bai_viet_noi_bat}
      />
      <Support
        forLienHePage={false}
        isMobile={isMobile}
        data={dataSupport.contactForm}
      />
    </main>
  )
}
