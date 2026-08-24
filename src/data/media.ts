// =============================================================================
// MÍDIA, IMPRENSA E PRODUÇÃO
// Artigos, entrevistas, podcasts e perfis acadêmicos do Prof. Marco Aurélio.
// Edite este arquivo para adicionar novas aparições na imprensa.
// =============================================================================

export type MediaKind = 'artigo' | 'entrevista' | 'podcast' | 'video' | 'academico'

export interface PressItem {
  id: string
  kind: MediaKind
  kindLabel: string // rótulo exibido (ex.: "Artigo assinado", "Entrevista")
  outlet: string // veículo (ex.: "Gazeta do Povo")
  title: string
  description: string // resumo curto do conteúdo
  url: string
  theme: string // tema/eixo (para agrupar)
  date?: string
  featured?: boolean // aparece na home
}

// -----------------------------------------------------------------------------
// IMPRENSA — artigos assinados e entrevistas
// -----------------------------------------------------------------------------
export const pressItems: PressItem[] = [
  {
    id: 'gazeta-bets',
    kind: 'artigo',
    kindLabel: 'Artigo assinado',
    outlet: 'Gazeta do Povo',
    title: 'Como as bets e os jogos digitais usam neurociência para viciar',
    description:
      'Análise do design comportamental das apostas online: dopamina como “sinal de erro de predição”, o estado de “quase lá” e a ilusão de controle que transforma sorte em suposta habilidade.',
    url: 'https://www.gazetadopovo.com.br/opiniao/artigos/como-as-bets-e-os-jogos-digitais-usam-neurociencia-para-viciar/',
    theme: 'Neurociência & Comportamento',
    featured: true,
  },
  {
    id: 'folhape-emocao-matematica',
    kind: 'artigo',
    kindLabel: 'Artigo assinado',
    outlet: 'Folha de Pernambuco',
    title: 'O que a saúde emocional tem a ver com aprender matemática',
    description:
      'Emoção e cognição são processos integrados, não opostos. Com Wallon e Spinoza, o texto mostra como a segurança emocional transforma o medo do erro em curiosidade investigativa.',
    url: 'https://www.folhape.com.br/noticia/amp/506477/o-que-a-saude-emocional-tem-a-ver-com-aprender-matematica/',
    theme: 'Emoção & Aprendizado',
    featured: true,
  },
  {
    id: 'terra-celular-escola',
    kind: 'entrevista',
    kindLabel: 'Entrevista / fonte especialista',
    outlet: 'Terra',
    title: 'Proibição do celular na escola: 5 impactos positivos',
    description:
      'Como especialista da UNESP, defende que o debate não é “ensino contra tecnologia”, mas uso equilibrado — com ganhos em foco, convívio presencial e inteligência emocional.',
    url: 'https://www.terra.com.br/vida-e-estilo/comportamento/proibicao-do-celular-na-escola-especialista-da-unesp-destaca-5-impactos-positivos,32dcc395c23e34c7c722d2ac3b4d1fb9inxopor5.html',
    theme: 'Educação & Tecnologia',
    featured: true,
  },
  {
    id: 'malu-celular-escola',
    kind: 'entrevista',
    kindLabel: 'Entrevista / fonte especialista',
    outlet: 'Revista Malu',
    title: '5 benefícios da proibição do celular nas escolas',
    description:
      'Mais foco, relações presenciais fortalecidas, menos ansiedade, mais criatividade e desenvolvimento de empatia — os efeitos de um ambiente escolar menos mediado por telas.',
    url: 'https://revistamalu.com.br/comportamento/5-beneficios-da-proibicao-do-celular-nas-escolas/',
    theme: 'Educação & Tecnologia',
  },
  {
    id: 'jen-data-centers',
    kind: 'artigo',
    kindLabel: 'Artigo assinado',
    outlet: 'Empresas & Negócios',
    title: 'Brasil será a maior potência global de data centers',
    description:
      'O potencial brasileiro em energia limpa e infraestrutura versus o risco de “exportar energia e importar inteligência” sem investir em educação e formação técnica.',
    url: 'https://jornalempresasenegocios.com.br/negocios/brasil-sera-a-maior-potencia-global-de-data-centers/',
    theme: 'Ciência, IA & Sociedade',
  },
]

