import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ScrollProgress from '@/components/ui/ScrollProgress'
import FoundersSection from '@/components/sections/FoundersSection'
import WhyUsSection from '@/components/sections/WhyUsSection'
import StatsSection from '@/components/sections/StatsSection'
import TechStackSection from '@/components/sections/TechStackSection'
import CTASection from '@/components/sections/CTASection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about UJ Nexus — a premium digital agency founded by Uzair (Lead Developer) and Javeriya (Growth Strategist). Discover our story, values, and mission.',
}

export default function AboutPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="pt-24">
        {/* Page Header */}
        <div className="py-20 text-center relative overflow-hidden mesh-gradient">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 orb orb-secondary opacity-20 pointer-events-none" />
          <div className="max-w-3xl mx-auto px-4 relative z-10 space-y-6">
            <p className="text-secondary-400 text-sm font-semibold tracking-widest uppercase">About UJ Nexus</p>
            <h1 className="font-heading font-bold text-5xl sm:text-6xl text-white">
              We Are <span className="gradient-text">Builders</span> at Heart
            </h1>
            <p className="text-gray-400 text-xl leading-relaxed max-w-2xl mx-auto">
              UJ Nexus was founded on the belief that businesses deserve digital partners who truly care about their growth — not just their invoice.
            </p>
          </div>
        </div>

        {/* Mission Statement */}
        <section className="py-16 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass-strong rounded-2xl p-10 border border-white/[0.08] text-center">
              <blockquote className="font-heading font-bold text-2xl sm:text-3xl text-white leading-relaxed">
                &ldquo;Our mission is to help businesses establish a powerful online presence, generate quality leads, and scale through technology and strategic marketing.&rdquo;
              </blockquote>
              <p className="text-primary-400 font-medium mt-6">— Uzair & Javeriya, Founders of UJ Nexus</p>
            </div>
          </div>
        </section>

        <FoundersSection />
        <WhyUsSection />
        <StatsSection />
        <TechStackSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
