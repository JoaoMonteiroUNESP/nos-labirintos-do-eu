import { Metadata } from 'next'
import Image from 'next/image'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { author } from '@/data/author'

export const metadata: Metadata = {
  title: 'Sobre o Autor',
  description: author.shortBio,
}

export default function AuthorPage() {
  return (
    <>
      {/* Hero Autor */}
      <section className="bg-linen py-24 lg:py-32">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
            
            {/* Imagem */}
            <div className="lg:col-span-5 relative w-full aspect-[4/5] bg-sand border border-sand shadow-xl">
               <Image
                 src={author.photo}
                 alt={author.name}
                 fill
                 className="object-cover object-top"
                 priority
               />
               <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-graphite/80 p-6 flex flex-col justify-end">
                   <span className="font-sans text-xs uppercase tracking-widest text-gold-light mb-1">
                      {author.title}
                   </span>
                   <h1 className="font-serif text-2xl text-cream">{author.name}</h1>
               </div>
            </div>

            {/* Biografia principal */}
            <div className="lg:col-span-7 prose prose-lg prose-headings:font-serif prose-p:text-graphite-light prose-p:leading-relaxed">
               <SectionTitle
                eyebrow="O Autor"
                title="A Trajetória"
                align="left"
                className="mb-10"
              />
              {author.fullBio.map((bio, i) => (
                <p key={i} className="mb-6 font-sans text-graphite-light leading-relaxed text-justify">
                  {bio.paragraph}
                </p>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Dimensão Espiritual */}
      <section className="bg-teal py-20 text-cream" aria-labelledby="spiritual-dimension">
        <div className="container-custom max-w-4xl text-center">
            <h2 id="spiritual-dimension" className="font-serif text-3xl mb-8">
               {author.spiritualDimension.title}
            </h2>
            <div className="font-sans text-lg text-cream/90 leading-relaxed max-w-prose mx-auto space-y-6">
               {author.spiritualDimension.text.split('\n\n').map((p, i) => (
                   <p key={i}>{p}</p>
               ))}
            </div>
        </div>
      </section>

      {/* Formação e Títulos */}
      <section className="section bg-cream">
         <div className="container-custom">
            <h2 className="font-serif text-3xl text-center text-graphite mb-16">
               Reconhecimento Acadêmico
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
               <div>
                  <h3 className="font-sans text-sm uppercase tracking-widest text-gold mb-8 pb-4 border-b border-sand">
                     Formação
                  </h3>
                  <ul className="space-y-6">
                     {author.education.map((ed, i) => (
                        <li key={i} className="flex gap-4 items-start">
                           <span className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0" />
                           <div>
                              <p className="font-serif text-xl text-graphite">
                                 {ed.degree}
                              </p>
                              <p className="font-sans text-sm text-graphite-light">
                                 {ed.institution}
                              </p>
                           </div>
                        </li>
                     ))}
                  </ul>
               </div>

               <div>
                  <h3 className="font-sans text-sm uppercase tracking-widest text-gold mb-8 pb-4 border-b border-sand">
                     Atuação Profissional
                  </h3>
                  <ul className="space-y-4">
                     {author.roles.map((role, i) => (
                        <li key={i} className="flex gap-3 items-center font-sans text-graphite-light">
                           <span className="text-teal text-lg leading-none">✓</span>
                           {role}
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
         </div>
      </section>
    </>
  )
}
