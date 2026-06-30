'use client'

import { motion, useInView, useAnimationFrame } from 'framer-motion'
import { useRef, useState } from 'react'
import { Star, Quote } from 'lucide-react'
import { staggerContainer, fadeUp } from '@/lib/animations/variants'
import { testimonials } from '@/lib/data/testimonials'

function TestimonialCard({ testimonial }: { testimonial: (typeof testimonials)[0] }) {
  return (
    <div className="flex-shrink-0 w-[340px] sm:w-[380px] glass-strong rounded-2xl p-6 border border-white/[0.08] hover:border-white/15 transition-all duration-300 mx-3 card-shine">
      {/* Quote */}
      <Quote size={24} className="text-primary-500/40 mb-4" />

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      {/* Content */}
      <p className="text-gray-300 text-sm leading-relaxed mb-6">"{testimonial.content}"</p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center flex-shrink-0`}>
          <span className="text-white font-bold text-sm">{testimonial.avatar}</span>
        </div>
        <div>
          <p className="text-white font-semibold text-sm font-heading">{testimonial.name}</p>
          <p className="text-gray-500 text-xs">{testimonial.role}, {testimonial.company}</p>
        </div>
      </div>
    </div>
  )
}

export default function TestimonialsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [paused, setPaused] = useState(false)

  const doubled = [...testimonials, ...testimonials, ...testimonials]

  return (
    <section className="py-24 overflow-hidden relative" id="testimonials" ref={ref}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] orb orb-primary opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-14">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center space-y-4"
        >
          <motion.p variants={fadeUp} className="text-primary-400 text-sm font-semibold tracking-widest uppercase">
            Client Testimonials
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-heading font-bold text-4xl sm:text-5xl text-white">
            What Our Clients <span className="gradient-text">Say About Us</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-400 text-lg max-w-xl mx-auto">
            Real results. Real relationships. Real testimonials from clients who trusted us with their growth.
          </motion.p>
        </motion.div>
      </div>

      {/* Scrolling Strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="tech-strip"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Row 1 */}
        <div className="flex mb-4 overflow-hidden">
          <div
            className="flex"
            style={{
              animation: `scrollX 40s linear infinite ${paused ? 'paused' : 'running'}`,
              width: 'max-content',
            }}
          >
            {doubled.map((t, i) => (
              <TestimonialCard key={`row1-${i}`} testimonial={t} />
            ))}
          </div>
        </div>

        {/* Row 2 — reverse */}
        <div className="flex overflow-hidden">
          <div
            className="flex"
            style={{
              animation: `scrollX 50s linear infinite reverse ${paused ? 'paused' : 'running'}`,
              width: 'max-content',
            }}
          >
            {[...doubled].reverse().map((t, i) => (
              <TestimonialCard key={`row2-${i}`} testimonial={t} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
