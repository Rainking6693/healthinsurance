import type { NextPage } from 'next'
import Layout from '@/components/Layout/Layout'
import HeroBanner from '@/components/HeroBanner'
import FeatureCard from '@/components/FeatureCard'
import Button from '@/components/Button'
import FAQ from '@/components/FAQ'
import TestimonialSection from '@/components/TestimonialSection'
import Breadcrumb from '@/components/Breadcrumb'
import { AFFILIATE_LINKS } from '@/config/links'

const FreelanceWriterHealthInsurance: NextPage = () => {
  const features = [
    {
      icon: '✍️',
      title: 'Perfect for Writers',
      description: 'Covers you whether you\'re writing from home, a coffee shop, or traveling the world.',
      borderColor: 'teal' as const,
    },
    {
      icon: '💰',
      title: 'Budget-Friendly',
      description: 'At $42/month, it costs less than most writers spend on coffee. Much cheaper than COBRA.',
      borderColor: 'coral' as const,
    },
    {
      icon: '🌍',
      title: 'Global Coverage',
      description: 'Work from anywhere in 185+ countries. Perfect for digital nomad writers.',
      borderColor: 'blue' as const,
    },
    {
      icon: '📝',
      title: 'Simple Management',
      description: 'No paperwork hassles. Manage everything online. Cancel anytime without penalties.',
      borderColor: 'yellow' as const,
    },
  ]

  const testimonials = [
    {
      quote: "As a freelance writer, I couldn't afford $400/month COBRA. SafetyWing gives me real coverage for $42. It's a no-brainer.",
      author: "Sarah M.",
      role: "Freelance Content Writer",
      rating: 5,
      location: "Portland, OR",
      verified: true
    },
    {
      quote: "I write for clients worldwide and travel frequently. SafetyWing covers me everywhere, unlike U.S.-only insurance.",
      author: "James K.",
      role: "Travel Writer",
      rating: 5,
      location: "Remote",
      verified: true
    },
    {
      quote: "Had to go to urgent care for a bad flu. SafetyWing covered everything except the $250 deductible. Saved me $800.",
      author: "Maria L.",
      role: "Copywriter",
      rating: 4,
      location: "Austin, TX",
      verified: true
    },
  ]

  const faqItems = [
    {
      question: "Why do freelance writers need health insurance?",
      answer: "As a freelance writer, you don't have employer-sponsored health benefits. One unexpected illness or accident could cost thousands. Health insurance protects your finances and ensures you can get the care you need without going into debt."
    },
    {
      question: "How much does health insurance cost for freelance writers?",
      answer: "SafetyWing costs $42.16/month for most writers under 40. COBRA typically costs $400-800/month, and marketplace plans range from $200-600/month. SafetyWing saves you $1,900-9,000 per year compared to other options."
    },
    {
      question: "Can I deduct health insurance as a freelance writer?",
      answer: "Yes! As a self-employed freelance writer, you can deduct 100% of your health insurance premiums on your taxes using the self-employed health insurance deduction. This effectively reduces SafetyWing's cost by 20-30%."
    },
    {
      question: "Does SafetyWing cover pre-existing conditions for writers?",
      answer: "The Essential plan doesn't cover pre-existing conditions. However, if you're generally healthy and need emergency coverage for accidents and new health issues, SafetyWing provides valuable protection at an affordable price."
    },
    {
      question: "Can I use SafetyWing if I travel for writing assignments?",
      answer: "Absolutely! SafetyWing is perfect for travel writers and digital nomads. It covers you in 185+ countries, making it ideal for writers who work from different locations or travel for assignments."
    },
    {
      question: "What if my writing income varies month to month?",
      answer: "SafetyWing's monthly subscription model is perfect for variable income. You can cancel anytime without penalties, so you're not locked into annual commitments like traditional insurance plans."
    },
    {
      question: "How does SafetyWing compare to Writers Guild health plans?",
      answer: "Writers Guild plans are only available to union members and can be expensive. SafetyWing is available to all freelance writers, costs much less, and provides global coverage that traditional guild plans don't offer."
    },
    {
      question: "Does SafetyWing cover mental health for writers?",
      answer: "SafetyWing provides limited mental health coverage for acute situations. For ongoing mental health care, you may need additional coverage. However, for emergency mental health crises, SafetyWing provides protection."
    }
  ]

  return (
    <Layout
      title="Health Insurance for Freelance Writers - Affordable Coverage Starting at $42/Month"
      description="Affordable health insurance for freelance writers and copywriters. Get global coverage for $42/month with SafetyWing. Perfect for digital nomad writers."
      keywords="freelance writer health insurance, copywriter health insurance, writer health benefits, freelance health coverage"
    >
      {/* Breadcrumb Navigation */}
      <Breadcrumb 
        items={[
          { label: 'Home', href: '/' },
          { label: 'Freelance Writer Health Insurance', href: '/freelance-writer-health-insurance' }
        ]}
        className="bg-sw-gray-light"
      />

      {/* Hero Section */}
      <section className="sw-section">
        <div className="sw-container">
          <HeroBanner
            title="Health Insurance for Freelance Writers"
            subtitle="Get comprehensive coverage for just $42/month. Global coverage, no annual commitment. Perfect for writers who value freedom and flexibility."
            ctaText="Get SafetyWing Coverage"
            ctaLink={AFFILIATE_LINKS.nomadInsurance}
            secondaryCtaText="Learn More"
            secondaryCtaLink="#features"
            backgroundGradient="teal"
          />
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 bg-sw-gray-light">
        <div className="sw-container">
          <div className="text-center mb-12">
            <h2 className="sw-h2 text-sw-navy mb-4">The Freelance Writer's Insurance Dilemma</h2>
            <p className="sw-body text-sw-gray max-w-3xl mx-auto">
              You left the corporate world for creative freedom, but lost your health benefits. 
              Now you're stuck between expensive COBRA and unaffordable marketplace plans.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white border-2 border-sw-teal rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">💸</div>
              <h3 className="text-xl font-bold text-sw-navy mb-3">Expensive COBRA</h3>
              <p className="text-sw-gray">$400-800/month for the same coverage you had as an employee</p>
            </div>
            
            <div className="bg-white border-2 border-sw-teal rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-sw-navy mb-3">Variable Income</h3>
              <p className="text-sw-gray">Writing income fluctuates, but insurance costs stay high every month</p>
            </div>
            
            <div className="bg-white border-2 border-sw-teal rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-sw-navy mb-3">Travel Limitations</h3>
              <p className="text-sw-gray">U.S.-only plans don't work if you travel for assignments or work remotely</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-sw-teal to-sw-mint rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">The Writer's Solution: Global Coverage for $42/Month</h3>
            <p className="text-lg mb-6">SafetyWing understands the freelance lifestyle. Affordable, flexible, global coverage.</p>
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
            <h2 className="sw-h2 text-sw-navy mb-4">Why Freelance Writers Choose SafetyWing</h2>
            <p className="sw-body text-sw-gray max-w-3xl mx-auto">
              Designed for the creative economy. Affordable, flexible, and global.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Income Calculator Section */}
      <section className="sw-section bg-sw-gray-light">
        <div className="sw-container">
          <div className="text-center mb-12">
            <h2 className="sw-h2 text-sw-navy mb-4">Insurance Cost vs. Writing Income</h2>
            <p className="sw-body text-sw-gray max-w-3xl mx-auto">
              See how affordable SafetyWing is compared to your writing projects.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-sw-teal text-white p-6 text-center">
              <h3 className="text-2xl font-bold">How Much Writing Pays for SafetyWing?</h3>
            </div>
            
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="bg-sw-gray-light rounded-xl p-6">
                  <div className="text-3xl font-bold text-sw-teal mb-2">1 article</div>
                  <p className="text-sw-gray">One $50 blog post covers monthly premium</p>
                  <p className="text-sm text-sw-gray mt-2">Based on typical rates</p>
                </div>
                
                <div className="bg-sw-gray-light rounded-xl p-6">
                  <div className="text-3xl font-bold text-sw-coral mb-2">2 hours</div>
                  <p className="text-sw-gray">Writing time to earn monthly premium</p>
                  <p className="text-sm text-sw-gray mt-2">Based on $25/hour rate</p>
                </div>
                
                <div className="bg-sw-gray-light rounded-xl p-6">
                  <div className="text-3xl font-bold text-sw-blue mb-2">1 day</div>
                  <p className="text-sw-gray">Work one day, covered all month</p>
                  <p className="text-sm text-sw-gray mt-2">Typical freelance day rate</p>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-lg text-sw-gray mb-4">
                  <strong>Bottom line:</strong> Write one article per month to cover your health insurance for the entire month.
                </p>
                <Button variant="secondary" href={AFFILIATE_LINKS.nomadInsurance} isAffiliate>
                  Get Your Quote
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
            <h2 className="sw-h2 text-sw-navy mb-4">SafetyWing vs. Other Options for Writers</h2>
          </div>
          
          <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-sw-purple text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Option</th>
                  <th className="px-6 py-4 text-center">Monthly Cost</th>
                  <th className="px-6 py-4 text-center">Global Coverage</th>
                  <th className="px-6 py-4 text-center">Flexibility</th>
                  <th className="px-6 py-4 text-center">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-sw-teal bg-opacity-10">
                  <td className="px-6 py-4 font-semibold text-sw-teal">SafetyWing</td>
                  <td className="px-6 py-4 text-center font-bold text-sw-teal">$42</td>
                  <td className="px-6 py-4 text-center font-bold text-sw-teal">✓ 185+ countries</td>
                  <td className="px-6 py-4 text-center font-bold text-sw-teal">Cancel anytime</td>
                  <td className="px-6 py-4 text-center">Digital nomad writers</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold">COBRA</td>
                  <td className="px-6 py-4 text-center">$400-800</td>
                  <td className="px-6 py-4 text-center">✗ U.S. only</td>
                  <td className="px-6 py-4 text-center">18-month limit</td>
                  <td className="px-6 py-4 text-center">Recent employees</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-semibold">Marketplace Plans</td>
                  <td className="px-6 py-4 text-center">$200-600</td>
                  <td className="px-6 py-4 text-center">✗ U.S. only</td>
                  <td className="px-6 py-4 text-center">12-month commitment</td>
                  <td className="px-6 py-4 text-center">High-income writers</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold">Writers Guild</td>
                  <td className="px-6 py-4 text-center">$300-500</td>
                  <td className="px-6 py-4 text-center">✗ U.S. only</td>
                  <td className="px-6 py-4 text-center">Union membership required</td>
                  <td className="px-6 py-4 text-center">Union members only</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSection 
        testimonials={testimonials}
        title="What Freelance Writers Say About SafetyWing"
      />

      {/* FAQ Section */}
      <FAQ 
        items={faqItems}
        title="Common Questions from Freelance Writers"
        className="sw-section bg-sw-gray-light"
      />

      {/* Tax Benefits Section */}
      <section className="sw-section">
        <div className="sw-container">
          <div className="bg-sw-yellow bg-opacity-10 border-2 border-sw-yellow rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-sw-navy mb-6 text-center">💰 Tax Benefits for Freelance Writers</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-sw-navy mb-4">Self-Employment Deductions:</h3>
                <ul className="space-y-2 text-sw-gray">
                  <li>✓ Deduct 100% of health insurance premiums</li>
                  <li>✓ Reduces taxable income dollar-for-dollar</li>
                  <li>✓ Available even if you don't itemize deductions</li>
                  <li>✓ Claim on Form 1040, line 17</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-6">
                <h4 className="font-bold text-sw-navy mb-3">Example for Writer Earning $40k:</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Annual writing income:</span>
                    <span className="font-semibold">$40,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>SafetyWing annual cost:</span>
                    <span className="font-semibold">$504</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax savings (24% bracket):</span>
                    <span className="font-semibold text-green-600">-$121</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between font-bold">
                    <span>Effective annual cost:</span>
                    <span className="text-sw-teal">$383</span>
                  </div>
                  <p className="text-xs text-sw-gray mt-2">That's just $31.92/month after tax savings!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Writer-Specific Benefits */}
      <section className="sw-section bg-sw-gray-light">
        <div className="sw-container">
          <div className="text-center mb-12">
            <h2 className="sw-h2 text-sw-navy mb-4">Perfect for the Writing Lifestyle</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-xl font-bold text-sw-navy mb-4">🏠 Work From Anywhere</h3>
              <p className="text-sw-gray mb-4">
                Whether you write from home, coffee shops, co-working spaces, or while traveling, 
                SafetyWing covers you everywhere.
              </p>
              <ul className="text-sw-gray space-y-2">
                <li>✓ Home office coverage</li>
                <li>✓ Travel writer protection</li>
                <li>✓ Digital nomad friendly</li>
                <li>✓ No location restrictions</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-xl font-bold text-sw-navy mb-4">📝 Freelance-Friendly Features</h3>
              <p className="text-sw-gray mb-4">
                Designed for the realities of freelance life: variable income, 
                project-based work, and the need for flexibility.
              </p>
              <ul className="text-sw-gray space-y-2">
                <li>✓ Monthly payments (no annual commitment)</li>
                <li>✓ Cancel anytime without penalties</li>
                <li>✓ No employer required</li>
                <li>✓ Simple online management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="sw-section bg-gradient-to-br from-sw-teal to-sw-mint">
        <div className="sw-container text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Write with Peace of Mind?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of freelance writers who found affordable health insurance with SafetyWing. 
            Get a quote in 2 minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" href={AFFILIATE_LINKS.nomadInsurance} isAffiliate>
              Get SafetyWing Coverage
            </Button>
            <Button variant="outline" size="lg" href="/toolkit" className="border-white text-white hover:bg-white hover:text-sw-teal">
              Download Free Toolkit
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default FreelanceWriterHealthInsurance