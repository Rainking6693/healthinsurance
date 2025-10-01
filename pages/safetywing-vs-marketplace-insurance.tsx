import type { NextPage } from 'next'
import Layout from '@/components/Layout/Layout'
import Button from '@/components/Button'
import Breadcrumb from '@/components/Breadcrumb'
import FAQ from '@/components/FAQ'
import { AFFILIATE_LINKS } from '@/config/links'

const SafetyWingVsMarketplace: NextPage = () => {
  const faqItems = [
    {
      question: "Is SafetyWing considered real health insurance?",
      answer: "Yes, SafetyWing is real insurance that provides medical coverage for emergencies, accidents, and sudden illnesses. However, it's designed as travel/nomad insurance rather than comprehensive health insurance, so it doesn't cover routine care like annual check-ups."
    },
    {
      question: "Why is SafetyWing so much cheaper than marketplace plans?",
      answer: "SafetyWing is cheaper because it's emergency-focused coverage rather than comprehensive healthcare. It doesn't cover routine care, preventive services, or pre-existing conditions, which significantly reduces costs. It's designed for healthy people who need emergency protection."
    },
    {
      question: "Can I switch from marketplace insurance to SafetyWing anytime?",
      answer: "You can cancel marketplace insurance during open enrollment (Nov 1 - Jan 15) or if you have a qualifying life event. SafetyWing can be purchased anytime and canceled anytime, making it much more flexible."
    },
    {
      question: "Which option is better for someone with diabetes or other chronic conditions?",
      answer: "For chronic conditions, marketplace insurance is better because it covers ongoing care, prescriptions, and specialist visits. SafetyWing doesn't cover pre-existing conditions, so it wouldn't help with diabetes management."
    },
    {
      question: "Do both options qualify as minimum essential coverage under the ACA?",
      answer: "Marketplace plans qualify as minimum essential coverage. SafetyWing may not qualify in all states, which could result in a tax penalty in states that require health insurance. Check your state's requirements."
    },
    {
      question: "Can I use both SafetyWing and marketplace insurance together?",
      answer: "Yes, you can have both, but it's usually not cost-effective. Some people use SafetyWing as travel coverage while maintaining marketplace insurance for domestic care, but this gets expensive quickly."
    }
  ]

  return (
    <Layout
      title="SafetyWing vs Marketplace Insurance - Complete Comparison for Gig Workers"
      description="Detailed comparison of SafetyWing vs ACA marketplace insurance for gig workers. Compare costs, coverage, and find the best option for your situation."
      keywords="safetywing vs marketplace insurance, aca vs safetywing, gig worker insurance comparison"
    >
      {/* Breadcrumb Navigation */}
      <Breadcrumb 
        items={[
          { label: 'Home', href: '/' },
          { label: 'SafetyWing vs Marketplace Insurance', href: '/safetywing-vs-marketplace-insurance' }
        ]}
        className="bg-sw-gray-light"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sw-purple to-sw-purple-light text-white py-16">
        <div className="sw-container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            SafetyWing vs Marketplace Insurance
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Complete comparison to help gig workers choose between SafetyWing's affordable coverage 
            and traditional ACA marketplace plans.
          </p>
        </div>
      </section>

      {/* Quick Summary */}
      <section className="sw-section">
        <div className="sw-container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-sw-navy mb-6">Quick Summary</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-sw-teal to-sw-mint rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Choose SafetyWing If:</h3>
                <ul className="text-left space-y-2">
                  <li>✓ You're healthy and under 50</li>
                  <li>✓ You need emergency coverage only</li>
                  <li>✓ You want flexibility (cancel anytime)</li>
                  <li>✓ You travel or work internationally</li>
                  <li>✓ You want the lowest cost option</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-sw-blue to-sw-navy rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Choose Marketplace If:</h3>
                <ul className="text-left space-y-2">
                  <li>✓ You have chronic health conditions</li>
                  <li>✓ You need routine care and check-ups</li>
                  <li>✓ You qualify for significant subsidies</li>
                  <li>✓ You want comprehensive coverage</li>
                  <li>✓ You need prescription drug coverage</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Comparison Table */}
      <section className="sw-section bg-sw-gray-light">
        <div className="sw-container">
          <h2 className="text-3xl font-bold text-sw-navy mb-8 text-center">
            Detailed Side-by-Side Comparison
          </h2>
          
          <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-sw-purple text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Feature</th>
                    <th className="px-6 py-4 text-center">SafetyWing</th>
                    <th className="px-6 py-4 text-center">Marketplace Insurance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-semibold">Monthly Cost (Age 30)</td>
                    <td className="px-6 py-4 text-center text-sw-teal font-bold">$42.16</td>
                    <td className="px-6 py-4 text-center">$200-600 (varies by state/income)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Annual Deductible</td>
                    <td className="px-6 py-4 text-center text-sw-teal font-bold">$250</td>
                    <td className="px-6 py-4 text-center">$1,500-$8,700</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold">Maximum Coverage</td>
                    <td className="px-6 py-4 text-center">$250,000</td>
                    <td className="px-6 py-4 text-center">Unlimited</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Emergency Care</td>
                    <td className="px-6 py-4 text-center text-green-600 font-bold">✓ Covered</td>
                    <td className="px-6 py-4 text-center text-green-600 font-bold">✓ Covered</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold">Routine Check-ups</td>
                    <td className="px-6 py-4 text-center text-red-500 font-bold">✗ Not Covered</td>
                    <td className="px-6 py-4 text-center text-green-600 font-bold">✓ Covered</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Prescription Drugs</td>
                    <td className="px-6 py-4 text-center text-yellow-600">Limited (acute only)</td>
                    <td className="px-6 py-4 text-center text-green-600 font-bold">✓ Covered</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold">Pre-existing Conditions</td>
                    <td className="px-6 py-4 text-center text-red-500 font-bold">✗ Not Covered</td>
                    <td className="px-6 py-4 text-center text-green-600 font-bold">✓ Covered</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Mental Health</td>
                    <td className="px-6 py-4 text-center text-yellow-600">Limited</td>
                    <td className="px-6 py-4 text-center text-green-600 font-bold">✓ Covered</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold">Maternity Care</td>
                    <td className="px-6 py-4 text-center text-red-500 font-bold">✗ Not Covered</td>
                    <td className="px-6 py-4 text-center text-green-600 font-bold">✓ Covered</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Global Coverage</td>
                    <td className="px-6 py-4 text-center text-green-600 font-bold">✓ 185+ Countries</td>
                    <td className="px-6 py-4 text-center text-red-500 font-bold">✗ U.S. Only</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold">Enrollment Period</td>
                    <td className="px-6 py-4 text-center text-green-600 font-bold">Anytime</td>
                    <td className="px-6 py-4 text-center">Nov 1 - Jan 15 only*</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Cancellation</td>
                    <td className="px-6 py-4 text-center text-green-600 font-bold">Anytime</td>
                    <td className="px-6 py-4 text-center">End of plan year only*</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold">Network Restrictions</td>
                    <td className="px-6 py-4 text-center text-green-600 font-bold">None</td>
                    <td className="px-6 py-4 text-center">In-network required</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-gray-50 text-sm text-gray-600">
              *Except for qualifying life events
            </div>
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="sw-section">
        <div className="sw-container">
          <h2 className="text-3xl font-bold text-sw-navy mb-8 text-center">
            Real-World Cost Comparison
          </h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Scenario 1: Healthy Person */}
              <div className="bg-white border-2 border-sw-teal rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-sw-navy mb-6 text-center">
                  Scenario 1: Healthy 30-Year-Old
                </h3>
                
                <div className="space-y-6">
                  <div className="bg-sw-teal bg-opacity-10 rounded-xl p-6">
                    <h4 className="font-bold text-sw-teal mb-3">SafetyWing</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Monthly premium:</span>
                        <span className="font-semibold">$42.16</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Annual premium:</span>
                        <span className="font-semibold">$506</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Deductible:</span>
                        <span className="font-semibold">$250</span>
                      </div>
                      <div className="border-t pt-2 flex justify-between font-bold">
                        <span>Total if no claims:</span>
                        <span className="text-sw-teal">$506</span>
                      </div>
                      <div className="flex justify-between font-bold">
                        <span>Total if one ER visit:</span>
                        <span className="text-sw-teal">$756</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-100 rounded-xl p-6">
                    <h4 className="font-bold text-gray-700 mb-3">Marketplace Plan</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Monthly premium:</span>
                        <span className="font-semibold">$350</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Annual premium:</span>
                        <span className="font-semibold">$4,200</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Deductible:</span>
                        <span className="font-semibold">$6,000</span>
                      </div>
                      <div className="border-t pt-2 flex justify-between font-bold">
                        <span>Total if no claims:</span>
                        <span>$4,200</span>
                      </div>
                      <div className="flex justify-between font-bold">
                        <span>Total if one ER visit:</span>
                        <span>$7,200+</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4 text-center">
                    <p className="font-bold text-green-800">SafetyWing saves $3,694/year</p>
                    <p className="text-sm text-green-600">Even with an ER visit, saves $6,444</p>
                  </div>
                </div>
              </div>

              {/* Scenario 2: Person with Chronic Condition */}
              <div className="bg-white border-2 border-sw-blue rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-sw-navy mb-6 text-center">
                  Scenario 2: Person with Diabetes
                </h3>
                
                <div className="space-y-6">
                  <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
                    <h4 className="font-bold text-red-700 mb-3">SafetyWing</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Monthly premium:</span>
                        <span className="font-semibold">$42.16</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Diabetes coverage:</span>
                        <span className="font-semibold text-red-600">$0 (not covered)</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Insulin costs:</span>
                        <span className="font-semibold text-red-600">$3,600/year</span>
                      </div>
                      <div className="border-t pt-2 flex justify-between font-bold">
                        <span>Total annual cost:</span>
                        <span className="text-red-600">$4,106</span>
                      </div>
                    </div>
                    <p className="text-xs text-red-600 mt-3">
                      ⚠️ Not suitable for chronic conditions
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
                    <h4 className="font-bold text-blue-700 mb-3">Marketplace Plan (with subsidy)</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Monthly premium:</span>
                        <span className="font-semibold">$150</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Insulin copay:</span>
                        <span className="font-semibold">$35/month</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Doctor visits:</span>
                        <span className="font-semibold">$30 copay</span>
                      </div>
                      <div className="border-t pt-2 flex justify-between font-bold">
                        <span>Total annual cost:</span>
                        <span className="text-blue-600">$2,580</span>
                      </div>
                    </div>
                    <p className="text-xs text-blue-600 mt-3">
                      ✓ Comprehensive diabetes care
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4 text-center">
                    <p className="font-bold text-blue-800">Marketplace saves $1,526/year</p>
                    <p className="text-sm text-blue-600">Plus provides essential ongoing care</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decision Framework */}
      <section className="sw-section bg-sw-gray-light">
        <div className="sw-container">
          <h2 className="text-3xl font-bold text-sw-navy mb-8 text-center">
            Which Should You Choose?
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-sw-navy mb-6 text-center">
                Decision Framework
              </h3>
              
              <div className="space-y-6">
                <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded">
                  <h4 className="font-bold text-green-800 mb-2">
                    ✅ Choose SafetyWing if you answer YES to most of these:
                  </h4>
                  <ul className="text-green-700 space-y-1">
                    <li>• You're generally healthy with no chronic conditions</li>
                    <li>• You rarely need medical care beyond emergencies</li>
                    <li>• You want the lowest possible monthly cost</li>
                    <li>• You value flexibility (cancel anytime)</li>
                    <li>• You travel internationally or work remotely</li>
                    <li>• You're under 50 years old</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded">
                  <h4 className="font-bold text-blue-800 mb-2">
                    ✅ Choose Marketplace Insurance if you answer YES to any of these:
                  </h4>
                  <ul className="text-blue-700 space-y-1">
                    <li>• You have diabetes, heart disease, or other chronic conditions</li>
                    <li>• You take prescription medications regularly</li>
                    <li>• You want routine check-ups and preventive care</li>
                    <li>• You qualify for significant subsidies (income under $60k)</li>
                    <li>• You're planning to have children</li>
                    <li>• You need mental health services</li>
                  </ul>
                </div>
                
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
                  <h4 className="font-bold text-yellow-800 mb-2">
                    🤔 Still Not Sure?
                  </h4>
                  <p className="text-yellow-700">
                    Download our free comparison spreadsheet to calculate costs based on your specific situation, 
                    or start with SafetyWing since you can cancel anytime if you find a better option.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ 
        items={faqItems}
        title="Common Questions About SafetyWing vs Marketplace Insurance"
        className="sw-section"
      />

      {/* CTA Section */}
      <section className="sw-section bg-gradient-to-br from-sw-purple to-sw-purple-light">
        <div className="sw-container text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Make Your Decision?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Use our free comparison tool to calculate exact costs for your situation, 
            or get started with SafetyWing's flexible coverage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" href="/toolkit">
              Download Free Comparison Tool
            </Button>
            <Button variant="outline" size="lg" href={AFFILIATE_LINKS.nomadInsurance} isAffiliate className="border-white text-white hover:bg-white hover:text-sw-purple">
              Try SafetyWing (Cancel Anytime)
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default SafetyWingVsMarketplace