'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { Button } from '@/components/ui/Button'
import { author } from '@/data/author'

export function AboutAuthor() {
  return (
    <section className="section bg-linen" aria-labelledby="about-author-title" id="sobre-o-autor">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Foto do autor */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            {/* Moldura decorativa deslocada */}
            <div
              className="absolute -top-4 -left-4 w-full h-full border border-gold/30"
              aria-hidden="true"
            />

            <div className="relative aspect-[3/4] max-w-md w-full overflow-hidden bg-sand">
              <Image
                src={author.photo}
                alt={`Foto de ${author.name}`}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 400px"
              />

              {/* Fallback / overlay se não houver foto */}
              <div className="absolute inset-0 flex items-end p-8 bg-gradient-to-t from-teal-dark/80 to-transparent">
                <div>
                  <p className="font-sans text-caption text-gold uppercase tracking-widest mb-1">
                    {author.title}
                  </p>
                  <h3 className="font-serif text-heading-md text-cream leading-tight">
                    {author.nameShort}
                  </h3>
                </div>
              </div>
            </div>

            {/* Badge flutuante de credencial */}
            <motion.div
              className="absolute -bottom-6 -right-4 bg-cream border border-sand p-4 shadow-lg max-w-[180px]"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <p className="font-sans text-[10px] uppercase tracking-widest text-gold mb-1">
                Livre-Docente
              </p>
              <p className="font-serif text-sm text-graphite leading-tight">
                Educação para a Ciência — UNESP
              </p>
            </motion.div>
          </motion.div>

          {/* Conteúdo textual */}
          <div>
            <SectionTitle
              eyebrow="O Autor"
              title="Uma trajetória de rigor e humanidade"
              align="left"
              id="about-author-title"
            />

            <motion.div
              className="mt-8 space-y-4 font-sans text-body text-graphite-light leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p>
                Marco Aurélio Alvarenga Monteiro é Professor Associado da UNESP, com doutorado e
                livre-docência em Educação para a Ciência. Pesquisador, orientador, autor — uma
                carreira construída com consistência e propósito.
              </p>
              <p>
                Mas há uma dimensão que o differencia: ao longo de décadas, também caminhou por
                dentro. A vivência espiritual que o acompanha desde jovem — no centro espírita de
                Guaratinguetá, onde foi presidente e ainda hoje palestra — não é separada de sua
                obra. É o que a torna humana.
              </p>
            </motion.div>

            {/* Áreas de pesquisa */}
            <motion.div
              className="mt-8 pt-8 border-t border-sand"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="eyebrow mb-4 block">Áreas de pesquisa</span>
              <div className="flex flex-wrap gap-2">
                {author.researchAreas.map((area) => (
                  <span
                    key={area}
                    className="font-sans text-xs text-graphite-light border border-sand px-3 py-1.5"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Button href="/sobre-o-autor" variant="ghost" id="about-author-more">
                Conhecer a trajetória completa
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
