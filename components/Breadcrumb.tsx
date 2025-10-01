import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface BreadcrumbItem {
  label: string
  href: string
}

interface BreadcrumbProps {
  items?: BreadcrumbItem[]
  className?: string
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className = '' }) => {
  const router = useRouter()
  
  // Auto-generate breadcrumbs if not provided
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const pathSegments = router.asPath.split('/').filter(segment => segment)
    const breadcrumbs: BreadcrumbItem[] = [{ label: 'Home', href: '/' }]
    
    let currentPath = ''
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`
      
      // Clean up segment for display
      let label = segment
        .replace(/-/g, ' ')
        .replace(/\b\w/g, l => l.toUpperCase())
      
      // Special cases for better labels
      if (segment === 'blog') label = 'Blog'
      if (segment === 'about') label = 'About'
      if (segment === 'toolkit') label = 'Toolkit'
      if (segment === 'disclosures') label = 'Disclosures'
      
      breadcrumbs.push({
        label,
        href: currentPath
      })
    })
    
    return breadcrumbs
  }
  
  const breadcrumbItems = items || generateBreadcrumbs()
  
  // Don't show breadcrumbs on home page
  if (router.pathname === '/') {
    return null
  }
  
  // Generate JSON-LD structured data for breadcrumbs
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": `https://safetywinghub.com${item.href}`
    }))
  }
  
  return (
    <>
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
      
      {/* Breadcrumb Navigation */}
      <nav 
        className={`sw-container py-4 ${className}`}
        aria-label="Breadcrumb"
      >
        <ol className="flex items-center space-x-2 text-sm text-sw-gray">
          {breadcrumbItems.map((item, index) => (
            <li key={item.href} className="flex items-center">
              {index > 0 && (
                <svg
                  className="w-4 h-4 mx-2 text-sw-gray"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
              
              {index === breadcrumbItems.length - 1 ? (
                // Current page - not a link
                <span 
                  className="font-medium text-sw-navy"
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                // Link to previous pages
                <Link 
                  href={item.href}
                  className="hover:text-sw-teal transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}

export default Breadcrumb