// -----------------------------------------------------------------------------
// PODCASTS E VÍDEOS — participações e entrevistas em áudio/vídeo
// -----------------------------------------------------------------------------
export const mediaAppearances: PressItem[] = [
  {
    id: 'nafeg-pod',
    kind: 'video',
    kindLabel: 'Playlist',
    outlet: 'NA FEG POD · YouTube',
    title: 'Participações no NA FEG POD',
    description:
      'Série de conversas em vídeo sobre ciência, educação e tecnologia produzidas na Faculdade de Engenharia de Guaratinguetá (UNESP).',
    url: 'https://www.youtube.com/playlist?list=PLsBgJPZvzB9CXbtb4BjbQzyMbqSEZKw8g',
    theme: 'Podcast & Vídeo',
    featured: true,
  },
  {
    id: 'vale-mais-podcast',
    kind: 'podcast',
    kindLabel: 'Podcast',
    outlet: 'Vale Mais Podcast',
    title: 'Entrevista no Vale Mais Podcast',
    description:
      'Conversa sobre pesquisa, educação e os bastidores do livro "Nos Labirintos do Eu".',
    url: 'https://www.instagram.com/valemaispodcast/p/DagymuDjgBh/',
    theme: 'Podcast & Vídeo',
  },
  {
    id: 'estudio-do-ed',
    kind: 'podcast',
    kindLabel: 'Podcast',
    outlet: 'Estúdio do Ed',
    title: 'Entrevista no Estúdio do Ed',
    description:
      'Bate-papo sobre ciência, comportamento e o papel da educação diante da tecnologia.',
    url: 'https://www.instagram.com/estudiodoed/p/Czv8t9pO5r4/',
    theme: 'Podcast & Vídeo',
  },
  {
    id: 'radio-fandango',
    kind: 'entrevista',
    kindLabel: 'Entrevista em rádio',
    outlet: 'Rádio Fandango (RS)',
    title: 'Entrevista sobre pesquisa e o livro',
    description:
      'Entrevista na Rádio Fandango, no Rio Grande do Sul, sobre suas pesquisas e o livro "Nos Labirintos do Eu".',
    url: 'https://www.instagram.com/prof.marcoaurelio/reel/DawRrFChHgS/',
    theme: 'Podcast & Vídeo',
  },
]

// -----------------------------------------------------------------------------
// PRODUÇÃO ACADÊMICA — perfis e bases científicas
// -----------------------------------------------------------------------------
export const academicProfiles = [
  {
    id: 'lattes',
    label: 'Currículo Lattes',
    outlet: 'CNPq',
    description: 'Trajetória acadêmica completa, formação e produção científica.',
    url: 'http://lattes.cnpq.br/0143498612781228',
  },
  {
    id: 'orcid',
    label: 'ORCID',
    outlet: '0000-0002-4426-1638',
    description: 'Identificador e registro internacional de pesquisador.',
    url: 'https://orcid.org/0000-0002-4426-1638',
  },
  {
    id: 'scholar',
    label: 'Google Acadêmico',
    outlet: 'Citado por centenas de pesquisadores',
    description: 'Artigos, citações e índices de impacto acadêmico.',
    url: 'https://scholar.google.com/citations?user=MoU1HagAAAAJ&hl=pt-BR',
  },
  {
    id: 'scielo',
    label: 'SciELO',
    outlet: 'Biblioteca científica',
    description: 'Artigos publicados em periódicos científicos indexados.',
    url: 'https://search.scielo.org/?lang=pt&q=au:MONTEIRO,+MARCO+AURELIO+ALVARENGA',
  },
]

// -----------------------------------------------------------------------------
// EIXOS DE PESQUISA — a ponte entre o cientista e o autor
// -----------------------------------------------------------------------------
export const researchThemes = [
  {
    title: 'Neurociência das emoções e do vício',
    text: 'Como o cérebro processa recompensa, desejo e dependência — do design predatório das bets à raiz neurobiológica do sofrimento.',
    bridge: 'No livro: "A Ciência do Sentir".',
  },
  {
    title: 'Emoção e cognição no aprendizado',
    text: 'A tese de que afeto e inteligência são indissociáveis: aprender bem exige segurança emocional, não apenas técnica.',
    bridge: 'No livro: o encontro entre razão e sentimento.',
  },
  {
    title: 'Educação, tecnologia e atenção',
    text: 'Telas, celulares e IA na escola: o uso equilibrado dos recursos digitais e seus efeitos sobre foco, convívio e autonomia.',
    bridge: 'No livro: "O Poder das Escolhas".',
  },
  {
    title: 'Ciência, espiritualidade e sentido',
    text: 'Uma leitura que integra rigor científico e a dimensão espiritual da experiência humana, sem dogmatismo.',
    bridge: 'No livro: "Saúde Mental e Fé".',
  },
]

// Veículos onde já apareceu (para faixa de credibilidade)
export const pressOutlets = [
  'Gazeta do Povo',
  'Folha de Pernambuco',
  'Terra',
  'Revista Malu',
  'Empresas & Negócios',
  'Rádio Fandango',
]
