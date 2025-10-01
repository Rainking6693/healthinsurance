import React from 'react'
import Button from './Button'
import { AFFILIATE_LINKS } from '@/config/links'

interface HeroBannerProps {
  title: string
  subtitle?: string
  ctaText?: string
  ctaLink?: string
  secondaryCtaText?: string
  secondaryCtaLink?: string
  backgroundGradient?: 'blue' | 'purple' | 'teal'
  showLogo?: boolean
}

const HeroBanner: React.FC<HeroBannerProps> = ({
  title,
  subtitle,
  ctaText = 'Get Nomad Insurance',
  ctaLink = AFFILIATE_LINKS.nomadInsurance,
  secondaryCtaText,
  secondaryCtaLink,
  backgroundGradient = 'blue',
  showLogo = true,
}) => {
  const gradients = {
    blue: 'bg-gradient-to-br from-sw-blue to-sw-teal',
    purple: 'bg-gradient-to-br from-sw-purple to-sw-purple-light',
    teal: 'bg-gradient-to-br from-sw-teal to-sw-mint',
  }

  return (
    <div className={`${gradients[backgroundGradient]} rounded-3xl overflow-hidden`}>
      <div className="sw-container">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[500px] py-12 md:py-16">
          {/* Content Side */}
          <div className="space-y-6 text-white">
            {showLogo && (
              <div className="flex items-center space-x-2 mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                <span className="text-2xl font-bold">SafetyWing</span>
              </div>
            )}

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {title}
            </h1>

            {subtitle && (
              <p className="text-xl md:text-2xl text-white/90">
                {subtitle}
              </p>
            )}

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                variant="primary"
                size="lg"
                href={ctaLink}
                isAffiliate
              >
                {ctaText}
              </Button>

              {secondaryCtaText && secondaryCtaLink && (
                <Button
                  variant="outline"
                  size="lg"
                  href={secondaryCtaLink}
                  className="border-white text-white hover:bg-white hover:text-sw-navy"
                >
                  {secondaryCtaText}
                </Button>
              )}
            </div>
          </div>

          {/* Visual Side */}
          <div className="hidden md:flex items-center justify-center">
            <div className="relative">
              {/* Decorative circles */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              </div>
              <div className="relative z-10 text-center">
                <div className="text-white">
                  <svg
                    className="w-48 h-48 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <p className="mt-4 text-2xl font-bold text-white">
                  Global Coverage
                </p>
                <p className="text-white/80">
                  185+ Countries
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner