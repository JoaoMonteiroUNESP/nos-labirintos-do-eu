'use client'

import { motion } from 'framer-motion'
import { BookCover } from '@/components/ui/BookCover'
import { Button } from '@/components/ui/Button'
import { book } from '@/data/book'
import { purchaseLinks } from '@/data/links'

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center bg-cream overflow-hidden pt-20"
      aria-label="Apresentação do livro"
      id="hero"
    >
      {/* Fundo decorativo — linhas sutis */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, #2C2C2C 0px, #2C2C2C 1px, transparent 1px, transparent 80px)',
        }}
        aria-hidden="true"
      />

      {/* Acento visual lateral */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-gold to-transparent opacity-60"
        aria-hidden="true"
      />

      <div className="container-custom py-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Conteúdo textual */}
          <div className="order-2 lg:order-1">
            {/* Eyebrow */}
            <motion.div
              className="flex items-center gap-4 mb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="block w-8 h-px bg-gold" aria-hidden="true" />
              <span className="eyebrow">{book.authorShort}</span>
            </motion.div>

            {/* Título */}
            <motion.h1
              className="font-serif text-display text-graphite mb-4 leading-[1.02]"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              {book.title}
            </motion.h1>

            {/* Subtítulo */}
            <motion.p
              className="font-serif italic text-heading-md text-teal mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5 }}
            >
              {book.subtitle}
            </motion.p>

            {/* Linha decorativa */}
            <motion.span
              className="block w-16 h-px bg-sand mb-8"
              initial={{ width: 0 }}
              animate={{ width: 64 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              aria-hidden="true"
            />

            {/* Sinopse curta */}
            <motion.p
              className="font-sans text-body-lg text-graphite-light leading-relaxed max-w-prose-sm mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.6 }}
            >
              {book.synopsisShort}
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.8 }}
            >
              <Button
                href="/comprar"
                variant="primary"
                size="lg"
                id="hero-buy-cta"
              >
                Ver disponibilidade
              </Button>
              <Button
                href="/leia-um-trecho"
                variant="ghost"
                size="lg"
                id="hero-excerpt-cta"
              >
                Leia um trecho
              </Button>
            </motion.div>

            {/* Badge de autoridade */}
            <motion.div
              className="mt-12 pt-8 border-t border-sand flex items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.1 }}
            >
              <div className="flex flex-col">
                <span className="font-sans text-caption text-graphite-light">
                  Professor Associado
                </span>
                <span className="font-sans text-sm font-medium text-graphite">
                  UNESP — Faculdade de Engenharia de Guaratinguetá
                </span>
              </div>
            </motion.div>
          </div>

          {/* Capa do livro */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <BookCover large animated />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        aria-hidden="true"
      >
        <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-graphite-light">
          Descer
        </span>
        <motion.span
          className="block w-px h-8 bg-gradient-to-b from-graphite-light to-transparent"
          animate={{ scaleY: [1, 1.3, 1], opacity: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}
