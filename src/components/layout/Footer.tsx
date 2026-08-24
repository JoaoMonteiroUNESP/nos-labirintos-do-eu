'use client'

import Link from 'next/link'
import { navLinks, socialLinks, contactInfo, purchaseLinks } from '@/data/links'
import { book } from '@/data/book'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-graphite text-cream/80">
      <div className="bg-linen/5 border-t border-cream/5 py-12">
        <div className="container-custom text-center">
          <span className="eyebrow text-gold-light mb-4 block">Uma obra para a vida</span>
          <h2 className="font-serif text-heading-lg text-cream mb-4">
            Nos Labirintos do Eu
          </h2>
          <p className="font-sans text-body text-cream/50 max-w-prose mx-auto">
            Acompanhe o lançamento da obra digital.
          </p>
        </div>
      </div>

      {/* Footer principal */}
      <div className="py-16 border-t border-cream/10">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Coluna 1: Livro */}
            <div>
              <h3 className="font-serif text-xl text-cream mb-2">{book.title}</h3>
              <p className="font-sans text-caption text-gold uppercase tracking-widest mb-4">
                {book.authorShort}
              </p>
              <p className="font-sans text-body text-cream/60 leading-relaxed">
                {book.synopsisShort}
              </p>
            </div>

            {/* Coluna 2: Navegação */}
            <div>
              <h4 className="font-sans text-caption uppercase tracking-widest text-gold mb-6">
                Navegação
              </h4>
              <nav className="flex flex-col gap-3" aria-label="Rodapé navegação">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="font-sans text-body text-cream/70 hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/comprar"
                  className="font-sans text-body text-cream/70 hover:text-gold transition-colors duration-300"
                >
                  Ver disponibilidade
                </Link>
              </nav>
            </div>

            {/* Coluna 3: Contato e Redes */}
            <div>
              <h4 className="font-sans text-caption uppercase tracking-widest text-gold mb-6">
                Contato
              </h4>
              <div className="flex flex-col gap-3 mb-8">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="font-sans text-body text-cream/70 hover:text-gold transition-colors duration-300"
                >
                  {contactInfo.email}
                </a>
              </div>

              {/* Redes sociais */}
              <h4 className="font-sans text-caption uppercase tracking-widest text-gold mb-4">
                Redes
              </h4>
              <div className="flex gap-4">
                {socialLinks.instagram !== '#' && (
                  <a
                    href={socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="font-sans text-body text-cream/60 hover:text-gold transition-colors duration-300"
                  >
                    Instagram
                  </a>
                )}
                {socialLinks.youtube !== '#' && (
                  <a
                    href={socialLinks.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="font-sans text-body text-cream/60 hover:text-gold transition-colors duration-300"
                  >
                    YouTube
                  </a>
                )}
                {socialLinks.lattes !== '#' && (
                  <a
                    href={socialLinks.lattes}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Currículo Lattes"
                    className="font-sans text-body text-cream/60 hover:text-gold transition-colors duration-300"
                  >
                    Lattes
                  </a>
                )}
                {socialLinks.orcid && socialLinks.orcid !== '#' && (
                  <a
                    href={socialLinks.orcid}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="ORCID"
                    className="font-sans text-body text-cream/60 hover:text-gold transition-colors duration-300"
                  >
                    ORCID
                  </a>
                )}
                {socialLinks.scholar && socialLinks.scholar !== '#' && (
                  <a
                    href={socialLinks.scholar}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Google Acadêmico"
                    className="font-sans text-body text-cream/60 hover:text-gold transition-colors duration-300"
                  >
                    Scholar
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Linha divisória */}
          <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-sans text-caption text-cream/40">
              © {currentYear} Marco Aurélio Alvarenga Monteiro. Todos os direitos reservados.
            </p>
            <p className="font-sans text-caption text-cream/30 italic">
              Nos Labirintos do Eu — uma obra para a travessia humana
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
