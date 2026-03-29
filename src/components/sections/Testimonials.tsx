'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { testimonials } from '@/data/testimonials'

export function Testimonials() {
  const [active, setActive] = useState(0)

  const handlePrev = () =>
    setActive((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  const handleNext = () =>
    setActive((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))

  const current = testimonials[active]

  return (
    <section className="section bg-linen" aria-labelledby="testimonials-title" id="depoimentos">
      <div className="container-custom">
        <div className="text-center mb-16">
          <SectionTitle
            eyebrow="Leitores"
            title="O que dizem quem já leu"
            id="testimonials-title"
          />
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Carousel de depoimentos */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              {/* Avatar */}
              <div className="w-14 h-14 rounded-full bg-teal flex items-center justify-center mx-auto mb-8">
                <span className="font-serif text-cream text-lg font-medium">
                  {current.initials}
                </span>
              </div>

              {/* Aspas */}
              <span
                className="font-serif text-[5rem] leading-none text-gold/20 block -mb-4 select-none"
                aria-hidden="true"
              >
                &quot;
              </span>

              {/* Citação */}
              <blockquote>
                <p className="font-serif italic text-heading-md text-graphite leading-relaxed mb-8">
                  {current.quote}
                </p>
                <footer>
                  <cite className="not-italic">
                    <span className="font-sans font-medium text-graphite block">
                      {current.author}
                    </span>
                    <span className="font-sans text-caption text-graphite-light uppercase tracking-widest">
                      {current.role}
                    </span>
                  </cite>
                </footer>
              </blockquote>
            </motion.div>
          </AnimatePresence>

          {/* Controles de navegação */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <button
              onClick={handlePrev}
              aria-label="Depoimento anterior"
              className="w-10 h-10 border border-sand flex items-center justify-center text-graphite-light hover:border-teal hover:text-teal transition-all duration-400"
            >
              ←
            </button>

            {/* Indicadores */}
            <div className="flex gap-2" role="tablist" aria-label="Depoimentos">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={active === i}
                  aria-label={`Depoimento ${i + 1}`}
                  onClick={() => setActive(i)}
                  className={`block h-px transition-all duration-400 ${
                    active === i ? 'w-8 bg-teal' : 'w-4 bg-sand hover:bg-graphite-light'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              aria-label="Próximo depoimento"
              className="w-10 h-10 border border-sand flex items-center justify-center text-graphite-light hover:border-teal hover:text-teal transition-all duration-400"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
