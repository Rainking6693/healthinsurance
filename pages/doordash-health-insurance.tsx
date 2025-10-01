import type { NextPage } from 'next'
import Layout from '@/components/Layout/Layout'
import HeroBanner from '@/components/HeroBanner'
import FeatureCard from '@/components/FeatureCard'
import Button from '@/components/Button'
import FAQ from '@/components/FAQ'
import TestimonialSection from '@/components/TestimonialSection'
import Breadcrumb from '@/components/Breadcrumb'
import RelatedArticles, { driverArticles } from '@/components/RelatedArticles'
import { AFFILIATE_LINKS } from '@/config/links'
import Link from 'next/link'

const DoorDashHealthInsurance: NextPage = () => {
  const features = [
    {
      icon: '💰',
      title: 'Affordable at $42/Month',
      description: 'Much cheaper than marketplace plans that can cost $300-600/month for delivery drivers.',
      borderColor: 'teal' as const,
    },
    {
      icon: '🚗',
      title: 'Perfect for Drivers',
      description: 'Covers you while driving, at home, and everywhere in between. No work restrictions.',
      borderColor: 'coral' as const,
    },
    {
      icon: '⚡',
      title: 'Quick Emergency Coverage',
      description: 'Get covered for accidents, injuries, and sudden illness. $250 deductible only.',
      borderColor: 'blue' as const,
    },
    {
      icon: '🔄',
      title: 'Cancel Anytime',
      description: 'No annual commitment. Perfect for drivers with variable schedules and income.',
      borderColor: 'yellow' as const,
    },
  ]

  const testimonials = [
    {
      quote: "As a DoorDash driver, I couldn't afford $400/month for marketplace insurance. SafetyWing gives me peace of mind for $42.",
      author: "Mike T.",
      role: "DoorDash Driver",
      rating: 5,
      location: "Denver, CO",
      verified: true
    },
    {
      quote: "Got into a minor accident while dashing. SafetyWing covered my ER visit minus the $250 deductible. Saved me $2,800.",
      author: "Carlos R.",
      role: "Delivery Driver",
      rating: 5,
      location: "Phoenix, AZ",
      verified: true
    },
    {
      quote: "Finally found insurance that works with my gig schedule. No questions about driving for work.",
      author: "Amanda S.",
      role: "Multi-App Driver",
      rating: 4,
      location: "Miami, FL",
      verified: true
    },
  ]

  const faqItems = [
    {
      question: "Does DoorDash provide health insurance for drivers?",
      answer: "No, DoorDash does not provide traditional health insurance. They offer occupational accident insurance that only covers you while actively on delivery (about 5-10 hours per week). For comprehensive coverage, you need your own health insurance plan."
    },
    {
      question: "How much does health insurance cost for DoorDash drivers?",
      answer: "SafetyWing costs $42.16/month for most drivers under 40. Marketplace plans typically cost $300-600/month. With SafetyWing, you save $3,000-6,000 per year compared to traditional insurance."
    },
    {
      question: "Can I deduct health insurance as a DoorDash driver?",
      answer: "Yes! As a self-employed DoorDash driver, you can deduct 100% of your health insurance premiums on your taxes. This effectively reduces the cost of SafetyWing by 20-30% depending on your tax bracket."
    },
    {
      question: "What if I drive for multiple apps (DoorDash, Uber Eats, etc.)?",
      answer: "SafetyWing covers you regardless of which gig platforms you work for. Whether you drive for DoorDash, Uber Eats, Grubhub, or any combination, you're covered 24/7."
    },
    {
      question: "Does SafetyWing cover car accidents while dashing?",
      answer: "SafetyWing covers medical expenses from car accidents, but not vehicle damage. For vehicle coverage, you need commercial auto insurance. SafetyWing focuses on your health and medical bills."
    },
    {
      question: "Can I use SafetyWing if I have a pre-existing condition?",
      answer: "The Essential plan doesn't cover pre-existing conditions. However, if you're generally healthy and need emergency coverage, SafetyWing is still valuable for accidents and new health issues."
    }
  ]

  return (
    <Layout
      title="Health Insurance for DoorDash Drivers - Affordable Coverage Starting at $42/Month"
      description="Affordable health insurance for DoorDash drivers. Get covered for $42/month with SafetyWing. No annual commitment, covers accidents and emergencies."
      keywords="doordash health insurance, delivery driver insurance, gig worker health coverage, doordash driver benefits"
    >
      {/* Breadcrumb Navigation */}
      <Breadcrumb 
        items={[
          { label: 'Home', href: '/' },
          { label: 'DoorDash Health Insurance', href: '/doordash-health-insurance' }
        ]}
        className="bg-sw-gray-light"
      />

      {/* Hero Section */}
      <section className="sw-section">
        <div className="sw-container">
          <HeroBanner
            title="Health Insurance for DoorDash Drivers"
            subtitle="Get comprehensive coverage starting at just $42/month. No annual commitment. Perfect for delivery drivers and gig workers."
            ctaText="Get SafetyWing Coverage"
            ctaLink={AFFILIATE_LINKS.nomadInsurance}
            secondaryCtaText="Learn More"
            secondaryCtaLink="#features"
            backgroundGradient="coral"
          />
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 bg-sw-gray-light">
        <div className="sw-container">
          <div className="text-center mb-12">
            <h2 className="sw-h2 text-sw-navy mb-4">The DoorDash Driver's Insurance Problem</h2>
            <p className="sw-body text-sw-gray max-w-3xl mx-auto">
              DoorDash classifies you as an independent contractor, which means no health benefits. 
              You're on your own for coverage—but marketplace plans cost $300-600/month.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white border-2 border-sw-coral rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">😰</div>
              <h3 className="text-xl font-bold text-sw-navy mb-3">No Employer Benefits</h3>
              <p className="text-sw-gray">DoorDash doesn't provide health insurance like traditional employers</p>
            </div>
            
            <div className="bg-white border-2 border-sw-coral rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">💸</div>
              <h3 className="text-xl font-bold text-sw-navy mb-3">Expensive Marketplace</h3>
              <p className="text-sw-gray">ACA plans cost $300-600/month with high deductibles ($5k-8k)</p>
            </div>
            
            <div className="bg-white border-2 border-sw-coral rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">🚨</div>
              <h3 className="text-xl font-bold text-sw-navy mb-3">High Risk Job</h3>
              <p className="text-sw-gray">Driving for work increases accident risk—you need coverage</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-sw-teal to-sw-mint rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">The Solution: SafetyWing for $42/Month</h3>
            <p className="text-lg mb-6">Real health insurance designed for gig workers. Cancel anytime, no commitment.</p>
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
            <h2 className="sw-h2 text-sw-navy mb-4">Why DoorDash Drivers Choose SafetyWing</h2>
            <p className="sw-body text-sw-gray max-w-3xl mx-auto">
              Affordable, flexible health coverage designed specifically for the gig economy.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
            <h2 className="sw-h2 text-sw-navy mb-4">SafetyWing vs. Other Options for DoorDash Drivers</h2>
          </div>
          
          <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-sw-purple text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Option</th>
                  <th className="px-6 py-4 text-center">Monthly Cost</th>
                  <th className="px-6 py-4 text-center">Deductible</th>
                  <th className="px-6 py-4 text-center">Commitment</th>
                  <th className="px-6 py-4 text-center">Coverage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-sw-teal bg-opacity-10">
                  <td className="px-6 py-4 font-semibold text-sw-teal">SafetyWing</td>
                  <td className="px-6 py-4 text-center font-bold text-sw-teal">$42</td>
                  <td className="px-6 py-4 text-center font-bold text-sw-teal">$250</td>
                  <td className="px-6 py-4 text-center font-bold text-sw-teal">None</td>
                  <td className="px-6 py-4 text-center">Emergency + Accident</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold">Marketplace Plans</td>
                  <td className="px-6 py-4 text-center">$300-600</td>
                  <td className="px-6 py-4 text-center">$5,000-8,000</td>
                  <td className="px-6 py-4 text-center">12 months</td>
                  <td className="px-6 py-4 text-center">Comprehensive</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-semibold">DoorDash Coverage</td>
                  <td className="px-6 py-4 text-center">Free</td>
                  <td className="px-6 py-4 text-center">$1,000</td>
                  <td className="px-6 py-4 text-center">While dashing only</td>
                  <td className="px-6 py-4 text-center">Very limited</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold">No Insurance</td>
                  <td className="px-6 py-4 text-center">$0</td>
                  <td className="px-6 py-4 text-center text-red-500">Pay 100%</td>
                  <td className="px-6 py-4 text-center">-</td>
                  <td className="px-6 py-4 text-center text-red-500">None</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSection 
        testimonials={testimonials}
        title="What DoorDash Drivers Say About SafetyWing"
      />

      {/* FAQ Section */}
      <FAQ 
        items={faqItems}
        title="Common Questions from DoorDash Drivers"
        className="sw-section bg-sw-gray-light"
      />

      {/* Tax Benefits Section */}
      <section className="sw-section">
        <div className="sw-container">
          <div className="bg-sw-yellow bg-opacity-10 border-2 border-sw-yellow rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-sw-navy mb-6 text-center">💰 Tax Deduction Bonus for DoorDash Drivers</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-sw-navy mb-4">How It Works:</h3>
                <ul className="space-y-2 text-sw-gray">
                  <li>✓ Deduct 100% of SafetyWing premiums</li>
                  <li>✓ Reduces your taxable income</li>
                  <li>✓ Save 20-30% on insurance costs</li>
                  <li>✓ Simple to claim on Schedule C</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-6">
                <h4 className="font-bold text-sw-navy mb-3">Example Savings:</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Annual SafetyWing cost:</span>
                    <span className="font-semibold">$504</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax savings (25% bracket):</span>
                    <span className="font-semibold text-green-600">-$126</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between font-bold">
                    <span>Effective annual cost:</span>
                    <span className="text-sw-teal">$378</span>
                  </div>
                  <p className="text-xs text-sw-gray mt-2">That's just $31.50/month after tax savings!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <RelatedArticles 
        customArticles={driverArticles}
        title="More Resources for Drivers"
        className="sw-section bg-sw-gray-light"
      />

      {/* CTA Section */}
      <section className="sw-section bg-gradient-to-br from-sw-coral to-sw-coral-dark">
        <div className="sw-container text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Covered?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of DoorDash drivers who found affordable health insurance with SafetyWing. 
            Get a quote in 2 minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" href={AFFILIATE_LINKS.nomadInsurance} isAffiliate>
              Get SafetyWing Coverage
            </Button>
            <Button variant="outline" size="lg" href="/blog/health-insurance-doordash-drivers" className="border-white text-white hover:bg-white hover:text-sw-coral">
              Read Full Guide
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default DoorDashHealthInsurance