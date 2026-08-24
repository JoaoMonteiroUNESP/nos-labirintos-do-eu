import { Metadata } from 'next'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { BookCover } from '@/components/ui/BookCover'
import { book } from '@/data/book'

export const metadata: Metadata = {
  title: 'Comprar o livro',
  description:
    'Nos Labirintos do Eu, de Marco Aurélio Alvarenga Monteiro — disponível em eBook Kindle e no Kindle Unlimited.',
}

export default function BuyPage() {
  return (
    <>
      <section className="bg-linen pt-32 pb-20 border-b border-sand">
        <div className="container-custom max-w-4xl text-center">
          <SectionTitle
            eyebrow="Disponível agora"
            title="Comece a leitura"
            subtitle="Disponível em eBook Kindle — e gratuito para assinantes do Kindle Unlimited."
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
                <p><strong>Formato:</strong> {book.format}</p>
                <p><strong>Páginas:</strong> {book.pages}</p>
                <p><strong>Idioma:</strong> {book.language}</p>
                <p><strong>Publicação:</strong> {book.publishDate}</p>
              </div>

              {/* Preço */}
              <div className="flex items-baseline gap-3 mb-6">
                <span className="font-serif text-4xl text-graphite">{book.price}</span>
                <span className="font-sans text-caption text-graphite-light">
                  {book.priceNote}
                </span>
              </div>

              {/* Botões de compra reais */}
              <div className="space-y-4 pt-2">
                {book.purchaseLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={
                      link.primary
                        ? 'btn-primary w-full'
                        : 'btn-secondary w-full'
                    }
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <p className="font-sans text-xs text-graphite-light/60 mt-8 text-center lg:text-left">
                Você será direcionado à Amazon para concluir a leitura ou a compra
                com segurança.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
