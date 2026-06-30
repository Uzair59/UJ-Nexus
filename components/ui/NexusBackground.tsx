'use client'

import React, { useEffect, useRef } from 'react'

export default function NexusBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    // Device-specific particle count for optimization
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
    const particleCount = isMobile ? 22 : 48
    const connectionDistance = isMobile ? 90 : 140

    interface Particle {
      x: number
      y: number
      vx: number
      vy: number
      radius: number
      pulseSpeed: number
      pulsePhase: number
    }

    const particles: Particle[] = []

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.28, // Subtle, slow movement
        vy: (Math.random() - 0.5) * 0.28,
        radius: Math.random() * 2 + 1,
        pulseSpeed: Math.random() * 0.02 + 0.005,
        pulsePhase: Math.random() * Math.PI * 2,
      })
    }

    // Handle Resize
    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)

    // Animation Loop
    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      // Draw background gradient mesh (software simulated for depth)
      const bgGrad = ctx.createRadialGradient(
        width * 0.5,
        height * 0.3,
        10,
        width * 0.5,
        height * 0.5,
        Math.max(width, height) * 0.8
      )
      bgGrad.addColorStop(0, '#0a0d24')
      bgGrad.addColorStop(0.5, '#050816')
      bgGrad.addColorStop(1, '#02030a')
      ctx.fillStyle = bgGrad
      ctx.fillRect(0, 0, width, height)

      // Update and Draw Particles
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        p.pulsePhase += p.pulseSpeed

        // Wrap around boundaries
        if (p.x < 0) p.x = width
        if (p.x > width) p.x = 0
        if (p.y < 0) p.y = height
        if (p.y > height) p.y = 0

        // Pulsing glow radius (clamped to avoid negative radius errors)
        const glowRadius = Math.max(0.1, p.radius + Math.sin(p.pulsePhase) * 1.5)
        const alpha = 0.35 + Math.sin(p.pulsePhase) * 0.15

        // Draw soft glow under nodes
        ctx.beginPath()
        ctx.arc(p.x, p.y, glowRadius * 4, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(124, 58, 237, ${alpha * 0.15})` // purple glow
        ctx.fill()

        // Draw core node
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(6, 182, 212, ${alpha})` // cyan core
        ctx.fill()
      })

      // Draw Connection Lines
      ctx.lineWidth = 0.65
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i]
          const p2 = particles[j]

          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < connectionDistance) {
            const alpha = (1 - dist / connectionDistance) * 0.18
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)

            // Dynamic gradient between purple/indigo and cyan for lines
            const lineGrad = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y)
            lineGrad.addColorStop(0, `rgba(79, 70, 229, ${alpha})`)
            lineGrad.addColorStop(0.5, `rgba(124, 58, 237, ${alpha * 0.8})`)
            lineGrad.addColorStop(1, `rgba(6, 182, 212, ${alpha})`)

            ctx.strokeStyle = lineGrad
            ctx.stroke()
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw)
    }

    // Optimization: Pause animation when tab is not active
    let isTabVisible = true
    const handleVisibilityChange = () => {
      isTabVisible = !document.hidden
      if (isTabVisible) {
        animationFrameId = requestAnimationFrame(draw)
      } else {
        cancelAnimationFrame(animationFrameId)
      }
    }
    document.addEventListener('visibilitychange', handleVisibilityChange)

    // Run animation loop
    draw()

    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none -z-20 block w-full h-full will-change-transform"
      style={{ backfaceVisibility: 'hidden' }}
    />
  )
}