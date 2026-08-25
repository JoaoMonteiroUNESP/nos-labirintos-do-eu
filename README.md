<!-- Language: English (below: Português) -->
**English** · [Português](#-português)

# Nos Labirintos do Eu — author platform

Official site for **Prof. Marco Aurélio Alvarenga Monteiro** — UNESP researcher and author of
the book _Nos Labirintos do Eu: uma jornada para superar as dores do caos interior_.

The site works as an **author platform**: it presents the book, the academic output, press
appearances and the bridge between scientific research (neuroscience, emotion and cognition,
education and technology) and the work.

🔴 **Live:** https://nos-labirintos-do-eu.vercel.app

## Tech

- [Next.js 16](https://nextjs.org/) (App Router) + React 19 · TypeScript · Tailwind CSS v4 · Framer Motion

## Run locally

Requires [Node.js](https://nodejs.org) LTS.

```bash
npm install      # first time only
npm run dev      # http://localhost:3000
npm run build && npm run start   # production build
npm run lint
```

## Where to edit content

Almost all content lives in `src/data/` — no need to touch the components:

| File | Controls |
| --- | --- |
| `src/data/book.ts` | Book data: synopsis, pillars, themes, price, purchase links |
| `src/data/author.ts` | Biography, education, research and author profiles |
| `src/data/media.ts` | Press, podcasts, videos and academic output |
| `src/data/links.ts` | Navigation, social, contact and general settings |
| `src/data/testimonials.ts` | Testimonials (currently disabled on the home page) |

## Structure

```text
src/
  app/            pages (Home, The Book, The Author, In the Media, Excerpt, Contact, Buy)
  components/     layout (Navbar/Footer), home sections, reusable UI
  data/           all editable content
public/images/    book cover and author photo
```

---

<a name="-português"></a>

# 🇧🇷 Português — Plataforma do autor

Site oficial do **Prof. Marco Aurélio Alvarenga Monteiro** — pesquisador da UNESP e autor do livro
_Nos Labirintos do Eu: uma jornada para superar as dores do caos interior_.

O site funciona como uma **plataforma do autor**: apresenta o livro, a produção acadêmica,
as aparições na imprensa e a ponte entre a pesquisa científica (neurociência, emoção e
cognição, educação e tecnologia) e a obra.

🔴 **No ar:** https://nos-labirintos-do-eu.vercel.app

## Tecnologias

- [Next.js 16](https://nextjs.org/) (App Router) + React 19 · TypeScript · Tailwind CSS v4 · Framer Motion (animações)

## Rodando localmente

Pré-requisito: [Node.js](https://nodejs.org) LTS instalado.

```bash
npm install      # apenas na primeira vez
npm run dev      # http://localhost:3000
npm run build && npm run start   # build de produção
npm run lint
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

```text
src/
  app/            páginas (Home, O Livro, O Autor, Na Mídia, Trecho, Contato, Comprar)
  components/     layout (Navbar/Footer), blocos da home, UI reutilizável
  data/           todo o conteúdo editável
public/images/    capa do livro e foto do autor
```
