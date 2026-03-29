'use client'

import { motion } from 'framer-motion'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { book } from '@/data/book'

export function ForWhom() {
  return (
    <section className="section bg-linen" aria-labelledby="for-whom-title" id="para-quem-e">
      <div className="container-custom">
        <div className="text-center mb-16">
          <SectionTitle
            eyebrow="Para quem é"
            title="Este livro chegou até você por algum motivo"
            subtitle="Talvez porque você busca acolhimento. Ou porque quer oferecer isso a alguém. Em qualquer caso, ele tem algo a dizer."
            id="for-whom-title"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-sand">
          {book.forWhom.map((item, i) => (
            <motion.div
              key={i}
              className="bg-linen p-8 hover:bg-cream transition-colors duration-500 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <div className="flex gap-4 items-start">
                <span
                  className="flex-shrink-0 w-5 h-5 mt-1 border border-gold rotate-45 group-hover:bg-gold transition-all duration-400"
                  aria-hidden="true"
                />
                <p className="font-sans text-body text-graphite leading-relaxed">{item}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
