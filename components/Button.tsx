import React from 'react'
import Link from 'next/link'
import { AFFILIATE_LINKS } from '@/config/links'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void
  href?: string
  isAffiliate?: boolean
  disabled?: boolean
  className?: string
  target?: string
  rel?: string
  type?: 'button' | 'submit' | 'reset'
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  href,
  isAffiliate = false,
  disabled = false,
  className = '',
  target,
  rel,
  type = 'button',
}) => {
  const baseClasses = `
    font-bold rounded-lg transition-all duration-300
    disabled:opacity-50 disabled:cursor-not-allowed
    inline-block text-center cursor-pointer
    ${className}
  `

  const variants = {
    primary: `
      bg-sw-coral hover:bg-sw-coral-dark text-white
      hover:shadow-lg hover:-translate-y-0.5
    `,
    secondary: `
      bg-sw-teal hover:bg-sw-teal-dark text-white
      hover:shadow-lg hover:-translate-y-0.5
    `,
    outline: `
      bg-transparent border-2 border-sw-teal
      hover:bg-sw-teal text-sw-teal hover:text-white
    `,
    ghost: `
      bg-transparent hover:bg-sw-gray-light text-sw-navy
    `,
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-8 py-3.5 text-lg',
    lg: 'px-10 py-4 text-xl',
  }

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]}`

  // Handle affiliate links
  const finalHref = isAffiliate && href ? AFFILIATE_LINKS.nomadInsurance : href

  if (href) {
    // External link
    if (href.startsWith('http') || isAffiliate) {
      return (
        <a
          href={finalHref || href}
          target={target || '_blank'}
          rel={rel || 'noopener noreferrer'}
          className={classes}
          onClick={onClick}
        >
          {children}
        </a>
      )
    }

    // Internal link
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    )
  }

  // Button without link
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  )
}

export default Button