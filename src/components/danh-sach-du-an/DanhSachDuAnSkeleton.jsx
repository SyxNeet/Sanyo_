export default function DanhSachDuAnSkeleton() {
  return Array.from(
    Array(8)
      .keys()
      .map((item) => {
        return (
          <div
            key={item}
            className='relative rounded-[0.5rem] md:rounded-[0.75rem] aspect-[1.35] w-full overflow-hidden flex justify-center items-end max-md:w-full max-md:h-[17.125rem] bg-grey-300 animate-skeleton'
          />
        )
      }),
  )
}
