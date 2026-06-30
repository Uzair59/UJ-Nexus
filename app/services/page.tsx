import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ScrollProgress from '@/components/ui/ScrollProgress'
import ServicesSection from '@/components/sections/ServicesSection'
import CTASection from '@/components/sections/CTASection'
import StatsSection from '@/components/sections/StatsSection'
import ProcessSection from '@/components/sections/ProcessSection'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Explore UJ Nexus services: Next.js web development, UI/UX design, branding, SEO, social media marketing, and digital growth strategy.',
}

export default function ServicesPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="pt-24">
        {/* Page Header */}
        <div className="py-20 text-center relative overflow-hidden mesh-gradient">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 orb orb-primary opacity-20 pointer-events-none" />
          <div className="max-w-3xl mx-auto px-4 relative z-10 space-y-6">
            <p className="text-primary-400 text-sm font-semibold tracking-widest uppercase">Our Services</p>
            <h1 className="font-heading font-bold text-5xl sm:text-6xl text-white">
              Full-Spectrum <span className="gradient-text">Digital Services</span>
            </h1>
            <p className="text-gray-400 text-xl leading-relaxed">
              Everything your business needs to dominate the digital space — under one roof, delivered by experts.
            </p>
          </div>
        </div>
        <ServicesSection />
        <ProcessSection />
        <StatsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
