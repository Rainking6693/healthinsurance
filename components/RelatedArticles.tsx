import React from 'react'
import Link from 'next/link'
import { BLOG_POSTS } from '@/config/links'

interface RelatedArticle {
  title: string
  href: string
  excerpt: string
  readTime?: string
  category?: string
}

interface RelatedArticlesProps {
  currentSlug?: string
  category?: string
  maxArticles?: number
  title?: string
  className?: string
  customArticles?: RelatedArticle[]
}

const RelatedArticles: React.FC<RelatedArticlesProps> = ({
  currentSlug,
  category,
  maxArticles = 3,
  title = "Related Articles",
  className = '',
  customArticles
}) => {
  // Generate related articles
  const getRelatedArticles = (): RelatedArticle[] => {
    if (customArticles) {
      return customArticles.slice(0, maxArticles)
    }

    // Filter out current article and get related ones
    let articles = BLOG_POSTS.filter(post => post.slug !== currentSlug)
    
    // If category is specified, prioritize articles from same category
    if (category) {
      // This would be enhanced with actual category data
      articles = articles.sort(() => Math.random() - 0.5)
    }

    // Convert to RelatedArticle format
    return articles.slice(0, maxArticles).map(post => ({
      title: post.title,
      href: `/blog/${post.slug}`,
      excerpt: post.excerpt,
      readTime: post.readTime,
      category: 'Health Insurance'
    }))
  }

  const relatedArticles = getRelatedArticles()

  if (relatedArticles.length === 0) {
    return null
  }

  return (
    <section className={`${className}`}>
      <div className="sw-container">
        <h2 className="text-3xl font-bold text-sw-navy mb-8 text-center">
          {title}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedArticles.map((article, index) => (
            <article 
              key={article.href}
              className="bg-white border-2 border-sw-gray-light rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Article Thumbnail Placeholder */}
              <div className="bg-gradient-to-br from-sw-blue to-sw-teal h-48 flex items-center justify-center">
                <svg
                  className="w-16 h-16 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              
              {/* Article Content */}
              <div className="p-6">
                {article.category && (
                  <span className="inline-block bg-sw-teal bg-opacity-10 text-sw-teal text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    {article.category}
                  </span>
                )}
                
                <h3 className="text-xl font-bold text-sw-navy mb-3 line-clamp-2">
                  <Link 
                    href={article.href}
                    className="hover:text-sw-teal transition-colors"
                  >
                    {article.title}
                  </Link>
                </h3>
                
                <p className="text-sw-gray mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex justify-between items-center pt-4 border-t border-sw-gray-light">
                  {article.readTime && (
                    <span className="text-sm text-sw-gray">{article.readTime} read</span>
                  )}
                  <Link 
                    href={article.href}
                    className="text-sw-teal font-semibold hover:text-sw-teal-dark transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        {/* View All Link */}
        <div className="text-center mt-10">
          <Link 
            href="/blog"
            className="inline-flex items-center text-sw-teal hover:text-sw-teal-dark font-semibold text-lg"
          >
            View All Articles
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

// Predefined related articles for specific pages
export const gigWorkerArticles: RelatedArticle[] = [
  {
    title: "Complete Guide to Health Insurance for Gig Workers",
    href: "/blog/complete-guide-health-insurance-gig-workers",
    excerpt: "Everything you need to know about finding affordable health insurance as a gig worker in 2025.",
    readTime: "15 min",
    category: "Gig Workers"
  },
  {
    title: "How to Get Health Insurance as a Gig Worker",
    href: "/how-to-get-health-insurance-gig-worker",
    excerpt: "Step-by-step guide to getting covered in under 30 minutes.",
    readTime: "12 min",
    category: "How-To Guide"
  },
  {
    title: "SafetyWing vs Marketplace Insurance",
    href: "/safetywing-vs-marketplace-insurance",
    excerpt: "Detailed comparison to help you choose the right option.",
    readTime: "10 min",
    category: "Comparison"
  }
]

export const driverArticles: RelatedArticle[] = [
  {
    title: "Health Insurance for DoorDash Drivers",
    href: "/doordash-health-insurance",
    excerpt: "Affordable coverage options specifically for delivery drivers.",
    readTime: "8 min",
    category: "Drivers"
  },
  {
    title: "Health Insurance for Uber Drivers",
    href: "/uber-driver-health-insurance",
    excerpt: "Complete guide for rideshare drivers seeking affordable coverage.",
    readTime: "10 min",
    category: "Drivers"
  },
  {
    title: "Cost Calculator for Gig Workers",
    href: "/health-insurance-cost-calculator",
    excerpt: "Calculate and compare insurance costs based on your situation.",
    readTime: "5 min",
    category: "Tools"
  }
]

export const freelancerArticles: RelatedArticle[] = [
  {
    title: "Health Insurance for Freelance Writers",
    href: "/freelance-writer-health-insurance",
    excerpt: "Affordable coverage options for writers and content creators.",
    readTime: "12 min",
    category: "Freelancers"
  },
  {
    title: "Freelancer Coverage Under $50",
    href: "/blog/freelancer-coverage-under-50-dollars",
    excerpt: "Real story of finding legitimate health insurance for $42/month.",
    readTime: "12 min",
    category: "Freelancers"
  },
  {
    title: "Free Insurance Toolkit",
    href: "/toolkit",
    excerpt: "Download free resources to compare and choose the right plan.",
    readTime: "5 min",
    category: "Resources"
  }
]

export default RelatedArticles