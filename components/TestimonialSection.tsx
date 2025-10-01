import React from 'react'

interface Testimonial {
  quote: string
  author: string
  role: string
  rating?: number
  location?: string
  verified?: boolean
}

interface TestimonialSectionProps {
  testimonials: Testimonial[]
  title?: string
  className?: string
}

const TestimonialSection: React.FC<TestimonialSectionProps> = ({
  testimonials,
  title = "What Our Community Says",
  className = ''
}) => {
  // Generate aggregate rating for schema
  const averageRating = testimonials.reduce((sum, t) => sum + (t.rating || 5), 0) / testimonials.length
  const totalReviews = testimonials.length
  
  // Generate review schema
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "SafetyWing Nomad Insurance",
    "description": "Affordable health insurance for digital nomads, freelancers, and gig workers",
    "brand": {
      "@type": "Brand",
      "name": "SafetyWing"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": averageRating.toFixed(1),
      "reviewCount": totalReviews,
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": testimonials.map(testimonial => ({
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": testimonial.rating || 5,
        "bestRating": "5",
        "worstRating": "1"
      },
      "author": {
        "@type": "Person",
        "name": testimonial.author
      },
      "reviewBody": testimonial.quote,
      "publisher": {
        "@type": "Organization",
        "name": "SafetyWingHub"
      }
    }))
  }
  
  return (
    <>
      {/* Review Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(reviewSchema)
        }}
      />
      
      {/* Testimonials Section */}
      <section className={`sw-section ${className}`}>
        <div className="sw-container">
          <div className="text-center mb-12">
            <h2 className="sw-h2 text-sw-navy mb-4">{title}</h2>
            <p className="sw-body text-sw-gray max-w-3xl mx-auto">
              Real stories from freelancers and gig workers who found affordable coverage with SafetyWing.
            </p>
            
            {/* Aggregate Rating Display */}
            <div className="flex items-center justify-center mt-6 gap-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(averageRating) ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sw-gray">
                {averageRating.toFixed(1)} out of 5 ({totalReviews} reviews)
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white border-2 border-sw-gray-light rounded-2xl p-8"
                itemScope
                itemType="https://schema.org/Review"
              >
                {/* Quote Icon */}
                <svg className="w-10 h-10 text-sw-teal mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>\n                \n                {/* Rating Stars */}\n                <div className="flex items-center mb-4">\n                  {[...Array(5)].map((_, i) => (\n                    <svg\n                      key={i}\n                      className={`w-4 h-4 ${\n                        i < (testimonial.rating || 5) ? 'text-yellow-400' : 'text-gray-300'\n                      }`}\n                      fill="currentColor"\n                      viewBox="0 0 20 20"\n                      xmlns="http://www.w3.org/2000/svg"\n                    >\n                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />\n                    </svg>\n                  ))}\n                  {testimonial.verified && (\n                    <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">\n                      Verified\n                    </span>\n                  )}\n                </div>\n                \n                {/* Review Text */}\n                <p \n                  className="text-sw-gray mb-6 italic"\n                  itemProp="reviewBody"\n                >\n                  "{testimonial.quote}"\n                </p>\n                \n                {/* Author Info */}\n                <div className="border-t pt-4">\n                  <p \n                    className="font-semibold text-sw-navy"\n                    itemProp="author"\n                    itemScope\n                    itemType="https://schema.org/Person"\n                  >\n                    <span itemProp="name">{testimonial.author}</span>\n                  </p>\n                  <p className="text-sw-gray text-sm">{testimonial.role}</p>\n                  {testimonial.location && (\n                    <p className="text-sw-gray text-xs mt-1">{testimonial.location}</p>\n                  )}\n                </div>\n                \n                {/* Hidden schema data */}\n                <div style={{ display: 'none' }}>\n                  <span itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">\n                    <span itemProp="ratingValue">{testimonial.rating || 5}</span>\n                    <span itemProp="bestRating">5</span>\n                    <span itemProp="worstRating">1</span>\n                  </span>\n                </div>\n              </div>\n            ))}\n          </div>\n        </div>\n      </section>\n    </>\n  )\n}\n\nexport default TestimonialSection