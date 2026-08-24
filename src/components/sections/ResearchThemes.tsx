'use client'

import { motion } from 'framer-motion'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { researchThemes } from '@/data/media'

export function ResearchThemes() {
  return (
    <section
      className="section bg-teal-dark text-cream relative overflow-hidden"
      aria-labelledby="research-title"
      id="pesquisa"
    >
      {/* Textura sutil de fundo */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, #F7F3EE 0px, #F7F3EE 1px, transparent 1px, transparent 64px)',
        }}
        aria-hidden="true"
      />

      <div className="container-custom relative">
        <div className="text-center mb-16">
          <SectionTitle
            eyebrow="Do laboratório às páginas"
            title="A mesma pergunta, dois caminhos"
            subtitle="O que a ciência investiga sobre emoção, atenção e comportamento é o que o livro traduz em travessia pessoal. Rigor e sensibilidade não se opõem — se completam."
            light
            id="research-title"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 max-w-4xl mx-auto">
          {researchThemes.map((theme, i) => (
            <motion.div
              key={theme.title}
              className="relative pl-6 border-l border-gold/40"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <h3 className="font-serif text-heading-md text-cream mb-3 leading-snug">
                {theme.title}
              </h3>
              <p className="font-sans text-body text-cream/70 leading-relaxed mb-4">
                {theme.text}
              </p>
              <span className="font-sans text-caption text-gold-light uppercase tracking-widest">
                {theme.bridge}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
