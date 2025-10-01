import React from 'react'
import Link from 'next/link'
import { AFFILIATE_LINKS, INTERNAL_LINKS } from '@/config/links'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks: Record<string, Array<{ label: string; href: string; external?: boolean }>> = {
    'Quick Links': [
      { label: 'Home', href: INTERNAL_LINKS.home },
      { label: 'Blog', href: INTERNAL_LINKS.blog },
      { label: 'About', href: INTERNAL_LINKS.about },
      { label: 'Free Toolkit', href: INTERNAL_LINKS.toolkit },
    ],
    'SafetyWing Plans': [
      { label: 'Nomad Insurance', href: AFFILIATE_LINKS.nomadInsurance, external: true },
      { label: 'Remote Health', href: AFFILIATE_LINKS.remoteHealth, external: true },
      { label: 'SafetyWing Homepage', href: AFFILIATE_LINKS.homepage, external: true },
    ],
    'Legal': [
      { label: 'Disclosures', href: INTERNAL_LINKS.disclosures },
      { label: 'Privacy Policy', href: INTERNAL_LINKS.disclosures },
      { label: 'Terms of Use', href: INTERNAL_LINKS.disclosures },
    ],
  }

  return (
    <footer className="bg-sw-navy text-white">
      <div className="sw-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1">
            <h3 className="text-2xl font-bold mb-4">
              SafetyWing<span className="text-sw-teal">Hub</span>
            </h3>
            <p className="text-sw-gray-light mb-4">
              Affordable health insurance resources for gig workers, freelancers, and digital nomads.
            </p>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-lg font-semibold mb-4 text-sw-teal">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sw-gray-light hover:text-sw-teal transition-colors duration-200"
                      >
                        {link.label}
                        <svg
                          className="inline-block ml-1 h-3 w-3"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sw-gray-light hover:text-sw-teal transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-sw-navy-dark">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sw-gray-light text-sm mb-4 md:mb-0">
              © {currentYear} SafetyWingHub. All rights reserved.
            </p>
            <div className="text-sw-gray-light text-sm text-center md:text-right">
              <p className="mb-2">
                <strong>Disclosure:</strong> This site contains affiliate links to SafetyWing.
              </p>
              <p>
                We may earn a commission at no extra cost to you. See our{' '}
                <Link href={INTERNAL_LINKS.disclosures} className="text-sw-teal hover:underline">
                  full disclosure
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer