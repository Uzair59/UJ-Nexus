'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { staggerContainer, staggerItem, fadeUp } from '@/lib/animations/variants'
import { stats } from '@/lib/data/siteData'
import AnimatedCounter from '@/components/ui/AnimatedCounter'

export default function StatsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/[0.07] via-secondary-500/[0.07] to-accent-500/[0.07]" />
      <div className="absolute top-0 left-0 w-full h-px gradient-line" />
      <div className="absolute bottom-0 left-0 w-full h-px gradient-line" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-14 space-y-4"
        >
          <motion.p variants={fadeUp} className="text-accent-400 text-sm font-semibold tracking-widest uppercase">
            By The Numbers
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-heading font-bold text-4xl sm:text-5xl text-white">
            Results That <span className="gradient-text">Define Us</span>
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={staggerItem}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="group relative glass-strong rounded-2xl p-8 text-center border border-white/[0.08] hover:border-primary-500/30 transition-all duration-300 overflow-hidden"
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="font-heading font-bold text-5xl sm:text-6xl text-white mb-2 relative z-10">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="font-heading font-semibold text-white text-base mb-1 relative z-10">{stat.label}</p>
              <p className="text-gray-500 text-xs relative z-10">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
