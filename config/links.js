// SafetyWing Affiliate Links Configuration
export const AFFILIATE_LINKS = {
  nomadInsurance: 'https://safetywing.com/nomad-insurance/?referenceID=26302901&utm_source=26302901&utm_medium=Ambassador',
  homepage: 'https://safetywing.com/?referenceID=26302901&utm_source=26302901&utm_medium=Ambassador',
  remoteHealth: 'https://safetywing.com/remote-health/?referenceID=26302901&utm_source=26302901&utm_medium=Ambassador',
}

// Internal site navigation
export const INTERNAL_LINKS = {
  home: '/',
  blog: '/blog',
  about: '/about',
  toolkit: '/toolkit',
  disclosures: '/disclosures',
}

// Blog post slugs
export const BLOG_POSTS = [
  {
    slug: 'complete-guide-health-insurance-gig-workers',
    title: 'The Complete Guide to Health Insurance for Gig Workers in 2025',
    excerpt: 'Discover affordable health insurance options for gig workers, freelancers, and self-employed individuals.',
    readTime: '15 min',
    featured: true,
  },
  {
    slug: 'safetywing-vs-world-nomads',
    title: 'SafetyWing vs. World Nomads for Freelancers: Which Should You Choose?',
    excerpt: 'Compare SafetyWing and World Nomads travel insurance for freelancers and digital nomads.',
    readTime: '12 min',
    featured: true,
  },
  {
    slug: 'health-insurance-doordash-drivers',
    title: 'Best Health Insurance Options for DoorDash Drivers in 2025',
    excerpt: 'Discover affordable health insurance for DoorDash drivers and delivery workers.',
    readTime: '10 min',
    featured: false,
  },
  {
    slug: 'freelancer-coverage-under-50-dollars',
    title: 'How I Found Affordable Health Insurance as a Freelancer for Under $50/Month',
    excerpt: 'Real story of finding legitimate health insurance as a freelancer for $42/month.',
    readTime: '12 min',
    featured: false,
  },
  {
    slug: 'safetywing-review-12-months',
    title: 'Is SafetyWing Worth It? Honest Review After 12 Months of Coverage',
    excerpt: 'Honest SafetyWing review after 12 months of real use, including claims experience.',
    readTime: '15 min',
    featured: true,
  },
]

// UTM tracking parameters
export function addUTMParams(baseUrl, source, medium, campaign) {
  const url = new URL(baseUrl)
  url.searchParams.set('utm_source', source || '26302901')
  url.searchParams.set('utm_medium', medium || 'website')
  url.searchParams.set('utm_campaign', campaign || 'affiliate')
  return url.toString()
}