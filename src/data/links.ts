// =============================================================================
// LINKS E CONFIGURAÇÕES GERAIS DO SITE
// Edite este arquivo para atualizar links de compra, redes sociais etc.
// =============================================================================

export const siteConfig = {
  siteName: 'Marco Aurélio Alvarenga Monteiro',
  siteTagline: 'Nos Labirintos do Eu',
  siteUrl: 'https://nos-labirintos-do-eu.vercel.app', // ← Troque pelo domínio próprio quando registrar
  siteDescription:
    'Plataforma do Prof. Marco Aurélio Alvarenga Monteiro — pesquisador da UNESP e autor de "Nos Labirintos do Eu". Ciência, educação, neurociência das emoções e a travessia do autoconhecimento.',
  ogImage: '/og-image.jpg',
}

// Navegação principal — estruturada como plataforma do autor
export const navLinks = [
  { label: 'O Livro', href: '/o-livro' },
  { label: 'O Autor', href: '/sobre-o-autor' },
  { label: 'Na Mídia', href: '/midia' },
  { label: 'Leia um Trecho', href: '/leia-um-trecho' },
  { label: 'Contato', href: '/contato' },
]

// Links de compra reais
export const purchaseLinks = {
  amazon:
    'https://www.amazon.com.br/Nos-Labirintos-Eu-jornada-interior-ebook/dp/B0H12YBKKC',
  kindleUnlimited:
    'https://www.amazon.com.br/Nos-Labirintos-Eu-jornada-interior-ebook/dp/B0H12YBKKC',
  shopee: '#',
  site: '#',
  others: '#',
}

// Redes sociais e perfis acadêmicos
export const socialLinks = {
  instagram: 'https://instagram.com/prof.marcoaurelio',
  facebook: '#',
  youtube: 'https://www.youtube.com/playlist?list=PLsBgJPZvzB9CXbtb4BjbQzyMbqSEZKw8g',
  lattes: 'http://lattes.cnpq.br/0143498612781228',
  orcid: 'https://orcid.org/0000-0002-4426-1638',
  scholar: 'https://scholar.google.com/citations?user=MoU1HagAAAAJ&hl=pt-BR',
  scielo: 'https://search.scielo.org/?lang=pt&q=au:MONTEIRO,+MARCO+AURELIO+ALVARENGA',
  linkedin: '#',
}

export const contactInfo = {
  email: 'marco.monteiro@unesp.br', // ← Confirme o e-mail real
  pressEmail: 'marco.monteiro@unesp.br', // ← E-mail para imprensa
  lecturesEmail: 'marco.monteiro@unesp.br', // ← Para convites de palestras
}

export const videoConfig = {
  // Playlist do YouTube "NA FEG POD"
  playlistId: 'PLsBgJPZvzB9CXbtb4BjbQzyMbqSEZKw8g',
  playlistUrl:
    'https://www.youtube.com/playlist?list=PLsBgJPZvzB9CXbtb4BjbQzyMbqSEZKw8g',
  // Substitua com o ID de um vídeo específico para destaque (opcional)
  youtubeId: '',
  youtubeUrl: '',
}
