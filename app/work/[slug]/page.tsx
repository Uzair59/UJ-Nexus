import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ScrollProgress from '@/components/ui/ScrollProgress'
import CTASection from '@/components/sections/CTASection'
import { caseStudies } from '@/lib/data/work'
import { ArrowLeft, ArrowRight, CheckCircle2, TrendingUp } from 'lucide-react'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const study = caseStudies.find((s) => s.slug === slug)
  if (!study) return {}
  return {
    title: study.title,
    description: study.shortDesc,
  }
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params
  const study = caseStudies.find((s) => s.slug === slug)
  if (!study) notFound()

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <div className={`py-20 relative overflow-hidden bg-gradient-to-br ${study.gradient} opacity-90`}>
          <div className="absolute inset-0 bg-[#050816]/70" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors text-sm"
            >
              <ArrowLeft size={16} /> Back to Work
            </Link>
            <div className="flex flex-wrap gap-2 mb-6">
              {study.tags.map((tag) => (
                <span key={tag} className="text-xs px-3 py-1.5 rounded-full glass border border-white/20 text-white/80">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-4">
              {study.title}
            </h1>
            <p className="text-gray-300 text-xl">{study.shortDesc}</p>
            <p className="text-gray-500 text-sm mt-4">{study.industry} · {study.year}</p>
          </div>
        </div>

        {/* Results Banner */}
        <div className="border-y border-white/[0.06] bg-white/[0.02]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {study.results.map((result) => (
                <div key={result.label} className="text-center">
                  <p className="font-heading font-bold text-3xl text-white">{result.value}</p>
                  <p className="text-gray-500 text-sm mt-1">{result.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Case Study Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-16">
          {/* Challenge */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center">
                <TrendingUp size={16} className="text-red-400 rotate-180" />
              </div>
              <h2 className="font-heading font-bold text-2xl text-white">The Challenge</h2>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed">{study.challenge}</p>
          </div>

          {/* Solution */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary-500/20 flex items-center justify-center">
                <CheckCircle2 size={16} className="text-primary-400" />
              </div>
              <h2 className="font-heading font-bold text-2xl text-white">Our Solution</h2>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed">{study.solution}</p>
          </div>

          {/* Results */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-accent-500/20 flex items-center justify-center">
                <TrendingUp size={16} className="text-accent-400" />
              </div>
              <h2 className="font-heading font-bold text-2xl text-white">The Results</h2>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {study.results.map((result) => (
                <div key={result.label} className="glass rounded-2xl p-6 border border-white/[0.08]">
                  <p className="font-heading font-bold text-3xl text-white mb-1">{result.value}</p>
                  <p className="text-gray-400 text-sm">{result.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="border-t border-white/[0.06]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex justify-between">
            <Link href="/work" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
              <ArrowLeft size={16} /> All Case Studies
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold text-sm">
              Start Your Project <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        <CTASection />
      </main>
      <Footer />
    </>
  )
}
