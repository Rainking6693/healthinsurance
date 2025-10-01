import { GetServerSideProps } from 'next'

// This component doesn't render anything, it's just for the robots.txt generation
const RobotsTxt = () => null

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const baseUrl = 'https://safetywinghub.com'
  
  const robotsTxt = `User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/
Disallow: /admin/
Disallow: /private/

# Sitemap location
Sitemap: ${baseUrl}/sitemap.xml

# Crawl delay for bots (be respectful)
Crawl-delay: 1

# Specific bot instructions
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

# Block AI training bots if desired
User-agent: GPTBot
Disallow: /

User-agent: ChatGPT-User
Disallow: /

User-agent: CCBot
Disallow: /

User-agent: anthropic-ai
Disallow: /

User-agent: Claude-Web
Disallow: /`

  res.setHeader('Content-Type', 'text/plain')
  res.setHeader('Cache-Control', 'public, max-age=86400, stale-while-revalidate=43200')
  res.write(robotsTxt)
  res.end()

  return {
    props: {}
  }
}

export default RobotsTxt