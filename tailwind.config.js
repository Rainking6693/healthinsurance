/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'sw-purple': {
          DEFAULT: '#4B4E99',
          dark: '#3D3F7D',
          light: '#5A5DB3',
        },
        'sw-teal': {
          DEFAULT: '#5DBEAA',
          light: '#7FE8D4',
          dark: '#4DAA96',
        },
        'sw-blue': {
          DEFAULT: '#5DB0E2',
          light: '#7EC4EA',
        },
        'sw-coral': {
          DEFAULT: '#EA8B8B',
          dark: '#EB6F92',
        },
        'sw-yellow': {
          DEFAULT: '#F4CD78',
          light: '#F8DCA0',
        },
        'sw-mint': '#7FE8D4',
        'sw-navy': {
          DEFAULT: '#3C4F5C',
          dark: '#2C3542',
        },
        'sw-gray': {
          DEFAULT: '#7F8C8D',
          light: '#E8EBED',
        },
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'serif': ['Freight Text', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}