'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { book } from '@/data/book'

export function ExcerptSection() {
  const lines = book.excerpt.content.split('\n\n').filter(Boolean)

  return (
    <section
      className="section bg-graphite relative overflow-hidden"
      aria-labelledby="excerpt-title"
      id="trecho"
    >
      {/* Textura decorativa de fundo */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, #F7F3EE 0px, #F7F3EE 1px, transparent 1px, transparent 60px)',
        }}
        aria-hidden="true"
      />

      {/* Acento vertical esquerdo */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-gold/50 to-transparent"
        aria-hidden="true"
      />

      <div className="container-custom relative">
        {/* Eyebrow */}
        <motion.div
          className="flex items-center gap-4 mb-12"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="block w-8 h-px bg-gold" aria-hidden="true" />
          <span className="eyebrow text-gold">{book.excerpt.title}</span>
        </motion.div>

        <div className="max-w-prose-lg">
          {/* Aspas decorativas */}
          <motion.span
            className="font-serif text-[7rem] leading-none text-gold/20 block -mb-6 select-none"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            aria-hidden="true"
          >
            &quot;
          </motion.span>

          {/* Texto do trecho */}
          <div id="excerpt-title" className="sr-only">Trecho da introdução</div>
          {lines.map((line, i) => (
            <motion.p
              key={i}
              className="font-serif text-[1.3rem] leading-[1.85] text-cream/85 mb-6"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 * i }}
            >
              {line}
            </motion.p>
          ))}

          {/* Atribuição */}
          <motion.footer
            className="border-t border-cream/10 pt-6 mt-8 flex items-center justify-between flex-wrap gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="font-sans text-caption text-gold uppercase tracking-[0.2em]">
              — {book.excerpt.attribution}
            </span>
            <Button href="/leia-um-trecho" variant="ghost" id="excerpt-read-more">
              Ler mais
            </Button>
          </motion.footer>
        </div>
      </div>
    </section>
  )
}
