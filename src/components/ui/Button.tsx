'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  external?: boolean
  id?: string
}

export function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  external = false,
  id,
}: ButtonProps) {
  const baseClass =
    variant === 'primary'
      ? 'btn-primary'
      : variant === 'secondary'
        ? 'btn-secondary'
        : 'btn-ghost'

  const sizeClass =
    size === 'sm'
      ? '!px-6 !py-3 !text-xs'
      : size === 'lg'
        ? '!px-10 !py-5 !text-base'
        : ''

  const classes = `${baseClass} ${sizeClass} ${className}`

  const MotionContent = (
    <motion.span
      className="flex items-center gap-2 relative z-10"
      whileHover={{ x: 2 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.span>
  )

  if (href) {
    if (external) {
      return (
        <a
          id={id}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {MotionContent}
        </a>
      )
    }
    return (
      <Link id={id} href={href} className={classes}>
        {MotionContent}
      </Link>
    )
  }

  return (
    <button id={id} onClick={onClick} className={classes}>
      {MotionContent}
    </button>
  )
}
