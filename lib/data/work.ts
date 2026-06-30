export const caseStudies = [
  {
    id: 'saas-platform-redesign',
    slug: 'saas-platform-redesign',
    title: 'SaaS Platform Redesign',
    client: 'FinTech Startup',
    industry: 'Financial Technology',
    year: '2024',
    tags: ['Next.js', 'UI/UX', 'Branding'],
    shortDesc: 'Complete redesign of a fintech dashboard resulting in 3x user retention',
    challenge:
      'The client had a clunky, outdated financial dashboard that was causing a 60% drop-off during onboarding. Users found the interface confusing and the data visualization poor.',
    solution:
      'We redesigned the entire platform using a clean, data-forward approach with intuitive navigation, real-time data visualization, and a mobile-first design system.',
    results: [
      { label: 'User Retention', value: '+240%' },
      { label: 'Onboarding Completion', value: '+180%' },
      { label: 'Load Time Reduction', value: '-65%' },
      { label: 'NPS Score', value: '72 → 91' },
    ],
    gradient: 'from-primary-500 to-secondary-500',
    color: '#4F46E5',
    featured: true,
  },
  {
    id: 'ecommerce-brand',
    slug: 'ecommerce-brand-launch',
    title: 'E-Commerce Brand Launch',
    client: 'Luxury Fashion Brand',
    industry: 'Fashion & Retail',
    year: '2024',
    tags: ['Branding', 'Web Dev', 'SEO'],
    shortDesc: 'Launched a premium fashion brand achieving $180K revenue in 90 days',
    challenge:
      'A new luxury fashion brand needed to launch with credibility, command premium pricing, and generate immediate revenue without an established audience.',
    solution:
      'We built a full brand identity from scratch, created a high-converting Shopify store with custom Next.js frontend, and executed an integrated launch strategy combining SEO and social.',
    results: [
      { label: 'Revenue in 90 Days', value: '$180K' },
      { label: 'Organic Traffic', value: '+420%' },
      { label: 'Conversion Rate', value: '4.2%' },
      { label: 'Brand Search Volume', value: '+850%' },
    ],
    gradient: 'from-secondary-500 to-accent-500',
    color: '#7C3AED',
    featured: true,
  },
  {
    id: 'agency-growth',
    slug: 'agency-digital-growth',
    title: 'Digital Growth Strategy',
    client: 'B2B Agency',
    industry: 'Professional Services',
    year: '2025',
    tags: ['SEO', 'Social Media', 'Growth'],
    shortDesc: 'Scaled a B2B agency from 3 to 25 monthly inbound leads',
    challenge:
      'A growing B2B agency had no digital marketing strategy, relying entirely on referrals. They needed a predictable lead generation system.',
    solution:
      'We built a comprehensive content strategy, technical SEO foundation, LinkedIn thought leadership program, and automated lead nurturing system.',
    results: [
      { label: 'Monthly Inbound Leads', value: '3 → 25' },
      { label: 'Organic Traffic Growth', value: '+680%' },
      { label: 'LinkedIn Followers', value: '+2,400' },
      { label: 'Revenue Impact', value: '+$240K' },
    ],
    gradient: 'from-accent-500 to-primary-500',
    color: '#06B6D4',
    featured: true,
  },
]

export type CaseStudy = (typeof caseStudies)[0]
