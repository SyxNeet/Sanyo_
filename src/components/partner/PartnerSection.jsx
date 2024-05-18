'use client'

import Image from 'next/image'
import SlidePartner from '@/components/slide-partner'
import {Fade} from 'react-awesome-reveal'

export default function PartnerSection({isMobile, data}) {
  return (
    <section className='relative h-[27.5rem] w-[23.4375rem] md:w-full md:h-[50rem] xl:h-screen'>
      {!isMobile && (
        <Image
          src={`/images/about-us/doi-tac-background-img.png`}
          alt={``}
          className='absolute hidden object-cover w-full h-full md:block -z-10'
          width={1920}
          height={1080}
        />
      )}
      {isMobile && (
        <Image
          src={`/images/about-us/doi-tac-background-img-mobile.png`}
          alt={``}
          className='absolute block object-cover w-full h-full md:hidden -z-10'
          width={1920}
          height={1080}
        />
      )}
      <div className='absolute top-[3.37rem] md:top-[5rem] left-1/2 -translate-x-1/2'>
        <Fade
          direction='down'
          triggerOnce
        >
          <h3 className='font-SVNLagu font-medium leading-1.5 tracking-0.1 text-0.625 md:text-1.25 text-gray-500 text-center mb-[0.59rem] md:mb-4 uppercase opacity-80'>
            VỀ SANYO YUSOKI
          </h3>
        </Fade>
        <Fade
          direction='up'
          triggerOnce
        >
          <h2
            className='w-[20.5rem] md:w-[51.875rem] font-SVNLagu text-1.125 md:text-2 font-semibold leading-1.4 text-center text-gray-600 [&_strong]:text-yellow-500 [&_strong]:font-semibold md:[&_strong]:uppercase'
            dangerouslySetInnerHTML={{__html: data.heading}}
          ></h2>
        </Fade>
      </div>
      <Fade triggerOnce>
        <SlidePartner data={data} />
      </Fade>
    </section>
  )
}
