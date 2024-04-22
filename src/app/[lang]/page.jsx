import HomePage from '@/sections/home'
import {getDictionary} from '../../dictionaries/dictionaries'
export default async function Home({params, searchParams}) {
  const lang = await getDictionary(params.lang)
  const {viewport} = searchParams
  const isMobile = viewport?.includes('mobile')
  return (
    <main>
      <HomePage isMobile={isMobile} />
    </main>
  )
}
