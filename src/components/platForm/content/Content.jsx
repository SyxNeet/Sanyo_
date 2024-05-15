import {Button} from '@/components/ui/button'
import Link from 'next/link'

export default function Content({title, description}) {
  return (
    <div
      className={`flex justify-between items-end md:mb-[4.13rem] md:pr-[3.81rem] pl-[0.75rem] pr-[2.5rem]`}
    >
      <div className='md:w-[58rem] w-full max-md:mb-5'>
        <h2
          className='text-white md:text-[3.214rem] max-md:w-[15.25rem] text-[1.5rem] font-SVNLagu font-semibold leading-[1.3] md:mb-[0.62rem] mb-[0.5rem] [&>p>strong]:font-medium  [&>p>strong]:text-yellow-500'
          dangerouslySetInnerHTML={{__html: title}}
        ></h2>
        <p className='text-grey-50 text-justify lg:text-[1.125rem] text-[0.75rem] md:leading-[1.7] md:w-[55.6rem] w-[20.1875rem]'>
          {description}
        </p>
      </div>
      <Link href={`/thang-may-nhat-ban`}>
        <Button
          className={`h-fit bg-transparent border-white max-md:hidden`}
          classText='text-white'
          isHover={true}
          text='XEM TẤT CẢ'
        />
      </Link>
    </div>
  )
}
