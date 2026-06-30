'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { TrendingUp, Star, Award, MessageSquare, ShieldCheck } from 'lucide-react'
import { staggerContainer, staggerItem, fadeUp } from '@/lib/animations/variants'

const trustPoints = [
  {
    icon: TrendingUp,
    value: '50+',
    label: 'Projects Delivered',
    description: 'Successful custom products shipped globally.',
    color: 'from-blue-500 to-indigo-500',
  },
  {
    icon: Star,
    value: '98%',
    label: 'Client Satisfaction',
    description: 'Top-tier rating based on post-launch surveys.',
    color: 'from-amber-400 to-orange-500',
  },
  {
    icon: Award,
    value: '3+',
    label: 'Years Experience',
    description: 'Expertise in modern full-stack development.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: MessageSquare,
    value: 'Fast Comm',
    label: 'Instant Communication',
    description: '2-hour response guarantee. No ghosting, ever.',
    color: 'from-green-400 to-emerald-600',
  },
  {
    icon: ShieldCheck,
    value: 'Founder-Led',
    label: 'Direct Excellence',
    description: 'Work directly with senior founders on every line.',
    color: 'from-cyan-400 to-teal-500',
  },
]

const technologies = [
  { name: 'Next.js', abbr: 'NX', color: 'from-gray-200 to-gray-400' },
  { name: 'React', abbr: 'RE', color: 'from-cyan-400 to-blue-500' },
  { name: 'TypeScript', abbr: 'TS', color: 'from-blue-400 to-blue-600' },
  { name: 'Tailwind CSS', abbr: 'TW', color: 'from-cyan-400 to-teal-500' },
  { name: 'Node.js', abbr: 'ND', color: 'from-green-400 to-green-600' },
  { name: 'MongoDB', abbr: 'MG', color: 'from-green-400 to-emerald-600' },
  { name: 'AWS', abbr: 'AW', color: 'from-orange-400 to-orange-600' },
  { name: 'Framer Motion', abbr: 'FM', color: 'from-pink-400 to-rose-500' },
  { name: 'PostgreSQL', abbr: 'PG', color: 'from-blue-400 to-indigo-600' },
  { name: 'Vercel', abbr: 'VC', color: 'from-gray-300 to-white' },
  { name: 'Figma', abbr: 'FG', color: 'from-purple-400 to-pink-500' },
  { name: 'GraphQL', abbr: 'GQ', color: 'from-pink-500 to-red-500' },
]

const TechBadge = ({ name, abbr, color }: { name: string; abbr: string; color: string }) => (
  <div className="flex items-center gap-3 px-5 py-3 glass rounded-xl border border-white/[0.08] min-w-fit flex-shrink-0 group hover:border-white/20 transition-all duration-200">
    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center shadow-sm`}>
      <span className="text-[#050816] font-bold text-xs">{abbr}</span>
    </div>
    <span className="text-gray-300 font-medium text-sm whitespace-nowrap group-hover:text-white transition-colors">{name}</span>
  </div>
)

export default function TrustSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const doubledTechs = [...technologies, ...technologies]

  return (
    <section className="py-24 relative overflow-hidden border-y border-white/[0.06]" ref={ref}>
      <div className="absolute inset-0 bg-[#050816]" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/[0.03] to-accent-500/[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <motion.p variants={fadeUp} className="text-accent-400 text-sm font-semibold tracking-widest uppercase">
            Trust & Credibility
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-heading font-bold text-4xl sm:text-5xl text-white">
            Built for Authority, <span className="gradient-text">Engineered for Results</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-400 text-lg leading-relaxed">
            We hold ourselves to the highest global standards, offering transparent, senior founder-led collaboration.
          </motion.p>
        </motion.div>

        {/* 5-Column Trust Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5"
        >
          {trustPoints.map((point) => {
            const Icon = point.icon
            return (
              <motion.div
                key={point.label}
                variants={staggerItem}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="group relative glass rounded-2xl p-6 border border-white/[0.08] hover:border-white/15 transition-all duration-300 overflow-hidden card-shine"
              >
                {/* Background glow on card hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${point.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300 pointer-events-none`} />

                {/* Icon box with gradient */}
                <div className={`inline-flex w-10 h-10 rounded-lg bg-gradient-to-br ${point.color} bg-opacity-20 items-center justify-center mb-5`}>
                  <Icon size={20} className="text-white" />
                </div>

                {/* Stats Value */}
                <p className="font-heading font-bold text-3xl text-white mb-1 group-hover:text-primary-300 transition-colors">
                  {point.value}
                </p>

                {/* Stats Label & Description */}
                <h3 className="text-white font-semibold text-sm mb-2">{point.label}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{point.description}</p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Tech Badges Infinite Scroll Strip */}
        <div className="pt-8 border-t border-white/[0.06]">
          <div className="text-center mb-6">
            <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider">Our Preferred Technology Ecosystem</p>
          </div>
          <div className="tech-strip overflow-hidden">
            <div className="flex gap-4" style={{ width: 'max-content' }}>
              <div
                className="flex gap-4 animate-[scrollX_48s_linear_infinite]"
                style={{ width: 'max-content' }}
              >
                {doubledTechs.map((tech, i) => (
                  <TechBadge key={`tech-${i}`} {...tech} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
