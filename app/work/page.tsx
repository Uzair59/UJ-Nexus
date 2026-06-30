import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ScrollProgress from '@/components/ui/ScrollProgress'
import FeaturedWork from '@/components/sections/FeaturedWork'
import CTASection from '@/components/sections/CTASection'
import StatsSection from '@/components/sections/StatsSection'

export const metadata: Metadata = {
  title: 'Our Work',
  description:
    'Explore UJ Nexus case studies — real projects, real results. See how we have helped startups and businesses achieve measurable growth through premium digital experiences.',
}

export default function WorkPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="pt-24">
        {/* Page Header */}
        <div className="py-20 text-center relative overflow-hidden mesh-gradient">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 orb orb-accent opacity-20 pointer-events-none" />
          <div className="max-w-3xl mx-auto px-4 relative z-10 space-y-6">
            <p className="text-accent-400 text-sm font-semibold tracking-widest uppercase">Our Work</p>
            <h1 className="font-heading font-bold text-5xl sm:text-6xl text-white">
              Results That <span className="gradient-text">Speak Louder</span>
            </h1>
            <p className="text-gray-400 text-xl leading-relaxed">
              Every project we take on is treated as our own business. Here is proof.
            </p>
          </div>
        </div>
        <FeaturedWork />
        <StatsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
