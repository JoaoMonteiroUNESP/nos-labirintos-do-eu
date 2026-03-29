// =============================================================================
// LINKS E CONFIGURAÇÕES GERAIS DO SITE
// Edite este arquivo para atualizar links de compra, redes sociais etc.
// =============================================================================

export const siteConfig = {
  siteName: 'Nos Labirintos do Eu',
  siteUrl: 'https://noslabirintasdoeu.com.br', // ← Atualize com o domínio real
  siteDescription:
    'Uma jornada para superar as dores do caos interior. Livro do Prof. Marco Aurélio Alvarenga Monteiro — obra de reflexão, espiritualidade e reconexão com o essencial.',
  ogImage: '/og-image.jpg',
}

export const navLinks = [
  { label: 'O Livro', href: '/o-livro' },
  { label: 'Sobre o Autor', href: '/sobre-o-autor' },
  { label: 'Leia um Trecho', href: '/leia-um-trecho' },
  { label: 'Contato', href: '/contato' },
]

export const purchaseLinks = {
  amazon: '#',           // ← URL Amazon real
  shopee: '#',           // ← URL Shopee real (se houver)
  site: '#',             // ← URL de venda direta (se houver)
  others: '#',           // ← Outras livrarias
}

export const socialLinks = {
  instagram: 'https://instagram.com/prof.marcoaurelio',        // ← Perfil Instagram real
  facebook: '#',         // ← Perfil Facebook real
  youtube: '#',          // ← Canal YouTube (se houver)
  lattes: '#',           // ← Currículo Lattes
  linkedin: '#',         // ← LinkedIn real
}

export const contactInfo = {
  email: 'marco.monteiro@unesp.br',  // ← E-mail real
  pressEmail: 'marco.monteiro@unesp.br',  // ← E-mail para imprensa
  lecturesEmail: 'marco.monteiro@unesp.br',  // ← Para convites de palestras
}

export const videoConfig = {
  // Substitua com o ID do vídeo do YouTube
  // Exemplo: se URL for https://youtube.com/watch?v=ABC123, coloque 'ABC123'
  youtubeId: '',         // ← ID do YouTube
  youtubeUrl: '',        // ← URL completa do YouTube
}
