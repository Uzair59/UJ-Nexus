export const founders = [
  {
    id: 'uzair',
    name: 'Uzair',
    role: 'Founder & Lead Developer',
    avatar: 'U',
    gradient: 'from-primary-500 to-secondary-500',
    bio: 'Passionate about building scalable web applications, modern user experiences, and high-performance digital products using cutting-edge technologies.',
    longBio:
      'Uzair is a full-stack developer with deep expertise in Next.js, React, TypeScript, and modern JavaScript ecosystems. He has architected and shipped products for startups ranging from MVP stage to enterprise scale. His philosophy: every line of code should serve the user and the business — no exceptions.',
    skills: ['Next.js', 'React', 'TypeScript', 'Node.js', 'MongoDB', 'AWS', 'GSAP', 'Framer Motion'],
    stats: [
      { label: 'Projects Shipped', value: '50+' },
      { label: 'Years Experience', value: '3+' },
      { label: 'Avg Lighthouse Score', value: '97' },
    ],
    social: {
      linkedin: '#',
      github: '#',
      twitter: '#',
    },
  },
  {
    id: 'javeriya',
    name: 'Javeriya',
    role: 'Co-Founder & Growth Strategist',
    avatar: 'J',
    gradient: 'from-secondary-500 to-accent-500',
    bio: 'Focused on brand growth, client success, digital marketing strategy, and helping businesses achieve measurable business results.',
    longBio:
      "Javeriya brings a data-first approach to growth strategy, combining brand psychology with performance marketing. She has helped businesses across 15+ industries build digital presence that translates directly to revenue. Her superpower is connecting creative vision with commercial outcomes.",
    skills: ['Brand Strategy', 'SEO', 'Social Media', 'Content Marketing', 'Growth Hacking', 'Analytics', 'CRO'],
    stats: [
      { label: 'Campaigns Managed', value: '40+' },
      { label: 'Avg Revenue Impact', value: '+180%' },
      { label: 'Industries Served', value: '15+' },
    ],
    social: {
      linkedin: '#',
      instagram: '#',
      twitter: '#',
    },
  },
]

export type Founder = (typeof founders)[0]
