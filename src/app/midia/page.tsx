import { Metadata } from 'next'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { videoConfig } from '@/data/links'
import {
  pressItems,
  mediaAppearances,
  academicProfiles,
} from '@/data/media'

export const metadata: Metadata = {
  title: 'Na Mídia',
  description:
    'Artigos, entrevistas, podcasts e produção acadêmica do Prof. Marco Aurélio Alvarenga Monteiro.',
}

export default function MediaPage() {
  const hasPlaylist = videoConfig.playlistId && videoConfig.playlistId.length > 0

  return (
    <>
      {/* Cabeçalho */}
      <section className="bg-linen pt-32 pb-20">
        <div className="container-custom max-w-4xl text-center">
          <SectionTitle
            eyebrow="Imprensa & Multimídia"
            title="Na mídia"
            subtitle="Um pesquisador convidado a explicar o mundo: neurociência, educação, tecnologia e o cuidado com a vida emocional."
          />
        </div>
      </section>

      {/* IMPRENSA */}
      <section className="section bg-cream" aria-labelledby="imprensa-title">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-baseline justify-between border-b border-sand pb-4 mb-10">
              <h2
                id="imprensa-title"
                className="font-serif text-heading-lg text-graphite"
              >
                Na imprensa
              </h2>
              <span className="font-sans text-caption text-graphite-light uppercase tracking-widest">
                {pressItems.length} publicações
              </span>
            </div>

            <div className="flex flex-col divide-y divide-sand">
              {pressItems.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 md:gap-10 py-8 hover:bg-linen/40 transition-colors duration-400 -mx-4 px-4"
                >
                  <div>
                    <span className="font-sans text-caption text-gold uppercase tracking-widest block mb-1">
                      {item.kindLabel}
                    </span>
                    <span className="font-serif text-xl text-graphite">
                      {item.outlet}
                    </span>
                    <span className="font-sans text-caption text-graphite-light block mt-2">
                      {item.theme}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-serif text-heading-md text-graphite leading-snug mb-3 group-hover:text-teal transition-colors duration-400">
                      {item.title}
                    </h3>
                    <p className="font-sans text-body text-graphite-light leading-relaxed mb-3">
                      {item.description}
                    </p>
                    <span className="font-sans text-caption text-teal uppercase tracking-widest inline-flex items-center gap-2">
                      Ler no veículo
                      <span className="transition-transform duration-400 group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PODCASTS E VÍDEOS */}
      <section className="section bg-linen" aria-labelledby="podcasts-title">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="border-b border-sand pb-4 mb-10">
              <h2
                id="podcasts-title"
                className="font-serif text-heading-lg text-graphite"
              >
                Podcasts e vídeos
              </h2>
            </div>

            {/* Playlist do YouTube */}
            {hasPlaylist && (
              <div className="mb-12">
                <div className="relative aspect-video w-full shadow-xl ring-1 ring-sand">
                  <iframe
                    src={`https://www.youtube.com/embed/videoseries?list=${videoConfig.playlistId}`}
                    title="NA FEG POD — playlist"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
                <p className="font-sans text-caption text-graphite-light mt-3 text-center">
                  Série NA FEG POD — Faculdade de Engenharia de Guaratinguetá / UNESP
                </p>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {mediaAppearances.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-cream border border-sand p-6 flex flex-col hover:border-teal transition-colors duration-400"
                >
                  <span className="font-sans text-caption text-gold uppercase tracking-widest mb-2">
                    {item.kindLabel}
                  </span>
                  <h3 className="font-serif text-lg text-graphite mb-1 group-hover:text-teal transition-colors duration-400">
                    {item.outlet}
                  </h3>
                  <p className="font-sans text-sm text-graphite-light leading-relaxed">
                    {item.description}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRODUÇÃO ACADÊMICA */}
      <section className="section bg-cream" aria-labelledby="academico-title">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="border-b border-sand pb-4 mb-10">
              <h2
                id="academico-title"
                className="font-serif text-heading-lg text-graphite"
              >
                Produção acadêmica
              </h2>
              <p className="font-sans text-body text-graphite-light mt-3 max-w-prose">
                A base científica por trás da obra — perfis, currículo e artigos
                publicados em periódicos indexados.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-sand border border-sand">
              {academicProfiles.map((profile) => (
                <a
                  key={profile.id}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-cream p-6 flex flex-col hover:bg-linen/60 transition-colors duration-400"
                >
                  <h3 className="font-serif text-xl text-graphite mb-1 group-hover:text-teal transition-colors duration-400">
                    {profile.label}
                  </h3>
                  <span className="font-sans text-caption text-gold uppercase tracking-wide mb-3">
                    {profile.outlet}
                  </span>
                  <p className="font-sans text-sm text-graphite-light leading-relaxed flex-grow">
                    {profile.description}
                  </p>
                  <span className="font-sans text-caption text-teal uppercase tracking-widest mt-4 inline-flex items-center gap-2">
                    Acessar
                    <span className="transition-transform duration-400 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
