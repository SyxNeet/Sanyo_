import BreadcrumbContainer from '@/components/breadcrumb/BreadcrumbContainer'
import BreadcrumbLink from '@/components/breadcrumb/BreadcrumbLink'
import DuAnNoiBat from '@/sections/du-an/DuAnNoiBat'

export default function DanhSachDuAnPage({params, searchParams}) {
  const {viewport} = searchParams
  const isMobile = viewport.includes('mobile')
  return (
    <main className=''>
      <BreadcrumbContainer className='px-3 md:px-[6.25rem]'>
        <BreadcrumbLink href={`/`}>TRANG CHỦ</BreadcrumbLink>
        <BreadcrumbLink>DANH SÁCH DỰ ÁN</BreadcrumbLink>
      </BreadcrumbContainer>
      <DuAnNoiBat isMobile={isMobile} />
    </main>
  )
}
