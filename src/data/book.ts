// =============================================================================
// DADOS DO LIVRO
// Edite este arquivo para alterar informações do livro
// =============================================================================

export const book = {
  title: 'Nos Labirintos do Eu',
  subtitle: 'Uma jornada para superar as dores do caos interior',
  author: 'Prof. Marco Aurélio Alvarenga Monteiro',
  authorShort: 'Marco Aurélio Monteiro',
  publishYear: 2024,

  // Sinopse curta (para cards, hero, SEO)
  synopsisShort:
    'Um livro que não oferece fórmulas, mas companhia. Obra dedicada à travessia emocional — disponível em formato eBook.',

  // Sinopse completa (página O Livro)
  synopsis: `
    Há momentos em que a vida nos coloca diante de nós mesmos de um jeito que não conseguimos desviar o olhar. A ansiedade, a angústia, as dores que não têm nome fácil — tudo isso faz parte de uma travessia que é profundamente humana.

    "Nos Labirintos do Eu" nasce desse encontro: entre a experiência de quem olhou para dentro com coragem e a necessidade de oferecer ao leitor não uma saída rápida, mas uma companhia honesta.

    Esta obra não é um manual clínico. Não é um livro de autoajuda com promessas instantâneas. É um convite à reconexão — consigo mesmo, com o que há de mais essencial na experiência de ser humano.

    Com um olhar que transita entre a sensibilidade, a espiritualidade e a reflexão filosófica, o autor nos conduz por temas como a dor emocional, o caos interior, a autocompaixão, os relacionamentos, o sentido da dor e a reconstrução de quem somos após as tempestades da vida.

    Um livro para ser lido com calma. Para sublinhar. Para voltar. Para presentear alguém que você sabe que precisa de acolhimento.
  `.trim(),

  // Principais temas da obra
  themes: [
    { label: 'Dor emocional', icon: '◇' },
    { label: 'Caos interior', icon: '◇' },
    { label: 'Ansiedade e angústia', icon: '◇' },
    { label: 'Autocompaixão', icon: '◇' },
    { label: 'Autocuidado', icon: '◇' },
    { label: 'Espiritualidade', icon: '◇' },
    { label: 'Reconstrução interior', icon: '◇' },
    { label: 'Esperança', icon: '◇' },
    { label: 'Relacionamentos', icon: '◇' },
    { label: 'Fortalecimento da vontade', icon: '◇' },
    { label: 'Sentido da dor', icon: '◇' },
    { label: 'Superação emocional', icon: '◇' },
  ],

  // Diferenciais (página O Livro)
  differentials: [
    {
      title: 'Não é autoajuda comum',
      description:
        'Sem fórmulas mágicas. Sem promessas de 7 passos. Uma voz autoral honesta que acompanha, não prescreve.',
    },
    {
      title: 'Olhar espiritual e humano',
      description:
        'Uma perspectiva que integra a dimensão espiritual da experiência humana sem dogmatismo ou superficialidade.',
    },
    {
      title: 'Escrito para durar',
      description:
        'Uma obra para sublinhar e reler. Não um conteúdo de rápido consumo, mas uma presença que permanece.',
    },
    {
      title: 'Voz de quem viveu',
      description:
        'Escrito por alguém com décadas de caminhada — acadêmica, espiritual e humana — que se traduz em autenticidade.',
    },
  ],

  // Para quem é indicado
  forWhom: [
    'Quem sofre com ansiedade, angústia ou dores emocionais sem nome',
    'Quem busca acolhimento e reflexão em momentos difíceis',
    'Quem valoriza espiritualidade como dimensão humana, não como religião',
    'Quem quer compreender melhor a si mesmo e suas relações',
    'Quem deseja presentear alguém que está passando por uma travessia difícil',
    'Quem aprecia leituras profundas, humanas e bem escritas',
  ],

  // Trecho da introdução (editável)
  excerpt: {
    title: 'Da Introdução',
    content: `
      Existem dores que não cabem em diagnósticos. Angústias que não encontram nome nos manuais. Momentos em que olhamos para dentro e o que vemos nos assusta — não porque sejamos frágeis, mas porque somos vivos.

      Este livro nasce de uma convicção simples: a travessia emocional é parte essencial da condição humana. E ninguém deveria atravessá-la sozinho, sem companhia, sem balizas, sem esperança.

      Não vim aqui para oferecer fórmulas. Não trago receitas nem promessas de resultados garantidos. O que trago é algo que, acredito, vale mais: um olhar honesto sobre o que dói, sobre o que confunde, sobre o que ainda pode florescer mesmo após as tempestades mais longas.

      Nos labirintos do eu, há muitas encruzilhadas. E em cada uma delas, existe a possibilidade de escolher. De respirar. De recomeçar.

      Se você está aqui, é porque algo em você ainda acredita nisso.
    `.trim(),
    attribution: 'Marco Aurélio Alvarenga Monteiro',
  },

  // Links de compra (edite para colocar os links reais)
  purchaseLinks: [
    {
      label: 'Comprar eBook (Em breve)',
      url: '#',  // ← Substitua pela URL real quando disponível
      primary: true,
    },
  ],

  // Preço (opcional, pode deixar vazio)
  price: '',

  // ISBN (opcional)
  isbn: '',

  // Capa do livro
  cover: '/images/capa-livro.jpg',

  // Detalhes técnicos
  pages: 408,
}
