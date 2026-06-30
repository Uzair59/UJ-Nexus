import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ScrollProgress from '@/components/ui/ScrollProgress'
import ContactSection from '@/components/sections/ContactSection'
import FAQSection from '@/components/sections/FAQSection'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with UJ Nexus. Book a free discovery call, send us your project details, or chat with us on WhatsApp. Response guaranteed within 24 hours.',
}

export default function ContactPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="pt-24">
        {/* Page Header */}
        <div className="py-20 text-center relative overflow-hidden mesh-gradient">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 orb orb-primary opacity-20 pointer-events-none" />
          <div className="max-w-3xl mx-auto px-4 relative z-10 space-y-6">
            <p className="text-primary-400 text-sm font-semibold tracking-widest uppercase">Contact Us</p>
            <h1 className="font-heading font-bold text-5xl sm:text-6xl text-white">
              Let&apos;s Build Something <span className="gradient-text">Remarkable</span>
            </h1>
            <p className="text-gray-400 text-xl leading-relaxed">
              Tell us about your vision. We respond within 24 hours with a tailored proposal.
            </p>
          </div>
        </div>
        <ContactSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  )
}
