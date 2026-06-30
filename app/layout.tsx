import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import NexusBackground from '@/components/ui/NexusBackground'
import WhatsAppButton from '@/components/ui/WhatsAppButton'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://ujnexus.com'),
  title: {
    default: 'UJ Nexus — Premium Digital Agency | Web Development & Growth Strategy',
    template: '%s | UJ Nexus',
  },
  description:
    'UJ Nexus is a world-class digital agency specializing in Next.js development, UI/UX design, branding, SEO, and digital growth strategy. We help ambitious businesses build powerful digital experiences that drive real business growth.',
  keywords: [
    'digital agency',
    'web development',
    'Next.js development',
    'UI/UX design',
    'branding agency',
    'SEO agency',
    'social media marketing',
    'digital growth strategy',
    'premium web design',
    'UJ Nexus',
  ],
  authors: [{ name: 'UJ Nexus', url: 'https://ujnexus.com' }],
  creator: 'UJ Nexus',
  publisher: 'UJ Nexus',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ujnexus.com',
    siteName: 'UJ Nexus',
    title: 'UJ Nexus — Premium Digital Agency',
    description:
      'Building digital experiences that drive real business growth. Web development, UI/UX design, branding, SEO, and growth strategy.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'UJ Nexus — Premium Digital Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UJ Nexus — Premium Digital Agency',
    description: 'Building digital experiences that drive real business growth.',
    images: ['/og-image.png'],
    creator: '@ujnexus',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://ujnexus.com',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'UJ Nexus',
  url: 'https://ujnexus.com',
  logo: 'https://ujnexus.com/logo.png',
  description:
    'Premium digital agency specializing in web development, UI/UX design, branding, and digital growth strategy.',
  founders: [
    {
      '@type': 'Person',
      name: 'Uzair',
      jobTitle: 'Founder & Lead Developer',
    },
    {
      '@type': 'Person',
      name: 'Javeriya',
      jobTitle: 'Co-Founder & Growth Strategist',
    },
  ],
  sameAs: [
    'https://linkedin.com/company/ujnexus',
    'https://twitter.com/ujnexus',
    'https://instagram.com/ujnexus',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'hello@ujnexus.com',
    contactType: 'Customer Service',
    availableLanguage: 'English',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} dark`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#050816" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`font-sans bg-[#050816] text-white antialiased overflow-x-hidden`}>
        <div className="noise" aria-hidden="true" />
        <NexusBackground />
        <WhatsAppButton />
        {children}
      </body>
    </html>
  )
}
