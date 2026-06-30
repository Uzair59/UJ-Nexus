'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ChevronDown, Plus, Minus } from 'lucide-react'
import { AnimatePresence } from 'framer-motion'
import { staggerContainer, staggerItem, fadeUp } from '@/lib/animations/variants'
import { faqItems } from '@/lib/data/faq'

function FAQItem({ item, isOpen, onToggle }: {
  item: (typeof faqItems)[0]
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <motion.div
      variants={staggerItem}
      className={`group glass rounded-2xl border transition-all duration-300 overflow-hidden ${
        isOpen ? 'border-primary-500/30 shadow-[0_0_30px_rgba(79,70,229,0.1)]' : 'border-white/[0.08] hover:border-white/15'
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-6 text-left"
        aria-expanded={isOpen}
        id={`faq-${item.id}`}
      >
        <span className={`font-heading font-semibold text-base sm:text-lg transition-colors duration-200 ${isOpen ? 'text-white' : 'text-gray-200 group-hover:text-white'}`}>
          {item.question}
        </span>
        <span className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
          isOpen ? 'bg-primary-500 text-white rotate-0' : 'bg-white/5 text-gray-400 group-hover:bg-white/10'
        }`}>
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="px-6 pb-6">
              <div className="h-px bg-gradient-to-r from-primary-500/30 to-transparent mb-4" />
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{item.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [openId, setOpenId] = useState<number | null>(1)

  return (
    <section className="py-24 relative overflow-hidden" id="faq" ref={ref}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] orb orb-secondary opacity-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16 space-y-4"
        >
          <motion.p variants={fadeUp} className="text-primary-400 text-sm font-semibold tracking-widest uppercase">
            FAQ
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-heading font-bold text-4xl sm:text-5xl text-white">
            Frequently Asked <span className="gradient-text">Questions</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-400 text-lg">
            Everything you need to know before starting your project with us.
          </motion.p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-3"
        >
          {faqItems.map((item) => (
            <FAQItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => setOpenId(openId === item.id ? null : item.id)}
            />
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center glass rounded-2xl p-8 border border-white/[0.08]"
        >
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <a
            href="mailto:hello@ujnexus.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold text-sm shadow-glow-primary hover:shadow-glow-secondary transition-all duration-300 hover:scale-[1.02]"
          >
            Ask Us Directly
          </a>
        </motion.div>
      </div>
    </section>
  )
}
