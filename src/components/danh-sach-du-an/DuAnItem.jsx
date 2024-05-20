import Image from 'next/image'
import Link from 'next/link'
import {cn} from '@/lib/utils'

export default function DuAnItem({
  imgFlagUrl,
  className,
  altImageFlag,
  nameProject,
  imgProjectUrl,
  altImageProject,
  href,
  page,
  country,
  type,
}) {
  return (
    <Link
      key={page + country + type}
      className={cn(
        'du-an-item relative rounded-[0.5rem] md:rounded-[0.75rem] aspect-[1.35] w-full overflow-hidden flex justify-center items-end max-md:w-full max-md:h-[17.125rem] md:opacity-0 md:scale-[0.6] group',
        className,
      )}
      href={href || '/'}
    >
      <Image
        src={imgProjectUrl}
        alt={altImageProject}
        width={1920}
        height={1080}
        className='absolute object-cover w-full h-full -z-10 group-hover:scale-110 transition-500'
      />
      <div className='rounded-[0.5rem] max-md:flex-col flex flex-row md:items-center relative md:pl-[0.94rem] md:pr-[1.38rem] bottom-[0.52rem] md:bottom-[0.59rem] pt-[0.73rem] pb-[0.62rem] pl-[0.79rem] pr-[1.38rem] bg-black/40 backdrop-blur-md group-hover:bg-black/50 border border-transparent group-hover:border-yellow-500 transition-500 h-[5.10781rem] md:h-[4.125rem] w-[calc(100%-0.52rem*2)] md:w-[calc(100%-0.94rem*2)] overflow-hidden'>
        <Image
          src={imgFlagUrl}
          alt={altImageFlag}
          width={1920}
          height={1000}
          className='w-[3.375rem] h-[2.25rem] mr-3 max-md:w-[1.7rem] max-md:h-[1.13rem] max-md:mb-[0.38rem]'
        />
        <div className='flex flex-row items-center justify-between w-full'>
          <span className='w-[19.75rem] font-Iciel text-[0.875rem] font-normal leading-1.5 text-white max-md:w-[14.1875rem] max-md:text-[0.75rem] text-ellipsis line-clamp-2 '>
            {nameProject}
          </span>
          <div className='relative h-[2.125rem] w-[2.125rem] max-md:w-[0.76456rem] max-md:h-[0.76456rem]'>
            <div className='absolute right-0 flex flex-row items-center -translate-y-1/2 top-1/2 w-max group-hover:translate-x-[calc(100%-0.8rem)] md:group-hover:translate-x-[calc(100%-1.3rem)] transition-500'>
              <Image
                src='/images/du-an/arrow-right.svg'
                width={120}
                height={120}
                className='mr-6 opacity-0 size-[0.8rem] md:size-5 group-hover:opacity-100 transition-500'
                alt='previous slide'
              />
              <Image
                alt='next slide'
                src='/images/du-an/plus.svg'
                width={120}
                height={120}
                className='size-[0.8rem] md:size-5 group-hover:opacity-0 transition-500'
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
