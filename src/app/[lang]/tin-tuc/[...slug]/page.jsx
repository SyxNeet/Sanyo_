import BreadcrumbContainer from '@/components/breadcrumb/BreadcrumbContainer'
import BreadcrumbLink from '@/components/breadcrumb/BreadcrumbLink'
import DetailNew from '@/sections/chi-tiet-tin-tuc/DetailNew'
import PlatFormElevator from '@/components/platForm'
import PlatFormMobile from '@/components/platFormMobile'
import getData from '@/lib/getData'
import News from '@/sections/chi-tiet-tin-tuc/News'
import './styles.css'
import Support from '@/layout/support'

let pageId
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
  const {lang, slug} = params
  if (lang === 'vi') {
    pageId = 11
  } else {
    pageId = 14
  }
  const [dataPost, dataPlatForm, dataSupport] = await Promise.all([
    getChiTietTinTuc(slug),
    getDanhSachThangMay(pageId),
    lang === 'vi' ? getSupportVi() : getSupportEn(),
  ])
  return (
    <main>
      <BreadcrumbContainer className='pl-3 md:px-[3.75rem]'>
        <BreadcrumbLink href={`/`}>
          {lang === 'vi' ? 'TRANG CHỦ' : 'HOME'}
        </BreadcrumbLink>
        <BreadcrumbLink href={`/`}>
          {lang === 'vi' ? 'DANH SÁCH TIN TỨC' : 'NEWS'}
        </BreadcrumbLink>
        <BreadcrumbLink isLastLink>
          {lang === 'vi'
            ? 'CÁCH ÂM RA SAO KHI CĂN HỘ GIÁP VÁCH THANG MÁY CHUNG CƯ'
            : 'DETAIL NEWS'}
        </BreadcrumbLink>
      </BreadcrumbContainer>
      <DetailNew
        isMobile={isMobile}
        data={dataPost}
        lang={lang}
      />
      {!isMobile ? (
        <PlatFormElevator dataPlatForm={dataPlatForm.danh_sach_thang_may} lang={lang} />
      ) : (
        <PlatFormMobile dataPlatForm={dataPlatForm.danh_sach_thang_may} />
      )}
      <News
        isMobile={isMobile}
        lang={lang}
      />
      <Support
        isMobile={isMobile}
        lang={lang}
        data={
          lang === 'vi' ? dataSupport.contactFormVi : dataSupport.contactFormEn
        }
      />
    </main>
  )
}
