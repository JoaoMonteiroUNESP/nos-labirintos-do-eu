'use client'

import { motion } from 'framer-motion'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { Button } from '@/components/ui/Button'
import { book } from '@/data/book'

export function AboutBook() {
  return (
    <section className="section bg-cream" aria-labelledby="about-book-title" id="sobre-o-livro">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Lado esquerdo: Título e contexto */}
          <div>
            <SectionTitle
              eyebrow="A Obra"
              title={
                <>
                  Um livro que não prescreve.
                  <br />
                  <span className="text-teal">Que acompanha.</span>
                </>
              }
              align="left"
              id="about-book-title"
            />

            <motion.div
              className="mt-8 space-y-5 font-sans text-body-lg text-graphite-light leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <p>
                Há momentos em que a vida nos coloca diante de nós mesmos de um jeito que não
                conseguimos desviar o olhar. A ansiedade, a angústia, as dores que não têm nome
                fácil — tudo isso faz parte de uma travessia profundamente humana.
              </p>
              <p>
                <em className="font-serif text-graphite not-italic">&quot;Nos Labirintos do Eu&quot;</em>{' '}
                nasce desse encontro: entre a experiência de quem olhou para dentro com coragem e
                a necessidade de oferecer ao leitor não uma saída rápida, mas uma companhia honesta.
              </p>
              <p>
                Esta obra não é um manual clínico. Não é um livro de autoajuda com promessas
                instantâneas. É um convite à reconexão — com o que há de mais essencial na
                experiência de ser humano.
              </p>
            </motion.div>

            <motion.div
              className="mt-8 flex gap-4"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Button href="/o-livro" variant="ghost" id="about-book-learn-more">
                Conheça o livro
              </Button>
            </motion.div>
          </div>

          {/* Lado direito: Diferenciais */}
          <div className="space-y-6 mt-4 lg:mt-20">
            {book.differentials.map((item, i) => (
              <motion.div
                key={item.title}
                className="flex gap-5 group"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 * i }}
              >
                {/* Número */}
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                  <span className="font-serif text-gold text-lg">{String(i + 1).padStart(2, '0')}</span>
                </div>

                {/* Conteúdo */}
                <div className="border-b border-sand pb-6 flex-1">
                  <h3 className="font-serif text-heading-md text-graphite mb-2 group-hover:text-teal transition-colors duration-400">
                    {item.title}
                  </h3>
                  <p className="font-sans text-body text-graphite-light">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
