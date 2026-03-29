import { Metadata } from 'next'
import { Hero } from '@/components/sections/Hero'
import { QuoteBanner } from '@/components/sections/QuoteBanner'
import { AboutBook } from '@/components/sections/AboutBook'
import { ForWhom } from '@/components/sections/ForWhom'
import { Themes } from '@/components/sections/Themes'
import { ExcerptSection } from '@/components/sections/ExcerptSection'
import { AboutAuthor } from '@/components/sections/AboutAuthor'
import { VideoSection } from '@/components/sections/VideoSection'
import { Testimonials } from '@/components/sections/Testimonials'
import { CtaFinal } from '@/components/sections/CtaFinal'

export const metadata: Metadata = {
  title: 'Nos Labirintos do Eu',
  description: 'Uma jornada para superar as dores do caos interior. Livro do Prof. Marco Aurélio Alvarenga Monteiro.',
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <QuoteBanner />
      <AboutBook />
      <ForWhom />
      <Themes />
      <ExcerptSection />
      <AboutAuthor />
      <VideoSection />
      <Testimonials />
      <CtaFinal />
    </div>
  )
}
