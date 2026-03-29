import { Metadata } from 'next'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { Button } from '@/components/ui/Button'
import { book } from '@/data/book'
import { purchaseLinks } from '@/data/links'
import { CtaFinal } from '@/components/sections/CtaFinal'

export const metadata: Metadata = {
  title: 'Sobre o Livro',
  description: book.synopsisShort,
}

export default function BookPage() {
  return (
    <>
      {/* Hero interno */}
      <section className="bg-cream py-24 border-b border-sand/50">
        <div className="container-custom max-w-4xl text-center">
          <SectionTitle
            eyebrow="A Obra"
            title={book.title}
            subtitle={book.subtitle}
          />
        </div>
      </section>

      {/* Conteúdo principal */}
      <section className="section bg-cream">
        <div className="container-custom max-w-prose">
          <div className="prose prose-lg prose-headings:font-serif prose-headings:font-normal prose-headings:text-graphite prose-p:text-graphite-light prose-p:leading-relaxed mx-auto">
            {book.synopsis.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-lg font-sans leading-relaxed text-graphite-light mb-6 text-justify">
                {paragraph}
              </p>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Button href="/comprar">Ver disponibilidade</Button>
          </div>
        </div>
      </section>
      
      <CtaFinal />
    </>
  )
}
