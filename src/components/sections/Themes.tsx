'use client'

import { motion } from 'framer-motion'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { book } from '@/data/book'

export function Themes() {
  return (
    <section className="section bg-cream" aria-labelledby="themes-title" id="temas">
      <div className="container-custom">
        <div className="text-center mb-16">
          <SectionTitle
            eyebrow="Temas da Obra"
            title="O que o livro atravessa"
            subtitle="Uma obra que percorre os territórios mais sensíveis da experiência humana — com honestidade, cuidado e profundidade."
            id="themes-title"
          />
        </div>

        {/* Grade de temas */}
        <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
          {book.themes.map((theme, i) => (
            <motion.span
              key={theme.label}
              className="theme-tag cursor-default"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0"
                aria-hidden="true"
              />
              {theme.label}
            </motion.span>
          ))}
        </div>

        {/* Linha de fundo decorativa */}
        <motion.div
          className="mt-20 text-center max-w-prose-sm mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p className="font-serif italic text-heading-md text-graphite-light">
            &quot;Uma obra para ser relida em diferentes estações da vida.&quot;
          </p>
        </motion.div>
      </div>
    </section>
  )
}
