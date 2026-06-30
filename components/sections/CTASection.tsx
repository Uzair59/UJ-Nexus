'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'
import { fadeUp, staggerContainer } from '@/lib/animations/variants'

export default function CTASection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-secondary-500/15 to-accent-500/10" />
          <div className="absolute inset-0 bg-[#050816]/40" />
          <div className="absolute inset-0 border border-white/10 rounded-3xl" />

          {/* Orbs */}
          <div className="absolute top-0 right-0 w-80 h-80 orb orb-primary opacity-30 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 orb orb-secondary opacity-25 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-48 orb orb-accent opacity-10 pointer-events-none" />

          {/* Grid */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
            }}
          />

          <div className="relative z-10 py-20 px-8 sm:px-12 lg:px-20 text-center">
            {/* Badge */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="space-y-6"
            >
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-accent-500/30 text-accent-300 text-sm font-medium mb-2">
                <Sparkles size={14} />
                Ready to Build Something Extraordinary?
              </motion.div>

              <motion.h2 variants={fadeUp} className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight max-w-3xl mx-auto">
                Let&apos;s Turn Your Vision Into a{' '}
                <span className="gradient-text">Digital Success Story</span>
              </motion.h2>

              <motion.p variants={fadeUp} className="text-gray-400 text-lg sm:text-xl max-w-xl mx-auto leading-relaxed">
                Join 50+ ambitious businesses that trusted UJ Nexus to build their digital presence and drive measurable growth.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Link
                  href="/contact"
                  id="cta-start-project"
                  className="group relative inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold text-base shadow-glow-primary hover:shadow-glow-secondary transition-all duration-300 hover:scale-[1.03] btn-shine"
                >
                  <Sparkles size={18} />
                  Start Your Project
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/work"
                  className="group inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm font-medium transition-colors"
                >
                  See Our Results
                  <ArrowRight size={14} className="opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Link>
              </motion.div>

              {/* Trust indicators */}
              <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-8 pt-6 border-t border-white/[0.08] mt-6">
                {[
                  { value: '50+', label: 'Projects Delivered' },
                  { value: '98%', label: 'Satisfaction Rate' },
                  { value: '24h', label: 'Response Time' },
                ].map((item) => (
                  <div key={item.label} className="text-center">
                    <p className="font-heading font-bold text-2xl text-white">{item.value}</p>
                    <p className="text-gray-500 text-xs">{item.label}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
