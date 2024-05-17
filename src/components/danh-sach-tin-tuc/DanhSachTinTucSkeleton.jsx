export default function DanhSachTinTucSkeleton() {
  return (
    <>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
        <div className='md:col-span-2 md:row-span-3 h-[15.65rem] md:h-[36.375rem]'>
          <div className='relative block w-full h-full rounded-[0.75rem] overflow-hidden bg-grey-300 animate-skeleton' />
        </div>
        {Array.from(Array(3).keys()).map((item) => {
          return (
            <div
              key={item}
              className='relative rounded-[0.75rem] border border-[#E9E9E9] flex flex-row items-center p-[0.79rem] md:px-[1.13rem] md:py-4 overflow-hidden max-md:-mt-2 first-of-type:mt-0'
            >
              <div className='size-[8rem] md:size-[9.3125rem] overflow-hidden rounded-[0.5rem] flex-none bg-grey-300 animate-skeleton'>
                <div className='size-full object-cover rounded-[0.5rem]' />
              </div>
              <div className='ml-[0.65rem] md:ml-5 flex flex-col grow'>
                <div className='h-[1.5rem] rounded-md bg-grey-300 animate-skeleton mb-[0.15rem]' />
                <div className='h-[1.5rem] rounded-md w-1/2 bg-grey-300 animate-skeleton mb-[0.35rem]' />
                <div className='h-[1.2rem] bg-grey-300 animate-skeleton rounded-md mb-[0.1rem]' />
                <div className='h-[1.2rem] bg-grey-300 animate-skeleton w-1/2 mb-[0.6rem] rounded-md' />
                <div className='h-[1.3rem] bg-grey-300 animate-skeleton w-1/3 rounded-md' />
              </div>
            </div>
          )
        })}
      </div>
      <div className='grid grid-cols-1 md:grid-cols-4 mt-[0.52rem] md:mt-5 gap-y-[0.52rem] md:gap-x-4 md:gap-y-5'>
        {Array.from(Array(8).keys()).map((item) => {
          return (
            <div
              key={item}
              className='relative md:h-[25rem] flex flex-row max-md:items-center max-md:p-[0.79rem] md:flex-col rounded-[0.75rem] overflow-hidden border border-[#E9E9E9] pb-[1.5rem]'
            >
              <div className='max-md:size-[8rem] rounded-t-[0.5rem] flex-none md:h-[60%] overflow-hidden bg-grey-300 animate-skeleton' />
              <div className='max-md:ml-[0.65rem] md:mt-[1.56rem] grid grid-cols-1 md:px-[1.37rem]'>
                <div className='h-[1.6rem] rounded-md bg-grey-300 animate-skeleton mb-[0.15rem]' />
                <div className='max-md:mb-[0.35rem] h-[1.6rem] w-1/2 rounded-md bg-grey-300 animate-skeleton' />
                <div className='mt-2 rounded-md h-[1.3rem] bg-grey-300 animate-skeleton mb-[0.1rem]' />
                <div className='max-md:mb-[0.675rem] rounded-md h-[1.3rem] w-1/2 bg-grey-300 animate-skeleton' />
                <div className='mt-2 h-[1.2rem] w-1/3 bg-grey-300 rounded-md animate-skeleton' />
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
