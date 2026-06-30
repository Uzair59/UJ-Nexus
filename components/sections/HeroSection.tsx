'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Phone, MessageSquare } from 'lucide-react'
import Link from 'next/link'
import { fadeUp, staggerContainer } from '@/lib/animations/variants'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden mesh-gradient pt-20" id="home">
      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-black/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-20 lg:py-0">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Content (Column 7) */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-8 text-left"
          >
            {/* Badge */}
            <motion.div variants={fadeUp}>
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass border border-primary-500/30 text-xs sm:text-sm text-primary-300 font-semibold tracking-wide uppercase">
                <span className="w-2 h-2 rounded-full bg-accent-400 animate-ping" />
                Premium Digital Agency
              </div>
            </motion.div>

            {/* Headline */}
            <motion.div variants={fadeUp} className="space-y-4">
              <h1 className="font-heading text-5xl sm:text-6xl lg:text-[4.5rem] xl:text-[5.25rem] font-bold leading-[1.02] tracking-tight text-white">
                Building <span className="gradient-text">Digital Nexus</span> Systems That Power Growth
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.p variants={fadeUp} className="text-gray-400 text-lg sm:text-xl leading-relaxed max-w-2xl">
              We partner with ambitious global brands to engineer high-end web applications, 
              immersive custom design systems, and conversion-optimized growth architectures. 
              No templates. Just pure innovation.
            </motion.p>

            {/* Buttons */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="#contact"
                id="hero-cta-primary"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4.5 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-bold text-base shadow-glow-primary hover:shadow-glow-secondary transition-all duration-300 hover:scale-[1.02] btn-shine text-center"
              >
                <Phone size={18} />
                Book Discovery Call
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#work"
                id="hero-cta-secondary"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4.5 rounded-xl glass border border-white/10 text-white font-bold text-base hover:border-white/20 hover:bg-white/10 transition-all duration-300 text-center"
              >
                View Our Work
                <ArrowRight size={16} className="opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - SVG Digital Nexus System (Column 5) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            {/* Ambient background blur */}
            <div className="absolute inset-0 bg-primary-500/10 blur-[100px] rounded-full pointer-events-none" />

            {/* Custom SVG Animated Nexus System */}
            <svg
              viewBox="0 0 500 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto max-w-[480px] select-none will-change-transform"
            >
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#4F46E5" />
                  <stop offset="50%" stopColor="#7C3AED" />
                  <stop offset="100%" stopColor="#06B6D4" />
                </linearGradient>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.1" />
                  <stop offset="50%" stopColor="#7C3AED" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.1" />
                </linearGradient>
                <filter id="svgGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="10" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Outer tech circles */}
              <circle cx="250" cy="250" r="190" stroke="url(#lineGrad)" strokeWidth="1" strokeDasharray="10 15" />
              <circle cx="250" cy="250" r="150" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="4 6" />

              {/* Grid Lines */}
              <line x1="250" y1="50" x2="250" y2="450" stroke="url(#lineGrad)" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="50" y1="250" x2="450" y2="250" stroke="url(#lineGrad)" strokeWidth="1" strokeDasharray="3 3" />

              {/* Connecting paths for data packets */}
              <path id="path1" d="M 250 250 L 100 130 A 200 200 0 0 0 100 370 L 250 250" stroke="url(#lineGrad)" strokeWidth="1.5" fill="none" />
              <path id="path2" d="M 250 250 L 400 130 A 200 200 0 0 1 400 370 L 250 250" stroke="url(#lineGrad)" strokeWidth="1.5" fill="none" />
              <path id="path3" d="M 250 50 A 200 200 0 0 1 450 250 A 200 200 0 0 1 250 450 A 200 200 0 0 1 50 250 A 200 200 0 0 1 250 50" stroke="url(#lineGrad)" strokeWidth="1" strokeDasharray="10 10" fill="none" />

              {/* Nodes / Intersection points */}
              <circle cx="100" cy="130" r="6" fill="#4F46E5" />
              <circle cx="100" cy="130" r="12" stroke="#4F46E5" strokeWidth="1" strokeOpacity="0.4" />
              
              <circle cx="100" cy="370" r="6" fill="#7C3AED" />
              <circle cx="100" cy="370" r="12" stroke="#7C3AED" strokeWidth="1" strokeOpacity="0.4" />

              <circle cx="400" cy="130" r="6" fill="#06B6D4" />
              <circle cx="400" cy="130" r="12" stroke="#06B6D4" strokeWidth="1" strokeOpacity="0.4" />

              <circle cx="400" cy="370" r="6" fill="#4F46E5" />
              <circle cx="400" cy="370" r="12" stroke="#4F46E5" strokeWidth="1" strokeOpacity="0.4" />

              {/* Central Glowing Nexus Sphere */}
              <circle cx="250" cy="250" r="45" fill="#050816" stroke="url(#grad1)" strokeWidth="3" filter="url(#svgGlow)" />
              <circle cx="250" cy="250" r="30" fill="url(#grad1)" fillOpacity="0.15" />
              <circle cx="250" cy="250" r="8" fill="#FFFFFF" />

              {/* Concentric rotating dashes around center */}
              <circle cx="250" cy="250" r="70" stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="12 12" />

              {/* Data Flow Packets (Animated) */}
              <circle r="4" fill="#06B6D4">
                <animateMotion dur="7s" repeatCount="indefinite" path="M 250 250 L 100 130 A 200 200 0 0 0 100 370 L 250 250" />
              </circle>
              <circle r="4" fill="#7C3AED">
                <animateMotion dur="5s" repeatCount="indefinite" path="M 250 250 L 400 130 A 200 200 0 0 1 400 370 L 250 250" />
              </circle>
              <circle r="4.5" fill="#FFFFFF">
                <animateMotion dur="9s" repeatCount="indefinite" path="M 250 50 A 200 200 0 0 1 450 250 A 200 200 0 0 1 250 450 A 200 200 0 0 1 50 250 A 200 200 0 0 1 250 50" />
              </circle>

              {/* Growth indicators */}
              <g transform="translate(230, 205) scale(0.4)">
                <path d="M12 2v20M17 5H7M19 12H5M17 19H7" stroke="#FFFFFF" strokeWidth="2" strokeOpacity="0.3"/>
              </g>
            </svg>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-gray-600 text-xs font-semibold tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border border-white/10 flex items-start justify-center pt-1.5"
        >
          <div className="w-1.5 h-2.5 rounded-full bg-primary-400" />
        </motion.div>
      </motion.div>
    </section>
  )
}
