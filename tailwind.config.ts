import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4F46E5',
          50: '#EDEEFF',
          100: '#DDE0FF',
          200: '#BFC4FF',
          300: '#9CA4FF',
          400: '#7A85FF',
          500: '#4F46E5',
          600: '#3730C4',
          700: '#2820A3',
          800: '#1C1682',
          900: '#110D61',
        },
        secondary: {
          DEFAULT: '#7C3AED',
          50: '#F4EEFF',
          100: '#E9DDFF',
          200: '#D4BEFF',
          300: '#BFA0FF',
          400: '#9B6EFF',
          500: '#7C3AED',
          600: '#6621D4',
          700: '#5016B0',
          800: '#3A0D8C',
          900: '#270768',
        },
        accent: {
          DEFAULT: '#06B6D4',
          50: '#E0FAFF',
          100: '#B8F4FF',
          200: '#7CEAFF',
          300: '#40DBFF',
          400: '#0CC6E8',
          500: '#06B6D4',
          600: '#0592AD',
          700: '#056F86',
          800: '#044C5F',
          900: '#022A38',
        },
        dark: {
          DEFAULT: '#050816',
          50: '#1A1A2E',
          100: '#16213E',
          200: '#0F3460',
          card: 'rgba(255,255,255,0.05)',
          border: 'rgba(255,255,255,0.08)',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'scroll-x': 'scrollX 30s linear infinite',
        'scroll-x-reverse': 'scrollX 30s linear infinite reverse',
        'spin-slow': 'spin 8s linear infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'orb-pulse': 'orbPulse 4s ease-in-out infinite',
        'counter': 'counter 2s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-20px) rotate(1deg)' },
          '66%': { transform: 'translateY(-10px) rotate(-1deg)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(79, 70, 229, 0.4)' },
          '50%': { boxShadow: '0 0 60px rgba(79, 70, 229, 0.8), 0 0 100px rgba(124, 58, 237, 0.4)' },
        },
        scrollX: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        orbPulse: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.1)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #050816 0%, #0f0a2e 50%, #050816 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(79,70,229,0.1) 0%, rgba(124,58,237,0.1) 100%)',
        'glow-gradient': 'radial-gradient(ellipse at center, rgba(79,70,229,0.3) 0%, transparent 70%)',
      },
      boxShadow: {
        'glow-primary': '0 0 40px rgba(79, 70, 229, 0.4)',
        'glow-secondary': '0 0 40px rgba(124, 58, 237, 0.4)',
        'glow-accent': '0 0 40px rgba(6, 182, 212, 0.4)',
        'card': '0 4px 24px rgba(0, 0, 0, 0.4)',
        'card-hover': '0 8px 48px rgba(79, 70, 229, 0.2)',
        'glass': 'inset 0 1px 0 rgba(255,255,255,0.1)',
      },
      backdropBlur: {
        'glass': '12px',
      },
      screens: {
        'xs': '375px',
        '3xl': '1920px',
      },
    },
  },
  plugins: [],
}

export default config
