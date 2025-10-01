import type { NextPage } from 'next'
import Layout from '@/components/Layout/Layout'
import Button from '@/components/Button'
import { AFFILIATE_LINKS } from '@/config/links'

const Toolkit: NextPage = () => {
  return (
    <Layout
      title="Free Gig Worker's Insurance Toolkit - Compare Your Options"
      description="Download our free toolkit to compare health insurance options for gig workers and freelancers. Make the right choice in under 30 minutes."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sw-blue to-sw-teal text-white py-16">
        <div className="sw-container-narrow text-center">
          <h1 className="text-5xl font-bold mb-4">
            Download Your Free Gig Worker's Insurance Toolkit
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Everything you need to find affordable health coverage in one comprehensive guide
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="sw-section">
        <div className="sw-container-narrow">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Benefits */}
            <div>
              <h2 className="text-3xl font-bold text-sw-navy mb-6">
                What's Inside the Free Toolkit
              </h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-sw-teal text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-sw-navy mb-2">
                      Insurance Comparison Calculator
                    </h3>
                    <p className="text-sw-gray">
                      Side-by-side comparison of SafetyWing, marketplace plans, and other options with real costs
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-sw-teal text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-sw-navy mb-2">
                      Income & Subsidy Worksheet
                    </h3>
                    <p className="text-sw-gray">
                      Calculate if you qualify for marketplace subsidies or Medicaid based on your gig income
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-sw-teal text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-sw-navy mb-2">
                      Tax Deduction Guide
                    </h3>
                    <p className="text-sw-gray">
                      How to deduct 100% of your health insurance premiums as a gig worker (save 20-30%)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-sw-teal text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-sw-navy mb-2">
                      Decision Framework
                    </h3>
                    <p className="text-sw-gray">
                      Step-by-step flowchart to choose the right coverage based on your health needs and budget
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-sw-teal text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">
                    5
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-sw-navy mb-2">
                      Quick Reference Cards
                    </h3>
                    <p className="text-sw-gray">
                      Key terms explained, important deadlines, and phone numbers you need
                    </p>
                  </div>
                </div>
              </div>

              {/* Testimonials */}
              <div className="bg-sw-gray-light rounded-2xl p-6 mb-8">
                <h3 className="text-xl font-bold text-sw-navy mb-4">What Readers Say</h3>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-sw-gray italic mb-2">
                      "This toolkit saved me hours of research. Found out I qualified for subsidies I didn't know about!"
                    </p>
                    <p className="text-sm font-semibold text-sw-navy">- Maria K., Freelance Writer</p>
                  </div>
                  
                  <div>
                    <p className="text-sw-gray italic mb-2">
                      "The comparison calculator showed me exactly how much I'd save with SafetyWing. Game changer."
                    </p>
                    <p className="text-sm font-semibold text-sw-navy">- Tom S., DoorDash Driver</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Opt-in Form */}
            <div className="lg:sticky lg:top-24">
              <div className="bg-white border-2 border-sw-teal rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-sw-navy mb-2 text-center">
                  Get Your Free Toolkit
                </h3>
                <p className="text-sw-gray text-center mb-6">
                  Join 5,000+ gig workers who've already downloaded it
                </p>

                {/* Email Form (placeholder - will need ConvertKit integration) */}
                <form className="space-y-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-sw-navy mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-3 border-2 border-sw-gray-light rounded-lg focus:border-sw-teal focus:outline-none transition-colors"
                      placeholder="Your first name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-sw-navy mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border-2 border-sw-gray-light rounded-lg focus:border-sw-teal focus:outline-none transition-colors"
                      placeholder="you@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="workType" className="block text-sm font-semibold text-sw-navy mb-2">
                      I'm a... (optional)
                    </label>
                    <select
                      id="workType"
                      name="workType"
                      className="w-full px-4 py-3 border-2 border-sw-gray-light rounded-lg focus:border-sw-teal focus:outline-none transition-colors"
                    >
                      <option value="">Select one...</option>
                      <option value="freelancer">Freelancer</option>
                      <option value="gigworker">Gig Worker (Uber, DoorDash, etc.)</option>
                      <option value="nomad">Digital Nomad</option>
                      <option value="between">Between Jobs</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <Button
                    variant="secondary"
                    size="lg"
                    className="w-full"
                    onClick={(e) => {
                      e.preventDefault()
                      alert('Email form integration coming soon! For now, email us at hello@safetywinghub.com')
                    }}
                  >
                    Send Me the Free Toolkit
                  </Button>

                  <p className="text-xs text-sw-gray text-center">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </form>

                {/* Trust Badges */}
                <div className="mt-6 pt-6 border-t border-sw-gray-light">
                  <div className="flex justify-center items-center gap-6 text-sw-gray">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-sw-navy">5,000+</p>
                      <p className="text-sm">Downloads</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-sw-navy">100%</p>
                      <p className="text-sm">Free</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-sw-navy">30 min</p>
                      <p className="text-sm">To Decide</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Alternative CTA */}
              <div className="mt-8 text-center">
                <p className="text-sw-gray mb-4">
                  Already know SafetyWing is right for you?
                </p>
                <Button 
                  variant="outline" 
                  href={AFFILIATE_LINKS.nomadInsurance}
                  isAffiliate
                >
                  Get a Quote Now →
                </Button>
              </div>
            </div>
          </div>

          {/* Preview Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-sw-navy mb-8 text-center">
              Toolkit Preview
            </h2>
            
            <div className="bg-gradient-to-br from-sw-gray-light to-white rounded-2xl p-8 border-2 border-sw-gray-light">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <div className="bg-sw-teal h-32 rounded mb-4 flex items-center justify-center">
                    <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-center font-semibold text-sw-navy">Comparison Calculator</p>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <div className="bg-sw-coral h-32 rounded mb-4 flex items-center justify-center">
                    <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <p className="text-center font-semibold text-sw-navy">Tax Guide</p>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <div className="bg-sw-blue h-32 rounded mb-4 flex items-center justify-center">
                    <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </div>
                  <p className="text-center font-semibold text-sw-navy">Decision Framework</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-sw-purple text-white py-16">
        <div className="sw-container text-center">
          <h2 className="text-3xl font-bold mb-4">
            Stop Overpaying for Health Insurance
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Download the free toolkit and find affordable coverage in under 30 minutes
          </p>
          <Button 
            variant="primary" 
            size="lg"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Get Your Free Toolkit Now
          </Button>
        </div>
      </section>
    </Layout>
  )
}

export default Toolkit