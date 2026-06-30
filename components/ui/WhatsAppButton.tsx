'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const phoneNumber = '923100571321' // 03100571321 formatted internationally
  const message = 'Hello UJ Nexus, I would like to discuss a project.'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-full text-white shadow-[0_4px_24px_rgba(37,211,102,0.45)] hover:shadow-[0_8px_32px_rgba(37,211,102,0.6)] transition-all duration-300 pointer-events-auto"
          aria-label="Chat on WhatsApp"
        >
          {/* Pulsing ring indicator */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
          
          {/* Custom SVG WhatsApp Logo */}
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.62.962 3.21 1.48 4.805 1.489 5.437.002 9.861-4.417 9.864-9.855.002-2.635-1.022-5.11-2.884-6.974C16.56 1.952 14.093.926 11.465.926 6.027.926 1.602 5.347 1.599 10.787c-.001 1.702.453 3.361 1.314 4.816L1.87 20.824l5.35-1.401c1.378.752 2.805 1.15 4.225 1.15h-.002zm10.744-7.405c-.293-.146-1.733-.856-2.002-.954-.269-.098-.465-.146-.66.146-.196.293-.758.954-.93 1.15-.171.195-.342.22-.635.073-.293-.146-1.239-.457-2.361-1.458-.872-.778-1.46-1.74-1.63-2.03-.172-.294-.018-.454.128-.6.133-.131.294-.342.44-.513.147-.171.196-.293.293-.489.098-.195.049-.367-.025-.513-.074-.147-.66-1.59-.905-2.177-.238-.574-.48-.496-.66-.505-.171-.007-.367-.008-.562-.008-.196 0-.514.073-.783.366-.269.293-1.027 1.002-1.027 2.444 0 1.44 1.047 2.835 1.193 3.031.147.195 2.06 3.146 4.991 4.414.697.302 1.24.482 1.664.617.7.222 1.338.19 1.843.115.563-.083 1.733-.708 1.978-1.393.245-.684.245-1.27.172-1.393-.073-.122-.269-.195-.562-.341z" />
          </svg>
        </motion.a>
      )}
    </AnimatePresence>
  )
}
