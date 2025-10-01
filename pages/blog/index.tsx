import type { NextPage } from 'next'
import Layout from '@/components/Layout/Layout'
import Button from '@/components/Button'
import { AFFILIATE_LINKS, BLOG_POSTS } from '@/config/links'
import Link from 'next/link'

const BlogIndex: NextPage = () => {
  return (
    <Layout
      title="Blog - Health Insurance Guides for Gig Workers & Freelancers"
      description="Expert guides and resources on finding affordable health insurance as a gig worker, freelancer, or digital nomad. Compare plans and save money."
    >
      {/* Header Section */}
      <section className="bg-gradient-to-br from-sw-purple to-sw-purple-light text-white py-16">
        <div className="sw-container text-center">
          <h1 className="text-5xl font-bold mb-4">Digital Nomad Insurance Blog</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Tips, guides, and stories for remote workers, gig workers, and travelers looking for affordable health coverage
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="sw-section">
        <div className="sw-container">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-sw-navy mb-8">Featured Article</h2>
            <article className="bg-gradient-to-br from-sw-teal to-sw-mint rounded-3xl p-8 text-white">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-4">
                    {BLOG_POSTS[0].title}
                  </h3>
                  <p className="text-xl text-white/90 mb-6">
                    {BLOG_POSTS[0].excerpt}
                  </p>
                  <div className="flex items-center gap-4">
                    <Link 
                      href={`/blog/${BLOG_POSTS[0].slug}`}
                      className="bg-white text-sw-teal hover:bg-gray-100 font-bold px-6 py-3 rounded-lg transition-colors"
                    >
                      Read Full Guide →
                    </Link>
                    <span className="text-white/80">{BLOG_POSTS[0].readTime} read</span>
                  </div>
                </div>
                <div className="hidden md:flex justify-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-12">
                    <svg
                      className="w-32 h-32 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Blog Grid */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-sw-navy mb-8">All Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {BLOG_POSTS.map((post) => (
                <article 
                  key={post.slug}
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
                    <h3 className="text-xl font-bold text-sw-navy mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sw-gray mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex justify-between items-center pt-4 border-t border-sw-gray-light">
                      <span className="text-sm text-sw-gray">{post.readTime} read</span>
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="text-sw-teal font-semibold hover:text-sw-teal-dark transition-colors"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Categories Section */}
          <div className="bg-sw-gray-light rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-sw-navy mb-6">Browse by Topic</h2>
            <div className="flex flex-wrap gap-3">
              {['Gig Workers', 'Digital Nomads', 'SafetyWing Reviews', 'DoorDash Drivers', 'Freelancers', 'Travel Insurance', 'Comparisons'].map((category) => (
                <span 
                  key={category}
                  className="bg-white px-4 py-2 rounded-full text-sw-gray hover:bg-sw-teal hover:text-white transition-colors cursor-pointer"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-sw-teal text-white py-16">
        <div className="sw-container text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to travel with peace of mind?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Get comprehensive travel insurance for digital nomads and remote workers. No commitment, cancel anytime.
          </p>
          <Button variant="primary" size="lg" href={AFFILIATE_LINKS.nomadInsurance} isAffiliate>
            Get SafetyWing Insurance
          </Button>
        </div>
      </section>
    </Layout>
  )
}

export default BlogIndex