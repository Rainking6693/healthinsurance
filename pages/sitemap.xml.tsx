import { GetServerSideProps } from 'next'
import { BLOG_POSTS } from '@/config/links'

// This component doesn't render anything, it's just for the sitemap generation
const Sitemap = () => null

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const baseUrl = 'https://safetywinghub.com'
  const currentDate = new Date().toISOString().split('T')[0]
  
  // Static pages with their priorities and change frequencies
  const staticPages = [
    {
      url: '',
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '1.0'
    },
    {
      url: '/blog',
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.9'
    },
    {
      url: '/about',
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.7'
    },
    {
      url: '/toolkit',
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.8'
    },
    {
      url: '/disclosures',
      lastmod: currentDate,
      changefreq: 'yearly',
      priority: '0.5'
    },
    {
      url: '/doordash-health-insurance',
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.8'
    },
    {
      url: '/uber-driver-health-insurance',
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.8'
    },
    {
      url: '/freelance-writer-health-insurance',
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.8'
    },
    {
      url: '/how-to-get-health-insurance-gig-worker',
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.9'
    },
    {
      url: '/safetywing-vs-marketplace-insurance',
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.8'
    },
    {
      url: '/health-insurance-cost-calculator',
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.8'
    }
  ]
  
  // Generate blog post URLs
  const blogPages = BLOG_POSTS.map(post => ({
    url: `/blog/${post.slug}`,
    lastmod: currentDate, // In a real app, you'd use the actual last modified date
    changefreq: 'monthly',
    priority: '0.8'
  }))
  
  // Combine all pages
  const allPages = [...staticPages, ...blogPages]
  
  // Generate sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`)
  .join('\n')}
</urlset>`

  res.setHeader('Content-Type', 'text/xml')
  res.setHeader('Cache-Control', 'public, max-age=86400, stale-while-revalidate=43200')
  res.write(sitemap)
  res.end()

  return {
    props: {}
  }
}

export default Sitemap