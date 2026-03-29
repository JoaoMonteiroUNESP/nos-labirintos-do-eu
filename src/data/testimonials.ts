// =============================================================================
// DEPOIMENTOS
// Edite ou adicione depoimentos aqui
// =============================================================================

export interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
  initials: string
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote:
      'Uma leitura que me acompanhou em silêncio durante semanas. Cada capítulo parecia escrito para o exato momento em que eu estava. Raro encontrar um livro com tanta honestidade e cuidado.',
    author: 'Ana Claudia R.',
    role: 'Leitora',
    initials: 'AC',
  },
  {
    id: '2',
    quote:
      'O professor Marco Aurélio escreve como quem já atravessou o que escreve. Não é teoria — é experiência destilada em linguagem que toca fundo. Recomendei para vários amigos.',
    author: 'Roberto M.',
    role: 'Leitor',
    initials: 'RM',
  },
  {
    id: '3',
    quote:
      'Tinha receio de mais um livro de autoajuda. Me surpreendi completamente. É profundo, humano, espiritual sem ser dogmático. Exatamente o que eu precisava.',
    author: 'Fernanda L.',
    role: 'Leitora',
    initials: 'FL',
  },
  {
    id: '4',
    quote:
      'A forma como o autor aborda a dor emocional — com respeito e sem julgamento — é algo que raramente encontro em livros. Uma obra necessária.',
    author: 'Carlos Eduardo S.',
    role: 'Educador',
    initials: 'CE',
  },
]
