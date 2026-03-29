'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SectionTitleProps {
  eyebrow?: string
  title: string | ReactNode
  subtitle?: string
  align?: 'left' | 'center' | 'right'
  light?: boolean
  className?: string
  id?: string
}

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
  className = '',
  id,
}: SectionTitleProps) {
  const alignClass =
    align === 'left'
      ? 'text-left'
      : align === 'right'
        ? 'text-right'
        : 'text-center'

  const itemsClass =
    align === 'left'
      ? 'items-start'
      : align === 'right'
        ? 'items-end'
        : 'items-center'

  return (
    <div id={id} className={`flex flex-col ${itemsClass} ${alignClass} ${className}`}>
      {eyebrow && (
        <motion.span
          className={`eyebrow mb-4 ${light ? 'text-gold-light' : 'text-gold'}`}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {eyebrow}
        </motion.span>
      )}

      <motion.h2
        className={`font-serif text-heading-xl text-balance leading-tight ${
          light ? 'text-cream' : 'text-graphite'
        }`}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        {title}
      </motion.h2>

      {/* Linha decorativa */}
      <motion.span
        className={`block h-px w-12 my-6 ${light ? 'bg-gold-light' : 'bg-gold'}`}
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: 48, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />

      {subtitle && (
        <motion.p
          className={`font-sans text-body-lg max-w-prose-sm ${
            light ? 'text-cream/80' : 'text-graphite-light'
          }`}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
