'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { book } from '@/data/book'

interface BookCoverProps {
  large?: boolean
  className?: string
  animated?: boolean
}

export function BookCover({ large = false, className = '', animated = true }: BookCoverProps) {
  const width = large ? 360 : 240
  const height = large ? 520 : 346

  const cover = (
    <div
      className={`relative ${className}`}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      {/* Sombra do livro */}
      <div
        className="absolute inset-0 translate-x-3 translate-y-4 bg-graphite/20 blur-lg rounded-sm"
        aria-hidden="true"
      />

      {/* Capa do livro */}
      <div className="relative w-full h-full rounded-sm overflow-hidden shadow-2xl">
        <Image
          src={book.cover || '/images/book-cover.jpg'}
          alt={`Capa do livro ${book.title}`}
          fill
          className="object-cover"
          priority={large}
          sizes={large ? '360px' : '240px'}
        />

        {/* Fallback elegante caso a imagem não exista */}
        <div className="absolute inset-0 flex flex-col items-start justify-end p-6 bg-gradient-to-t from-teal-dark/95 via-teal/40 to-transparent">
          <span className="font-sans text-caption text-gold uppercase tracking-[0.2em] mb-2">
            {book.authorShort || book.author}
          </span>
          <h3
            className="font-serif text-cream leading-tight"
            style={{ fontSize: large ? '1.5rem' : '1rem' }}
          >
            {book.title}
          </h3>
        </div>
      </div>

      {/* Spina do livro (efeito 3D) */}
      <div
        className="absolute left-0 top-0 h-full bg-teal-dark"
        style={{ width: '12px', transform: 'skewY(-1deg)', transformOrigin: 'top left' }}
        aria-hidden="true"
      />
    </div>
  )

  if (!animated) return cover

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateY: 15 }}
      animate={{ opacity: 1, y: 0, rotateY: 0 }}
      transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ scale: 1.02, rotateY: -3 }}
      style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
    >
      {cover}
    </motion.div>
  )
}
