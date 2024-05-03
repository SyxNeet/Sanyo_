import SlideDanhSachTinTuc from '@/components/danh-sach-tin-tuc/SlideDanhSachTinTuc'
import {Button} from '@/components/ui/button'

export default function News({isMobile, data}) {
  return (
    <section className='pt-10 md:pt-[6rem] px-3 md:px-[6.25rem]'>
      <div className='flex flex-row items-end mb-5 md:mb-10'>
        <div>
          <h3 className='text-grey-500 font-SVNLagu text-0.875 md:text-1.25 font-medium leading-1.5 tracking-0.1 opacity-80'>
            DANH SÁCH TIN TỨC
          </h3>
          <h2 className='text-1.875 md:text-3 font-SVNLagu text-grey-900 font-semibold leading-1.4'>
            Bài viết{' '}
            <strong className='font-semibold text-yellow-500 uppercase'>
              nổi bật khác
            </strong>
          </h2>
        </div>
        {!isMobile && (
          <Button
            isHover
            isBlack
            text='XEM TẤT CẢ'
            className='mb-2 ml-auto'
          />
        )}
      </div>
      <SlideDanhSachTinTuc isMobile={isMobile} data={data} />
      {isMobile && (
        <Button
          isHover={false}
          text={'XEM TẤT CẢ'}
          isBlack={true}
          className='max-md:bg-yellow-500 max-md:border-none'
        />
      )}
    </section>
  )
}
