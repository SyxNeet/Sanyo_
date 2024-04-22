'use client'

import {useEffect, useState} from 'react'
import {achieved} from '../../../data/ve-chung-toi/achieved'
import AchievedNum from '@/components/achieved/AchievedNum'
import Image from 'next/image'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'

export default function Achieved({isMobile}) {
  const [startCounting, setStartCounting] = useState(true)
  useEffect(() => {
    const fnc = () => {
      const container = document.querySelector('.achieved-num-container')
      const rect = container.getBoundingClientRect()
      if (
        (rect.top >= 0 && rect.top < window.innerHeight) ||
        (rect.top <= 0 &&
          Math.abs(rect.top) < Math.abs(parseFloat(container.offsetHeight)))
      ) {
        setStartCounting(true)
      } else {
        setStartCounting(false)
      }
    }
    window.addEventListener('scroll', fnc)
    return () => window.removeEventListener('scroll', fnc)
  }, [])
  useGSAP(() => {
    if (!isMobile) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.achieved-num-container',
          start: 'top bottom-=20%',
          end: 'bottom top',
          once: true,
        },
      })
      tl.to('.japan', {
        scale: 6,
        duration: 1.2,
      })
      tl.to(
        '.japan',
        {
          scale: 1,
          duration: 1.2,
          ease: 'power1.in',
        },
        '>+=0.4',
      )
    }
  }, [isMobile])
  return (
    <>
      <section className='md:h-[35.8125rem] flex flex-col md:flex-row items-stretch'>
        <div className='relative md:basis-[60%] mb-[1.88rem]'>
          {!isMobile && (
            <>
              <div className='absolute top-0 left-0 w-[4.9375rem] h-[4.6875rem] opacity-15 bg-yellow-500' />
              <div className='absolute top-0 right-0 w-[4.4375rem] h-[4.1875rem] opacity-15 bg-yellow-500'>
                <div className='absolute bottom-0 left-0 w-[2.3125rem] h-[2.1875rem] opacity-[6.67] bg-yellow-500 -translate-x-full translate-y-full' />
              </div>
            </>
          )}
          {!isMobile && (
            <h3 className='text-grey-500 font-SVNLagu text-1.25 font-medium tracking-0.1 uppercase pt-[4.2rem] ml-[8.1rem] w-[17.8125rem] mb-[2.2rem]'>
              Những điều chúng tôi đã đạt được
            </h3>
          )}
          {isMobile && (
            <div className='mb-[1.13rem]'>
              <h2 className='w-[80%] mx-auto text-grey-900 text-center font-SVNLagu text-1.5 font-semibold leading-1.3 mb-2'>
                Những điều chúng tôi đã đạt{' '}
                <strong className='font-semibold leading-1.3 text-yellow-500 uppercase'>
                  đạt được
                </strong>
              </h2>
              <p className='w-[88%] mx-auto text-center text-0.75 leading-1.5 font-Iciel text-grey-700'>
                Đóng góp vào sự phát triển bền vững của ngành thang máy thông
                qua nghiên cứu và phát triển liên tục
              </p>
            </div>
          )}
          <div className='w-[84%] md:w-full mx-auto achieved-num-container grid grid-cols-2 items-center md:ml-[7.56rem] gap-y-[1.56rem] md:gap-x-[11.4rem]'>
            {achieved.map((item, i) => {
              return (
                <AchievedNum
                  key={i}
                  {...item}
                  style={
                    isMobile
                      ? {order: `${i === 1 ? 2 : i === 2 ? 1 : i}`}
                      : undefined
                  }
                  startCounting={startCounting}
                />
              )
            })}
          </div>
        </div>
        <div className='relative md:basis-[40%] h-[24.375rem] md:h-auto flex flex-row items-center justify-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='463'
            height='463'
            viewBox='0 0 463 463'
            fill='none'
            className='absolute object-contain md:h-[80%] w-full -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 -z-10'
          >
            <path
              opacity='0.06'
              d='M418.801 251.656C412.209 245.063 405.717 236.772 398.426 229.28C413.808 214.096 428.589 201.51 442.972 186.925C469.139 160.354 469.439 124.392 443.371 97.8208C417.103 71.1493 390.436 44.8775 363.569 18.8054C338.101 -5.86824 303.443 -5.66846 277.775 18.8054C264.791 31.292 251.607 43.5788 239.322 56.7647C233.23 63.2578 229.934 62.2589 224.341 56.3652C211.656 43.1793 198.473 30.4928 185.189 18.0062C160.22 -5.66846 124.564 -5.36878 99.7942 18.5057C89.0075 28.8946 78.2208 39.1836 67.6338 49.7722C49.8557 67.6531 31.4783 85.1344 14.699 103.914C-4.67715 125.491 -4.47739 158.156 14.699 180.133C25.9851 193.119 38.4697 205.006 50.6547 217.093C55.1492 221.488 60.5425 224.985 65.9359 229.18C61.7411 233.775 60.0432 235.773 58.0456 237.771C46.0604 249.758 34.0751 261.745 22.1898 273.733C-6.97432 303.001 -6.77456 338.463 22.5893 367.632C47.5585 392.505 72.4279 417.379 97.3972 442.352C124.763 469.723 160.719 469.923 188.185 442.552C202.468 428.267 216.55 413.683 231.232 398.699C233.829 400.897 235.128 401.895 236.326 403.094C250.509 417.179 264.392 431.564 278.774 445.349C303.344 468.824 339.1 468.624 363.37 444.85C390.436 418.178 417.303 391.307 443.97 364.236C467.941 339.962 469.239 306.098 446.967 280.126C438.277 270.037 428.39 261.146 419.001 251.656H418.801ZM259.498 74.6456C271.782 62.2589 284.067 49.8721 296.452 37.4854C309.436 24.4993 331.609 24.1996 344.593 37.0858C371.16 63.4576 397.727 89.8294 423.995 116.501C439.576 132.284 439.476 151.563 424.195 167.446C409.812 182.43 395.33 197.214 380.149 212.798C362.87 194.318 346.49 177.735 320.423 177.835C294.754 177.935 278.574 194.417 262.594 211.499C257.999 207.803 254.604 205.006 250.509 201.61C269.285 184.628 285.366 167.746 285.266 141.874C285.166 116.401 269.585 99.519 251.408 83.3363C254.504 80.0398 257.001 77.1429 259.597 74.5457L259.498 74.6456ZM358.975 229.28C335.104 260.547 312.233 267.639 282.469 229.28C307.039 194.517 331.908 193.119 358.975 229.28ZM232.131 103.215C264.691 127.789 268.686 152.263 232.131 180.732C201.868 159.455 192.28 134.581 232.131 103.215ZM244.915 231.678L231.532 244.264L218.947 231.678L231.532 219.391L244.915 231.678ZM38.8692 167.346C23.6879 151.863 23.3883 132.584 38.5696 117.1C65.2368 90.0292 92.1037 63.2578 119.07 36.4864C130.257 25.3983 151.83 23.8 164.215 34.6884C181.094 49.4725 196.475 65.7551 213.354 82.2375C195.277 99.519 178.597 115.802 178.597 141.774C178.597 167.846 194.877 184.328 212.455 200.911C208.86 204.706 205.864 207.803 202.068 211.899C196.975 207.004 192.28 202.509 187.586 197.914C160.22 170.943 124.763 171.042 97.497 198.113C93.2023 202.409 89.5069 207.304 84.8127 212.898C80.0186 208.303 76.7226 205.106 73.4267 201.909C61.8409 190.422 50.1553 178.934 38.6695 167.247L38.8692 167.346ZM170.607 243.565C151.431 262.445 133.653 262.345 114.576 243.265C106.652 235.34 106.652 227.349 114.576 219.291C125.063 208.602 132.354 205.006 144.539 205.206C155.426 205.206 162.916 211.299 170.507 218.991C182.792 231.478 182.892 231.378 170.507 243.565H170.607ZM162.117 429.266C149.932 440.454 131.056 437.657 117.772 424.571C95.5994 402.794 73.8262 380.718 51.9531 358.742C46.8594 353.647 41.6658 348.652 36.8717 343.258C24.7866 329.773 23.7878 311.792 35.8729 298.706C50.9543 282.523 67.2343 267.439 83.9138 250.957C88.2085 255.152 92.7029 259.448 97.0975 263.843C124.863 291.314 160.22 291.514 187.886 264.243C192.18 259.947 195.976 255.152 200.67 249.858C205.264 254.054 208.56 257.05 212.855 261.046C195.676 277.728 178.797 293.811 178.697 319.783C178.597 345.955 194.577 362.438 211.656 378.221C194.577 395.902 179.097 413.383 162.018 429.066L162.117 429.266ZM232.131 359.541C197.074 333.369 197.474 308.695 232.131 281.624C262.993 304.799 270.784 328.974 232.131 359.541ZM425.493 344.257C398.426 372.027 370.96 399.398 343.194 426.569C331.309 438.157 313.231 439.855 301.546 429.066C284.467 413.383 268.986 395.902 252.107 378.421C268.786 363.037 285.166 346.355 285.166 320.582C285.166 294.71 269.186 277.828 250.608 261.246C254.903 257.55 258.399 254.653 262.694 250.957C278.374 267.939 294.754 284.521 320.822 284.421C346.59 284.321 362.87 268.238 380.848 248.56C385.043 253.954 388.439 258.948 392.634 263.244C403.221 274.232 414.207 284.721 424.794 295.709C438.977 310.493 439.676 329.473 425.493 344.057V344.257Z'
              fill='#C82D2C'
            />
          </svg>
          <div className='relative h-full md:h-[85%] w-full overflow-hidden'>
            <Image
              src={`/images/about-us/japan.png`}
              alt=''
              className='absolute object-contain h-full -translate-x-1/2 -translate-y-1/2 japan top-1/2 left-1/2'
              style={{transformOrigin: '49% 65%'}}
              width={1920}
              height={1080}
            />
          </div>
        </div>
      </section>
    </>
  )
}
