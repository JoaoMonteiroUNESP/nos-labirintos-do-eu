import { Metadata } from 'next'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { Button } from '@/components/ui/Button'
import { contactInfo, socialLinks } from '@/data/links'

export const metadata: Metadata = {
  title: 'Contato',
  description: 'Fale com a equipe do Prof. Marco Aurélio Monteiro. Palestras, imprensa e dúvidas sobre o livro.',
}

export default function ContactPage() {
  return (
    <>
      <section className="bg-linen pt-32 pb-20 border-b border-sand">
        <div className="container-custom max-w-4xl text-center">
          <SectionTitle
            eyebrow="Fale Conosco"
            title="Contato"
            subtitle="Dúvidas, imprensas, convites para palestras."
          />
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container-custom max-w-5xl mx-auto">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
              
              {/* Informações de Contato Direto */}
              <div>
                 <h2 className="font-serif text-3xl text-graphite mb-10">Canais de Atendimento</h2>
                 
                 <div className="space-y-8">
                     <div className="p-8 bg-linen border border-sand">
                        <h3 className="font-sans text-xs uppercase tracking-widest text-gold mb-2 block">
                           Dúvidas e Leitores
                        </h3>
                        <a href={`mailto:${contactInfo.email}`} className="font-serif text-xl text-graphite hover:text-teal transition-colors">
                            {contactInfo.email}
                        </a>
                     </div>

                     <div className="p-8 bg-linen border border-sand">
                        <h3 className="font-sans text-xs uppercase tracking-widest text-gold mb-2 block">
                           Palestras e Eventos
                        </h3>
                        <a href={`mailto:${contactInfo.lecturesEmail}`} className="font-serif text-xl text-graphite hover:text-teal transition-colors">
                            {contactInfo.lecturesEmail}
                        </a>
                     </div>

                     <div className="p-8 bg-teal text-cream shadow-lg">
                        <h3 className="font-sans text-xs uppercase tracking-widest text-gold-light mb-2 block">
                           Imprensa e Mídia
                        </h3>
                        <a href={`mailto:${contactInfo.pressEmail}`} className="font-serif text-xl hover:text-gold-light transition-colors">
                            {contactInfo.pressEmail}
                        </a>
                     </div>
                 </div>
              </div>

              {/* Redes Sociais */}
              <div>
                 <h2 className="font-serif text-3xl text-graphite mb-10">Siga o Autor</h2>
                 
                 <div className="grid grid-cols-2 gap-4">
                     {socialLinks.instagram !== '#' && (
                        <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="p-6 border border-sand hover:bg-linen hover:border-teal transition-colors duration-300 group flex items-center justify-between">
                            <span className="font-serif text-lg text-graphite group-hover:text-teal">Instagram</span>
                            <span className="text-sand group-hover:text-teal transition-colors">→</span>
                        </a>
                     )}
                     
                     {socialLinks.youtube !== '#' && (
                        <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="p-6 border border-sand hover:bg-linen hover:border-teal transition-colors duration-300 group flex items-center justify-between">
                            <span className="font-serif text-lg text-graphite group-hover:text-teal">YouTube</span>
                            <span className="text-sand group-hover:text-teal transition-colors">→</span>
                        </a>
                     )}
                     
                     {socialLinks.linkedin !== '#' && (
                        <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="p-6 border border-sand hover:bg-linen hover:border-teal transition-colors duration-300 group flex items-center justify-between col-span-2">
                            <span className="font-serif text-lg text-graphite group-hover:text-teal">LinkedIn</span>
                            <span className="text-sand group-hover:text-teal transition-colors">→</span>
                        </a>
                     )}

                     {socialLinks.lattes !== '#' && (
                        <a href={socialLinks.lattes} target="_blank" rel="noopener noreferrer" className="p-6 border border-sand hover:bg-linen hover:border-teal transition-colors duration-300 group flex items-center justify-between col-span-2 bg-linen/50">
                            <span className="font-serif text-lg text-graphite group-hover:text-teal">Currículo Lattes Acadêmico</span>
                            <span className="text-sand group-hover:text-teal transition-colors">→</span>
                        </a>
                     )}
                 </div>

              </div>
           </div>
        </div>
      </section>
    </>
  )
}
