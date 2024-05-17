import Image from 'next/image'
import './styles.css'
import Slide from './Slide'

const SlideOnlyImagesDownload = ({data}) => {
  return (
    <section className='mt-6 md:mt-[4.12rem] md:mb-[3.41rem]'>
      <div className='flex px-[6.25rem] max-md:w-full max-md:px-3'>
        <div className='relative w-[70%] border-r max-md:w-full max-md:border-none '>
          <h1
            className='font-SVNLagu text-[4rem] text-black font-semibold leading-[130%] w-[50.9375rem] mb-[1.19rem] max-md:w-[18.3125rem] max-md:text-2xl max-md:mb-3 max-md:border-none [&_strong]:font-semibold [&_strong]:text-yellow-500'
            dangerouslySetInnerHTML={{__html: data?.heading}}
          ></h1>
          <span className='w-[40.125rem] font-Iciel text-base font-normal leading-[188%] text-justify mb-20 block max-md:w-full max-md:text-[0.875rem] max-md:mb-5'>
            {data?.description}
          </span>
          <div className='absolute block w-[4.375rem] h-16 bg-yellow-500 opacity-[0.14] bottom-0 right-0 max-md:hidden'></div>
        </div>
        <div className='w-[30%] max-md:hidden'>
          <div className='ml-28 mt-[10%] relative w-16  h-[14.3125rem] bg-slate-400 '>
            <Image
              src={`/images/components/slideAutoplay/thangmay.png`}
              alt='imgThangmay'
              className='absolute top-0 left-0 object-fill w-full h-full'
              width={120}
              height={120}
            />
            <div className='cirleElevatorBg absolute w-[11.875rem] h-[11.875rem] rounded-[50%]  bottom-[36%] left-[106%] opacity-30'></div>
            <div className='absolute flex flex-col w-56 left-[106%] bottom-[46%]'>
              <span className='font-SVNLagu text-base font-medium leading-1.4 uppercase mb-[0.12rem]'>
                profile
              </span>
              <span className='font-SVNLagu text-[1.68588rem] font-extrabold leading-1.4 text-gray-900'>
                SANYO YUSOKI
              </span>
            </div>
            <a
              href={data.credential}
              target='_blank'
              className='dowloadElevator absolute left-full bottom-[13%] w-[13.9375rem] h-[3.9375rem] flex items-center justify-center cursor-pointer '
            >
              <span className='uppercase font-Iciel text-base font-medium leading-[120%] mr-[0.87rem]'>
                tải xuống ngay
              </span>
              <div className='w-6 h-6  relative overflow-hidden flex items-center justify-center flex-col mb-[0.7rem]'>
                <Image
                  src={`/images/components/slideAutoplay/downArrow.png`}
                  alt='imgArrowDownLoad'
                  className=' imgArrowFirst w-[1.3125rem] h-[1.20306rem] absolute bottom-full group-hover:bottom-[10%]'
                  width={120}
                  height={120}
                />
                <Image
                  src={`/images/components/slideAutoplay/downArrow.png`}
                  alt='imgArrowDownLoad'
                  className='imgArrowSecond w-[1.3125rem] h-[1.20306rem] absolute bottom-[10%] group-hover:bottom-6'
                  width={120}
                  height={120}
                />
                <div className='absolute w-[50%] h-[0.10025rem] bottom-0 bg-black left-[25%] lineDownLoadElevator'></div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className='w-full mx-auto max-w-[100rem]'>
        <Slide data={data?.images} />
      </div>
    </section>
  )
}

export default SlideOnlyImagesDownload
