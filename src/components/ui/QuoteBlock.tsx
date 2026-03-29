'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface QuoteBlockProps {
  quote: string
  attribution?: string
  large?: boolean
  light?: boolean
  children?: ReactNode
}

export function QuoteBlock({ quote, attribution, large = false, light = false }: QuoteBlockProps) {
  return (
    <motion.blockquote
      className={`relative ${light ? 'text-cream' : 'text-graphite'}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
    >
      <span
        className="quote-mark"
        aria-hidden="true"
        style={{ color: light ? 'rgba(196,174,130,0.4)' : undefined }}
      >
        &quot;
      </span>
      <p
        className={`font-serif italic leading-relaxed ${
          large
            ? 'text-heading-lg'
            : 'text-heading-md'
        } ${light ? 'text-cream' : 'text-graphite'} max-w-prose-lg`}
      >
        {quote}
      </p>
      {attribution && (
        <footer className={`mt-6 font-sans text-caption uppercase tracking-widest ${light ? 'text-gold-light' : 'text-gold'}`}>
          — {attribution}
        </footer>
      )}
    </motion.blockquote>
  )
}
