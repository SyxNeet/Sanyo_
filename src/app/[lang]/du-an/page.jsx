import BreadcrumbContainer from '@/components/breadcrumb/BreadcrumbContainer'
import BreadcrumbLink from '@/components/breadcrumb/BreadcrumbLink'
import DuAnNoiBat from '@/sections/du-an/DuAnNoiBat'

export default function DanhSachDuAnPage() {
  return (
    <main className=''>
      <BreadcrumbContainer className='px-[6.25rem] mb-[5rem]'>
        <BreadcrumbLink href={`/`}>TRANG CHỦ</BreadcrumbLink>
        <BreadcrumbLink>DANH SÁCH DỰ ÁN</BreadcrumbLink>
      </BreadcrumbContainer>
      <DuAnNoiBat />
    </main>
  )
}
