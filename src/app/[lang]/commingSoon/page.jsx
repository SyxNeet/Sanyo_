import React from 'react'
import CommingSoon from '@/sections/commingSoon'
import {getDictionary} from '../../../dictionaries/dictionaries'
export default async function CommingSoonPage({params}) {
  const t = await getDictionary(params.lang)
  return <CommingSoon dictionary={t} />
}
