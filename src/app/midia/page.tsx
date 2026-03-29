import { Metadata } from 'next'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { videoConfig } from '@/data/links'

export const metadata: Metadata = {
  title: 'Mídia e Vídeos',
  description: 'Entrevistas, palestras e vídeos do Professor Marco Aurélio.',
}

export default function MediaPage() {
  const hasVideo = videoConfig.youtubeId && videoConfig.youtubeId.length > 0

  return (
    <>
      <section className="bg-linen pt-32 pb-20">
        <div className="container-custom max-w-4xl text-center">
          <SectionTitle
            eyebrow="Multimídia"
            title="Assista ao autor"
            subtitle="Palestras, reflexões e entrevistas sobre a obra."
          />
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container-custom">
          {hasVideo ? (
             <div className="max-w-4xl mx-auto mb-20">
                <h2 className="font-serif text-2xl text-graphite mb-6">Vídeo Principal</h2>
                <div className="relative aspect-video w-full shadow-xl ring-1 ring-sand">
                  <iframe
                    src={`https://www.youtube.com/embed/${videoConfig.youtubeId}`}
                    title="Vídeo principal"
                    className="absolute inset-0 w-full h-full"
                    allowFullScreen
                  />
                </div>
             </div>
          ) : (
            <div className="max-w-xl mx-auto text-center bg-sand/20 border border-sand p-12 mb-20">
               <span className="font-sans text-xs uppercase tracking-widest text-gold mb-2 block">
                  Em breve
               </span>
               <h3 className="font-serif text-xl text-graphite">Novos conteúdos audiovisuais</h3>
               <p className="mt-4 font-sans text-graphite-light">
                  Em breve esta área será atualizada com entrevistas e reflexões em vídeo.
               </p>
            </div>
          )}

          <div className="max-w-4xl mx-auto border-t border-sand pt-16">
             <h3 className="font-serif text-2xl text-graphite mb-8">Outras Mídias</h3>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 {/* Placeholder card 1 */}
                 <div className="group cursor-pointer">
                     <div className="aspect-[16/9] bg-linen border border-sand flex items-center justify-center mb-4 overflow-hidden relative">
                         <div className="absolute inset-0 bg-graphite/5 group-hover:bg-transparent transition-colors duration-500" />
                         <span className="font-serif italic text-gold">Em breve</span>
                     </div>
                     <h4 className="font-serif text-lg text-graphite group-hover:text-teal transition-colors duration-300">
                        Entrevista lançamento
                     </h4>
                     <p className="font-sans text-sm text-graphite-light mt-2">
                        Data a definir
                     </p>
                 </div>
                 
                 {/* Placeholder card 2 */}
                 <div className="group cursor-pointer">
                     <div className="aspect-[16/9] bg-linen border border-sand flex items-center justify-center mb-4 overflow-hidden relative">
                         <div className="absolute inset-0 bg-graphite/5 group-hover:bg-transparent transition-colors duration-500" />
                         <span className="font-serif italic text-gold">Em breve</span>
                     </div>
                     <h4 className="font-serif text-lg text-graphite group-hover:text-teal transition-colors duration-300">
                        Palestra: O Caos Interior
                     </h4>
                     <p className="font-sans text-sm text-graphite-light mt-2">
                        Data a definir
                     </p>
                 </div>
             </div>
          </div>
        </div>
      </section>
    </>
  )
}
