import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Navigation from './Navigation'
import Footer from './Footer'
import SEOAudit from '../SEOAudit'
import WebsiteSchema from '../WebsiteSchema'

interface LayoutProps {
  children: React.ReactNode
  title?: string
  description?: string
  keywords?: string
  ogImage?: string
  canonicalUrl?: string
  articleData?: {
    author?: string
    publishedTime?: string
    modifiedTime?: string
    section?: string
    tags?: string[]
  }
  noIndex?: boolean
}

const Layout: React.FC<LayoutProps> = ({
  children,
  title = 'SafetyWing Insurance for Gig Workers & Digital Nomads',
  description = 'Affordable health insurance options for freelancers, gig workers, and digital nomads. Compare SafetyWing plans and find coverage that fits your lifestyle.',
  keywords = 'safetywing, health insurance, gig workers, digital nomads, freelancer insurance, travel insurance',
  ogImage = '/og-image.jpg',
  canonicalUrl,
  articleData,
  noIndex = false,
}) => {
  const router = useRouter()
  const fullTitle = title.includes('SafetyWing') ? title : `${title} | SafetyWingHub`
  const currentUrl = canonicalUrl || `https://safetywinghub.com${router.asPath}`
  const isArticle = articleData !== undefined

  return (
    <>
      <Head>
        <title>{fullTitle}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'index, follow'} />
        <link rel="icon" href="/favicon.ico" />

        {/* Preload critical resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://safetywing.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* Open Graph */}
        <meta property="og:type" content={isArticle ? 'article' : 'website'} />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:site_name" content="SafetyWingHub" />
        <meta property="og:locale" content="en_US" />
        
        {/* Article-specific Open Graph */}
        {isArticle && articleData && (
          <>
            <meta property="article:author" content={articleData.author} />
            <meta property="article:published_time" content={articleData.publishedTime} />
            <meta property="article:modified_time" content={articleData.modifiedTime} />
            <meta property="article:section" content={articleData.section || 'Health Insurance'} />
            {articleData.tags?.map((tag, index) => (
              <meta key={index} property="article:tag" content={tag} />
            ))}
          </>
        )}

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:site" content="@SafetyWingHub" />
        <meta name="twitter:creator" content="@SafetyWingHub" />

        {/* Canonical */}
        <link rel="canonical" href={currentUrl} />

        {/* Additional SEO Meta Tags */}
        <meta name="author" content={articleData?.author || 'SafetyWingHub Team'} />
        <meta name="language" content="en" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        
        {/* Schema.org Organization Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "SafetyWingHub",
              "url": "https://safetywinghub.com",
              "logo": "https://safetywinghub.com/logo.png",
              "description": "Helping gig workers, freelancers, and digital nomads find affordable health insurance solutions.",
              "sameAs": [
                "https://twitter.com/SafetyWingHub",
                "https://facebook.com/SafetyWingHub"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "hello@safetywinghub.com",
                "contactType": "customer service"
              }
            })
          }}
        />

        {/* Article Schema Markup */}
        {isArticle && articleData && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Article",
                "headline": title,
                "description": description,
                "author": {
                  "@type": "Person",
                  "name": articleData.author
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "SafetyWingHub",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://safetywinghub.com/logo.png"
                  }
                },
                "datePublished": articleData.publishedTime,
                "dateModified": articleData.modifiedTime,
                "mainEntityOfPage": {
                  "@type": "WebPage",
                  "@id": currentUrl
                },
                "image": ogImage,
                "articleSection": articleData.section || "Health Insurance",
                "keywords": keywords
              })
            }}
          />
        )}
      </Head>

      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow bg-white">
          {children}
        </main>
        <Footer />
        <SEOAudit />
        <WebsiteSchema />
      </div>
    </>
  )
}

export default Layout