import getData from '@/lib/getData'
import './styles.css'
import AboutUs from '@/sections/about-us'

const pageId = 188
async function getLeadershipMessage() {
  return getData(`/pages/${pageId}/leadership-message`)
}
async function getGreatExperience() {
  return getData(`/pages/${pageId}/great-experience`)
}

export default async function AboutUsPage({searchParams}) {
  const [dataLeadershipMessage, dataGreatExperience] = await Promise.all([
    getGreatExperience(),
    getLeadershipMessage(),
  ])
  console.log(
    '🚀 ~ AboutUsPage ~ dataLeadershipMessage:',
    dataLeadershipMessage,
  )
  console.log('🚀 ~ AboutUsPage ~ dataGreatExperience:', dataGreatExperience)

  const {viewport} = searchParams
  const isMobile = viewport.includes('mobile')
  return (
    <main>
      <AboutUs isMobile={isMobile} />
    </main>
  )
}
