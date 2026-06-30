'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import {
  Send, Phone, Mail, MessageCircle, Calendar, CheckCircle2,
  User, Building, DollarSign, FileText, ArrowRight,
} from 'lucide-react'
import { staggerContainer, fadeUp, fadeLeft, fadeRight } from '@/lib/animations/variants'

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  company: z.string().min(1, 'Company name is required'),
  budget: z.string().min(1, 'Please select a budget range'),
  details: z.string().min(20, 'Please provide at least 20 characters about your project'),
})

type FormData = z.infer<typeof schema>

const budgetOptions = [
  '$1,000 – $3,000',
  '$3,000 – $7,500',
  '$7,500 – $15,000',
  '$15,000 – $30,000',
  '$30,000+',
]

export default function ContactSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    setLoading(true)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      const result = await response.json()
      if (!response.ok) {
        throw new Error(result.error || 'Failed to send inquiry')
      }
      setSubmitted(true)
      reset()
    } catch (error) {
      console.error('Failed to send:', error)
      alert(error instanceof Error ? error.message : 'An error occurred while sending your inquiry. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-24 relative overflow-hidden" id="contact" ref={ref}>
      <div className="absolute top-0 left-0 w-full h-px gradient-line" />
      <div className="absolute inset-0 mesh-gradient opacity-40" />
      <div className="absolute top-1/4 -left-32 w-80 h-80 orb orb-primary opacity-20 pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 orb orb-secondary opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center max-w-2xl mx-auto mb-16 space-y-4"
        >
          <motion.p variants={fadeUp} className="text-accent-400 text-sm font-semibold tracking-widest uppercase">
            Get In Touch
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-heading font-bold text-4xl sm:text-5xl text-white">
            Start Your <span className="gradient-text">Dream Project</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-400 text-lg leading-relaxed">
            Tell us about your project and we will get back to you within 24 hours with a custom proposal.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Left — Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Contact methods */}
            {[
              {
                icon: Mail,
                label: 'Email Us',
                value: 'hello@ujnexus.com',
                href: 'mailto:hello@ujnexus.com',
                gradient: 'from-primary-500 to-secondary-500',
              },
              {
                icon: MessageCircle,
                label: 'WhatsApp',
                value: 'Chat With Us Now',
                href: 'https://wa.me/923001234567',
                gradient: 'from-green-500 to-emerald-500',
              },
              {
                icon: Calendar,
                label: 'Schedule a Call',
                value: 'Book Discovery Call',
                href: '/contact',
                gradient: 'from-secondary-500 to-accent-500',
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group flex items-center gap-4 glass rounded-2xl p-5 border border-white/[0.08] hover:border-white/15 transition-all duration-300 hover:shadow-card-hover"
              >
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  <item.icon size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs font-medium">{item.label}</p>
                  <p className="text-white font-semibold text-sm">{item.value}</p>
                </div>
                <ArrowRight size={14} className="ml-auto text-gray-600 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </a>
            ))}

            {/* Promise box */}
            <div className="glass rounded-2xl p-5 border border-primary-500/20">
              <p className="text-primary-400 text-xs font-semibold uppercase tracking-wider mb-3">Our Promise</p>
              {[
                'Response within 24 hours',
                'Free project consultation',
                'Custom proposal & pricing',
                'No commitment required',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5 mb-2">
                  <CheckCircle2 size={14} className="text-accent-400 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:col-span-3"
          >
            <div className="glass-strong rounded-2xl p-8 border border-white/[0.08]">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={32} className="text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-white">Message Sent!</h3>
                  <p className="text-gray-400">
                    Thank you for reaching out. We will get back to you within 24 hours with a custom proposal.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-xl glass border border-white/10 text-sm text-gray-300 hover:text-white hover:border-white/20 transition-all"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="space-y-2">
                      <label htmlFor="contact-name" className="flex items-center gap-2 text-gray-400 text-xs font-medium uppercase tracking-wider">
                        <User size={12} /> Your Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        placeholder="John Smith"
                        {...register('name')}
                        className={`w-full bg-white/[0.05] border rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50 transition-all ${errors.name ? 'border-red-500/50' : 'border-white/[0.08]'}`}
                      />
                      {errors.name && <p className="text-red-400 text-xs">{errors.name.message}</p>}
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label htmlFor="contact-email" className="flex items-center gap-2 text-gray-400 text-xs font-medium uppercase tracking-wider">
                        <Mail size={12} /> Email Address
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        placeholder="john@company.com"
                        {...register('email')}
                        className={`w-full bg-white/[0.05] border rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50 transition-all ${errors.email ? 'border-red-500/50' : 'border-white/[0.08]'}`}
                      />
                      {errors.email && <p className="text-red-400 text-xs">{errors.email.message}</p>}
                    </div>
                  </div>

                  {/* Company */}
                  <div className="space-y-2">
                    <label htmlFor="contact-company" className="flex items-center gap-2 text-gray-400 text-xs font-medium uppercase tracking-wider">
                      <Building size={12} /> Company / Project Name
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      placeholder="Your Company Inc."
                      {...register('company')}
                      className={`w-full bg-white/[0.05] border rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50 transition-all ${errors.company ? 'border-red-500/50' : 'border-white/[0.08]'}`}
                    />
                    {errors.company && <p className="text-red-400 text-xs">{errors.company.message}</p>}
                  </div>

                  {/* Budget */}
                  <div className="space-y-2">
                    <label htmlFor="contact-budget" className="flex items-center gap-2 text-gray-400 text-xs font-medium uppercase tracking-wider">
                      <DollarSign size={12} /> Project Budget
                    </label>
                    <select
                      id="contact-budget"
                      {...register('budget')}
                      className={`w-full bg-white/[0.05] border rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50 transition-all appearance-none cursor-pointer ${errors.budget ? 'border-red-500/50' : 'border-white/[0.08]'}`}
                    >
                      <option value="" className="bg-[#080b20] text-gray-400">Select budget range</option>
                      {budgetOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#080b20]">{opt}</option>
                      ))}
                    </select>
                    {errors.budget && <p className="text-red-400 text-xs">{errors.budget.message}</p>}
                  </div>

                  {/* Project Details */}
                  <div className="space-y-2">
                    <label htmlFor="contact-details" className="flex items-center gap-2 text-gray-400 text-xs font-medium uppercase tracking-wider">
                      <FileText size={12} /> Project Details
                    </label>
                    <textarea
                      id="contact-details"
                      rows={4}
                      placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                      {...register('details')}
                      className={`w-full bg-white/[0.05] border rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50 transition-all resize-none ${errors.details ? 'border-red-500/50' : 'border-white/[0.08]'}`}
                    />
                    {errors.details && <p className="text-red-400 text-xs">{errors.details.message}</p>}
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold text-base shadow-glow-primary hover:shadow-glow-secondary transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed btn-shine"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Your Inquiry
                        <ArrowRight size={16} />
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
