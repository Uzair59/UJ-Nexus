import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import TrustSection from '@/components/sections/TrustSection'
import FeaturedWork from '@/components/sections/FeaturedWork'
import ServicesSection from '@/components/sections/ServicesSection'
import WhyUsSection from '@/components/sections/WhyUsSection'
import ProcessSection from '@/components/sections/ProcessSection'
import StatsSection from '@/components/sections/StatsSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import FoundersSection from '@/components/sections/FoundersSection'
import FAQSection from '@/components/sections/FAQSection'
import ContactSection from '@/components/sections/ContactSection'
import ScrollProgress from '@/components/ui/ScrollProgress'

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <HeroSection />
        <TrustSection />
        <FeaturedWork />
        <ServicesSection />
        <WhyUsSection />
        <ProcessSection />
        <StatsSection />
        <TestimonialsSection />
        <FoundersSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
