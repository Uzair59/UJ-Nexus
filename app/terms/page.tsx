import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'UJ Nexus Terms of Service — the terms governing our services and client relationships.',
}

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-primary-400 text-sm font-semibold tracking-widest uppercase mb-4">Legal</p>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl text-white mb-4">Terms of Service</h1>
            <p className="text-gray-500 text-sm">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>

          <div className="space-y-8">
            {[
              {
                title: '1. Acceptance of Terms',
                content: 'By engaging with UJ Nexus services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.',
              },
              {
                title: '2. Services',
                content: 'UJ Nexus provides digital services including web development, UI/UX design, branding, SEO, social media marketing, and digital growth strategy. The specific scope of services for each project is defined in individual project agreements.',
              },
              {
                title: '3. Payment Terms',
                content: 'Payment schedules are agreed upon at project commencement. Typically, projects require a 50% upfront deposit with the remaining balance due upon completion. All payments are non-refundable unless otherwise specified in the project agreement.',
              },
              {
                title: '4. Intellectual Property',
                content: 'Upon full payment, clients receive full ownership of all custom work created for their project. UJ Nexus retains the right to showcase completed work in our portfolio unless the client explicitly requests confidentiality.',
              },
              {
                title: '5. Revisions',
                content: 'Projects include unlimited revisions within the agreed scope during the development phase. Additional work outside the defined scope will be quoted separately.',
              },
              {
                title: '6. Client Responsibilities',
                content: 'Clients are responsible for providing necessary content, assets, and feedback in a timely manner. Delays in client response may impact project timelines. UJ Nexus is not responsible for delays caused by the client.',
              },
              {
                title: '7. Limitation of Liability',
                content: 'UJ Nexus\' liability is limited to the amount paid for the specific service. We are not liable for indirect, incidental, or consequential damages arising from the use of our services.',
              },
              {
                title: '8. Governing Law',
                content: 'These terms are governed by applicable law. Any disputes shall be resolved through mutual negotiation. If resolution is not possible, both parties agree to seek mediation before pursuing legal action.',
              },
            ].map((section) => (
              <div key={section.title} className="space-y-3">
                <h2 className="font-heading font-bold text-xl text-white">{section.title}</h2>
                <p className="text-gray-400 leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-white/[0.08]">
            <Link href="/" className="text-primary-400 hover:text-primary-300 text-sm transition-colors">
              ← Back to Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
