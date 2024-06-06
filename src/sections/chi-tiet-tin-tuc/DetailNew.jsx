'use client'

import Image from 'next/image'
import {useEffect, useRef, useState} from 'react'
import {toast} from 'sonner'
import Link from 'next/link'
import {useGSAP} from '@gsap/react'
import {ScrollSmoother} from 'gsap/ScrollSmoother'
import {scrollSmootherConfig} from '@/components/gsap/GsapProvider'
import {regDuAnUrl} from '@/lib/reg'
import {usePathname} from 'next/navigation'
import {Fade} from 'react-awesome-reveal'

export default function DetailNew({isMobile, data}) {
  const pathname = usePathname()
  const smootherRef = useRef(null)
  const [h4Array, setH4Array] = useState([])
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, [])
  useGSAP(() => {
    smootherRef.current = ScrollSmoother.create(scrollSmootherConfig)
    if (regDuAnUrl.test(pathname) && isMobile) {
      smootherRef.current.kill()
    }
  }, [pathname, isMobile])
  useEffect(() => {
    if (data) {
      setH4Array([])
      const h4Elements = document
        .querySelector('.content-container')
        .querySelectorAll('h4')
      h4Elements.forEach((element) => {
        setH4Array((prevState) => [...prevState, element.textContent.trim()])
      })
    }
  }, [data])
  return (
    <section className='pt-5 md:pt-[3rem] md:w-[74rem] mx-auto pb-[3rem] md:pb-[6rem] max-md:px-3'>
      <Fade
        direction='up'
        triggerOnce
      >
        <h1 className='text-1.5 md:text-3 font-semibold leading-1.1 text-grey-700 font-SVNLagu md:text-center w-[18.875rem] md:w-[53.625rem] md:mx-auto mb-6 md:mb-8'>
          {data?.posts[0].title}
        </h1>
      </Fade>
      <div className='px-5 py-4 md:p-[1.88rem] border border-yellow-500 rounded-[0.75rem] md:rounded-[1rem] mb-5 md:mb-8 bg-yellow-500/5'>
        <Fade
          direction='up'
          triggerOnce
        >
          <h4 className='text-grey-700 md:text-grey-900 font-Iciel text-1 md:text-1.25 font-medium md:font-bold leading-1.3 mb-[0.87rem] md:mb-4'>
            Nội dung chính
          </h4>
        </Fade>
        <nav className='grid grid-cols-1 gap-2'>
          <Fade
            direction='up'
            cascade
            damping={0.2}
            triggerOnce
          >
            {h4Array.map((item, i) => {
              return (
                <button
                  key={i}
                  className='text-grey-500 font-Iciel md:font-medium leading-1.5 text-start text-0.875 md:text-1'
                  onClick={() =>
                    smootherRef.current.scrollTo(
                      document
                        .querySelector('.content-container')
                        .querySelectorAll('h4')[i],
                    )
                  }
                >
                  {item}
                </button>
              )
            })}
          </Fade>
        </nav>
      </div>
      <div
        className='content-container [&_h4]:mt-5 [&_h4]:md:mt-8 [&_h4]:text-1 [&_h4]:md:text-1.125 [&_h4]:font-medium [&_h4]:md:font-bold [&_h4]:leading-1.5 [&_h4]:text-grey-700 [&_h4]:md:text-[#454545] [&_h4]:font-Iciel [&_h4]:mb-2 [&_h4]:md:mb-3 [&_p]:text-grey-500 [&_p]:text-0.875 md:[&_p]:text-1 [&_p]:leading-1.5 [&_p]:font-Iciel [&_p]:mb-4 md:[&_p]:mb-5 [&_img]:object-cover [&_img]:w-full [&_img]:mb-2.5 [&_img]:mt-5 max-md:text-justify [&_ul]:list-disc [&_ol]:list-decimal [&_ul]:list-inside [&_ol]:list-inside [&_ul]:mb-4 [&_ol]:mb-4 md:[&_ul]:mb-5 md:[&_ol]:mb-5 [&_li]:mb-1 [&_ul]:text-0.875 md:[&_ul:text-1 [&_ol]:text-0.875 md:[&_ol]:text-1'
        dangerouslySetInnerHTML={{__html: data?.posts[0].content}}
      ></div>
      <div className='flex flex-row items-center ml-auto w-fit'>
        <p className='font-Iciel text-grey-500 text-0.875 md:text-1 leading-1.2 mr-3 md:mr-4'>
          Chia sẻ :
        </p>
        <Link
          href={`https://www.facebook.com/dialog/feed?
          app_id=145634995501895
          &display=popup&caption=An%20example%20caption 
          &link=${isClient && window.location.href}
          &redirect_uri=https://developers.facebook.com/tools/explorer`}
          target='_blank'
        >
          <Image
            src={`/images/tin-tuc/facebook.svg`}
            alt='facebook'
            width={120}
            height={120}
            className='mr-[0.375rem] md:mr-2 size-8'
          />
        </Link>
        <button
          onClick={() => {
            navigator.clipboard.writeText(window.location.href)
            toast.success('Đã sao chép')
          }}
        >
          <Image
            src={`/images/tin-tuc/copy.svg`}
            alt='copy'
            width={120}
            height={120}
            className='size-7'
          />
        </button>
      </div>
    </section>
  )
}
