'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Crown, MessageSquare, Settings, Gauge, Handshake, Globe } from 'lucide-react'
import { staggerContainer, staggerItem, fadeUp } from '@/lib/animations/variants'
import { whyUsPoints } from '@/lib/data/siteData'

const iconMap: Record<string, React.ElementType> = {
  Crown, MessageSquare, Settings, Gauge, Handshake, Globe,
}

export default function WhyUsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-24 relative overflow-hidden" id="why-us" ref={ref}>
      <div className="absolute top-1/2 left-0 w-80 h-80 orb orb-primary opacity-10 pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center max-w-2xl mx-auto mb-16 space-y-4"
        >
          <motion.p variants={fadeUp} className="text-accent-400 text-sm font-semibold tracking-widest uppercase">
            Why UJ Nexus
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-heading font-bold text-4xl sm:text-5xl text-white">
            Why Leading Brands <span className="gradient-text">Choose Us</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-400 text-lg leading-relaxed">
            We are not just another agency. We are your strategic growth partner.
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {whyUsPoints.map((point, i) => {
            const Icon = iconMap[point.icon] || Globe
            return (
              <motion.div
                key={point.title}
                variants={staggerItem}
                whileHover={{ y: -5, scale: 1.01 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="group relative glass rounded-2xl p-6 border border-white/[0.08] hover:border-white/15 transition-all duration-300 overflow-hidden card-shine hover:shadow-card-hover"
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${point.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />

                {/* Number */}
                <span className="absolute top-5 right-5 font-heading font-bold text-4xl text-white/[0.04] select-none">
                  {String(i + 1).padStart(2, '0')}
                </span>

                {/* Icon */}
                <div className={`inline-flex w-12 h-12 rounded-xl bg-gradient-to-br ${point.gradient} items-center justify-center mb-5`}>
                  <Icon size={22} className="text-white" />
                </div>

                {/* Content */}
                <h3 className="font-heading font-bold text-lg text-white mb-3 group-hover:text-primary-300 transition-colors">
                  {point.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{point.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
