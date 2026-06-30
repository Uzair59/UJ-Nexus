export const testimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'CEO',
    company: 'Velox SaaS',
    avatar: 'SM',
    content:
      'UJ Nexus transformed our product completely. The attention to detail, the speed of delivery, and the quality of code exceeded every expectation. Our users love the new interface and our metrics are through the roof.',
    rating: 5,
    gradient: 'from-primary-500 to-secondary-500',
  },
  {
    id: 2,
    name: 'James Thornton',
    role: 'Founder',
    company: 'Meridian Capital',
    avatar: 'JT',
    content:
      'Working with UJ Nexus felt like having a world-class team embedded in our startup. Uzair\'s technical expertise is elite, and Javeriya\'s growth strategy doubled our qualified leads within 60 days.',
    rating: 5,
    gradient: 'from-secondary-500 to-accent-500',
  },
  {
    id: 3,
    name: 'Priya Sharma',
    role: 'Head of Product',
    company: 'NovaTech',
    avatar: 'PS',
    content:
      'The brand identity and website UJ Nexus created for us positioned us as a premium player in a crowded market. We closed our first enterprise client within 2 weeks of the launch.',
    rating: 5,
    gradient: 'from-accent-500 to-primary-500',
  },
  {
    id: 4,
    name: 'Ahmed Al-Rashid',
    role: 'Co-Founder',
    company: 'PulseCommerce',
    avatar: 'AR',
    content:
      'Fast, professional, and genuinely invested in our success. UJ Nexus delivered our e-commerce platform 3 days ahead of schedule. The SEO work alone has brought in $45K in organic revenue.',
    rating: 5,
    gradient: 'from-primary-400 to-secondary-600',
  },
  {
    id: 5,
    name: 'Emma Lindqvist',
    role: 'Marketing Director',
    company: 'Scandex Group',
    avatar: 'EL',
    content:
      'Their social media strategy and content system is exceptional. We went from 400 to 12,000 engaged followers in 4 months, and our conversion rate from social channels tripled.',
    rating: 5,
    gradient: 'from-secondary-400 to-accent-500',
  },
  {
    id: 6,
    name: 'Marcus Chen',
    role: 'CTO',
    company: 'Buildflow AI',
    avatar: 'MC',
    content:
      'The technical depth Uzair brings is remarkable. Our Next.js application went from a 45-point to a 98-point Lighthouse score. The code quality is something our internal team learned from.',
    rating: 5,
    gradient: 'from-accent-400 to-primary-600',
  },
]

export type Testimonial = (typeof testimonials)[0]
