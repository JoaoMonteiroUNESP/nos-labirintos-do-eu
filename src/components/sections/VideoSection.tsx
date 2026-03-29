'use client'

import { motion } from 'framer-motion'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { videoConfig } from '@/data/links'

export function VideoSection() {
  const hasVideo = videoConfig.youtubeId && videoConfig.youtubeId.length > 0

  if (!hasVideo) return null

  return (
    <section className="section bg-cream" aria-labelledby="video-title" id="video">
      <div className="container-custom">
        <div className="text-center mb-12">
          <SectionTitle
            eyebrow="Vídeo"
            title="Ouça o autor"
            subtitle="Uma conversa sobre a obra, sobre a travessia e sobre o que nos une enquanto seres humanos."
            id="video-title"
          />
        </div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          {hasVideo ? (
            /* Player do YouTube */
            <div className="relative aspect-video w-full shadow-2xl ring-1 ring-sand">
              <iframe
                src={`https://www.youtube.com/embed/${videoConfig.youtubeId}`}
                title="Vídeo do autor Marco Aurélio Alvarenga Monteiro"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          ) : (
            /* Placeholder elegante quando não há vídeo */
            <div className="relative aspect-video w-full bg-linen border border-sand flex items-center justify-center group cursor-pointer overflow-hidden">
              {/* Linhas decorativas de fundo */}
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage:
                    'repeating-linear-gradient(90deg, #2C2C2C 0px, #2C2C2C 1px, transparent 1px, transparent 40px)',
                }}
                aria-hidden="true"
              />

              <div className="text-center z-10 p-8">
                {/* Ícone play */}
                <div className="w-20 h-20 rounded-full border-2 border-teal flex items-center justify-center mx-auto mb-6 group-hover:bg-teal transition-all duration-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-8 h-8 text-teal group-hover:text-cream transition-colors duration-500 ml-1"
                    aria-hidden="true"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="font-serif text-heading-md text-graphite mb-2">
                  Vídeo em breve
                </p>
                <p className="font-sans text-body text-graphite-light max-w-xs mx-auto">
                  Em breve, assista ao autor falar sobre a obra e a travessia que a inspirou.
                </p>
                <p className="font-sans text-caption text-gold uppercase tracking-widest mt-4">
                  Para adicionar: edite{' '}
                  <code className="normal-case tracking-normal text-graphite-light bg-sand/50 px-2 py-0.5">
                    src/data/links.ts
                  </code>
                </p>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
