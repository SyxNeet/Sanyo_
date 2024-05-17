'use client'
import {useEffect} from 'react'
import {useParams, useSearchParams} from 'next/navigation'

const useChangePage = () => {
  const params = useParams()
  const searchParams = useSearchParams()
  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }, [params, searchParams])
}
export default useChangePage
