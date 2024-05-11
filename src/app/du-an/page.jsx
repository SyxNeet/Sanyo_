import BreadcrumbContainer from '@/components/breadcrumb/BreadcrumbContainer'
import BreadcrumbLink from '@/components/breadcrumb/BreadcrumbLink'
import getData from '@/lib/getData'
import DuAnNoiBat from '@/sections/du-an/DuAnNoiBat'

// TODO: default country la all
const duAnPerPage = 12
const pageId = 794
async function getDanhSachDuAn() {
  return getData(`/pages/${pageId}/project`)
}
async function getProject(country = 'viet-nam', type = 'all', page = '1') {
  return getData(
    `/projects?country=${country}&type=${type}&page=${page}&per_page=${duAnPerPage}`,
    'okhub',
  )
}

export default async function DanhSachDuAnPage({params, searchParams}) {
  const {viewport, country, type, page} = searchParams
  const isMobile = viewport.includes('mobile')
  const [dataDanhSachDuAn, dataProject] = await Promise.all([
    getDanhSachDuAn(),
    // getProject(country, type, page),
  ])
  return (
    <main className=''>
      <BreadcrumbContainer className='px-3 md:px-[6.25rem]'>
        <BreadcrumbLink href={`/`}>TRANG CHỦ</BreadcrumbLink>
        <BreadcrumbLink>DANH SÁCH DỰ ÁN</BreadcrumbLink>
      </BreadcrumbContainer>
      <DuAnNoiBat
        isMobile={isMobile}
        dataDanhSachDuAn={dataDanhSachDuAn.project}
        // dataProject={dataProject}
      />
    </main>
  )
}
