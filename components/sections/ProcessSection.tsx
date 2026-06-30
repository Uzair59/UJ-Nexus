'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Search, Map, Palette, Code2, Rocket, TrendingUp } from 'lucide-react'
import { staggerContainer, fadeUp } from '@/lib/animations/variants'
import { processSteps } from '@/lib/data/siteData'

const iconMap: Record<string, React.ElementType> = {
  Search, Map, Palette, Code2, Rocket, TrendingUp,
}

export default function ProcessSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-24 relative overflow-hidden" id="process" ref={ref}>
      <div className="absolute inset-0 mesh-gradient opacity-40" />
      <div className="absolute top-1/2 right-0 w-96 h-96 orb orb-accent opacity-10 pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center max-w-2xl mx-auto mb-20 space-y-4"
        >
          <motion.p variants={fadeUp} className="text-secondary-400 text-sm font-semibold tracking-widest uppercase">
            Our Process
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-heading font-bold text-4xl sm:text-5xl text-white">
            How We Turn Ideas Into <span className="gradient-text">Digital Success</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-400 text-lg">
            A proven, repeatable process designed to deliver exceptional results every time.
          </motion.p>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="absolute top-10 left-[calc(50%-0.5px)] w-px h-full bg-gradient-to-b from-primary-500/50 via-secondary-500/30 to-transparent hidden lg:block" />

          <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-16 lg:gap-y-12">
            {processSteps.map((step, i) => {
              const Icon = iconMap[step.icon] || Rocket
              const isRight = i % 2 === 1

              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: isRight ? 40 : -40, y: 20 }}
                  animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className={`group relative flex gap-5 items-start ${isRight ? 'lg:flex-row' : 'lg:flex-row-reverse lg:text-right'}`}
                >
                  {/* Step indicator */}
                  <div className="flex-shrink-0 relative">
                    <div
                      className="w-20 h-20 rounded-2xl glass border border-white/10 flex flex-col items-center justify-center gap-1 group-hover:border-primary-500/40 transition-colors duration-300 group-hover:shadow-glow-primary"
                      style={{ boxShadow: `0 0 0px ${step.color}00` }}
                    >
                      <Icon size={20} style={{ color: step.color }} />
                      <span className="font-heading font-bold text-xs text-gray-500">{step.step}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-3">
                    <h3 className="font-heading font-bold text-xl text-white mb-2 group-hover:text-primary-300 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
