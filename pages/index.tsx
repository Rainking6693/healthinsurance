import type { NextPage } from 'next'
import Layout from '@/components/Layout/Layout'
import HeroBanner from '@/components/HeroBanner'
import FeatureCard from '@/components/FeatureCard'
import Button from '@/components/Button'
import FAQ from '@/components/FAQ'
import TestimonialSection from '@/components/TestimonialSection'
import { AFFILIATE_LINKS, BLOG_POSTS } from '@/config/links'
import Link from 'next/link'

const Home: NextPage = () => {
  const features = [
    {
      icon: '🌍',
      title: 'Global Coverage',
      description: 'Travel insurance that works in 185+ countries worldwide. Perfect for digital nomads and remote workers.',
      borderColor: 'teal' as const,
    },
    {
      icon: '💼',
      title: 'Remote-Friendly',
      description: 'Designed specifically for freelancers, gig workers, and location-independent professionals.',
      borderColor: 'coral' as const,
    },
    {
      icon: '🛡️',
      title: 'Peace of Mind',
      description: '$250,000 coverage limit with only $250 deductible. Real protection that won\'t break the bank.',
      borderColor: 'blue' as const,
    },
    {
      icon: '💰',
      title: 'Affordable Pricing',
      description: 'Starting at just $42/month for most people under 40. No annual commitment required.',
      borderColor: 'yellow' as const,
    },
    {
      icon: '⚡',
      title: 'Quick Setup',
      description: 'Sign up in 5 minutes online. No medical exams, no waiting periods, no hassle.',
      borderColor: 'teal' as const,
    },
    {
      icon: '🔄',
      title: 'Flexible Plans',
      description: 'Monthly subscription model. Cancel anytime without penalties or fees.',
      borderColor: 'coral' as const,
    },
  ]

  const testimonials = [
    {
      quote: "SafetyWing saved me $3,000+ when I sprained my ankle hiking. The claims process was smooth and they paid within 3 weeks.",
      author: "Sarah K.",
      role: "Freelance Designer",
      rating: 5,
      location: "Austin, TX",
      verified: true
    },
    {
      quote: "As a DoorDash driver, I couldn't afford $400/month for marketplace insurance. SafetyWing gives me peace of mind for $42.",
      author: "Mike T.",
      role: "Gig Worker",
      rating: 5,
      location: "Denver, CO",
      verified: true
    },
    {
      quote: "I travel between countries for work. SafetyWing covers me everywhere, unlike traditional U.S. insurance.",
      author: "Jennifer L.",
      role: "Digital Nomad",
      rating: 4,
      location: "Remote",
      verified: true
    },
  ]

  const featuredPosts = BLOG_POSTS.filter(post => post.featured).slice(0, 3)

  const faqItems = [
    {
      question: "How much does SafetyWing cost for gig workers?",
      answer: "SafetyWing Nomad Insurance costs $42.16/month for most people under 40. The price increases with age, with those 40-49 paying around $80-100/month, and those 50-59 paying $150-180/month. Children under 10 are covered for free (up to 2 kids)."
    },
    {
      question: "Does SafetyWing cover pre-existing conditions?",
      answer: "The Essential plan does not cover pre-existing conditions. However, SafetyWing's Complete plan (available in some countries) may provide limited coverage for pre-existing conditions after a waiting period. Always check the policy details for your specific situation."
    },
    {
      question: "Can I use SafetyWing in my home country?",
      answer: "Yes, but with limitations. The Essential plan covers you for 30 days per visit to your home country, while the Complete plan covers 90 days per visit. This makes it ideal for digital nomads who travel frequently but occasionally return home."
    },
    {
      question: "Is SafetyWing real insurance or just travel insurance?",
      answer: "SafetyWing is real insurance that provides medical coverage for emergencies, accidents, and sudden illnesses. While it's designed for travelers and nomads, it functions as legitimate health insurance with a $250 deductible and up to $250,000 in coverage."
    },
    {
      question: "How do I file a claim with SafetyWing?",
      answer: "Claims are filed online through SafetyWing's member portal. You'll need to upload your medical bills, receipts, and any relevant documentation. Most claims are processed within 2-4 weeks, and reimbursements are sent via bank transfer or check."
    },
    {
      question: "Can DoorDash and Uber drivers use SafetyWing?",
      answer: "Absolutely! SafetyWing is perfect for gig workers like DoorDash drivers, Uber drivers, and other delivery workers who need affordable health coverage. At $42/month, it's much cheaper than marketplace plans and provides real emergency coverage."
    },
    {
      question: "What's not covered by SafetyWing?",
      answer: "SafetyWing doesn't cover routine check-ups, preventive care, elective procedures, pregnancy/maternity, mental health (limited coverage), or non-emergency dental care. It's designed for emergency medical situations, not comprehensive healthcare."
    },
    {
      question: "Can I cancel SafetyWing anytime?",
      answer: "Yes! SafetyWing operates on a monthly subscription model with no annual commitment. You can cancel anytime without penalties or fees, making it perfect for freelancers with variable income."
    }
  ]

  return (
    <Layout
      title="Affordable Health Insurance for Gig Workers & Digital Nomads | SafetyWing"
      description="Discover affordable health insurance starting at $42/month. Perfect for freelancers, gig workers, and digital nomads. Compare SafetyWing plans and get covered today."
    >
      {/* Hero Section */}
      <section className="sw-section">
        <div className="sw-container">
          <HeroBanner
            title="Affordable Health Insurance for Gig Workers"
            subtitle="Get comprehensive coverage starting at just $42/month. No annual commitment. Works in 185+ countries."
            ctaText="Get SafetyWing Insurance"
            ctaLink={AFFILIATE_LINKS.nomadInsurance}
            secondaryCtaText="Learn More"
            secondaryCtaLink="/blog"
            backgroundGradient="blue"
          />
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-8 bg-sw-gray-light">
        <div className="sw-container">
          <div className="flex flex-wrap justify-center items-center gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-sw-navy">60,000+</p>
              <p className="text-sw-gray">Happy Customers</p>
            </div>
            <div className="hidden md:block w-px h-12 bg-sw-gray"></div>
            <div>
              <p className="text-3xl font-bold text-sw-navy">185+</p>
              <p className="text-sw-gray">Countries Covered</p>
            </div>
            <div className="hidden md:block w-px h-12 bg-sw-gray"></div>
            <div>
              <p className="text-3xl font-bold text-sw-navy">$42</p>
              <p className="text-sw-gray">Monthly Starting Price</p>
            </div>
            <div className="hidden md:block w-px h-12 bg-sw-gray"></div>
            <div>
              <p className="text-3xl font-bold text-sw-navy">24/7</p>
              <p className="text-sw-gray">Emergency Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="sw-section">
        <div className="sw-container">
          <div className="text-center mb-12">
            <h2 className="sw-h2 text-sw-navy mb-4">Why Choose SafetyWing?</h2>
            <p className="sw-body text-sw-gray max-w-3xl mx-auto">
              Traditional health insurance wasn't built for the modern workforce. SafetyWing is different—designed specifically for freelancers, gig workers, and digital nomads who need flexible, affordable coverage.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="sw-section bg-sw-gray-light">
        <div className="sw-container">
          <div className="text-center mb-12">
            <h2 className="sw-h2 text-sw-navy mb-4">SafetyWing vs. Traditional Insurance</h2>
            <p className="sw-body text-sw-gray max-w-3xl mx-auto">
              See why over 60,000 freelancers and gig workers choose SafetyWing over expensive marketplace plans.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-sw-purple text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Feature</th>
                  <th className="px-6 py-4 text-center">SafetyWing</th>
                  <th className="px-6 py-4 text-center">Marketplace Plans</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-semibold">Monthly Cost</td>
                  <td className="px-6 py-4 text-center text-sw-teal font-bold">$42-$200</td>
                  <td className="px-6 py-4 text-center">$300-$600+</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-semibold">Deductible</td>
                  <td className="px-6 py-4 text-center text-sw-teal font-bold">$250</td>
                  <td className="px-6 py-4 text-center">$5,000-$8,000</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold">Global Coverage</td>
                  <td className="px-6 py-4 text-center text-sw-teal font-bold">✓ 185+ Countries</td>
                  <td className="px-6 py-4 text-center text-red-500">✗ U.S. Only</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-semibold">Cancel Anytime</td>
                  <td className="px-6 py-4 text-center text-sw-teal font-bold">✓ Yes</td>
                  <td className="px-6 py-4 text-center text-red-500">✗ Annual</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold">Sign Up Time</td>
                  <td className="px-6 py-4 text-center text-sw-teal font-bold">5 minutes</td>
                  <td className="px-6 py-4 text-center">1-2 hours</td>
                </tr>
              </tbody>
            </table>
            <div className="bg-sw-teal p-6 text-center">
              <Button variant="primary" size="lg" href={AFFILIATE_LINKS.nomadInsurance} isAffiliate>
                Get SafetyWing Coverage Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialSection testimonials={testimonials} />

      {/* Blog Preview Section */}
      <section className="sw-section bg-sw-gray-light">
        <div className="sw-container">
          <div className="text-center mb-12">
            <h2 className="sw-h2 text-sw-navy mb-4">Latest Resources & Guides</h2>
            <p className="sw-body text-sw-gray max-w-3xl mx-auto">
              Expert advice on finding affordable health insurance as a gig worker or freelancer.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <article key={post.slug} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-sw-navy mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sw-gray mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-sw-gray">{post.readTime} read</span>
                    <Link href={`/blog/${post.slug}`} className="text-sw-teal font-semibold hover:text-sw-teal-dark">
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button variant="secondary" href="/blog">
              View All Articles
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ 
        items={faqItems}
        title="Common Questions About Health Insurance for Gig Workers"
        className="sw-section"
      />

      {/* CTA Section */}
      <section className="sw-section bg-gradient-to-br from-sw-purple to-sw-purple-light">
        <div className="sw-container text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Covered?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join 60,000+ freelancers and gig workers who found affordable health insurance with SafetyWing. 
            No commitment, cancel anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" href={AFFILIATE_LINKS.nomadInsurance} isAffiliate>
              Get SafetyWing Insurance
            </Button>
            <Button variant="outline" size="lg" href="/toolkit" className="border-white text-white hover:bg-white hover:text-sw-purple">
              Download Free Toolkit
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Home