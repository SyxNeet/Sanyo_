import BreadcrumbContainer from '@/components/breadcrumb/BreadcrumbContainer'
import BreadcrumbLink from '@/components/breadcrumb/BreadcrumbLink'
import LienHeSection from '@/sections/lien-he/LienHeSection'

export default async function LienHePage({params, searchParams}) {
  const {viewport} = searchParams
  const isMobile = viewport.includes('mobile')
  const {lang} = params
  return (
    <>
      <BreadcrumbContainer className='md:ml-[3.75rem]'>
        <BreadcrumbLink href={`/`}>TRANG CHỦ / </BreadcrumbLink>
        <BreadcrumbLink isLastLink>LIÊN HỆ</BreadcrumbLink>
      </BreadcrumbContainer>
      <LienHeSection
        isMobile={isMobile}
        lang={lang}
      />
    </>
  )
}
