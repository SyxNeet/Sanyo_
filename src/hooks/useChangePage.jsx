'use client'

import {useEffect} from 'react'
import {useParams, useSearchParams} from 'next/navigation'
import gsap from 'gsap'

const useChangePage = () => {
  const params = useParams()
  const searchParams = useSearchParams()
  useEffect(() => {
    // window.scrollTo({top: 0, behavior: 'smooth'})
    gsap.to(window, {duration: 0.8, scrollTo: 0})
  }, [params, searchParams])
}
export default useChangePage
