'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Code2, Zap, Palette, Sparkles, TrendingUp, Share2, BarChart3 } from 'lucide-react'
import { staggerContainer, staggerItem, fadeUp } from '@/lib/animations/variants'
import { services } from '@/lib/data/services'

const iconMap: Record<string, React.ElementType> = {
  Code2, Zap, Palette, Sparkles, TrendingUp, Share2, BarChart3,
}

export default function ServicesSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <section className="py-24 relative overflow-hidden" id="services" ref={ref}>
      <div className="absolute top-0 left-0 w-full h-px gradient-line" />
      <div className="absolute bottom-0 left-0 w-full h-px gradient-line" />

      {/* Background */}
      <div className="absolute inset-0 mesh-gradient opacity-60" />
      <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] orb orb-secondary opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center max-w-2xl mx-auto mb-16 space-y-4"
        >
          <motion.p variants={fadeUp} className="text-primary-400 text-sm font-semibold tracking-widest uppercase">
            Our Services
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-heading font-bold text-4xl sm:text-5xl text-white">
            Everything You Need to <span className="gradient-text">Dominate Online</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-400 text-lg leading-relaxed">
            A full suite of digital services delivered by experts who treat your business goals as their own.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Code2
            const isHovered = hovered === service.id

            return (
              <motion.div
                key={service.id}
                variants={staggerItem}
                onMouseEnter={() => setHovered(service.id)}
                onMouseLeave={() => setHovered(null)}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                <Link href={`/services#${service.id}`} className="block h-full group">
                  <article
                    className={`relative h-full glass rounded-2xl p-6 border transition-all duration-300 overflow-hidden card-shine ${
                      isHovered
                        ? 'border-primary-500/40 shadow-[0_0_40px_rgba(79,70,229,0.2)]'
                        : 'border-white/[0.08] hover:border-white/15'
                    }`}
                  >
                    {/* Glow effect on hover */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 transition-opacity duration-300 pointer-events-none`}
                      animate={{ opacity: isHovered ? 0.06 : 0 }}
                    />

                    {/* Icon */}
                    <div className={`inline-flex w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} items-center justify-center mb-5 shadow-lg`}>
                      <Icon size={22} className="text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="font-heading font-bold text-lg text-white mb-2 group-hover:text-primary-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-5">{service.shortDesc}</p>

                    {/* Features */}
                    <ul className="space-y-2 mb-5">
                      {service.features.slice(0, 3).map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-gray-400 text-xs">
                          <div className="w-1 h-1 rounded-full bg-primary-400 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <div className="flex items-center gap-1.5 text-primary-400 text-sm font-medium group-hover:gap-2.5 transition-all">
                      Learn More
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </article>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
