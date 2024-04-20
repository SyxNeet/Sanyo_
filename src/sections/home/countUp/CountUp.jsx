import Image from 'next/image'
import CountItem from './CountItem'
import {Button} from '@/components/ui/button'
import Link from 'next/link'

export default function CountUp() {
  const dataLayout = [
    {
      num: '70',
      desc: 'Năm kinh nghiệm phát triển THƯƠNG HIỆU',
    },
    {
      num: '56',
      desc: 'Quốc gia phâm phối trên khắp THẾ GIỚI',
    },
    {
      num: '88',
      desc: 'Đại lí phân phối trên đất nước VIỆT NAM',
    },
    {
      num: '09',
      desc: 'Loại thang máy phân phối CHÍNH THỨC',
    },
  ]

  return (
    <section className='flex max-md:flex-col-reverse md:h-[76.6rem] relative'>
      <Image
        src={'/images/home/sectionCount/imageCount.png'}
        alt='image'
        width={1000}
        height={1000}
        quality={100}
        className='md:w-[56rem] md:h-screen object-cover w-full h-[36.82rem]'
      />

      <div className='md:ml-[3rem] md:pr-[3.75rem] md:pt-[6.88rem]'>
        <Image
          src={'/images/home/sectionCount/logo.svg'}
          alt='logo'
          width={500}
          height={300}
          quality={100}
          className='md:w-[30.75rem] md:h-[4.06rem] object-contain'
        />
        <h3 className='font-SVNLagu md:text-[2.125rem] font-semibold leading-[1.2] uppercase text-yellow-500 md:mt-[0.75rem]'>
          Tinh hoa thang máy Nhật Bản
        </h3>
        <p className='text-grey-400 font-Iciel leading-1.7 uppercase md:mt-[0.75rem] lg:text-[0.875rem]'>
          Thang máy Sanyo Yusoki - trải qua 70 năm lịch sử hình thành Sanyo
          Yusoki là một trong những thương hiệu hàng đầu trong ngành thang máy.
        </p>
        <div className='grid grid-cols-2 md:gap-x-[1.17rem] md:gap-y-[1.48rem] md:mt-[3.4rem]'>
          {dataLayout?.map((item, index) => (
            <CountItem
              key={index}
              num={item?.num}
              desc={item?.desc}
              className={`${
                (index + 1) % 2 === 0 ? 'relative md:translate-y-[3.81rem]' : ''
              }`}
            />
          ))}
        </div>
      </div>

      <Link
        className='absolute md:bottom-[5.88rem] md:right-[28%]'
        href='/ve-chung-toi'
      >
        <Button
          text={'VỀ CHÚNG TÔI'}
          isBlack={true}
          isHover={true}
        />
      </Link>
    </section>
  )
}
