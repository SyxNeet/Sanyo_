import {useEffect, useState} from 'react'

export function useDetectDirectionScroll() {
  const [directionScroll, setDirectionScroll] = useState(undefined)
  useEffect(() => {
    let lastScrollTop = window.scrollY || document.documentElement.scrollTop
    function detectDirection() {
      const scrollTopPosition =
        window.scrollY || document.documentElement.scrollTop
      if (scrollTopPosition < lastScrollTop) {
        setDirectionScroll('up')
      } else if (scrollTopPosition > lastScrollTop) {
        setDirectionScroll('down')
      }
      lastScrollTop = scrollTopPosition <= 0 ? 0 : scrollTopPosition
    }
    window.addEventListener('scroll', detectDirection)
    return () => window.removeEventListener('scroll', detectDirection)
  }, [])
  return directionScroll
}
