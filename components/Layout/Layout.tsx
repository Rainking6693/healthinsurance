import React from 'react'
import Head from 'next/head'
import Navigation from './Navigation'
import Footer from './Footer'

interface LayoutProps {
  children: React.ReactNode
  title?: string
  description?: string
  keywords?: string
  ogImage?: string
}

const Layout: React.FC<LayoutProps> = ({
  children,
  title = 'SafetyWing Insurance for Gig Workers & Digital Nomads',
  description = 'Affordable health insurance options for freelancers, gig workers, and digital nomads. Compare SafetyWing plans and find coverage that fits your lifestyle.',
  keywords = 'safetywing, health insurance, gig workers, digital nomads, freelancer insurance, travel insurance',
  ogImage = '/og-image.jpg',
}) => {
  const fullTitle = title.includes('SafetyWing') ? title : `${title} | SafetyWingHub`

  return (
    <>
      <Head>
        <title>{fullTitle}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:site_name" content="SafetyWingHub" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />

        {/* Canonical */}
        <link rel="canonical" href={`https://safetywinghub.com${typeof window !== 'undefined' ? window.location.pathname : ''}`} />
      </Head>

      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow bg-white">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Layout