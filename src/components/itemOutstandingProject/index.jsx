import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import bgItemOutStandingProject from '../../../public/images/components/reasonChoose/lydoluachon1.png'
import flagImg from '../../../public/images/components/itemOutstandingProject/flag.png'
import './styles.css'
const ItemOutStandingProject = ({imgFlagUrl,className,altImageFlag,nameProject,imgProjectUrl,altImageProject,link,duAn=false,data}) => {
  return (
    <div className={`itemOutstandingProject relative  ${className||'md:rounded-[1.25rem] rounded-[0.75rem] w-[32.1875rem] h-[25.5rem]'} overflow-hidden flex justify-center items-end max-md:w-full max-md:h-[17.125rem]`}>
      <Image
        src={imgProjectUrl || data?.thumbnail ||bgItemOutStandingProject}
        alt={altImageProject||''}
        width={1500}
        height={1000}
        className='absolute object-cover w-full h-full -z-10'
      />
      <Link
        className={`itemOutStandingProject_overlay max-md:flex-col flex relative h-fit backdrop-blur-[12.5px] rounded-[0.5rem] justify-between md:items-center
          md:pl-[0.94rem] md:pr-[2.06rem]
          bottom-[0.59rem] ${!duAn?'py-[0.645rem]':'py-[0.45rem]'} pl-[1.06rem]  pr-[1.38rem]`}
        href={link||data?.slug ||'/'}
      >
        <Image
          src={imgFlagUrl|| data?.image_country?.url ||flagImg}
          alt={altImageFlag||''} 
          width={1500}
          height={1000}
          className='w-[3.375rem] h-[2.25rem] mr-3 max-md:w-[1.62794rem] max-md:h-[1.08531rem] max-md:mb-[0.36rem]'
        />
        <Image
          src='/images/components/reasonChoose/test.svg'
          alt='box'
          width={200}
          height={200}
          className='absolute inset-0 w-full borderImgItemoutStandingProject max-md:hidden'

        />
        <div className='flex items-center'>
        <span className={` font-Iciel text-[0.875rem] font-normal leading-1.5 text-white max-md:w-[14.1875rem] max-md:text-[0.75rem] max-lg:text-[1.3rem] text-ellipsis line-clamp-2 ${!duAn?'w-[19.75rem]':'w-[17.75rem]'} notranslate`}>
          {nameProject|| data?.title ||'Intercontinental Hotel, Hangzhou,Zhejiang, China'}
        </span>
        <div>
          <div className='relative flex overflow-hidden h-[2.125rem] w-[2.125rem] max-md:w-[0.76456rem] max-mdL:h-[0.76456rem]'>
            <Image
              alt='icon'
              src='/images/components/reasonChoose/row.svg'
              width={120}
              height={120}
              className='absolute top-0 w-full h-full iconArrowOutstanding right-full'
            />
            <Image
              src='/images/components/reasonChoose/iconPlus.svg'
              width={120}
              height={120}
              className='absolute top-0 left-0 w-full h-full iconPlusOutstanding'
              alt='icon'
            />
          </div>
        </div>
        </div>

      </Link>
    </div>
  )
}

export default ItemOutStandingProject
