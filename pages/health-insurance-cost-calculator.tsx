import type { NextPage } from 'next'
import Layout from '@/components/Layout/Layout'
import InsuranceCostCalculator from '@/components/InsuranceCostCalculator'
import Breadcrumb from '@/components/Breadcrumb'
import Button from '@/components/Button'
import { AFFILIATE_LINKS } from '@/config/links'

const HealthInsuranceCostCalculator: NextPage = () => {
  return (
    <Layout
      title="Health Insurance Cost Calculator for Gig Workers - Compare Plans & Save Money"
      description="Free health insurance cost calculator for gig workers and freelancers. Compare SafetyWing, marketplace plans, and COBRA costs based on your age and income."
      keywords="health insurance calculator, gig worker insurance cost, freelancer insurance calculator, safetywing cost calculator"
    >
      {/* Breadcrumb Navigation */}
      <Breadcrumb 
        items={[
          { label: 'Home', href: '/' },
          { label: 'Cost Calculator', href: '/health-insurance-cost-calculator' }
        ]}
        className="bg-sw-gray-light"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sw-blue to-sw-teal text-white py-16">
        <div className="sw-container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Health Insurance Cost Calculator
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Get personalized cost estimates for SafetyWing, marketplace plans, and COBRA 
            based on your age, income, and location.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="sw-section">
        <div className="sw-container">
          <div className="max-w-4xl mx-auto">
            <InsuranceCostCalculator />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="sw-section bg-sw-gray-light">
        <div className="sw-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-sw-navy mb-8 text-center">
              How Our Calculator Works
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-6 text-center">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold text-sw-navy mb-3">Real Data</h3>
                <p className="text-sw-gray">
                  Based on actual insurance costs from thousands of gig workers across different states and age groups.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-sw-navy mb-3">Personalized</h3>
                <p className="text-sw-gray">
                  Factors in your age, income, health status, and location to provide accurate estimates for your situation.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 text-center">
                <div className="text-4xl mb-4">💡</div>
                <h3 className="text-xl font-bold text-sw-navy mb-3">Smart Recommendations</h3>
                <p className="text-sw-gray">
                  Provides tailored recommendations based on your inputs and potential savings opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Your Results */}
      <section className="sw-section">
        <div className="sw-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-sw-navy mb-8 text-center">
              Understanding Your Results
            </h2>
            
            <div className="space-y-8">
              <div className="bg-white border-2 border-sw-teal rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-sw-teal mb-4">SafetyWing Costs</h3>
                <p className="text-sw-gray mb-4">
                  SafetyWing pricing is based primarily on age, with significant increases at ages 40, 50, and 60. 
                  The calculator uses their published rates:
                </p>
                <ul className="text-sw-gray space-y-2">
                  <li>• <strong>Ages 18-39:</strong> $42.16/month</li>
                  <li>• <strong>Ages 40-49:</strong> ~$85/month</li>
                  <li>• <strong>Ages 50-59:</strong> ~$150/month</li>
                  <li>• <strong>Ages 60+:</strong> ~$220/month</li>
                </ul>
              </div>
              
              <div className="bg-white border-2 border-sw-blue rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-sw-blue mb-4">Marketplace Plan Costs</h3>
                <p className="text-sw-gray mb-4">
                  Marketplace costs vary significantly based on multiple factors:
                </p>
                <ul className="text-sw-gray space-y-2">
                  <li>• <strong>Income:</strong> Lower income = higher subsidies = lower costs</li>
                  <li>• <strong>Age:</strong> Older adults pay significantly more</li>
                  <li>• <strong>Location:</strong> Costs vary dramatically by state and county</li>
                  <li>• <strong>Plan type:</strong> Bronze plans cheaper but higher deductibles</li>
                </ul>
              </div>
              
              <div className="bg-white border-2 border-sw-coral rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-sw-coral mb-4">COBRA Costs</h3>
                <p className="text-sw-gray mb-4">
                  COBRA allows you to continue your former employer's plan but at full cost:
                </p>
                <ul className="text-sw-gray space-y-2">
                  <li>• <strong>Cost:</strong> 102% of what your employer paid</li>
                  <li>• <strong>Duration:</strong> Up to 18 months (36 in some cases)</li>
                  <li>• <strong>Coverage:</strong> Identical to what you had as an employee</li>
                  <li>• <strong>Enrollment:</strong> Must elect within 60 days of job loss</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Considerations */}
      <section className="sw-section bg-sw-gray-light">
        <div className="sw-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-sw-navy mb-8 text-center">
              Important Considerations
            </h2>
            
            <div className="bg-white rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-sw-navy mb-4">Beyond Monthly Premiums</h3>
                  <ul className="text-sw-gray space-y-2">
                    <li>• <strong>Deductibles:</strong> How much you pay before insurance kicks in</li>
                    <li>• <strong>Out-of-pocket maximums:</strong> Your maximum annual cost</li>
                    <li>• <strong>Coverage scope:</strong> What's included vs. excluded</li>
                    <li>• <strong>Network restrictions:</strong> Which doctors you can see</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-sw-navy mb-4">Special Circumstances</h3>
                  <ul className="text-sw-gray space-y-2">
                    <li>• <strong>Chronic conditions:</strong> May require comprehensive coverage</li>
                    <li>• <strong>Prescription drugs:</strong> Check formularies and copays</li>
                    <li>• <strong>Pregnancy planning:</strong> Maternity coverage requirements</li>
                    <li>• <strong>Travel frequency:</strong> International coverage needs</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="sw-section">
        <div className="sw-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-sw-navy mb-8">
              Ready to Take Action?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white border-2 border-sw-teal rounded-xl p-6">
                <h3 className="text-lg font-bold text-sw-navy mb-3">1. Get Official Quotes</h3>
                <p className="text-sw-gray mb-4">
                  Use our calculator results as a starting point, then get official quotes for accurate pricing.
                </p>
                <Button variant="secondary" href={AFFILIATE_LINKS.nomadInsurance} isAffiliate>
                  SafetyWing Quote
                </Button>
              </div>
              
              <div className="bg-white border-2 border-sw-blue rounded-xl p-6">
                <h3 className="text-lg font-bold text-sw-navy mb-3">2. Compare All Options</h3>
                <p className="text-sw-gray mb-4">
                  Download our comprehensive comparison toolkit to evaluate all your options side-by-side.
                </p>
                <Button variant="secondary" href="/toolkit">
                  Free Toolkit
                </Button>
              </div>
              
              <div className="bg-white border-2 border-sw-coral rounded-xl p-6">
                <h3 className="text-lg font-bold text-sw-navy mb-3">3. Get Expert Guidance</h3>
                <p className="text-sw-gray mb-4">
                  Read our detailed guides or contact us for personalized help with your specific situation.
                </p>
                <Button variant="secondary" href="/blog">
                  Read Guides
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="sw-section bg-gradient-to-br from-sw-blue to-sw-teal">
        <div className="sw-container text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Don't Wait - Get Covered Today
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Every day without health insurance is a financial risk. Use your calculator results 
            to make an informed decision and get protected.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" href={AFFILIATE_LINKS.nomadInsurance} isAffiliate>
              Get SafetyWing Coverage
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

export default HealthInsuranceCostCalculator