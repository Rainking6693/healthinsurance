import React, { useEffect, useState } from 'react'

interface SEOAuditProps {
  showInProduction?: boolean
}

interface SEOIssue {
  type: 'error' | 'warning' | 'success'
  message: string
  element?: string
}

const SEOAudit: React.FC<SEOAuditProps> = ({ showInProduction = false }) => {
  const [issues, setIssues] = useState<SEOIssue[]>([])
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only show in development or if explicitly enabled in production
    if (process.env.NODE_ENV === 'development' || showInProduction) {
      auditPage()
    }
  }, [])

  const auditPage = () => {
    const foundIssues: SEOIssue[] = []

    // Check title tag
    const title = document.querySelector('title')
    if (!title || !title.textContent) {
      foundIssues.push({
        type: 'error',
        message: 'Missing title tag',
        element: 'title'
      })
    } else if (title.textContent.length < 30) {
      foundIssues.push({
        type: 'warning',
        message: `Title too short (${title.textContent.length} chars). Recommended: 30-60 chars`,
        element: 'title'
      })
    } else if (title.textContent.length > 60) {
      foundIssues.push({
        type: 'warning',
        message: `Title too long (${title.textContent.length} chars). Recommended: 30-60 chars`,
        element: 'title'
      })
    } else {
      foundIssues.push({
        type: 'success',
        message: `Title length optimal (${title.textContent.length} chars)`,
        element: 'title'
      })
    }

    // Check meta description
    const description = document.querySelector('meta[name="description"]')
    if (!description || !description.getAttribute('content')) {
      foundIssues.push({
        type: 'error',
        message: 'Missing meta description',
        element: 'meta[name="description"]'
      })
    } else {
      const descLength = description.getAttribute('content')!.length
      if (descLength < 120) {
        foundIssues.push({
          type: 'warning',
          message: `Meta description too short (${descLength} chars). Recommended: 120-160 chars`,
          element: 'meta[name="description"]'
        })
      } else if (descLength > 160) {
        foundIssues.push({
          type: 'warning',
          message: `Meta description too long (${descLength} chars). Recommended: 120-160 chars`,
          element: 'meta[name="description"]'
        })
      } else {
        foundIssues.push({
          type: 'success',
          message: `Meta description length optimal (${descLength} chars)`,
          element: 'meta[name="description"]'
        })
      }
    }

    // Check H1 tags
    const h1Tags = document.querySelectorAll('h1')
    if (h1Tags.length === 0) {
      foundIssues.push({
        type: 'error',
        message: 'Missing H1 tag',
        element: 'h1'
      })
    } else if (h1Tags.length > 1) {
      foundIssues.push({
        type: 'warning',
        message: `Multiple H1 tags found (${h1Tags.length}). Recommended: 1 per page`,
        element: 'h1'
      })
    } else {
      foundIssues.push({
        type: 'success',
        message: 'Single H1 tag found',
        element: 'h1'
      })
    }

    // Check canonical URL
    const canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      foundIssues.push({
        type: 'error',
        message: 'Missing canonical URL',
        element: 'link[rel="canonical"]'
      })
    } else {
      foundIssues.push({
        type: 'success',
        message: 'Canonical URL present',
        element: 'link[rel="canonical"]'
      })
    }

    // Check Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]')
    const ogDescription = document.querySelector('meta[property="og:description"]')
    const ogImage = document.querySelector('meta[property="og:image"]')
    
    if (!ogTitle || !ogDescription || !ogImage) {
      foundIssues.push({
        type: 'warning',
        message: 'Incomplete Open Graph tags',
        element: 'meta[property^="og:"]'
      })
    } else {
      foundIssues.push({
        type: 'success',
        message: 'Open Graph tags complete',
        element: 'meta[property^="og:"]'
      })
    }

    // Check for schema markup
    const schemaScripts = document.querySelectorAll('script[type="application/ld+json"]')
    if (schemaScripts.length === 0) {
      foundIssues.push({
        type: 'warning',
        message: 'No structured data (schema.org) found',
        element: 'script[type="application/ld+json"]'
      })
    } else {
      foundIssues.push({
        type: 'success',
        message: `${schemaScripts.length} structured data block(s) found`,
        element: 'script[type="application/ld+json"]'
      })
    }

    // Check images for alt text
    const images = document.querySelectorAll('img')
    const imagesWithoutAlt = Array.from(images).filter(img => !img.getAttribute('alt'))
    if (imagesWithoutAlt.length > 0) {
      foundIssues.push({
        type: 'warning',
        message: `${imagesWithoutAlt.length} image(s) missing alt text`,
        element: 'img'
      })
    } else if (images.length > 0) {
      foundIssues.push({
        type: 'success',
        message: 'All images have alt text',
        element: 'img'
      })
    }

    setIssues(foundIssues)
  }

  // Don't render in production unless explicitly enabled
  if (process.env.NODE_ENV === 'production' && !showInProduction) {
    return null
  }

  const errorCount = issues.filter(i => i.type === 'error').length
  const warningCount = issues.filter(i => i.type === 'warning').length
  const successCount = issues.filter(i => i.type === 'success').length

  return (
    <>
      {/* SEO Audit Toggle Button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-4 right-4 z-50 bg-sw-purple text-white p-3 rounded-full shadow-lg hover:bg-sw-purple-dark transition-colors"
        title="SEO Audit"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        {errorCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {errorCount}
          </span>
        )}
      </button>

      {/* SEO Audit Panel */}
      {isVisible && (
        <div className="fixed bottom-20 right-4 z-50 bg-white border-2 border-gray-200 rounded-lg shadow-xl w-96 max-h-96 overflow-y-auto">
          <div className="p-4 border-b bg-sw-purple text-white">
            <div className="flex justify-between items-center">
              <h3 className="font-bold">SEO Audit</h3>
              <button
                onClick={() => setIsVisible(false)}
                className="text-white hover:text-gray-200"
              >
                ×
              </button>
            </div>
            <div className="flex gap-4 mt-2 text-sm">
              <span className="text-red-200">Errors: {errorCount}</span>
              <span className="text-yellow-200">Warnings: {warningCount}</span>
              <span className="text-green-200">Passed: {successCount}</span>
            </div>
          </div>
          
          <div className="p-4 space-y-3">
            {issues.map((issue, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg border-l-4 ${
                  issue.type === 'error'
                    ? 'bg-red-50 border-red-400 text-red-800'
                    : issue.type === 'warning'
                    ? 'bg-yellow-50 border-yellow-400 text-yellow-800'
                    : 'bg-green-50 border-green-400 text-green-800'
                }`}
              >
                <div className="flex items-start gap-2">
                  <span className="text-xs font-mono bg-gray-100 px-2 py-1 rounded">
                    {issue.element}
                  </span>
                </div>
                <p className="text-sm mt-1">{issue.message}</p>
              </div>
            ))}
          </div>
          
          <div className="p-4 border-t bg-gray-50">
            <button
              onClick={auditPage}
              className="w-full bg-sw-teal text-white py-2 px-4 rounded hover:bg-sw-teal-dark transition-colors"
            >
              Re-run Audit
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default SEOAudit