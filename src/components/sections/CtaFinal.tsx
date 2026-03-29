'use client'

import { motion } from 'framer-motion'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { Button } from '@/components/ui/Button'
import { book } from '@/data/book'
import { purchaseLinks } from '@/data/links'

export function CtaFinal() {
  return (
    <section className="section bg-teal-dark text-cream relative overflow-hidden" id="comprar-agora">
      {/* Decoração de fundo sutil (linhas radiais ou padrão) */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none w-full h-full"
        style={{
          background: 'radial-gradient(circle at center, #F7F3EE 1px, transparent 1px) 0 0 / 40px 40px',
        }}
        aria-hidden="true"
      />

      <div className="container-custom relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <span className="eyebrow text-gold-light mb-6 block w-full text-center">
            Comece a travessia
          </span>
          
          <h2 className="font-serif text-heading-xl text-cream mb-8 text-balance leading-tight">
            Encontre a coragem para olhar para dentro.
          </h2>
          
          <p className="font-sans text-body-lg text-cream/80 max-w-prose mx-auto mb-12">
            Acompanhe o lançamento de <span className="font-serif italic tracking-wide text-cream">Nos Labirintos do Eu</span> e prepare-se para uma jornada de autocompaixão, reflexão e esperança. Uma companhia honesta para os momentos de caos interior.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button
              href="/comprar"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto hover:bg-gold hover:text-teal-dark bg-cream text-teal-dark"
              id="cta-final-buy"
            >
              Ver disponibilidade
            </Button>
            
            <Button
              href="/leia-um-trecho"
              variant="ghost"
              size="lg"
              className="w-full sm:w-auto text-cream border-cream hover:bg-cream hover:text-teal-dark"
              id="cta-final-excerpt"
            >
              Ler a introdução
            </Button>
          </div>
          
          <div className="mt-12 flex items-center justify-center gap-2 text-cream/50 text-xs uppercase tracking-widest font-sans">
             <span>Para convites e palestras, <a href="/contato" className="underline hover:text-gold-light transition-colors duration-300">fale com o autor</a>.</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
