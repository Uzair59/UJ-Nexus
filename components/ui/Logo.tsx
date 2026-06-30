'use client'

import React from 'react'

interface LogoProps {
  variant?: 'mark' | 'horizontal' | 'monochrome' | 'dark' | 'light'
  className?: string
  width?: number | string
  height?: number | string
}

export default function Logo({
  variant = 'horizontal',
  className = '',
  width,
  height,
}: LogoProps) {
  if (variant === 'mark') {
    return (
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        style={{ width: width || '100%', height: height || '100%' }}
      >
        <defs>
          <linearGradient id="ujGradMark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4F46E5" />
            <stop offset="50%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
          <filter id="ujGlowMark" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        <circle cx="50" cy="50" r="44" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.08" />
        <circle cx="50" cy="50" r="44" stroke="url(#ujGradMark)" strokeWidth="1" strokeOpacity="0.25" strokeDasharray="10 15 30 15" />
        <path
          d="M30 30 V50 A20 20 0 0 0 70 50 V30 V65 A10 10 0 0 1 50 65"
          stroke="url(#ujGradMark)"
          strokeWidth="9"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#ujGlowMark)"
        />
      </svg>
    )
  }

  if (variant === 'monochrome') {
    return (
      <svg
        viewBox="0 0 320 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        style={{ width: width || '100%', height: height || '100%' }}
      >
        <g transform="translate(10, 10) scale(0.6)">
          <circle cx="50" cy="50" r="44" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.08" />
          <circle cx="50" cy="50" r="44" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.25" strokeDasharray="10 15 30 15" />
          <path
            d="M30 30 V50 A20 20 0 0 0 70 50 V30 V65 A10 10 0 0 1 50 65"
            stroke="#ffffff"
            strokeWidth="9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <text
          x="85"
          y="47"
          fill="#FFFFFF"
          fontFamily="'Space Grotesk', system-ui, sans-serif"
          fontSize="26"
          fontWeight="700"
          letterSpacing="-0.03em"
        >
          UJ <tspan fill="#FFFFFF">Nexus</tspan>
        </text>
        <text
          x="85"
          y="63"
          fill="#FFFFFF"
          fillOpacity="0.6"
          fontFamily="'Inter', system-ui, sans-serif"
          fontSize="10"
          fontWeight="600"
          letterSpacing="0.2em"
        >
          PREMIUM DIGITAL AGENCY
        </text>
      </svg>
    )
  }

  if (variant === 'light') {
    return (
      <svg
        viewBox="0 0 320 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        style={{ width: width || '100%', height: height || '100%' }}
      >
        <defs>
          <linearGradient id="ujGradLight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4F46E5" />
            <stop offset="50%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
        <g transform="translate(10, 10) scale(0.6)">
          <circle cx="50" cy="50" r="44" stroke="#0f172a" strokeWidth="1.5" strokeOpacity="0.08" />
          <circle cx="50" cy="50" r="44" stroke="url(#ujGradLight)" strokeWidth="1.5" strokeOpacity="0.25" strokeDasharray="10 15 30 15" />
          <path
            d="M30 30 V50 A20 20 0 0 0 70 50 V30 V65 A10 10 0 0 1 50 65"
            stroke="url(#ujGradLight)"
            strokeWidth="9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <text
          x="85"
          y="47"
          fill="#0F172A"
          fontFamily="'Space Grotesk', system-ui, sans-serif"
          fontSize="26"
          fontWeight="700"
          letterSpacing="-0.03em"
        >
          UJ <tspan fill="url(#ujGradLight)">Nexus</tspan>
        </text>
        <text
          x="85"
          y="63"
          fill="#64748B"
          fontFamily="'Inter', system-ui, sans-serif"
          fontSize="10"
          fontWeight="600"
          letterSpacing="0.2em"
        >
          PREMIUM DIGITAL AGENCY
        </text>
      </svg>
    )
  }

  // default / dark / horizontal
  return (
    <svg
      viewBox="0 0 320 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ width: width || '100%', height: height || '100%' }}
    >
      <defs>
        <linearGradient id="ujGradDefault" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4F46E5" />
          <stop offset="50%" stopColor="#7C3AED" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
        <filter id="ujGlowDefault" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      <g transform="translate(10, 10) scale(0.6)">
        <circle cx="50" cy="50" r="44" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.08" />
        <circle cx="50" cy="50" r="44" stroke="url(#ujGradDefault)" strokeWidth="1.5" strokeOpacity="0.3" strokeDasharray="10 15 30 15" />
        <path
          d="M30 30 V50 A20 20 0 0 0 70 50 V30 V65 A10 10 0 0 1 50 65"
          stroke="url(#ujGradDefault)"
          strokeWidth="9"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#ujGlowDefault)"
        />
      </g>
      <text
        x="85"
        y="47"
        fill="#FFFFFF"
        fontFamily="'Space Grotesk', system-ui, sans-serif"
        fontSize="26"
        fontWeight="700"
        letterSpacing="-0.03em"
      >
        UJ <tspan fill="url(#ujGradDefault)">Nexus</tspan>
      </text>
      <text
        x="85"
        y="63"
        fill="#94A3B8"
        fontFamily="'Inter', system-ui, sans-serif"
        fontSize="10"
        fontWeight="600"
        letterSpacing="0.2em"
      >
        PREMIUM DIGITAL AGENCY
      </text>
    </svg>
  )
}
