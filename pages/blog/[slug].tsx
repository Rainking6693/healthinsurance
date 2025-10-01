import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Layout from '@/components/Layout/Layout'
import Button from '@/components/Button'
import Link from 'next/link'
import { AFFILIATE_LINKS, BLOG_POSTS } from '@/config/links'
import { blogPostsContent } from '@/data/blog/posts'

interface BlogPostProps {
  post: {
    slug: string
    title: string
    excerpt: string
    content: string
    readTime: string
    date: string
    author: string
    tableOfContents: Array<{ text: string; id: string }>
  }
  relatedPosts: typeof BLOG_POSTS
}

const BlogPost: NextPage<BlogPostProps> = ({ post, relatedPosts }) => {
  return (
    <Layout
      title={`${post.title} | SafetyWingHub`}
      description={post.excerpt}
    >
      {/* Article Header */}
      <article className="min-h-screen bg-white">
        <header className="bg-gradient-to-br from-sw-purple to-sw-purple-light text-white py-16">
          <div className="sw-container-narrow">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center gap-4 text-white/80">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime} min read</span>
              <span>•</span>
              <span>By {post.author}</span>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="sw-container-narrow py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Table of Contents - Desktop */}
            <aside className="hidden lg:block lg:col-span-1">
              <div className="sticky top-24">
                <h3 className="font-bold text-sw-navy mb-4">Table of Contents</h3>
                <nav className="space-y-2">
                  {post.tableOfContents.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block text-sw-gray hover:text-sw-teal transition-colors py-1"
                    >
                      {item.text}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Article Content */}
            <div className="lg:col-span-3">
              {/* Mobile Table of Contents */}
              <div className="lg:hidden bg-sw-gray-light rounded-2xl p-6 mb-8">
                <h3 className="font-bold text-sw-navy mb-4">In this article:</h3>
                <ul className="space-y-2">
                  {post.tableOfContents.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="text-sw-gray hover:text-sw-teal transition-colors"
                      >
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Main Article Text */}
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Affiliate CTA Box */}
              <div className="bg-gradient-to-br from-sw-blue to-sw-teal rounded-2xl p-8 my-12 text-center text-white">
                <h3 className="text-2xl font-bold mb-4">
                  Ready to Get Covered?
                </h3>
                <p className="text-lg mb-6 text-white/90">
                  Get comprehensive travel insurance designed for digital nomads and remote workers
                </p>
                <Button 
                  variant="primary" 
                  size="lg"
                  href={AFFILIATE_LINKS.nomadInsurance}
                  isAffiliate
                  className="bg-white text-sw-blue hover:bg-gray-100"
                >
                  Get SafetyWing Insurance
                </Button>
              </div>

              {/* Disclosure */}
              <div className="bg-sw-gray-light border-l-4 border-sw-coral p-6 my-8">
                <p className="text-sm text-sw-gray">
                  <strong>Disclosure:</strong> This article contains affiliate links to SafetyWing. 
                  If you purchase insurance through our links, we may earn a commission at no extra cost to you. 
                  We only recommend products we've personally researched. Please consult with a licensed insurance 
                  professional before making coverage decisions.
                </p>
              </div>

              {/* Author Bio */}
              <div className="border-t-2 border-sw-gray-light pt-8 mt-12">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-sw-teal rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {post.author.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold text-sw-navy mb-2">About {post.author}</h3>
                    <p className="text-sw-gray mb-4">
                      Helping gig workers and digital nomads find affordable health insurance. 
                      Our team has spent 100+ hours researching insurance options for the modern workforce.
                    </p>
                    <Button variant="secondary" size="sm" href="/about">
                      Learn More About Us
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        <section className="bg-sw-gray-light py-16">
          <div className="sw-container">
            <h2 className="text-3xl font-bold text-sw-navy mb-8 text-center">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.slice(0, 3).map((relatedPost) => (
                <article key={relatedPost.slug} className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-sw-navy mb-3 line-clamp-2">
                    {relatedPost.title}
                  </h3>
                  <p className="text-sw-gray mb-4 line-clamp-3">
                    {relatedPost.excerpt}
                  </p>
                  <Link 
                    href={`/blog/${relatedPost.slug}`}
                    className="text-sw-teal font-semibold hover:text-sw-teal-dark"
                  >
                    Read More →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-sw-teal text-white py-16">
          <div className="sw-container text-center">
            <h2 className="text-3xl font-bold mb-4">
              Found this helpful?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Protect yourself while living the nomad life with SafetyWing's affordable coverage
            </p>
            <Button 
              variant="primary" 
              size="lg"
              href={AFFILIATE_LINKS.nomadInsurance}
              isAffiliate
            >
              Get Insurance Now
            </Button>
          </div>
        </section>
      </article>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = BLOG_POSTS.map((post) => ({
    params: { slug: post.slug },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string
  const postData = blogPostsContent[slug as keyof typeof blogPostsContent]
  
  if (!postData) {
    return {
      notFound: true,
    }
  }

  // Get related posts (exclude current post)
  const relatedPosts = BLOG_POSTS.filter(p => p.slug !== slug).slice(0, 3)

  return {
    props: {
      post: postData,
      relatedPosts,
    },
  }
}

export default BlogPost