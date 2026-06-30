import Link from 'next/link'
import { Twitter, Linkedin, Instagram, Github, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react'
import Logo from '@/components/ui/Logo'

const footerLinks = {
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Work', href: '/work' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
  ],
  services: [
    { label: 'Web Development', href: '/services#web-development' },
    { label: 'UI/UX Design', href: '/services#ui-ux-design' },
    { label: 'Branding', href: '/services#branding' },
    { label: 'SEO', href: '/services#seo' },
    { label: 'Social Media', href: '/services#social-media-marketing' },
    { label: 'Growth Strategy', href: '/services#digital-growth-strategy' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
}

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Github, href: '#', label: 'GitHub' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-[#030612] overflow-hidden">
      {/* Background orbs */}
      <div className="absolute bottom-0 left-1/4 w-80 h-80 orb orb-primary opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 orb orb-secondary opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Section */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center group w-fit">
              <Logo variant="horizontal" className="h-11 w-auto" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Building digital experiences that drive real business growth. Your trusted partner for premium web development, design, and digital strategy.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-white hover:border-primary-500/40 transition-all duration-200 hover:shadow-glow-primary"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-heading font-semibold text-white text-sm tracking-wider uppercase">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200 flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading font-semibold text-white text-sm tracking-wider uppercase">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200 flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading font-semibold text-white text-sm tracking-wider uppercase">Get In Touch</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:hello@ujnexus.com"
                  className="flex items-start gap-3 text-gray-400 hover:text-white text-sm transition-colors group"
                >
                  <Mail size={15} className="mt-0.5 shrink-0 text-primary-400 group-hover:text-primary-300" />
                  hello@ujnexus.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/923001234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-gray-400 hover:text-white text-sm transition-colors group"
                >
                  <Phone size={15} className="mt-0.5 shrink-0 text-primary-400 group-hover:text-primary-300" />
                  WhatsApp Us
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin size={15} className="mt-0.5 shrink-0 text-primary-400" />
                Available Worldwide
              </li>
            </ul>

            {/* CTA */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 mt-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-sm font-semibold shadow-glow-primary hover:shadow-glow-secondary transition-all duration-300 hover:scale-[1.02]"
            >
              Start a Project
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="gradient-line" />

        {/* Bottom Bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} UJ Nexus. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
