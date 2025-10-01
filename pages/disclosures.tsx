import type { NextPage } from 'next'
import Layout from '@/components/Layout/Layout'

const Disclosures: NextPage = () => {
  return (
    <Layout
      title="Disclosures & Legal Information - SafetyWingHub"
      description="Important disclosures, affiliate relationships, privacy policy, and terms of use for SafetyWingHub."
    >
      {/* Header */}
      <section className="bg-gradient-to-br from-sw-navy to-sw-navy-dark text-white py-16">
        <div className="sw-container-narrow text-center">
          <h1 className="text-5xl font-bold mb-4">Disclosures & Legal Information</h1>
          <p className="text-xl text-white/90">
            Transparency and compliance information
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="sw-section">
        <div className="sw-container-narrow">
          <div className="prose prose-lg max-w-none">
            {/* FTC Disclosure */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-sw-navy mb-6">FTC Affiliate Disclosure</h2>
              
              <div className="bg-sw-coral bg-opacity-10 border-l-4 border-sw-coral p-6 mb-6">
                <p className="text-sw-gray leading-relaxed">
                  <strong className="text-sw-navy">In accordance with FTC guidelines:</strong> This website contains affiliate links. 
                  If you click on these links and make a purchase, we may earn a commission at no additional cost to you. 
                  This helps support our website and allows us to continue providing free content and resources.
                </p>
              </div>

              <p className="text-sw-gray mb-4 leading-relaxed">
                SafetyWingHub is a participant in the SafetyWing affiliate program. We receive compensation when visitors 
                purchase insurance through our affiliate links. This relationship does not affect the price you pay for coverage.
              </p>

              <p className="text-sw-gray mb-4 leading-relaxed">
                We only recommend products and services that we have personally researched and believe provide value to our readers. 
                Our opinions are our own, and we strive to provide honest, unbiased information to help you make informed decisions 
                about your health insurance options.
              </p>

              <p className="text-sw-gray mb-4 leading-relaxed">
                You are never obligated to purchase anything through our affiliate links. You can always go directly to 
                SafetyWing.com or any other insurance provider's website to purchase coverage.
              </p>
            </section>

            {/* Insurance Disclaimer */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-sw-navy mb-6">Insurance Disclaimer</h2>
              
              <div className="bg-sw-yellow bg-opacity-10 border-l-4 border-sw-yellow p-6 mb-6">
                <p className="text-sw-gray leading-relaxed">
                  <strong className="text-sw-navy">Important:</strong> We are not licensed insurance agents, brokers, or advisors. 
                  The information provided on this website is for educational and informational purposes only.
                </p>
              </div>

              <ul className="list-disc pl-6 mb-6 space-y-3 text-sw-gray">
                <li>
                  We do not provide personalized insurance advice or recommendations based on your specific circumstances
                </li>
                <li>
                  The information presented may not be complete, accurate, or current for your situation
                </li>
                <li>
                  Insurance products, coverage, terms, and pricing can change without notice
                </li>
                <li>
                  Coverage availability and pricing may vary based on your location, age, health status, and other factors
                </li>
                <li>
                  Always read the full policy documents and terms before purchasing any insurance product
                </li>
              </ul>

              <p className="text-sw-gray mb-4 leading-relaxed">
                <strong className="text-sw-navy">Before making any insurance decisions:</strong> We strongly recommend consulting 
                with a licensed insurance professional who can assess your specific needs and circumstances. They can provide 
                personalized advice and help you understand all available options.
              </p>
            </section>

            {/* Medical Disclaimer */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-sw-navy mb-6">Medical Disclaimer</h2>
              
              <p className="text-sw-gray mb-4 leading-relaxed">
                The content on this website is not intended to be a substitute for professional medical advice, diagnosis, 
                or treatment. Always seek the advice of your physician or other qualified health provider with any questions 
                you may have regarding a medical condition or health insurance coverage for medical needs.
              </p>

              <p className="text-sw-gray mb-4 leading-relaxed">
                Never disregard professional medical advice or delay in seeking it because of something you have read on this website.
              </p>
            </section>

            {/* Privacy Policy */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-sw-navy mb-6">Privacy Policy</h2>
              
              <h3 className="text-xl font-bold text-sw-navy mb-3">Information We Collect</h3>
              <p className="text-sw-gray mb-4 leading-relaxed">
                We may collect the following types of information when you visit our website:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-sw-gray">
                <li>Email address (if you subscribe to our newsletter or download resources)</li>
                <li>Name (if provided through forms)</li>
                <li>Analytics data (pages visited, time on site, browser type, etc.)</li>
                <li>IP address and location data</li>
              </ul>

              <h3 className="text-xl font-bold text-sw-navy mb-3">How We Use Your Information</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-sw-gray">
                <li>To send you requested resources and newsletters</li>
                <li>To improve our website and content</li>
                <li>To analyze website traffic and user behavior</li>
                <li>To comply with legal obligations</li>
              </ul>

              <h3 className="text-xl font-bold text-sw-navy mb-3">Third-Party Services</h3>
              <p className="text-sw-gray mb-4 leading-relaxed">
                We use third-party services including:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-sw-gray">
                <li>Google Analytics for website analytics</li>
                <li>ConvertKit for email marketing (when implemented)</li>
                <li>SafetyWing affiliate tracking</li>
              </ul>

              <h3 className="text-xl font-bold text-sw-navy mb-3">Cookies</h3>
              <p className="text-sw-gray mb-4 leading-relaxed">
                We use cookies to improve your browsing experience, analyze site traffic, and for affiliate tracking purposes. 
                You can control cookie settings through your browser preferences.
              </p>

              <h3 className="text-xl font-bold text-sw-navy mb-3">Your Rights</h3>
              <p className="text-sw-gray mb-4 leading-relaxed">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-sw-gray">
                <li>Request access to your personal data</li>
                <li>Request correction or deletion of your data</li>
                <li>Opt-out of marketing communications</li>
                <li>Disable cookies through your browser</li>
              </ul>
            </section>

            {/* Terms of Use */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-sw-navy mb-6">Terms of Use</h2>
              
              <h3 className="text-xl font-bold text-sw-navy mb-3">Acceptance of Terms</h3>
              <p className="text-sw-gray mb-4 leading-relaxed">
                By accessing and using this website, you agree to be bound by these Terms of Use. If you do not agree to these terms, 
                please do not use this website.
              </p>

              <h3 className="text-xl font-bold text-sw-navy mb-3">Use of Content</h3>
              <p className="text-sw-gray mb-4 leading-relaxed">
                All content on this website is provided for informational purposes only. You may view, download, and print 
                content for personal, non-commercial use only. You may not republish, redistribute, or sell any content 
                without our express written permission.
              </p>

              <h3 className="text-xl font-bold text-sw-navy mb-3">Limitation of Liability</h3>
              <p className="text-sw-gray mb-4 leading-relaxed">
                SafetyWingHub and its owners, employees, and affiliates shall not be liable for any direct, indirect, incidental, 
                consequential, or punitive damages arising from your use of this website or the information provided herein.
              </p>

              <h3 className="text-xl font-bold text-sw-navy mb-3">External Links</h3>
              <p className="text-sw-gray mb-4 leading-relaxed">
                This website contains links to external websites. We are not responsible for the content, privacy policies, 
                or practices of these external sites.
              </p>

              <h3 className="text-xl font-bold text-sw-navy mb-3">Changes to Terms</h3>
              <p className="text-sw-gray mb-4 leading-relaxed">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting 
                to this website. Your continued use of the website after changes constitutes acceptance of the modified terms.
              </p>
            </section>

            {/* Contact Information */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-sw-navy mb-6">Contact Information</h2>
              
              <p className="text-sw-gray mb-4 leading-relaxed">
                If you have any questions about these disclosures, our policies, or practices, please contact us:
              </p>
              
              <div className="bg-sw-gray-light rounded-2xl p-6">
                <p className="text-sw-gray mb-2">
                  <strong className="text-sw-navy">Email:</strong> hello@safetywinghub.com
                </p>
                <p className="text-sw-gray mb-2">
                  <strong className="text-sw-navy">Website:</strong> www.safetywinghub.com
                </p>
              </div>
            </section>

            {/* Last Updated */}
            <section>
              <p className="text-sw-gray italic">
                Last updated: January 2025
              </p>
            </section>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Disclosures