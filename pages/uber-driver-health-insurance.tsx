import type { NextPage } from 'next'
import Layout from '@/components/Layout/Layout'
import HeroBanner from '@/components/HeroBanner'
import FeatureCard from '@/components/FeatureCard'
import Button from '@/components/Button'
import FAQ from '@/components/FAQ'
import TestimonialSection from '@/components/TestimonialSection'
import Breadcrumb from '@/components/Breadcrumb'
import { AFFILIATE_LINKS } from '@/config/links'

const UberDriverHealthInsurance: NextPage = () => {
  const features = [
    {
      icon: '🚗',
      title: 'Drive Without Worry',
      description: 'Coverage that works whether you\'re driving for Uber, Lyft, or just living your life.',
      borderColor: 'teal' as const,
    },
    {
      icon: '💰',
      title: 'Affordable for Drivers',
      description: 'At $42/month, it\'s cheaper than one tank of gas. Much more affordable than marketplace plans.',
      borderColor: 'coral' as const,
    },
    {
      icon: '🏥',
      title: 'Real Emergency Coverage',
      description: 'Covers accidents, injuries, and sudden illness. $250,000 coverage with only $250 deductible.',
      borderColor: 'blue' as const,
    },
    {
      icon: '📱',
      title: 'Easy Management',
      description: 'Sign up in 5 minutes online. Cancel anytime. Perfect for the gig economy lifestyle.',
      borderColor: 'yellow' as const,
    },
  ]

  const testimonials = [
    {
      quote: "As an Uber driver, I needed insurance that wouldn't break the bank. SafetyWing costs less than what I make in 2 hours of driving.",
      author: "David M.",
      role: "Uber Driver",
      rating: 5,
      location: "Chicago, IL",
      verified: true
    },
    {
      quote: "Had a fender bender while driving for Uber. SafetyWing covered my medical bills from the ER visit. Only paid the $250 deductible.",
      author: "Lisa K.",
      role: "Uber/Lyft Driver",
      rating: 5,
      location: "Miami, FL",
      verified: true
    },
    {
      quote: "Drive for both Uber and Lyft. SafetyWing covers me no matter which app I'm using or if I'm off duty.",
      author: "Marcus J.",
      role: "Rideshare Driver",
      rating: 4,
      location: "Atlanta, GA",
      verified: true
    },
  ]

  const faqItems = [
    {
      question: "Does Uber provide health insurance for drivers?",
      answer: "No, Uber does not provide traditional health insurance. They offer occupational accident insurance that only covers you while actively driving for Uber (typically 5-15 hours per week). For comprehensive 24/7 coverage, you need your own health insurance plan."
    },
    {
      question: "How much does health insurance cost for Uber drivers?",
      answer: "SafetyWing costs $42.16/month for most drivers under 40. Marketplace plans typically cost $300-600/month. With SafetyWing, you save $3,000-6,000 per year compared to traditional insurance while still getting real coverage."
    },
    {
      question: "Can I deduct health insurance as an Uber driver?",
      answer: "Yes! As a self-employed Uber driver, you can deduct 100% of your health insurance premiums on your taxes. This effectively reduces the cost of SafetyWing by 20-30% depending on your tax bracket."
    },
    {
      question: "What if I drive for both Uber and Lyft?",
      answer: "SafetyWing covers you regardless of which rideshare platform you use. Whether you're driving for Uber, Lyft, or any other gig platform, you're covered 24/7."
    },
    {
      question: "Does SafetyWing cover car accidents while driving for Uber?",
      answer: "SafetyWing covers your medical expenses from car accidents, but not vehicle damage. For vehicle coverage, you need commercial auto insurance. SafetyWing focuses on protecting your health and medical bills."
    },
    {
      question: "Can I use SafetyWing if I have a pre-existing condition?",
      answer: "The Essential plan doesn't cover pre-existing conditions. However, if you're generally healthy and need emergency coverage for accidents and new health issues, SafetyWing is still valuable protection."
    },
    {
      question: "How does SafetyWing compare to Uber's occupational accident insurance?",
      answer: "Uber's coverage only applies while actively driving (5-15 hours/week). SafetyWing covers you 24/7, has a lower deductible ($250 vs $1,000), and provides broader coverage for all health emergencies, not just work-related accidents."
    }
  ]

  return (
    <Layout
      title="Health Insurance for Uber Drivers - Affordable Coverage Starting at $42/Month"
      description="Affordable health insurance for Uber drivers. Get 24/7 coverage for $42/month with SafetyWing. No annual commitment, covers all health emergencies."
      keywords="uber driver health insurance, rideshare driver insurance, uber health benefits, gig driver health coverage"
    >
      {/* Breadcrumb Navigation */}
      <Breadcrumb 
        items={[
          { label: 'Home', href: '/' },
          { label: 'Uber Driver Health Insurance', href: '/uber-driver-health-insurance' }
        ]}
        className="bg-sw-gray-light"
      />

      {/* Hero Section */}
      <section className="sw-section">
        <div className="sw-container">
          <HeroBanner
            title="Health Insurance for Uber Drivers"
            subtitle="Get 24/7 health coverage for just $42/month. No annual commitment. Perfect for rideshare drivers who need affordable protection."
            ctaText="Get SafetyWing Coverage"
            ctaLink={AFFILIATE_LINKS.nomadInsurance}
            secondaryCtaText="Learn More"
            secondaryCtaLink="#features"
            backgroundGradient="blue"
          />
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 bg-sw-gray-light">
        <div className="sw-container">
          <div className="text-center mb-12">
            <h2 className="sw-h2 text-sw-navy mb-4">The Uber Driver's Insurance Gap</h2>
            <p className="sw-body text-sw-gray max-w-3xl mx-auto">
              Uber's occupational accident insurance only covers you while actively driving. 
              That's just 5-15 hours per week. What about the other 153+ hours?
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white border-2 border-sw-blue rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">⏰</div>
              <h3 className="text-xl font-bold text-sw-navy mb-3">Limited Coverage Hours</h3>
              <p className="text-sw-gray">Uber's insurance only covers you while actively driving—not during your personal time</p>
            </div>
            
            <div className="bg-white border-2 border-sw-blue rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">💸</div>
              <h3 className="text-xl font-bold text-sw-navy mb-3">High Deductible</h3>
              <p className="text-sw-gray">$1,000 deductible vs SafetyWing's $250 deductible</p>
            </div>
            
            <div className="bg-white border-2 border-sw-blue rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">🚫</div>
              <h3 className="text-xl font-bold text-sw-navy mb-3">Work-Only Coverage</h3>
              <p className="text-sw-gray">Doesn't cover illness, personal accidents, or non-work injuries</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-sw-blue to-sw-teal rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">The Solution: 24/7 Coverage for $42/Month</h3>
            <p className="text-lg mb-6">SafetyWing covers you whether you're driving, at home, or anywhere in the world.</p>
            <Button variant="primary" size="lg" href={AFFILIATE_LINKS.nomadInsurance} isAffiliate>
              Get Covered Now
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="sw-section">
        <div className="sw-container">
          <div className="text-center mb-12">
            <h2 className="sw-h2 text-sw-navy mb-4">Why Uber Drivers Choose SafetyWing</h2>
            <p className="sw-body text-sw-gray max-w-3xl mx-auto">
              Designed for the gig economy. Affordable, flexible, and comprehensive.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Earnings Calculator Section */}
      <section className="sw-section bg-sw-gray-light">
        <div className="sw-container">
          <div className="text-center mb-12">
            <h2 className="sw-h2 text-sw-navy mb-4">Insurance Cost vs. Uber Earnings</h2>
            <p className="sw-body text-sw-gray max-w-3xl mx-auto">
              See how little SafetyWing costs compared to your driving income.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-sw-blue text-white p-6 text-center">
              <h3 className="text-2xl font-bold">How Much Driving Pays for SafetyWing?</h3>
            </div>
            
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="bg-sw-gray-light rounded-xl p-6">
                  <div className="text-3xl font-bold text-sw-blue mb-2">2.5 hours</div>
                  <p className="text-sw-gray">Average driving time to earn $42</p>
                  <p className="text-sm text-sw-gray mt-2">Based on $17/hour average</p>
                </div>
                
                <div className="bg-sw-gray-light rounded-xl p-6">
                  <div className="text-3xl font-bold text-sw-teal mb-2">3 rides</div>
                  <p className="text-sw-gray">Average rides to cover monthly premium</p>
                  <p className="text-sm text-sw-gray mt-2">Based on $14 average ride</p>
                </div>
                
                <div className="bg-sw-gray-light rounded-xl p-6">
                  <div className="text-3xl font-bold text-sw-coral mb-2">1 day</div>
                  <p className="text-sw-gray">Monthly premium covered in one good day</p>
                  <p className="text-sm text-sw-gray mt-2">Work 1 day, covered all month</p>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-lg text-sw-gray mb-4">
                  <strong>Bottom line:</strong> Work 2.5 hours per month to cover your health insurance for the entire month.
                </p>
                <Button variant="secondary" href={AFFILIATE_LINKS.nomadInsurance} isAffiliate>
                  Calculate Your Savings
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="sw-section">
        <div className="sw-container">
          <div className="text-center mb-12">
            <h2 className="sw-h2 text-sw-navy mb-4">SafetyWing vs. Other Options for Uber Drivers</h2>
          </div>
          
          <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-sw-purple text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Option</th>
                  <th className="px-6 py-4 text-center">Monthly Cost</th>
                  <th className="px-6 py-4 text-center">Coverage Hours</th>
                  <th className="px-6 py-4 text-center">Deductible</th>
                  <th className="px-6 py-4 text-center">Flexibility</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-sw-blue bg-opacity-10">
                  <td className="px-6 py-4 font-semibold text-sw-blue">SafetyWing</td>
                  <td className="px-6 py-4 text-center font-bold text-sw-blue">$42</td>
                  <td className="px-6 py-4 text-center font-bold text-sw-blue">24/7</td>
                  <td className="px-6 py-4 text-center font-bold text-sw-blue">$250</td>
                  <td className="px-6 py-4 text-center font-bold text-sw-blue">Cancel anytime</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold">Marketplace Plans</td>
                  <td className="px-6 py-4 text-center">$300-600</td>
                  <td className="px-6 py-4 text-center">24/7</td>
                  <td className="px-6 py-4 text-center">$5,000-8,000</td>
                  <td className="px-6 py-4 text-center">12-month commitment</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-semibold">Uber's Coverage</td>
                  <td className="px-6 py-4 text-center">Free</td>
                  <td className="px-6 py-4 text-center">While driving only</td>
                  <td className="px-6 py-4 text-center">$1,000</td>
                  <td className="px-6 py-4 text-center">Automatic</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold">No Insurance</td>
                  <td className="px-6 py-4 text-center">$0</td>
                  <td className="px-6 py-4 text-center">Never</td>
                  <td className="px-6 py-4 text-center text-red-500">Pay 100%</td>
                  <td className="px-6 py-4 text-center text-red-500">High risk</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSection 
        testimonials={testimonials}
        title="What Uber Drivers Say About SafetyWing"
      />

      {/* FAQ Section */}
      <FAQ 
        items={faqItems}
        title="Common Questions from Uber Drivers"
        className="sw-section bg-sw-gray-light"
      />

      {/* Tax Benefits Section */}
      <section className="sw-section">
        <div className="sw-container">
          <div className="bg-sw-yellow bg-opacity-10 border-2 border-sw-yellow rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-sw-navy mb-6 text-center">💰 Tax Deduction Benefits for Uber Drivers</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-sw-navy mb-4">Self-Employment Benefits:</h3>
                <ul className="space-y-2 text-sw-gray">
                  <li>✓ Deduct 100% of health insurance premiums</li>
                  <li>✓ Reduces your taxable income dollar-for-dollar</li>
                  <li>✓ Save 20-30% on insurance costs through taxes</li>
                  <li>✓ Claim on Schedule C with other business expenses</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-6">
                <h4 className="font-bold text-sw-navy mb-3">Example for Uber Driver:</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Annual Uber earnings:</span>
                    <span className="font-semibold">$35,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>SafetyWing annual cost:</span>
                    <span className="font-semibold">$504</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax savings (22% bracket):</span>
                    <span className="font-semibold text-green-600">-$111</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between font-bold">
                    <span>Effective annual cost:</span>
                    <span className="text-sw-blue">$393</span>
                  </div>
                  <p className="text-xs text-sw-gray mt-2">That's just $32.75/month after tax savings!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="sw-section bg-gradient-to-br from-sw-blue to-sw-teal">
        <div className="sw-container text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Drive with Peace of Mind?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of Uber drivers who found affordable health insurance with SafetyWing. 
            Get a quote in 2 minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" href={AFFILIATE_LINKS.nomadInsurance} isAffiliate>
              Get SafetyWing Coverage
            </Button>
            <Button variant="outline" size="lg" href="/blog" className="border-white text-white hover:bg-white hover:text-sw-blue">
              Read More Guides
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default UberDriverHealthInsurance