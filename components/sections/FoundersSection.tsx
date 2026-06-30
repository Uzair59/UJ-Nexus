'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Twitter, Linkedin, Github, Instagram, ArrowUpRight } from 'lucide-react'
import { staggerContainer, staggerItem, fadeUp, fadeLeft, fadeRight } from '@/lib/animations/variants'
import { founders } from '@/lib/data/team'

export default function FoundersSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-24 relative overflow-hidden" id="about" ref={ref}>
      <div className="absolute inset-0 mesh-gradient opacity-50" />
      <div className="absolute top-0 left-0 w-full h-px gradient-line" />
      <div className="absolute bottom-0 left-0 w-full h-px gradient-line" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center max-w-2xl mx-auto mb-20 space-y-4"
        >
          <motion.p variants={fadeUp} className="text-secondary-400 text-sm font-semibold tracking-widest uppercase">
            The Founders
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-heading font-bold text-4xl sm:text-5xl text-white">
            The Minds Behind <span className="gradient-text">UJ Nexus</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-400 text-lg leading-relaxed">
            A founder-led agency where senior expertise meets genuine passion for client success.
          </motion.p>
        </motion.div>

        {/* Founder Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {founders.map((founder, i) => (
            <motion.div
              key={founder.id}
              initial={{ opacity: 0, y: 40, x: i === 0 ? -20 : 20 }}
              animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -6 }}
              className="group"
            >
              <div className="glass-strong rounded-2xl overflow-hidden border border-white/[0.08] hover:border-white/15 transition-all duration-300 hover:shadow-card-hover">
                {/* Top gradient band */}
                <div className={`h-3 w-full bg-gradient-to-r ${founder.gradient}`} />

                <div className="p-8 space-y-6">
                  {/* Author info */}
                  <div className="flex items-start gap-5">
                    <div className="relative flex-shrink-0">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${founder.gradient} flex items-center justify-center text-2xl font-heading font-bold text-white shadow-lg`}>
                        {founder.avatar}
                      </div>
                      {/* Glow */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${founder.gradient} opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-300`} />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-2xl text-white">{founder.name}</h3>
                      <p className="text-primary-400 font-medium text-sm mt-0.5">{founder.role}</p>
                      <p className="text-gray-400 text-sm mt-3 leading-relaxed">{founder.bio}</p>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-3">
                    {founder.stats.map((stat) => (
                      <div key={stat.label} className="bg-white/[0.04] rounded-xl p-3.5 text-center border border-white/[0.06]">
                        <p className="font-heading font-bold text-xl text-white">{stat.value}</p>
                        <p className="text-gray-500 text-xs mt-0.5">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Skills */}
                  <div className="space-y-3">
                    <p className="text-gray-500 text-xs font-medium uppercase tracking-wider">Expertise</p>
                    <div className="flex flex-wrap gap-2">
                      {founder.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs px-3 py-1.5 rounded-lg glass border border-white/[0.08] text-gray-300 hover:border-primary-500/30 hover:text-white transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Social links */}
                  <div className="flex items-center gap-3 pt-2 border-t border-white/[0.06]">
                    {Object.entries(founder.social).map(([platform, url]) => {
                      const icons: Record<string, React.ElementType> = {
                        twitter: Twitter,
                        linkedin: Linkedin,
                        github: Github,
                        instagram: Instagram,
                      }
                      const Icon = icons[platform]
                      if (!Icon) return null
                      return (
                        <a
                          key={platform}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 glass rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:border-primary-500/30 transition-all border border-white/[0.08]"
                          aria-label={platform}
                        >
                          <Icon size={15} />
                        </a>
                      )
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 text-sm">
            When you work with UJ Nexus, you work directly with us —{' '}
            <span className="text-white font-medium">no account managers, no junior teams, no outsourcing.</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
