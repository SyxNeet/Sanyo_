import Image from 'next/image'
import SlidePartner from '@/components/slide-partner'

export default function PartnerSection({isMobile}) {
  return (
    <section className='relative h-[27.5rem] w-[23.4375rem] md:w-full md:h-screen'>
      {!isMobile && (
        <Image
          src={`/images/layout/support/doi-tac-background-img.jpg`}
          alt={``}
          className='absolute hidden object-cover w-full h-full md:block -z-10'
          width={1920}
          height={1080}
        />
      )}
      {isMobile && (
        <Image
          src={`/images/layout/support/doi-tac-background-img-mobile.png`}
          alt={``}
          className='absolute block object-cover w-full h-full md:hidden -z-10'
          width={1920}
          height={1080}
        />
      )}
      <div className='absolute top-[3.37rem] md:top-[5rem] left-1/2 -translate-x-1/2'>
        <h3 className='font-SVNLagu font-medium leading-1.5 tracking-0.1 text-0.625 md:text-1.25 text-gray-500 md:text-gray-300 text-center mb-[0.59rem] md:mb-4 uppercase'>
          ABOUT SANYO YUSOKI
        </h3>
        <h2 className='w-[20.5rem] md:w-[54.875rem] font-SVNLagu text-1.125 md:text-2 font-semibold leading-1.4 text-center text-gray-600 [&_strong]:text-yellow-500 md:[&_strong]:uppercase'>
          Tận tâm đồng hành cùng các <strong>đối tác toàn cầu</strong>. Mang đến
          trải nghiệm thang máy và chất lượng dịch vụ một cách tốt nhất
        </h2>
      </div>
      <SlidePartner />
    </section>
  )
}
