import Navbar from './landing/Navbar'
import HeroSection from './landing/HeroSection'
import PlatformsRow from './landing/PlatformsRow'
import FeaturesSection from './landing/FeaturesSection'
import HowItWorks from './landing/HowItWorks'
import VideoFormats from './landing/VideoFormats'
import PricingSection from './landing/PricingSection'
import TestimonialsSection from './landing/TestimonialsSection'
import FaqSection from './landing/FaqSection'
import CtaSection from './landing/CtaSection'
import Footer from './landing/Footer'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <PlatformsRow />
        <FeaturesSection />
        <HowItWorks />
        <VideoFormats />
        <PricingSection />
        <TestimonialsSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
