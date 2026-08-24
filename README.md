# Nos Labirintos do Eu — Plataforma do autor

Site oficial do **Prof. Marco Aurélio Alvarenga Monteiro** — pesquisador da UNESP e autor do livro
_Nos Labirintos do Eu: uma jornada para superar as dores do caos interior_.

O site funciona como uma **plataforma do autor**: apresenta o livro, a produção acadêmica,
as aparições na imprensa e a ponte entre a pesquisa científica (neurociência, emoção e
cognição, educação e tecnologia) e a obra.

## Tecnologias

- [Next.js 16](https://nextjs.org/) (App Router) + React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion (animações)

## Rodando localmente

Pré-requisito: [Node.js](https://nodejs.org) LTS instalado.

```bash
npm install      # apenas na primeira vez
npm run dev      # sobe o servidor em http://localhost:3000
```

Outros comandos:

```bash
npm run build    # gera o build de produção
npm run start    # roda o build de produção localmente
npm run lint     # verifica o código com o ESLint
```

## Onde editar o conteúdo

Quase todo o conteúdo do site é centralizado em `src/data/` — não é preciso mexer nos componentes:

| Arquivo | O que controla |
| --- | --- |
| `src/data/book.ts` | Dados do livro: sinopse, pilares, temas, preço, links de compra |
| `src/data/author.ts` | Biografia, formação, pesquisa e perfis do autor |
| `src/data/media.ts` | Imprensa, podcasts, vídeos e produção acadêmica |
| `src/data/links.ts` | Navegação, redes sociais, contato e configurações gerais |
| `src/data/testimonials.ts` | Depoimentos (atualmente desativados na home) |

## Estrutura

```
src/
  app/            → páginas (Home, O Livro, O Autor, Na Mídia, Trecho, Contato, Comprar)
  components/
    layout/       → Navbar e Footer
    sections/     → blocos da home
    ui/           → componentes reutilizáveis (botões, títulos, capa)
  data/           → todo o conteúdo editável
public/images/    → capa do livro e foto do autor
```
