import { Metadata } from 'next'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { Button } from '@/components/ui/Button'
import { book } from '@/data/book'
import { purchaseLinks } from '@/data/links'

export const metadata: Metadata = {
  title: 'Leia um Trecho',
  description: 'Leia um trecho da introdução do livro Nos Labirintos do Eu.',
}

export default function ExcerptPage() {
  return (
    <>
      <section className="bg-linen py-32 border-b border-sand">
        <div className="container-custom max-w-4xl text-center">
          <SectionTitle
            eyebrow="Da Introdução"
             title={book.title}
             subtitle="Um convite para a leitura."
          />
        </div>
      </section>

      <section className="section bg-cream min-h-screen relative">
         {/* Container focado para leitura */}
         <div className="container-custom max-w-prose bg-cream -mt-24 relative z-10 p-8 md:p-16 rounded-sm shadow-xl border border-sand">
             
             {/* Indicador visual de leitura */}
             <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-teal-dark via-teal-light to-cream" />

             <div className="reading-text">
                {book.excerpt.content.split('\n\n').map((p, i) => (
                   <p key={i}>{p}</p>
                ))}
             </div>

             <div className="mt-16 pt-12 border-t border-sand flex flex-col items-center justify-center text-center">
                 <span className="font-sans text-caption text-graphite-light uppercase tracking-widest mb-6 block">
                    Continue a leitura em livro físico ou ebook
                 </span>
                 <Button href={purchaseLinks.amazon} size="lg" external>
                    Adquirir a obra completa
                 </Button>
             </div>
         </div>
      </section>
    </>
  )
}
