import clsx from 'clsx'
import {useSwiper} from 'swiper/react'
import gsap from 'gsap'
import {useEffect} from 'react'

export default function PaginationProductionLine({activeImage, direction}) {
  const swiper = useSwiper()
  useEffect(() => {
    if (swiper.slides) {
      const paginationContainer = document.querySelector(
        '.pagination-bar-container',
      )
      const bars = document.querySelectorAll('.pagination-bar')
      if (direction === 'right') {
        const bar1 = document.querySelector(
          `.pagination-bar-${
            activeImage - 1 < 0 ? swiper.slides.length - 1 : activeImage - 1
          }`,
        )
        const bar2 = document.querySelector(`.pagination-bar-${activeImage}`)
        if (bar1 && bar2) {
          const distanceBar =
            parseFloat(
              window.getComputedStyle(bar1).getPropertyValue('margin-right'),
            ) +
            parseFloat(
              window.getComputedStyle(bar2).getPropertyValue('margin-left'),
            )
          const tl = gsap.timeline({})
          if (activeImage - 1 >= 0) {
            const translateBar1 = distanceBar + bar1.offsetWidth
            const translateBar2 = distanceBar + bar2.offsetWidth
            tl.to(bar1, {
              x: `${translateBar1}px`,
              duration: 0.8,
            })
            tl.to(
              bar2,
              {
                x: `-${translateBar2}px`,
                duration: 0.8,
              },
              '<',
            )
            bars.forEach((bar, i) => {
              if (i !== activeImage) {
                tl.set(bar, {
                  x: 0,
                  opacity: 0.4,
                })
              }
            })
            tl.set(
              bar2,
              {
                x: 0,
                opacity: 1,
              },
              '<',
            )
          } else {
            const translateBar1 =
              parseFloat(paginationContainer.offsetWidth) -
              parseFloat(bar1.offsetWidth) -
              distanceBar
            tl.to(bar1, {
              x: `-${translateBar1}px`,
              duration: 0.8,
            })
            bars.forEach((bar, i) => {
              const translateBar = distanceBar + bar.offsetWidth
              if (i !== bars.length - 1) {
                tl.to(
                  bar,
                  {
                    x: `${translateBar}px`,
                    duration: 0.8,
                  },
                  '<',
                )
              }
            })
            tl.set(bar1, {
              x: 0,
              opacity: 0.4,
            })
            bars.forEach((bar, i) => {
              if (i !== bars.length - 1) {
                tl.set(
                  bar,
                  {
                    x: 0,
                    opacity: i === 0 ? 1 : 0.4,
                  },
                  '<',
                )
              }
            })
          }
        }
      } else {
        const bar1 = document.querySelector(`.pagination-bar-${activeImage}`)
        const bar2 = document.querySelector(
          `.pagination-bar-${activeImage + 1}`,
        )
        if (bar1 && bar2) {
          const distanceBar =
            parseFloat(
              window.getComputedStyle(bar1).getPropertyValue('margin-right'),
            ) +
            parseFloat(
              window.getComputedStyle(bar2).getPropertyValue('margin-left'),
            )
          const tl = gsap.timeline({})
          const translateBar1 = distanceBar + bar1.offsetWidth
          const translateBar2 = distanceBar + bar2.offsetWidth
          tl.to(bar1, {
            x: `${translateBar1}px`,
            duration: 0.8,
          })
          tl.to(
            bar2,
            {
              x: `-${translateBar2}px`,
              duration: 0.8,
            },
            '<',
          )
          tl.set(bar1, {
            x: 0,
            opacity: 1,
          })
          tl.set(
            bar2,
            {
              x: 0,
              opacity: 0.4,
            },
            '<',
          )
        }
      }
    }
  }, [activeImage, swiper.slides])

  return (
    <div className='pagination-bar-container absolute flex flex-row w-[92%] left-1/2 -translate-x-1/2 z-20 bottom-[5%]'>
      {Array.from({length: swiper.slides.length}, (_, i) => i + 1).map(
        (item, i) => {
          return (
            <div
              className={clsx(
                `pagination-bar pagination-bar-${i} grow rounded-none bg-white h-[0.25rem] mx-3 opacity-40`,
              )}
            />
          )
        },
      )}
    </div>
  )
}
