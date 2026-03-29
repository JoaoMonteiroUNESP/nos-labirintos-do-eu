'use client'

import { motion } from 'framer-motion'

export function QuoteBanner() {
  return (
    <section
      className="bg-teal py-20 md:py-28 overflow-hidden relative"
      aria-label="Citação de posicionamento"
    >
      {/* Decoração de fundo */}
      <div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"
        aria-hidden="true"
      />

      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span
            className="font-serif text-[8rem] leading-none text-gold/20 block -mb-8 select-none"
            aria-hidden="true"
          >
            &quot;
          </span>
          <p className="font-serif italic text-heading-xl text-cream max-w-3xl mx-auto leading-tight text-balance">
            Não vim aqui para oferecer fórmulas. O que trago é algo que vale mais:{' '}
            <span className="text-gold-light">um olhar honesto sobre o que dói</span>, sobre o
            que confunde, sobre o que ainda pode florescer mesmo após as tempestades mais longas.
          </p>
          <span
            className="font-sans text-caption text-gold uppercase tracking-[0.25em] mt-8 block"
          >
            — Marco Aurélio Alvarenga Monteiro
          </span>
        </motion.div>
      </div>
    </section>
  )
}
