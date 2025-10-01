import type { NextPage } from 'next'
import Layout from '@/components/Layout/Layout'
import HowToGuide from '@/components/HowToGuide'
import Breadcrumb from '@/components/Breadcrumb'
import Button from '@/components/Button'
import { AFFILIATE_LINKS } from '@/config/links'

const HowToGetHealthInsurance: NextPage = () => {
  const steps = [
    {
      name: "Calculate Your Annual Income",
      text: `<p>Start by estimating your total annual income from all gig work sources. This includes:</p>
      <ul class="list-disc ml-6 mt-3 space-y-1">
        <li>Uber, Lyft, or other rideshare driving</li>
        <li>DoorDash, Uber Eats, or food delivery</li>
        <li>Freelance work (writing, design, consulting)</li>
        <li>TaskRabbit, Handy, or service gigs</li>
        <li>Any other 1099 income</li>
      </ul>
      <p class="mt-3"><strong>Why this matters:</strong> Your income determines if you qualify for marketplace subsidies or Medicaid.</p>`,
    },
    {
      name: "Check if You Qualify for Medicaid",
      text: `<p>If your annual income is below these thresholds, you may qualify for free or low-cost Medicaid:</p>
      <ul class="list-disc ml-6 mt-3 space-y-1">
        <li><strong>Single person:</strong> $20,120 or less</li>
        <li><strong>Family of 2:</strong> $27,214 or less</li>
        <li><strong>Family of 4:</strong> $41,400 or less</li>
      </ul>
      <p class="mt-3">Apply at your state's Medicaid website or Healthcare.gov. This is your best option if you qualify.</p>`,
      url: "https://www.healthcare.gov/medicaid-chip/getting-medicaid-chip/"
    },
    {
      name: "Check Healthcare.gov for Subsidized Plans",
      text: `<p>If you don't qualify for Medicaid but earn less than $60,240 (single) or $124,800 (family of 4), you may get premium tax credits.</p>
      <p class="mt-3"><strong>What to do:</strong></p>
      <ul class="list-disc ml-6 mt-3 space-y-1">
        <li>Go to Healthcare.gov</li>
        <li>Enter your estimated annual income</li>
        <li>Compare plans and subsidies</li>
        <li>Note: Open enrollment is Nov 1 - Jan 15 each year</li>
      </ul>
      <p class="mt-3"><strong>Typical costs with subsidies:</strong> $50-200/month (but high deductibles of $5,000-8,000)</p>`,
      url: "https://www.healthcare.gov"
    },
    {
      name: "Consider SafetyWing for Affordable Coverage",
      text: `<p>If marketplace plans are still too expensive or you need flexible coverage, SafetyWing is designed for gig workers:</p>
      <ul class="list-disc ml-6 mt-3 space-y-1">
        <li><strong>Cost:</strong> $42.16/month for most people under 40</li>
        <li><strong>Coverage:</strong> Emergency medical, accidents, sudden illness</li>
        <li><strong>Deductible:</strong> Only $250 (vs $5,000+ for marketplace plans)</li>
        <li><strong>Flexibility:</strong> Cancel anytime, no annual commitment</li>
        <li><strong>Global:</strong> Works in 185+ countries</li>
      </ul>
      <p class="mt-3"><strong>Best for:</strong> Healthy gig workers who need emergency coverage and flexibility.</p>`,
      url: AFFILIATE_LINKS.nomadInsurance
    },
    {
      name: "Compare Your Options Side-by-Side",
      text: `<p>Create a simple comparison of your top options:</p>
      <div class="mt-3 bg-gray-50 p-4 rounded-lg">
        <p><strong>For each option, write down:</strong></p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li>Monthly premium cost</li>
          <li>Annual deductible</li>
          <li>Maximum out-of-pocket</li>
          <li>What's covered vs. not covered</li>
          <li>Flexibility (can you cancel?)</li>
        </ul>
      </div>
      <p class="mt-3">Use our free comparison spreadsheet to make this easier.</p>`,
      url: "/toolkit"
    },
    {
      name: "Make Your Decision Based on Your Needs",
      text: `<p>Choose based on your specific situation:</p>
      <div class="mt-3 space-y-3">
        <div class="bg-green-50 p-3 rounded border-l-4 border-green-400">
          <p><strong>Choose Medicaid if:</strong> You qualify (best option - it's free!)</p>
        </div>
        <div class="bg-blue-50 p-3 rounded border-l-4 border-blue-400">
          <p><strong>Choose subsidized marketplace if:</strong> You have chronic conditions and qualify for good subsidies</p>
        </div>
        <div class="bg-teal-50 p-3 rounded border-l-4 border-teal-400">
          <p><strong>Choose SafetyWing if:</strong> You're healthy, need flexibility, or marketplace plans are too expensive</p>
        </div>
      </div>`,
    },
    {
      name: "Apply and Get Covered",
      text: `<p>Once you've decided, apply immediately:</p>
      <ul class="list-disc ml-6 mt-3 space-y-1">
        <li><strong>Medicaid:</strong> Apply through your state website</li>
        <li><strong>Marketplace:</strong> Apply during open enrollment at Healthcare.gov</li>
        <li><strong>SafetyWing:</strong> Apply online anytime (takes 5 minutes)</li>
      </ul>
      <p class="mt-3"><strong>Important:</strong> Don't wait! Every day without coverage is a financial risk.</p>`,
    },
    {
      name: "Set Up Automatic Payments",
      text: `<p>Ensure your coverage continues by setting up automatic payments:</p>
      <ul class="list-disc ml-6 mt-3 space-y-1">
        <li>Use a reliable payment method (checking account or credit card)</li>
        <li>Set calendar reminders to review your coverage annually</li>
        <li>Keep your contact information updated</li>
        <li>Save your insurance cards and policy information</li>
      </ul>
      <p class="mt-3">Download our emergency contact card template to keep important info handy.</p>`,
      url: "/toolkit"
    },
    {
      name: "Understand Your Tax Benefits",
      text: `<p>As a self-employed gig worker, you can deduct health insurance premiums:</p>
      <ul class="list-disc ml-6 mt-3 space-y-1">
        <li><strong>Deduction:</strong> 100% of premiums paid</li>
        <li><strong>Where to claim:</strong> Form 1040, line 17 (self-employed health insurance deduction)</li>
        <li><strong>Savings:</strong> Reduces your taxable income dollar-for-dollar</li>
        <li><strong>Example:</strong> $504 annual premium = $504 less taxable income</li>
      </ul>
      <p class="mt-3">This effectively reduces your insurance cost by 20-30% depending on your tax bracket.</p>`,
    }
  ]

  return (
    <Layout
      title="How to Get Health Insurance as a Gig Worker - Complete Step-by-Step Guide"
      description="Complete step-by-step guide to getting affordable health insurance as a gig worker. Compare Medicaid, marketplace plans, and SafetyWing options."
      keywords="how to get health insurance gig worker, gig worker insurance guide, freelancer health insurance steps"
    >
      {/* Breadcrumb Navigation */}
      <Breadcrumb 
        items={[
          { label: 'Home', href: '/' },
          { label: 'How to Get Health Insurance', href: '/how-to-get-health-insurance-gig-worker' }
        ]}
        className="bg-sw-gray-light"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sw-purple to-sw-purple-light text-white py-16">
        <div className="sw-container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            How to Get Health Insurance as a Gig Worker
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Complete step-by-step guide to finding affordable health coverage. 
            Follow these 9 steps to get covered in under 30 minutes.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="sw-section">
        <div className="sw-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-sw-navy mb-6">
              Why This Guide Works
            </h2>
            <p className="text-lg text-sw-gray mb-8">
              We've helped thousands of gig workers find affordable health insurance. 
              This guide walks you through every option available, from free Medicaid to 
              affordable private plans like SafetyWing.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white border-2 border-sw-teal rounded-xl p-6">
                <div className="text-3xl mb-3">⏱️</div>
                <h3 className="font-bold text-sw-navy mb-2">30 Minutes</h3>
                <p className="text-sw-gray">Complete the entire process in one sitting</p>
              </div>
              
              <div className="bg-white border-2 border-sw-coral rounded-xl p-6">
                <div className="text-3xl mb-3">💰</div>
                <h3 className="font-bold text-sw-navy mb-2">Save $3,000+</h3>
                <p className="text-sw-gray">Find options that cost 60-80% less than COBRA</p>
              </div>
              
              <div className="bg-white border-2 border-sw-blue rounded-xl p-6">
                <div className="text-3xl mb-3">✅</div>
                <h3 className="font-bold text-sw-navy mb-2">All Options</h3>
                <p className="text-sw-gray">Covers every available option for gig workers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How-To Guide */}
      <HowToGuide
        title="Step-by-Step Guide to Getting Health Insurance"
        description="Follow these 9 steps to find and enroll in affordable health insurance as a gig worker."
        steps={steps}
        totalTime="PT30M"
        estimatedCost="$42-200/month"
        difficulty="Beginner"
        className="sw-section bg-sw-gray-light"
      />

      {/* Quick Decision Tool */}
      <section className="sw-section">
        <div className="sw-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-sw-navy mb-8 text-center">
              Quick Decision Tool
            </h2>
            <p className="text-lg text-sw-gray text-center mb-12">
              Not sure which option is right for you? Use this quick decision tree:
            </p>
            
            <div className="bg-white border-2 border-sw-gray-light rounded-2xl p-8">
              <div className="space-y-6">
                <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded">
                  <h3 className="font-bold text-green-800 mb-2">
                    📊 Is your annual income under $20,120 (single) or $41,400 (family of 4)?
                  </h3>
                  <p className="text-green-700">
                    <strong>YES →</strong> Apply for Medicaid first. It's free or very low cost.
                  </p>
                </div>
                
                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded">
                  <h3 className="font-bold text-blue-800 mb-2">
                    🏥 Do you have chronic conditions or need regular medical care?
                  </h3>
                  <p className="text-blue-700">
                    <strong>YES →</strong> Check Healthcare.gov for subsidized comprehensive plans.
                  </p>
                </div>
                
                <div className="bg-teal-50 border-l-4 border-teal-400 p-6 rounded">
                  <h3 className="font-bold text-teal-800 mb-2">
                    💪 Are you generally healthy and need emergency coverage?
                  </h3>
                  <p className="text-teal-700">
                    <strong>YES →</strong> SafetyWing is probably your best option at $42/month.
                  </p>
                </div>
                
                <div className="bg-purple-50 border-l-4 border-purple-400 p-6 rounded">
                  <h3 className="font-bold text-purple-800 mb-2">
                    🌍 Do you travel frequently or work internationally?
                  </h3>
                  <p className="text-purple-700">
                    <strong>YES →</strong> SafetyWing is the only option with global coverage.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-lg text-sw-gray mb-6">
                  Still not sure? Download our free comparison toolkit:
                </p>
                <Button variant="secondary" href="/toolkit">
                  Get Free Comparison Tool
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="sw-section bg-sw-gray-light">
        <div className="sw-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-sw-navy mb-8 text-center">
              Common Mistakes to Avoid
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white border-2 border-red-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-red-600 mb-4">❌ Don't Do This</h3>
                <ul className="space-y-3 text-sw-gray">
                  <li>• Waiting until you get sick to get insurance</li>
                  <li>• Choosing the cheapest plan without checking the deductible</li>
                  <li>• Forgetting about the self-employed health insurance tax deduction</li>
                  <li>• Not updating your income estimates on marketplace plans</li>
                  <li>• Assuming you don't qualify for Medicaid</li>
                </ul>
              </div>
              
              <div className="bg-white border-2 border-green-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-600 mb-4">✅ Do This Instead</h3>
                <ul className="space-y-3 text-sw-gray">
                  <li>• Get covered as soon as possible</li>
                  <li>• Compare total annual costs (premium + deductible)</li>
                  <li>• Claim your health insurance deduction on taxes</li>
                  <li>• Report income changes to avoid subsidy repayment</li>
                  <li>• Always check Medicaid eligibility first</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="sw-section bg-gradient-to-br from-sw-teal to-sw-mint">
        <div className="sw-container text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Covered?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            You now have everything you need to find affordable health insurance. 
            Take action today—every day without coverage is a financial risk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" href={AFFILIATE_LINKS.nomadInsurance} isAffiliate>
              Start with SafetyWing
            </Button>
            <Button variant="outline" size="lg" href="https://www.healthcare.gov" className="border-white text-white hover:bg-white hover:text-sw-teal">
              Check Healthcare.gov
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default HowToGetHealthInsurance