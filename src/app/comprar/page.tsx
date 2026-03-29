import { Metadata } from 'next'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { BookCover } from '@/components/ui/BookCover'
import { book } from '@/data/book'
import { purchaseLinks } from '@/data/links'

export const metadata: Metadata = {
  title: 'Disponibilidade e Lançamento',
  description: 'Informações sobre o lançamento do eBook Nos Labirintos do Eu de Marco Aurélio Monteiro.',
}

export default function BuyPage() {
  return (
    <>
      <section className="bg-linen pt-32 pb-20 border-b border-sand">
        <div className="container-custom max-w-4xl text-center">
          <SectionTitle
            eyebrow="Lançamento"
            title="Obra Digital"
            subtitle="Em breve disponível em formato eBook"
          />
        </div>
      </section>

      <section className="section bg-cream min-h-[60vh]">
        <div className="container-custom">
            
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-5xl mx-auto">
               <div className="flex justify-center lg:justify-end">
                  <BookCover large animated={false} />
               </div>

               <div>
                  <h2 className="font-serif text-3xl text-graphite mb-2">
                     {book.title}
                  </h2>
                  <p className="font-serif italic text-teal text-xl mb-6">
                     {book.subtitle}
                  </p>
                  
                  <div className="font-sans text-graphite-light mb-8 pt-6 border-t border-sand border-dashed space-y-3">
                      <p><strong>Autor:</strong> {book.author}</p>
                      <p><strong>Páginas:</strong> {book.pages}</p>
                      <p><strong>Formato:</strong> Digital (eBook)</p>
                      <p><strong>Idioma:</strong> Português</p>
                  </div>

                  <div className="space-y-4 pt-8">
                     <p className="font-sans text-xs uppercase tracking-widest text-gold text-center lg:text-left mb-4">Pré-lançamento</p>
                     
                     <div className="block w-full text-center py-6 bg-sand/20 text-graphite-light border border-sand border-dashed font-sans font-medium italic">
                        Link do eBook (Em breve)
                     </div>
                  </div>

                  <p className="font-sans text-xs text-graphite-light/60 mt-8 text-center lg:text-left">
                     O livro será lançado inicialmente em formato digital (eBook). Fique atento às nossas redes sociais para o link de compra assim que estiver disponível.
                  </p>
               </div>
           </div>
           
        </div>
      </section>
    </>
  )
}
