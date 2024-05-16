import BreadcrumbContainer from '@/components/breadcrumb/BreadcrumbContainer'
import BreadcrumbLink from '@/components/breadcrumb/BreadcrumbLink'
import getData from '@/lib/getData'
import News from '@/sections/tin-tuc/News'
import {fetchMetaData} from '@/lib/fetchMetadata'
import {getMeta} from '@/lib/getMeta'

const pageId = 543
async function getNews(pageId) {
  return getData(`/posts/${pageId}/news`)
}
async function getPosts(page, category) {
  return getData(
    `/posts?page=${page ?? 1}&per_page=16${
      category && `&category=${category}`
    }`,
    'okhub',
  )
}

export async function generateMetadata() {
  const result = await fetchMetaData('/tin-tuc/')
  return getMeta(result, '/tin-tuc/')
}

export default async function DanhSachTinTucPage({params, searchParams}) {
  const {viewport, page, category} = searchParams
  const isMobile = viewport.includes('mobile')
  const [dataNews, dataPosts] = await Promise.all([
    getNews(pageId),
    getPosts(page, category),
  ])
  return (
    <main className='relative px-3 md:px-[6.25rem]'>
      {!isMobile && (
        <>
          <div className='absolute top-0 left-0 w-[2.9375rem] h-[2.625rem] opacity-15 bg-yellow-500' />
          <div className='absolute top-0 right-0 w-[4.5rem] h-[3.625rem] opacity-15 bg-yellow-500'>
            <div className='absolute bottom-0 left-0 w-[1.9375rem] h-[1.8125rem] bg-yellow-500 -translate-x-full translate-y-full' />
          </div>
        </>
      )}
      <BreadcrumbContainer className='mx-0'>
        <BreadcrumbLink href={`/`}>TRANG CHỦ</BreadcrumbLink>
        <BreadcrumbLink isLastLink>DANH SÁCH TIN TỨC</BreadcrumbLink>
      </BreadcrumbContainer>
      <News
        isMobile={isMobile}
        dataNews={dataNews.news}
        dataPosts={dataPosts}
        searchParams={searchParams}
        activePage={page ? parseInt(page) - 1 : 0}
        category={category ?? ''}
      />
    </main>
  )
}
