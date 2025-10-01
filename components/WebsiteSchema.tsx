import React from 'react'
import { useRouter } from 'next/router'

interface WebsiteSchemaProps {
  searchAction?: boolean
}

const WebsiteSchema: React.FC<WebsiteSchemaProps> = ({ searchAction = true }) => {
  const router = useRouter()
  
  // Generate comprehensive website schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "SafetyWingHub",
    "alternateName": "SafetyWing Hub",
    "url": "https://safetywinghub.com",
    "description": "Affordable health insurance resources and guides for gig workers, freelancers, and digital nomads. Find coverage starting at $42/month.",
    "inLanguage": "en-US",
    "copyrightYear": new Date().getFullYear(),
    "copyrightHolder": {
      "@type": "Organization",
      "name": "SafetyWingHub"
    },
    "publisher": {
      "@type": "Organization",
      "name": "SafetyWingHub",
      "url": "https://safetywinghub.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://safetywinghub.com/logo.png",
        "width": 200,
        "height": 60
      },
      "sameAs": [
        "https://twitter.com/SafetyWingHub",
        "https://facebook.com/SafetyWingHub"
      ]
    },
    "mainEntity": {
      "@type": "Organization",
      "@id": "https://safetywinghub.com/#organization"
    }
  }

  // Add search action if enabled
  if (searchAction) {
    websiteSchema["potentialAction"] = {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://safetywinghub.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  }

  // Generate breadcrumb list schema for navigation
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://safetywinghub.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://safetywinghub.com/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "About",
        "item": "https://safetywinghub.com/about"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Free Toolkit",
        "item": "https://safetywinghub.com/toolkit"
      }
    ]
  }

  // Generate service schema for our main service
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Health Insurance Guidance for Gig Workers",
    "description": "Expert guidance and resources to help gig workers, freelancers, and digital nomads find affordable health insurance options.",
    "provider": {
      "@type": "Organization",
      "name": "SafetyWingHub",
      "url": "https://safetywinghub.com"
    },
    "serviceType": "Insurance Consultation",
    "audience": {
      "@type": "Audience",
      "audienceType": "Gig Workers, Freelancers, Digital Nomads"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Health Insurance Options",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SafetyWing Nomad Insurance Guidance"
          }
        }
      ]
    }
  }

  return (
    <>
      {/* Website Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema)
        }}
      />

      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema)
        }}
      />

      {/* Only add breadcrumb schema on non-homepage */}
      {router.pathname !== '/' && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema)
          }}
        />
      )}
    </>
  )
}

export default WebsiteSchema