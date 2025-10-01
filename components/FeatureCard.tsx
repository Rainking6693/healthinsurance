import React from 'react'

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  borderColor?: 'coral' | 'yellow' | 'blue' | 'teal'
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  borderColor = 'coral',
}) => {
  const borderColors = {
    coral: 'border-sw-coral',
    yellow: 'border-sw-yellow',
    blue: 'border-sw-blue',
    teal: 'border-sw-teal',
  }

  const iconBgColors = {
    coral: 'bg-sw-coral/10',
    yellow: 'bg-sw-yellow/10',
    blue: 'bg-sw-blue/10',
    teal: 'bg-sw-teal/10',
  }

  return (
    <div
      className={`
        bg-white rounded-2xl p-8 border-2
        ${borderColors[borderColor]}
        hover:shadow-xl transition-all duration-300
        hover:-translate-y-1
      `}
    >
      <div className={`w-16 h-16 rounded-xl ${iconBgColors[borderColor]} flex items-center justify-center mb-6`}>
        {typeof icon === 'string' ? (
          <span className="text-3xl">{icon}</span>
        ) : (
          icon
        )}
      </div>
      <h3 className="text-2xl font-bold text-sw-navy mb-4">{title}</h3>
      <p className="text-sw-gray text-lg leading-relaxed">{description}</p>
    </div>
  )
}

export default FeatureCard