# SafetyWing Insurance Affiliate Site

A modern, high-converting affiliate website for SafetyWing Insurance targeting gig workers, freelancers, and digital nomads.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd "C:\Users\Ben\Ben Projects\Safety Wing Insurance\safetywing-site"
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
safetywing-site/
├── components/          # React components
│   ├── Layout/         # Header, Footer, Navigation
│   ├── Button.tsx      # Reusable button component
│   ├── HeroBanner.tsx  # Hero section component
│   └── FeatureCard.tsx # Feature cards
├── pages/              # Next.js pages
│   ├── index.tsx       # Homepage
│   ├── about.tsx       # About page
│   ├── toolkit.tsx     # Lead magnet page
│   ├── disclosures.tsx # Legal disclosures
│   └── blog/           # Blog pages
├── config/             # Configuration files
│   └── links.js        # Affiliate links
├── data/               # Blog post content
├── styles/             # Global styles
├── public/             # Static files
└── lib/                # Utility functions
```

## 🔧 Configuration

### Affiliate Links
Update your affiliate links in `/config/links.js`:
```javascript
export const AFFILIATE_LINKS = {
  nomadInsurance: 'YOUR_AFFILIATE_LINK_HERE',
  homepage: 'YOUR_HOMEPAGE_LINK_HERE',
}
```

### Email Integration
The toolkit page has a placeholder form. To integrate with ConvertKit:
1. Replace the form in `/pages/toolkit.tsx` with your ConvertKit embed code
2. Add the ConvertKit script to `_document.tsx`

## 🎨 Design System

The site uses SafetyWing's brand colors:
- Primary: Coral (#EA8B8B)
- Secondary: Teal (#5DBEAA)
- Accent: Blue (#5DB0E2)
- Text: Navy (#3C4F5C)

All colors are configured in `tailwind.config.js`.

## 📝 Content Management

### Adding Blog Posts
1. Add post data to `/data/blog/posts.js`
2. Add metadata to `/config/links.js` BLOG_POSTS array
3. The dynamic route will automatically handle the new post

### Updating Page Content
- Homepage: `/pages/index.tsx`
- About: `/pages/about.tsx`
- Toolkit: `/pages/toolkit.tsx`
- Disclosures: `/pages/disclosures.tsx`

## 🚢 Deployment

### Netlify (Recommended)

1. Push your code to GitHub
2. Connect your GitHub repo to Netlify
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
4. Add environment variables if needed

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel` and follow prompts
3. Your site will be deployed automatically

### Manual Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 🔍 SEO Optimization

- Meta tags are set in each page using the Layout component
- Sitemap is at `/public/sitemap.xml`
- Robots.txt is at `/public/robots.txt`
- Update canonical URLs in Layout component

## ⚡ Performance Optimization

The site is optimized for speed:
- Tailwind CSS for minimal CSS
- Next.js automatic code splitting
- Image optimization ready (add images to `/public/assets/`)
- Lazy loading components where appropriate

## 📊 Analytics

To add Google Analytics:
1. Get your GA4 measurement ID
2. Add to `_document.tsx`:
```javascript
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

## ✅ Pre-Launch Checklist

- [ ] Update affiliate links in `/config/links.js`
- [ ] Replace placeholder email form with ConvertKit
- [ ] Add real images to `/public/assets/`
- [ ] Update meta descriptions for SEO
- [ ] Test all affiliate links
- [ ] Test mobile responsiveness
- [ ] Set up analytics
- [ ] Configure custom domain
- [ ] Enable HTTPS
- [ ] Submit sitemap to Google Search Console

## 🛠 Maintenance

### Regular Updates
- Update blog content monthly
- Check for broken links quarterly
- Update SafetyWing pricing if it changes
- Monitor page load speeds

### Performance Monitoring
- Use Google PageSpeed Insights
- Monitor Core Web Vitals
- Check mobile usability regularly

## 📞 Support

For issues or questions about the code, check:
- Next.js docs: https://nextjs.org/docs
- Tailwind CSS docs: https://tailwindcss.com/docs
- React docs: https://react.dev

## 📄 License

This project is private and proprietary. All rights reserved.

---

**Built with Next.js, React, and Tailwind CSS**
**Designed for SafetyWing affiliates targeting gig workers**