import HomePage from '@/sections/home'
import {getDictionary} from '../../dictionaries/dictionaries'
export default async function Home({params}) {
  const t = await getDictionary(params.lang)
  return (
    <main>
      <HomePage />
    </main>
  )
}
