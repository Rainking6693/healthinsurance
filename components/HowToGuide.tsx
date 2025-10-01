import React from 'react'

interface HowToStep {
  name: string
  text: string
  image?: string
  url?: string
}

interface HowToGuideProps {
  title: string
  description: string
  steps: HowToStep[]
  totalTime?: string
  estimatedCost?: string
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced'
  className?: string
}

const HowToGuide: React.FC<HowToGuideProps> = ({
  title,
  description,
  steps,
  totalTime,
  estimatedCost,
  difficulty = 'Beginner',
  className = ''
}) => {
  // Generate HowTo Schema
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": title,
    "description": description,
    "totalTime": totalTime || "PT30M",
    "estimatedCost": estimatedCost || "$42",
    "supply": [
      {
        "@type": "HowToSupply",
        "name": "Computer or smartphone"
      },
      {
        "@type": "HowToSupply", 
        "name": "Internet connection"
      }
    ],
    "tool": [
      {
        "@type": "HowToTool",
        "name": "Web browser"
      }
    ],
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text,
      "url": step.url,
      "image": step.image
    }))
  }

  const difficultyColors = {
    'Beginner': 'bg-green-100 text-green-800',
    'Intermediate': 'bg-yellow-100 text-yellow-800', 
    'Advanced': 'bg-red-100 text-red-800'
  }

  return (
    <>
      {/* HowTo Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(howToSchema)
        }}
      />
      
      {/* HowTo Guide Component */}
      <section className={`${className}`}>
        <div className="sw-container">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-sw-navy mb-4">{title}</h2>
              <p className="text-lg text-sw-gray mb-6">{description}</p>
              
              {/* Meta Information */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {totalTime && (
                  <div className="bg-sw-blue bg-opacity-10 px-4 py-2 rounded-full">
                    <span className="text-sw-blue font-semibold">⏱️ {totalTime.replace('PT', '').replace('M', ' minutes')}</span>
                  </div>
                )}
                {estimatedCost && (
                  <div className="bg-sw-teal bg-opacity-10 px-4 py-2 rounded-full">
                    <span className="text-sw-teal font-semibold">💰 {estimatedCost}</span>
                  </div>
                )}
                <div className={`px-4 py-2 rounded-full ${difficultyColors[difficulty]}`}>
                  <span className="font-semibold">📊 {difficulty}</span>
                </div>
              </div>
            </div>

            {/* Steps */}
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className="bg-white border-2 border-sw-gray-light rounded-2xl p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-6">
                    {/* Step Number */}
                    <div className="bg-sw-teal text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold text-lg">
                      {index + 1}
                    </div>
                    
                    {/* Step Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-sw-navy mb-3">{step.name}</h3>
                      <div 
                        className="text-sw-gray leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: step.text }}
                      />
                      
                      {step.url && (
                        <div className="mt-4">
                          <a 
                            href={step.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-sw-teal hover:text-sw-teal-dark font-semibold"
                          >
                            Go to this step →
                            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Completion Message */}
            <div className="mt-12 bg-gradient-to-r from-sw-teal to-sw-mint rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">🎉 Congratulations!</h3>
              <p className="text-lg mb-6">
                You've completed the guide. You should now have affordable health insurance coverage 
                that fits your gig worker lifestyle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:hello@safetywinghub.com"
                  className="bg-white text-sw-teal hover:bg-gray-100 font-bold px-6 py-3 rounded-lg transition-colors"
                >
                  Need Help? Contact Us
                </a>
                <a 
                  href="/blog"
                  className="border-2 border-white text-white hover:bg-white hover:text-sw-teal font-bold px-6 py-3 rounded-lg transition-colors"
                >
                  Read More Guides
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HowToGuide