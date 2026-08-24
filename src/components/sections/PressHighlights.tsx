'use client'

import { motion } from 'framer-motion'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { Button } from '@/components/ui/Button'
import { pressItems, mediaAppearances, pressOutlets } from '@/data/media'

export function PressHighlights() {
  const featured = [
    ...pressItems.filter((i) => i.featured),
    ...mediaAppearances.filter((i) => i.featured),
  ].slice(0, 4)

  return (
    <section className="section bg-cream" aria-labelledby="press-title" id="imprensa">
      <div className="container-custom">
        <div className="text-center mb-14">
          <SectionTitle
            eyebrow="Autoridade & Imprensa"
            title="O pesquisador na conversa pública"
            subtitle="Antes de ser um autor, Marco Aurélio é um cientista convidado a explicar o mundo. Da neurociência do vício à educação diante das telas."
            id="press-title"
          />
        </div>

        {/* Faixa de veículos */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mb-16 pb-16 border-b border-sand"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {pressOutlets.map((outlet) => (
            <span
              key={outlet}
              className="font-serif text-lg md:text-xl text-graphite-light/70 tracking-tight"
            >
              {outlet}
            </span>
          ))}
        </motion.div>

        {/* Grade de destaques */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-sand/60 border border-sand/60">
          {featured.map((item, i) => (
            <motion.a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-cream p-8 md:p-10 flex flex-col hover:bg-linen/60 transition-colors duration-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="font-sans text-caption text-gold uppercase tracking-widest">
                  {item.kindLabel}
                </span>
                <span className="block w-1 h-1 rounded-full bg-sand" aria-hidden="true" />
                <span className="font-sans text-caption text-graphite-light uppercase tracking-widest">
                  {item.outlet}
                </span>
              </div>

              <h3 className="font-serif text-heading-md text-graphite leading-snug mb-4 group-hover:text-teal transition-colors duration-400">
                {item.title}
              </h3>

              <p className="font-sans text-body text-graphite-light leading-relaxed mb-6 flex-grow">
                {item.description}
              </p>

              <span className="font-sans text-caption text-teal uppercase tracking-widest inline-flex items-center gap-2">
                Ler no veículo
                <span className="transition-transform duration-400 group-hover:translate-x-1">→</span>
              </span>
            </motion.a>
          ))}
        </div>

        <div className="text-center mt-14">
          <Button href="/midia" variant="ghost" size="md" id="press-see-all">
            Ver todas as aparições
          </Button>
        </div>
      </div>
    </section>
  )
}
