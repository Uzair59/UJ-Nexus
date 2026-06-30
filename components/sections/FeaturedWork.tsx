'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, Sparkles, TrendingUp } from 'lucide-react'
import { fadeUp, staggerContainer, staggerItem } from '@/lib/animations/variants'
import { caseStudies } from '@/lib/data/work'

export default function FeaturedWork() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-32 relative overflow-hidden" id="work" ref={ref}>
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-primary-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20"
        >
          <div className="space-y-4">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-primary-500/20 text-xs text-primary-300 font-semibold tracking-wider uppercase">
              <Sparkles size={12} className="text-accent-400" />
              Selected Portfolio
            </motion.div>
            <motion.h2 variants={fadeUp} className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight">
              Case Studies That <br />
              <span className="gradient-text">Redefine Benchmarks</span>
            </motion.h2>
          </div>
          <motion.div variants={fadeUp} className="pt-4 md:pt-0">
            <Link
              href="/work"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl glass border border-white/10 text-white font-bold text-sm hover:border-white/20 hover:bg-white/5 transition-all duration-300 group"
            >
              Explore All Case Studies
              <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform duration-300" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Large Alternating Case Study Layout */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-12"
        >
          {caseStudies.map((study, idx) => (
            <motion.div
              key={study.id}
              variants={staggerItem}
              className="group"
            >
              <Link href={`/work/${study.slug}`} className="block">
                <article className="glass-strong rounded-3xl overflow-hidden border border-white/[0.08] hover:border-primary-500/35 transition-all duration-500 shadow-[0_16px_48px_rgba(0,0,0,0.4)] hover:shadow-[0_24px_64px_rgba(79,70,229,0.12)]">
                  <div className="grid lg:grid-cols-12 items-stretch">
                    {/* Left Column: Visual representation (Column 5) */}
                    <div className={`lg:col-span-5 relative min-h-[300px] flex items-center justify-center p-8 bg-gradient-to-br ${study.gradient} group-hover:scale-[1.01] transition-transform duration-500`}>
                      {/* Floating glowing nodes for Nexus feel */}
                      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_0,transparent_100%)]" />
                      
                      {/* Large Key Stat overlay */}
                      <div className="relative text-center space-y-4 z-10">
                        <div className="w-24 h-24 rounded-2xl bg-black/25 backdrop-blur-md flex flex-col items-center justify-center border border-white/20 mx-auto shadow-lg transform group-hover:scale-105 group-hover:rotate-1 transition-all duration-500">
                          <p className="text-white font-heading font-bold text-3xl leading-none">
                            {study.results[0].value}
                          </p>
                          <p className="text-white/60 text-[9px] font-bold uppercase tracking-wider mt-1 text-center px-1">
                            {study.results[0].label}
                          </p>
                        </div>
                        <div className="flex gap-2.5 justify-center">
                          {study.results.slice(1, 3).map((res, i) => (
                            <div key={i} className="bg-black/30 backdrop-blur-md rounded-xl px-4 py-2 border border-white/10 shadow-sm">
                              <p className="text-white font-bold text-base leading-none">{res.value}</p>
                              <p className="text-white/50 text-[9px] uppercase tracking-wider mt-0.5">{res.label}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Arrow link overlay */}
                      <div className="absolute top-6 right-6 w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/25 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 shadow-md">
                        <ArrowRight size={20} className="text-white -rotate-45" />
                      </div>
                    </div>

                    {/* Right Column: Project details (Column 7) */}
                    <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between space-y-8 bg-[#050816]/70 backdrop-blur-sm">
                      <div className="space-y-5">
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-semibold px-3 py-1 rounded-lg bg-primary-500/10 border border-primary-500/20 text-primary-300 tracking-wider uppercase">
                            {study.industry}
                          </span>
                          <span className="text-gray-600 text-xs">/</span>
                          <span className="text-gray-500 text-xs font-semibold uppercase tracking-wider">
                            Year {study.year}
                          </span>
                        </div>

                        <h3 className="font-heading font-bold text-3xl sm:text-4xl text-white group-hover:text-primary-300 transition-colors duration-300 leading-tight">
                          {study.title}
                        </h3>

                        <p className="text-gray-400 text-base leading-relaxed max-w-2xl">
                          {study.challenge}
                        </p>
                      </div>

                      <div className="space-y-6 pt-6 border-t border-white/[0.06]">
                        {/* Results Highlight Row */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                          {study.results.slice(0, 3).map((res) => (
                            <div key={res.label} className="space-y-1">
                              <p className="text-gray-500 text-xs font-medium uppercase tracking-wider">{res.label}</p>
                              <p className="font-heading font-bold text-xl text-white flex items-center gap-1.5">
                                <TrendingUp size={14} className="text-green-400" />
                                {res.value}
                              </p>
                            </div>
                          ))}
                        </div>

                        {/* Tech tags */}
                        <div className="flex flex-wrap gap-2 pt-2">
                          {study.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs px-3 py-1.5 rounded-lg glass border border-white/[0.06] text-gray-300 font-semibold uppercase tracking-wider"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
