// Blog post converter utilities
import { AFFILIATE_LINKS } from '@/config/links'

// Convert markdown-style content to HTML with proper formatting
export function convertMarkdownToHTML(content) {
  let html = content

  // Convert headers
  html = html.replace(/^### (.*?)$/gm, '<h3 class="text-2xl font-bold text-sw-navy mt-8 mb-4">$1</h3>')
  html = html.replace(/^## (.*?)$/gm, '<h2 class="text-3xl font-bold text-sw-navy mt-10 mb-6">$1</h2>')
  html = html.replace(/^# (.*?)$/gm, '<h1 class="text-4xl font-bold text-sw-navy mb-8">$1</h1>')

  // Convert bold text
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-sw-navy">$1</strong>')

  // Convert italic text
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>')

  // Convert lists
  html = html.replace(/^- (.*?)$/gm, '<li class="mb-2">$1</li>')
  html = html.replace(/(<li.*?>.*?<\/li>\n?)+/g, '<ul class="list-disc pl-6 mb-6 space-y-2 text-sw-gray">$&</ul>')

  // Convert numbered lists
  html = html.replace(/^\d+\. (.*?)$/gm, '<li class="mb-2">$1</li>')

  // Convert paragraphs
  html = html.replace(/^(?!<[hul])(.*?)$/gm, (match, p1) => {
    if (p1.trim()) {
      return `<p class="mb-6 text-sw-gray leading-relaxed">${p1}</p>`
    }
    return match
  })

  // Convert line breaks
  html = html.replace(/\n\n/g, '</p><p class="mb-6 text-sw-gray leading-relaxed">')

  return html
}

// Generate table of contents from headings
export function generateTableOfContents(content) {
  const headings = []
  const regex = /^##\s+(.*?)$/gm
  let match

  while ((match = regex.exec(content)) !== null) {
    const id = match[1].toLowerCase().replace(/[^a-z0-9]+/g, '-')
    headings.push({
      text: match[1],
      id: id,
    })
  }

  return headings
}

// Add affiliate links to content
export function injectAffiliateLinks(content) {
  // Replace placeholder affiliate links
  content = content.replace(/\[AFFILIATE_LINK_NOMAD\]/g, AFFILIATE_LINKS.nomadInsurance)
  content = content.replace(/\[AFFILIATE_LINK_HOME\]/g, AFFILIATE_LINKS.homepage)
  
  // Add UTM parameters to SafetyWing mentions
  content = content.replace(
    /href="https:\/\/safetywing\.com([^"]*?)"/g,
    (match, path) => {
      if (!path.includes('referenceID')) {
        return `href="${AFFILIATE_LINKS.nomadInsurance}"`
      }
      return match
    }
  )

  return content
}

// Create CTA boxes for lead magnets
export function createCTABox(title, description, buttonText, buttonLink) {
  return `
    <div class="bg-sw-blue bg-opacity-10 border-2 border-sw-blue rounded-2xl p-8 my-12 text-center">
      <h3 class="text-2xl font-bold text-sw-navy mb-4">${title}</h3>
      <p class="text-lg text-sw-gray mb-6">${description}</p>
      <a href="${buttonLink}" target="_blank" rel="noopener noreferrer" 
         class="inline-block bg-sw-coral hover:bg-sw-coral-dark text-white font-bold px-8 py-3.5 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
        ${buttonText}
      </a>
    </div>
  `
}

// Format blog post metadata
export function formatBlogMetadata(title, date, readTime, author = 'SafetyWingHub Team') {
  return {
    title,
    date: new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
    readTime,
    author,
  }
}

// Create disclosure statement
export function createDisclosureStatement() {
  return `
    <div class="bg-sw-gray-light border-l-4 border-sw-coral p-6 my-8">
      <p class="text-sm text-sw-gray">
        <strong>Disclosure:</strong> This article contains affiliate links to SafetyWing. 
        If you purchase insurance through our links, we may earn a commission at no extra cost to you. 
        We only recommend products we've personally researched. Please consult with a licensed insurance 
        professional before making coverage decisions.
      </p>
    </div>
  `
}