import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import HowItWorks from '../../components/HowItWorks/HowItWorks'
import AITools from '../../components/AITools/AITools'
import Audience from '../../components/Audience/Audience'
import EarlyTester from '../../components/EarlyTester/EarlyTester'
import MentoraFlow from '../../components/MentoraFlow/MentoraFlow'
import Missions from '../../components/Missions/Missions'
import Navbar from '../../components/Navbar/Navbar'
import Problem from '../../components/Problem/Problem'
import ProductPreview from '../../components/ProductPreview/ProductPreview'
import SignalBar from '../../components/SignalBar/SignalBar'
import Waitlist from '../../components/Waitlist/Waitlist'

function LandingPage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Problem />
      <MentoraFlow />
      <AITools />
      <SignalBar />
      <HowItWorks />
      <Missions />
      <ProductPreview />
      <Audience />
      <EarlyTester />
      <Waitlist />
      <Footer />
    </main>
  )
}

export default LandingPage
