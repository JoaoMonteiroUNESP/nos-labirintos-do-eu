import { Metadata } from 'next'
import { Hero } from '@/components/sections/Hero'
import { QuoteBanner } from '@/components/sections/QuoteBanner'
import { AboutBook } from '@/components/sections/AboutBook'
import { ResearchThemes } from '@/components/sections/ResearchThemes'
import { PressHighlights } from '@/components/sections/PressHighlights'
import { ForWhom } from '@/components/sections/ForWhom'
import { Themes } from '@/components/sections/Themes'
import { ExcerptSection } from '@/components/sections/ExcerptSection'
import { AboutAuthor } from '@/components/sections/AboutAuthor'
import { CtaFinal } from '@/components/sections/CtaFinal'

export const metadata: Metadata = {
  title: 'Marco Aurélio Alvarenga Monteiro — Pesquisador e Autor',
  description:
    'Plataforma do Prof. Marco Aurélio Alvarenga Monteiro — pesquisador da UNESP e autor de "Nos Labirintos do Eu". Ciência, educação e a travessia do autoconhecimento.',
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <QuoteBanner />
      <AboutBook />
      <ResearchThemes />
      <PressHighlights />
      <Themes />
      <ExcerptSection />
      <AboutAuthor />
      <ForWhom />
      <CtaFinal />
    </div>
  )
}
