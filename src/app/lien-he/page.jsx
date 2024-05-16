import BreadcrumbContainer from '@/components/breadcrumb/BreadcrumbContainer'
import BreadcrumbLink from '@/components/breadcrumb/BreadcrumbLink'
import LienHeSection from '@/sections/lien-he/LienHeSection'
import './styles.css'
import getData from '@/lib/getData'
import {fetchMetaData} from '@/lib/fetchMetadata'
import {getMeta} from '@/lib/getMeta'

const pageId = 324
async function getLienHe(pageId) {
  return getData(`/pages/${pageId}/contact`)
}

export async function generateMetadata() {
  const result = await fetchMetaData('/lien-he/')
  return getMeta(result, '/lien-he/')
}

export default async function LienHePage({params, searchParams}) {
  const {viewport} = searchParams
  const isMobile = viewport.includes('mobile')
  const [dataContact] = await Promise.all([getLienHe(pageId)])
  return (
    <main>
      <BreadcrumbContainer className='md:ml-[3.75rem] ml-3'>
        <BreadcrumbLink href={`/`}>TRANG CHỦ</BreadcrumbLink>
        <BreadcrumbLink isLastLink>LIÊN HỆ</BreadcrumbLink>
      </BreadcrumbContainer>
      <LienHeSection
        isMobile={isMobile}
        data={dataContact.contact}
      />
    </main>
  )
}
