import React, { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  items: FAQItem[]
  title?: string
  className?: string
}

const FAQ: React.FC<FAQProps> = ({ 
  items, 
  title = "Frequently Asked Questions",
  className = '' 
}) => {
  const [openItems, setOpenItems] = useState<number[]>([])
  
  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }
  
  // Generate FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  }
  
  return (
    <>
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />
      
      {/* FAQ Component */}
      <section className={`${className}`}>
        <div className="sw-container">
          <h2 className="text-3xl font-bold text-sw-navy mb-8 text-center">
            {title}
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {items.map((item, index) => (
              <div 
                key={index}
                className="bg-white border-2 border-sw-gray-light rounded-2xl overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-sw-gray-light transition-colors"
                  onClick={() => toggleItem(index)}
                  aria-expanded={openItems.includes(index)}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className="text-lg font-semibold text-sw-navy pr-4">
                    {item.question}
                  </h3>
                  <svg
                    className={`w-6 h-6 text-sw-teal transition-transform ${
                      openItems.includes(index) ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                
                {openItems.includes(index) && (
                  <div 
                    id={`faq-answer-${index}`}
                    className="px-6 pb-4"
                  >
                    <div 
                      className="text-sw-gray leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: item.answer }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default FAQ