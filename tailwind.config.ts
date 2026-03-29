import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F7F3EE',
        linen: '#EDE8E0',
        sand: '#D4C9B8',
        graphite: '#2C2C2C',
        'graphite-light': '#5C5C5C',
        teal: {
          DEFAULT: '#2D5964',
          light: '#3D7A8A',
          dark: '#1E3C42',
        },
        burgundy: {
          DEFAULT: '#6B2D3E',
          light: '#8C3D52',
        },
        gold: {
          DEFAULT: '#A89060',
          light: '#C4AE82',
        },
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(2.5rem, 6vw, 5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'heading-xl': ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1.1', letterSpacing: '-0.015em' }],
        'heading-lg': ['clamp(1.5rem, 3vw, 2.5rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'heading-md': ['clamp(1.2rem, 2.5vw, 1.75rem)', { lineHeight: '1.3' }],
        'body-lg': ['1.125rem', { lineHeight: '1.75' }],
        'body': ['1rem', { lineHeight: '1.7' }],
        'caption': ['0.875rem', { lineHeight: '1.5', letterSpacing: '0.05em' }],
      },
      spacing: {
        'section': 'clamp(4rem, 10vw, 8rem)',
        'section-sm': 'clamp(2rem, 5vw, 4rem)',
      },
      maxWidth: {
        'prose-sm': '55ch',
        'prose': '65ch',
        'prose-lg': '75ch',
        'content': '1200px',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-up': 'fadeUp 0.9s ease-out forwards',
        'fade-in-slow': 'fadeIn 1.4s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      transitionDuration: {
        '400': '400ms',
        '700': '700ms',
        '900': '900ms',
      },
    },
  },
  plugins: [],
}

export default config
