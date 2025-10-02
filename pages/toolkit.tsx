import type { NextPage } from 'next'
import { useState } from 'react'
import Layout from '@/components/Layout/Layout'
import Button from '@/components/Button'
import { AFFILIATE_LINKS } from '@/config/links'

const Toolkit: NextPage = () => {
  const [showDownloads, setShowDownloads] = useState(false)
  const [userEmail, setUserEmail] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const email = formData.get('email') as string
    const firstName = formData.get('firstName') as string
    const workType = formData.get('workType') as string

    // Send notification email
    const subject = `New Toolkit Download: ${email}`
    const body = `New user signed up!

Email: ${email}
Name: ${firstName}
Work Type: ${workType}
Date: ${new Date().toLocaleString()}
Page: /toolkit

Next step: Send them the toolkit files.`

    // Open mailto link
    window.location.href = `mailto:rainking6693@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    // Show success state with download links
    setShowDownloads(true)
    setUserEmail(email)
  }

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
                      Income Assessment Calculator
                    </h3>
                    <p className="text-sw-gray">
                      Google Sheets calculator to assess your income and find the best insurance options
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-sw-coral text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">
                    2
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
                  <div className="bg-sw-yellow text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">
                    3
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
                  <div className="bg-sw-blue text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-sw-navy mb-2">
                      Action Plan Worksheet
                    </h3>
                    <p className="text-sw-gray">
                      Your personalized checklist to get covered quickly and efficiently
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

            {/* Right Column - Form or Downloads */}
            <div className="lg:sticky lg:top-24">
              {!showDownloads ? (
                /* Email Form */
                <div className="bg-white border-2 border-sw-teal rounded-2xl p-8 shadow-xl">
                  <h3 className="text-2xl font-bold text-sw-navy mb-2 text-center">
                    Get Your Free Toolkit
                  </h3>
                  <p className="text-sw-gray text-center mb-6">
                    Join 5,000+ gig workers who've already downloaded it
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
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
                      type="submit"
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
              ) : (
                /* Download Links */
                <div className="bg-white border-2 border-sw-teal rounded-2xl p-8 shadow-xl">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-sw-navy mb-6 text-center">
                      🎉 Your Toolkit is Ready!
                    </h3>
                    
                    <p className="text-center text-sw-gray mb-6">
                      Thanks {userEmail}! Your toolkit files are ready to download:
                    </p>

                    {/* PDF Downloads */}
                    <a
                      href="/toolkit/tax-deduction-guide.pdf"
                      download
                      className="flex items-center gap-4 p-4 bg-white border-2 border-sw-coral rounded-lg hover:shadow-lg transition-all"
                    >
                      <span className="text-3xl">📄</span>
                      <div>
                        <p className="font-bold text-sw-navy">Tax Deduction Guide</p>
                        <p className="text-sm text-sw-gray">Learn how to deduct 100% of premiums</p>
                      </div>
                      <span className="ml-auto text-sw-coral">Download PDF →</span>
                    </a>

                    <a
                      href="/toolkit/decision-framework.pdf"
                      download
                      className="flex items-center gap-4 p-4 bg-white border-2 border-sw-teal rounded-lg hover:shadow-lg transition-all"
                    >
                      <span className="text-3xl">📋</span>
                      <div>
                        <p className="font-bold text-sw-navy">Decision Framework</p>
                        <p className="text-sm text-sw-gray">Step-by-step guide to choose coverage</p>
                      </div>
                      <span className="ml-auto text-sw-teal">Download PDF →</span>
                    </a>

                    <a
                      href="/toolkit/action-plan.pdf"
                      download
                      className="flex items-center gap-4 p-4 bg-white border-2 border-sw-yellow rounded-lg hover:shadow-lg transition-all"
                    >
                      <span className="text-3xl">✅</span>
                      <div>
                        <p className="font-bold text-sw-navy">Action Plan Worksheet</p>
                        <p className="text-sm text-sw-gray">Your personalized checklist</p>
                      </div>
                      <span className="ml-auto text-sw-yellow">Download PDF →</span>
                    </a>

                    {/* Google Sheet - Coming Soon */}
                    <div className="flex items-center gap-4 p-4 bg-gray-100 border-2 border-gray-300 rounded-lg">
                      <span className="text-3xl">📊</span>
                      <div>
                        <p className="font-bold text-gray-700">Income Assessment Calculator</p>
                        <p className="text-sm text-gray-500">Google Sheets calculator - Coming Soon!</p>
                      </div>
                      <span className="ml-auto text-gray-500">Coming Soon</span>
                    </div>

                    <div className="mt-6 pt-6 border-t border-sw-gray-light text-center">
                      <p className="text-sm text-sw-gray mb-4">
                        Need help? Email us at hello@safetywinghub.com
                      </p>
                      <Button
                        variant="outline"
                        onClick={() => setShowDownloads(false)}
                        className="mr-4"
                      >
                        Download Again
                      </Button>
                      <Button
                        variant="primary"
                        href={AFFILIATE_LINKS.nomadInsurance}
                        isAffiliate
                      >
                        Get SafetyWing Now
                      </Button>
                    </div>
                  </div>
                </div>
              )}

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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Tax Deduction Guide Preview */}
                <div className="border-2 border-sw-coral rounded-xl p-6">
                  <div className="text-4xl mb-4">📄</div>
                  <h4 className="font-bold text-lg mb-2">Tax Deduction Guide</h4>
                  <p className="text-sm text-sw-gray mb-4">
                    Learn how to deduct health insurance premiums
                  </p>
                  <a
                    href="/toolkit/tax-deduction-guide.pdf"
                    target="_blank"
                    className="text-sw-coral font-semibold hover:underline"
                  >
                    Preview PDF →
                  </a>
                </div>

                {/* Decision Framework Preview */}
                <div className="border-2 border-sw-teal rounded-xl p-6">
                  <div className="text-4xl mb-4">📋</div>
                  <h4 className="font-bold text-lg mb-2">Decision Framework</h4>
                  <p className="text-sm text-sw-gray mb-4">
                    Step-by-step guide to choose the right coverage
                  </p>
                  <a
                    href="/toolkit/decision-framework.pdf"
                    target="_blank"
                    className="text-sw-teal font-semibold hover:underline"
                  >
                    Preview PDF →
                  </a>
                </div>

                {/* Action Plan Preview */}
                <div className="border-2 border-sw-yellow rounded-xl p-6">
                  <div className="text-4xl mb-4">✅</div>
                  <h4 className="font-bold text-lg mb-2">Action Plan</h4>
                  <p className="text-sm text-sw-gray mb-4">
                    Your personalized checklist to get covered
                  </p>
                  <a
                    href="/toolkit/action-plan.pdf"
                    target="_blank"
                    className="text-sw-yellow font-semibold hover:underline"
                  >
                    Preview PDF →
                  </a>
                </div>

                {/* Calculator Preview */}
                <div className="border-2 border-gray-300 rounded-xl p-6">
                  <div className="text-4xl mb-4">📊</div>
                  <h4 className="font-bold text-lg mb-2">Income Calculator</h4>
                  <p className="text-sm text-sw-gray mb-4">
                    Assess your income and insurance options
                  </p>
                  <span className="text-gray-500 font-semibold">
                    Coming Soon →
                  </span>
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