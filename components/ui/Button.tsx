'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  onClick?: () => void
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  external?: boolean
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className,
  disabled,
  type = 'button',
  external = false,
}: ButtonProps) {
  const base =
    'relative inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 btn-shine focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050816] disabled:opacity-50 disabled:cursor-not-allowed select-none'

  const variants = {
    primary:
      'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-glow-primary hover:shadow-glow-secondary hover:scale-[1.02] active:scale-[0.98]',
    secondary:
      'bg-white/10 text-white border border-white/10 hover:bg-white/15 hover:border-white/20 backdrop-blur-sm',
    outline:
      'border border-primary-500/50 text-primary-400 hover:bg-primary-500/10 hover:border-primary-500',
    ghost: 'text-gray-300 hover:text-white hover:bg-white/5',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm gap-1.5',
    md: 'px-6 py-3 text-sm gap-2',
    lg: 'px-8 py-4 text-base gap-2.5',
  }

  const classes = cn(base, variants[variant], sizes[size], className)

  const content = (
    <motion.span
      className={classes}
      whileHover={{ scale: variant === 'primary' ? 1.02 : 1.01 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      {children}
    </motion.span>
  )

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      )
    }
    return <Link href={href}>{content}</Link>
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className="outline-none">
      {content}
    </button>
  )
}
