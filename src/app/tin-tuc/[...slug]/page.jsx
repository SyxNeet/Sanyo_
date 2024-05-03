import BreadcrumbContainer from '@/components/breadcrumb/BreadcrumbContainer'
import BreadcrumbLink from '@/components/breadcrumb/BreadcrumbLink'
import DetailNew from '@/sections/chi-tiet-tin-tuc/DetailNew'
import PlatFormElevator from '@/components/platForm'
import PlatFormMobile from '@/components/platFormMobile'
import getData from '@/lib/getData'
import News from '@/sections/chi-tiet-tin-tuc/News'
import './styles.css'
import Support from '@/layout/support'

const pageId = 11
async function getChiTietTinTuc(postId) {
  return getData(`/posts/${postId}`, 'wp')
}
async function getDanhSachThangMay(pageId) {
  return getData(`/pages/${pageId}/danh_sach_thang_may`)
}
async function getSupportEn() {
  return getData(`/options/options/contactFormEn`)
}
async function getSupportVi() {
  return getData(`/options/options/contactFormVi`)
}

export default async function TinTucPage({params, searchParams}) {
  const {viewport} = searchParams
  const isMobile = viewport.includes('mobile')
  const {slug} = params
  const [dataPost, dataPlatForm, dataSupport] = await Promise.all([
    getChiTietTinTuc(slug),
    getDanhSachThangMay(pageId),
    getSupportVi(),
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
        <PlatFormElevator dataPlatForm={dataPlatForm.danh_sach_thang_may} />
      ) : (
        <PlatFormMobile dataPlatForm={dataPlatForm.danh_sach_thang_may} />
      )}
      <News isMobile={isMobile} />
      <Support
        isMobile={isMobile}
        data={dataSupport.contactFormVi}
      />
    </main>
  )
}
