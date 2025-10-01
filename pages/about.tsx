import type { NextPage } from 'next'
import Layout from '@/components/Layout/Layout'
import Button from '@/components/Button'
import { AFFILIATE_LINKS } from '@/config/links'

const About: NextPage = () => {
  return (
    <Layout
      title="About SafetyWingHub - Helping Gig Workers Find Affordable Insurance"
      description="Learn about our mission to help freelancers, gig workers, and digital nomads find affordable health insurance solutions."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sw-purple to-sw-purple-light text-white py-16">
        <div className="sw-container-narrow text-center">
          <h1 className="text-5xl font-bold mb-4">About SafetyWingHub</h1>
          <p className="text-xl text-white/90">
            Helping the modern workforce find affordable health coverage
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="sw-section">
        <div className="sw-container-narrow">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-sw-navy mb-6">Our Story</h2>
            
            <p className="text-sw-gray mb-6 text-lg leading-relaxed">
              When I left my corporate job to become a freelancer in 2023, I discovered something shocking: 
              <strong className="text-sw-navy"> health insurance for gig workers is either unaffordable or unavailable</strong>.
            </p>

            <p className="text-sw-gray mb-6 leading-relaxed">
              COBRA wanted $847 per month. Marketplace plans started at $385/month with an $8,700 deductible. 
              As someone earning $3,000-4,000 per month in my first year freelancing, these options were impossible.
            </p>

            <div className="bg-sw-teal bg-opacity-10 border-l-4 border-sw-teal p-6 my-8">
              <p className="text-sw-navy font-semibold mb-2">The Problem We're Solving:</p>
              <p className="text-sw-gray">
                59 million Americans work in the gig economy, yet most navigate health coverage without employer benefits. 
                We're here to change that by providing clear, honest information about affordable options.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-sw-navy mt-10 mb-6">Why We Recommend SafetyWing</h2>

            <p className="text-sw-gray mb-6 leading-relaxed">
              After spending 100+ hours researching every option available to freelancers and gig workers, 
              we consistently found that SafetyWing offers the best value for most healthy, mobile workers under 50.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
              <div className="bg-white border-2 border-sw-coral rounded-xl p-6 text-center">
                <p className="text-3xl font-bold text-sw-coral mb-2">$42</p>
                <p className="text-sw-gray">Monthly cost for most people</p>
              </div>
              <div className="bg-white border-2 border-sw-teal rounded-xl p-6 text-center">
                <p className="text-3xl font-bold text-sw-teal mb-2">185+</p>
                <p className="text-sw-gray">Countries covered</p>
              </div>
              <div className="bg-white border-2 border-sw-blue rounded-xl p-6 text-center">
                <p className="text-3xl font-bold text-sw-blue mb-2">$250</p>
                <p className="text-sw-gray">Low deductible</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-sw-navy mt-10 mb-6">Our Mission</h2>

            <p className="text-sw-gray mb-6 leading-relaxed">
              We believe every gig worker, freelancer, and digital nomad deserves access to affordable health coverage. 
              Our mission is to:
            </p>

            <ul className="list-disc pl-6 mb-8 space-y-3 text-sw-gray">
              <li>Provide clear, unbiased information about health insurance options</li>
              <li>Share real experiences and honest reviews from actual users</li>
              <li>Help you navigate the confusing world of health coverage</li>
              <li>Save you time and money in finding the right plan</li>
            </ul>

            <h2 className="text-3xl font-bold text-sw-navy mt-10 mb-6">Affiliate Disclosure</h2>

            <div className="bg-sw-gray-light border-l-4 border-sw-coral p-6 my-8">
              <p className="text-sw-gray mb-4">
                <strong className="text-sw-navy">Full Transparency:</strong> This site contains affiliate links to SafetyWing. 
                If you purchase insurance through our links, we may earn a commission at no extra cost to you.
              </p>
              
              <p className="text-sw-gray mb-4">
                This helps us maintain the site and continue providing free resources. However, our recommendations are based on 
                extensive research and real user experiences—not commission rates.
              </p>
              
              <p className="text-sw-gray">
                We only recommend SafetyWing because we genuinely believe it's the best option for most gig workers. 
                If it's not right for you, we'll tell you that too.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-sw-navy mt-10 mb-6">Who We Help</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-white border-2 border-sw-gray-light rounded-xl p-6">
                <h3 className="text-xl font-bold text-sw-navy mb-3">Gig Workers</h3>
                <ul className="text-sw-gray space-y-2">
                  <li>• Uber & Lyft drivers</li>
                  <li>• DoorDash & Instacart shoppers</li>
                  <li>• TaskRabbit workers</li>
                  <li>• Delivery drivers</li>
                </ul>
              </div>
              
              <div className="bg-white border-2 border-sw-gray-light rounded-xl p-6">
                <h3 className="text-xl font-bold text-sw-navy mb-3">Freelancers</h3>
                <ul className="text-sw-gray space-y-2">
                  <li>• Writers & designers</li>
                  <li>• Developers & consultants</li>
                  <li>• Photographers & videographers</li>
                  <li>• Virtual assistants</li>
                </ul>
              </div>
              
              <div className="bg-white border-2 border-sw-gray-light rounded-xl p-6">
                <h3 className="text-xl font-bold text-sw-navy mb-3">Digital Nomads</h3>
                <ul className="text-sw-gray space-y-2">
                  <li>• Remote workers</li>
                  <li>• Location-independent professionals</li>
                  <li>• Long-term travelers</li>
                  <li>• Expats</li>
                </ul>
              </div>
              
              <div className="bg-white border-2 border-sw-gray-light rounded-xl p-6">
                <h3 className="text-xl font-bold text-sw-navy mb-3">Between Jobs</h3>
                <ul className="text-sw-gray space-y-2">
                  <li>• Recent graduates</li>
                  <li>• Career changers</li>
                  <li>• COBRA alternatives</li>
                  <li>• Temporary coverage seekers</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-sw-navy mt-10 mb-6">Contact Us</h2>

            <p className="text-sw-gray mb-6 leading-relaxed">
              Have questions about health insurance options? Found an error on our site? Want to share your experience?
            </p>

            <p className="text-sw-gray mb-8">
              Email us at: <a href="mailto:hello@safetywinghub.com" className="text-sw-teal hover:text-sw-teal-dark font-semibold">
                hello@safetywinghub.com
              </a>
            </p>

            <p className="text-sw-gray italic">
              Note: We're not licensed insurance agents or brokers. We provide educational content only. 
              Please consult with a qualified insurance professional before making coverage decisions.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-sw-teal to-sw-mint text-white py-16">
        <div className="sw-container text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get Affordable Coverage?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join thousands of gig workers who found affordable health insurance with SafetyWing
          </p>
          <Button variant="primary" size="lg" href={AFFILIATE_LINKS.nomadInsurance} isAffiliate>
            Get Your Quote Now
          </Button>
        </div>
      </section>
    </Layout>
  )
}

export default About