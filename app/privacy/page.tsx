import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'UJ Nexus Privacy Policy — how we collect, use, and protect your personal information.',
}

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-primary-400 text-sm font-semibold tracking-widest uppercase mb-4">Legal</p>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl text-white mb-4">Privacy Policy</h1>
            <p className="text-gray-500 text-sm">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>

          <div className="prose prose-invert prose-lg max-w-none space-y-8">
            {[
              {
                title: '1. Information We Collect',
                content: 'We collect information you provide directly to us, such as when you fill out a contact form, book a discovery call, or communicate with us via email or WhatsApp. This may include your name, email address, company name, project details, and budget information.',
              },
              {
                title: '2. How We Use Your Information',
                content: 'We use the information collected to respond to your inquiries, provide our services, communicate about projects, send relevant updates (with your consent), and improve our services. We do not sell your personal information to third parties.',
              },
              {
                title: '3. Information Sharing',
                content: 'We do not share your personal information with third parties except as necessary to provide our services (e.g., using EmailJS for form submissions) or as required by law. All third-party services we use are GDPR-compliant.',
              },
              {
                title: '4. Data Security',
                content: 'We implement industry-standard security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.',
              },
              {
                title: '5. Cookies',
                content: 'Our website may use cookies to enhance your browsing experience. You can control cookie settings through your browser preferences. We use cookies for analytics purposes only and do not use tracking cookies for advertising.',
              },
              {
                title: '6. Your Rights',
                content: 'You have the right to access, correct, or delete your personal information. To exercise these rights, contact us at hello@ujnexus.com. We will respond to your request within 30 days.',
              },
              {
                title: '7. Contact Us',
                content: 'If you have questions about this Privacy Policy, please contact us at hello@ujnexus.com or through our contact form.',
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
