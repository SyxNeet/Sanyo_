import BreadcrumbContainer from '@/components/breadcrumb/BreadcrumbContainer'
import BreadcrumbLink from '@/components/breadcrumb/BreadcrumbLink'
import getData from '@/lib/getData'
import News from '@/sections/tin-tuc/News'

async function getPosts(page, lang) {
  return getData(
    `/posts?lang=${lang ?? 'vi'}&page=${page ?? 1}&per_page=16`,
    'okhub',
  )
}

export default async function DanhSachTinTucPage({params, searchParams}) {
  const {viewport, page, category} = searchParams
  const isMobile = viewport.includes('mobile')
  const {lang} = params
  const [dataPosts] = await Promise.all([getPosts(page, lang)])
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
        <BreadcrumbLink href={`/`}>
          {lang === 'vi' ? 'TRANG CHỦ' : 'HOME'}
        </BreadcrumbLink>
        <BreadcrumbLink isLastLink>
          {lang === 'vi' ? 'DANH SÁCH TIN TỨC' : 'NEWS'}
        </BreadcrumbLink>
      </BreadcrumbContainer>
      <News
        isMobile={isMobile}
        lang={lang}
        data={dataPosts}
        activePage={page - 1 ?? 0}
        category={category ?? ''}
      />
    </main>
  )
}
