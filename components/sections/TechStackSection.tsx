'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { staggerContainer, staggerItem, fadeUp } from '@/lib/animations/variants'
import { techStack } from '@/lib/data/siteData'

const techColors: Record<string, string> = {
  nextjs: 'from-gray-200 to-white',
  react: 'from-cyan-400 to-blue-500',
  typescript: 'from-blue-400 to-blue-600',
  tailwind: 'from-cyan-400 to-teal-500',
  nodejs: 'from-green-400 to-green-600',
  mongodb: 'from-green-400 to-emerald-600',
  aws: 'from-orange-400 to-orange-600',
  framer: 'from-pink-400 to-rose-500',
  postgresql: 'from-blue-400 to-indigo-600',
  vercel: 'from-gray-300 to-white',
  figma: 'from-purple-400 to-pink-500',
  graphql: 'from-pink-500 to-red-500',
}

const techAbbr: Record<string, string> = {
  nextjs: 'NX', react: 'RE', typescript: 'TS', tailwind: 'TW',
  nodejs: 'ND', mongodb: 'MG', aws: 'AW', framer: 'FM',
  postgresql: 'PG', vercel: 'VC', figma: 'FG', graphql: 'GQ',
}

export default function TechStackSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-24 relative overflow-hidden" id="tech-stack" ref={ref}>
      <div className="absolute inset-0 mesh-gradient opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center max-w-2xl mx-auto mb-16 space-y-4"
        >
          <motion.p variants={fadeUp} className="text-accent-400 text-sm font-semibold tracking-widest uppercase">
            Technology Stack
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-heading font-bold text-4xl sm:text-5xl text-white">
            Tools We <span className="gradient-text">Master</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-400 text-lg">
            We stay on the bleeding edge of technology to deliver future-proof digital products.
          </motion.p>
        </motion.div>

        {/* Tech Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
        >
          {techStack.map((tech) => {
            const gradient = techColors[tech.icon] || 'from-primary-500 to-secondary-500'
            const abbr = techAbbr[tech.icon] || tech.name.slice(0, 2).toUpperCase()

            return (
              <motion.div
                key={tech.name}
                variants={staggerItem}
                whileHover={{ y: -6, scale: 1.03 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="group glass rounded-2xl p-5 border border-white/[0.08] hover:border-white/15 transition-all duration-300 text-center hover:shadow-card-hover card-shine"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform shadow-lg`}>
                  <span className="text-[#050816] font-bold text-sm">{abbr}</span>
                </div>
                <p className="text-white font-semibold text-sm font-heading">{tech.name}</p>
                <p className="text-gray-600 text-xs mt-0.5">{tech.category}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
