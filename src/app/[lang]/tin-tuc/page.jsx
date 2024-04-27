import BreadcrumbContainer from '@/components/breadcrumb/BreadcrumbContainer'
import BreadcrumbLink from '@/components/breadcrumb/BreadcrumbLink'
import Image from 'next/image'
import Link from 'next/link'

export default async function TinTucPage({params, searchParams}) {
  const {viewport} = searchParams
  const isMobile = viewport.includes('mobile')
  const {lang} = params
  return (
    <main className='relative px-[6.25rem]'>
      <div className='absolute top-0 left-0 w-[2.9375rem] h-[2.625rem] opacity-15 bg-yellow-500' />
      <div className='absolute top-0 right-0 w-[4.5rem] h-[3.625rem] opacity-15 bg-yellow-500'>
        <div className='absolute bottom-0 left-0 w-[1.9375rem] h-[1.8125rem] opacity-[6.67] bg-yellow-500 -translate-x-full translate-y-full' />
      </div>
      <BreadcrumbContainer className='md:mx-0'>
        <BreadcrumbLink href={`/`}>
          {lang === 'vi' ? 'TRANG CHỦ' : 'HOME'} /{' '}
        </BreadcrumbLink>
        <BreadcrumbLink isLastLink>
          {lang === 'vi' ? 'DANH SÁCH TIN TỨC' : 'NEWS'}
        </BreadcrumbLink>
      </BreadcrumbContainer>
      <section>
        <div className='mt-[4.12rem] flex flex-row items-center mb-8'>
          <h1 className='text-3 font-semibold text-grey-900 leading-1.3 font-SVNLagu'>
            Danh sách{' '}
            <strong className='text-yellow-500 font-SVNLagu font-semibold leading-1.3'>
              TIN TỨC
            </strong>
          </h1>
          <nav className='ml-auto'>
            <Link
              href={`/`}
              className='text-grey-900 font-Iciel text-1 leading-1.5 px-[1.31rem] py-[0.81rem] rounded-full bg-yellow-500'
            >
              Tất cả
            </Link>
            <Link
              href={`/`}
              className='text-grey-600 border border-grey-200 rounded-full font-Iciel text-1 leading-1.5 px-[1.31rem] py-[0.81rem] ml-3'
            >
              Tip sử dụng thang máy
            </Link>
            <Link
              href={`/`}
              className='text-grey-600 border border-grey-200 rounded-full font-Iciel text-1 leading-1.5 px-[1.31rem] py-[0.81rem] ml-3'
            >
              Tin tức doanh nghiệp
            </Link>
          </nav>
        </div>
        <div className='grid grid-cols-3 gap-4'>
          <div className='col-span-2 row-span-3 h-[36.375rem]'>
            <Link
              href={`/`}
              className='relative block w-full h-full rounded-[0.75rem] overflow-hidden group'
            >
              <Image
                src={`/images/tin-tuc/news-1.png`}
                alt=''
                className='absolute top-0 left-0 object-cover w-full h-full group-hover:scale-110 transition-500'
                width={1920}
                height={1080}
              />
              <div className='absolute bottom-6 left-6 rounded-[0.5rem] bg-black/35 backdrop-blur-md w-[40.5625rem] pl-8 pr-[2.83rem] pt-5 pb-7'>
                <div className='flex flex-row items-center mb-4'>
                  <Image
                    src={`/images/tin-tuc/calendar.svg`}
                    alt=''
                    className='size-[0.875rem] mr-2'
                    width={120}
                    height={120}
                  />
                  <p className='font-Iciel text-0.875 leading-1.5 text-grey-0'>
                    26/04/2022
                  </p>
                </div>
                <h3 className='text-1.25 font-SVNLagu text-grey-0 leading-1.4 uppercase mb-3'>
                  Cách âm ra sao khi căn hộ giáp vách thang máy chung cư?
                </h3>
                <p className='text-grey-0 line-clamp-2 text-1 leading-1.5 font-Iciel opacity-70'>
                  Tôi đang sống trong một căn hộ ở tầng 8 của một toà chung cư.
                  Phòng ngủ tuy đã cách vách thang máy bởi một khu bếp rồi mà
                  lúc thang chạy vẫn có tiếng kêu ù ù. Vì tòa nhà đông người,
                  nhu cầu đi lại nhiều nên tiếng động này ảnh hưởng không nhỏ
                  đến sinh hoạt của cả gia đình tôi. Phòng ngủ tuy đã cách vách
                  thang máy bởi một khu bếp rồi mà lúc thang chạy vẫn có tiếng
                  kêu ù ù. Vì tòa nhà đông người, nhu cầu đi lại nhiều nên tiếng
                  động này ảnh hưởng không nhỏ đến sinh hoạt của cả gia đình
                  tôi.
                </p>
              </div>
            </Link>
          </div>
          <Link
            href={`/`}
            className='relative rounded-[0.75rem] border border-[#E9E9E9] flex flex-row px-[1.13rem] py-4 overflow-hidden group'
          >
            <Image
              src={`/images/tin-tuc/news-2.png`}
              alt=''
              className='size-[9.3125rem] rounded-[0.5rem]'
              width={1920}
              height={1080}
            />
            <div className='ml-5 flex flex-col gap-[0.38rem]'>
              <h3 className='text-grey-900 font-SVNLagu text-1 font-semibold leading-1.4 uppercase line-clamp-2'>
                Cách âm ra sao khi căn hộ giáp vách thang máy chung cư?
              </h3>
              <p className='text-0.875 text-grey-500 leading-1.5 line-clamp-2 opacity-70'>
                Tôi đang sống trong một căn hộ ở tầng 8 của một toà chung cư.
                Phòng ngủ tuy đã cách vách thang máy bởi một khu bếp rồi mà lúc
                thang chạy vẫn có tiếng kêu ù ù. Vì tòa nhà đông người, nhu cầu
                đi lại nhiều nên tiếng động này ảnh hưởng không nhỏ đến sinh
                hoạt của cả gia đình tôi. Phòng ngủ tuy đã cách vách thang máy
                bởi một khu bếp rồi mà lúc thang chạy vẫn có tiếng kêu ù ù. Vì
                tòa nhà đông người, nhu cầu đi lại nhiều nên tiếng động này ảnh
                hưởng không nhỏ đến sinh hoạt của cả gia đình tôi.
              </p>
              <div className='flex flex-row items-center'>
                <Image
                  src={`/images/tin-tuc/calendar-black.svg`}
                  alt=''
                  className='size-[0.875rem] mr-2'
                  width={120}
                  height={120}
                />
                <p className='font-Iciel text-0.875 leading-1.5 text-grey-500'>
                  26/04/2022
                </p>
              </div>
            </div>
            <div className='absolute right-0 top-0 md:bottom-0 md:top-auto size-[7rem] translate-x-[46%] -translate-y-[62%] md:translate-y-[60%] bg-yellow-500 rounded-full'>
              <Image
                src={'/images/home/danhSachTinTuc/arrow.svg'}
                width={120}
                height={120}
                alt='icon'
                className='w-[0.9rem] h-[1em] absolute bottom-[18%] md:top-[17%] left-[30%] object-cover'
              />
            </div>
          </Link>
          <Link
            href={`/`}
            className='relative rounded-[0.75rem] border border-[#E9E9E9] flex flex-row px-[1.13rem] py-4 overflow-hidden'
          >
            <Image
              src={`/images/tin-tuc/news-3.png`}
              alt=''
              className='size-[9.3125rem] rounded-[0.5rem]'
              width={1920}
              height={1080}
            />
            <div className='ml-5 flex flex-col gap-[0.38rem]'>
              <h3 className='text-grey-900 font-SVNLagu text-1 font-semibold leading-1.4 uppercase line-clamp-2'>
                Cách âm ra sao khi căn hộ giáp vách thang máy chung cư?
              </h3>
              <p className='text-0.875 text-grey-500 leading-1.5 line-clamp-2 opacity-70'>
                Tôi đang sống trong một căn hộ ở tầng 8 của một toà chung cư.
                Phòng ngủ tuy đã cách vách thang máy bởi một khu bếp rồi mà lúc
                thang chạy vẫn có tiếng kêu ù ù. Vì tòa nhà đông người, nhu cầu
                đi lại nhiều nên tiếng động này ảnh hưởng không nhỏ đến sinh
                hoạt của cả gia đình tôi. Phòng ngủ tuy đã cách vách thang máy
                bởi một khu bếp rồi mà lúc thang chạy vẫn có tiếng kêu ù ù. Vì
                tòa nhà đông người, nhu cầu đi lại nhiều nên tiếng động này ảnh
                hưởng không nhỏ đến sinh hoạt của cả gia đình tôi.
              </p>
              <div className='flex flex-row items-center'>
                <Image
                  src={`/images/tin-tuc/calendar-black.svg`}
                  alt=''
                  className='size-[0.875rem] mr-2'
                  width={120}
                  height={120}
                />
                <p className='font-Iciel text-0.875 leading-1.5 text-grey-500'>
                  26/04/2022
                </p>
              </div>
            </div>
            <div className='absolute right-0 top-0 md:bottom-0 md:top-auto size-[7rem] translate-x-[46%] -translate-y-[62%] md:translate-y-[60%] bg-yellow-500 rounded-full'>
              <Image
                src={'/images/home/danhSachTinTuc/arrow.svg'}
                width={120}
                height={120}
                alt='icon'
                className='w-[0.9rem] h-[1em] absolute bottom-[18%] md:top-[17%] left-[30%] object-cover'
              />
            </div>
          </Link>
          <Link
            href={`/`}
            className='relative rounded-[0.75rem] border border-[#E9E9E9] flex flex-row px-[1.13rem] py-4 overflow-hidden'
          >
            <Image
              src={`/images/tin-tuc/news-4.png`}
              alt=''
              className='size-[9.3125rem] rounded-[0.5rem]'
              width={1920}
              height={1080}
            />
            <div className='ml-5 flex flex-col gap-[0.38rem]'>
              <h3 className='text-grey-900 font-SVNLagu text-1 font-semibold leading-1.4 uppercase line-clamp-2'>
                Cách âm ra sao khi căn hộ giáp vách thang máy chung cư?
              </h3>
              <p className='text-0.875 text-grey-500 leading-1.5 line-clamp-2 opacity-70'>
                Tôi đang sống trong một căn hộ ở tầng 8 của một toà chung cư.
                Phòng ngủ tuy đã cách vách thang máy bởi một khu bếp rồi mà lúc
                thang chạy vẫn có tiếng kêu ù ù. Vì tòa nhà đông người, nhu cầu
                đi lại nhiều nên tiếng động này ảnh hưởng không nhỏ đến sinh
                hoạt của cả gia đình tôi. Phòng ngủ tuy đã cách vách thang máy
                bởi một khu bếp rồi mà lúc thang chạy vẫn có tiếng kêu ù ù. Vì
                tòa nhà đông người, nhu cầu đi lại nhiều nên tiếng động này ảnh
                hưởng không nhỏ đến sinh hoạt của cả gia đình tôi.
              </p>
              <div className='flex flex-row items-center'>
                <Image
                  src={`/images/tin-tuc/calendar-black.svg`}
                  alt=''
                  className='size-[0.875rem] mr-2'
                  width={120}
                  height={120}
                />
                <p className='font-Iciel text-0.875 leading-1.5 text-grey-500'>
                  26/04/2022
                </p>
              </div>
            </div>
            <div className='absolute right-0 top-0 md:bottom-0 md:top-auto size-[7rem] translate-x-[46%] -translate-y-[62%] md:translate-y-[60%] bg-yellow-500 rounded-full'>
              <Image
                src={'/images/home/danhSachTinTuc/arrow.svg'}
                width={120}
                height={120}
                alt='icon'
                className='w-[0.9rem] h-[1em] absolute bottom-[18%] md:top-[17%] left-[30%] object-cover'
              />
            </div>
          </Link>
        </div>
      </section>
    </main>
  )
}
