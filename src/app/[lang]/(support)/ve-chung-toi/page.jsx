import './styles.css'
import AboutUs from '@/sections/about-us'

export default function AboutUsPage({searchParams}) {
  const {viewport} = searchParams
  const isMobile = viewport.includes('mobile')
  return (
    <main>
      <AboutUs isMobile={isMobile} />
    </main>
  )
}
