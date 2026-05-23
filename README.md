# Viana Archives Blog

Frontend publico do blog Viana Archives. Este projeto renderiza a home com a lista de artigos e as paginas individuais de posts publicados no Sanity.

O conteudo e administrado no repositorio irmao `viana-sanity-blog`, que contem o Sanity Studio e o schema `blogPost`.

## Stack

- Next.js 15 com App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Sanity como CMS
- Portable Text para renderizacao de conteudo rico
- `react-syntax-highlighter` para blocos de codigo
- `react-icons` para icones da interface

## Estrutura

```txt
src/
  app/
    artigos/[slug]/
      loading.tsx
      page.tsx
    globals.css
    layout.tsx
    Main.tsx
    page.tsx
    providers.tsx
  components/
    CategoryFlag/
    CodeBlock.tsx/
    Header/
    Logo/
    PostCard/
    PostContent/
    PostGrid/
    Skeleton/
  lib/
    sanityClient.ts
  types/
    post-content.d.ts
    post.d.ts
  utils/
    formatOgImage.ts
    sanity/
      getPostBySlug.ts
      getPosts.ts
      sanityImageBuilder.ts
      sanityImageSource.ts
```

## Principais arquivos

- `src/app/page.tsx`: entrada da home.
- `src/app/Main.tsx`: monta o layout principal da home com `Header` e grid de posts.
- `src/app/artigos/[slug]/page.tsx`: pagina dinamica de artigo, metadata, imagem principal, autor, datas e conteudo.
- `src/components/PostGrid/index.tsx`: busca os posts no Sanity e renderiza os cards.
- `src/components/PostCard/index.tsx`: card usado na home.
- `src/components/PostContent/index.tsx`: renderizador do Portable Text.
- `src/components/CodeBlock.tsx/index.tsx`: bloco de codigo com botao de copiar.
- `src/lib/sanityClient.ts`: configuracao do client Sanity.
- `src/utils/sanity/getPosts.ts`: query da listagem de artigos.
- `src/utils/sanity/getPostBySlug.ts`: query de um artigo por slug.
- `src/utils/formatOgImage.ts`: formata imagem Open Graph a partir do asset Sanity.

## Integracao com Sanity

O client Sanity esta configurado em `src/lib/sanityClient.ts`:

```ts
projectId: 'juuo6rlg'
dataset: 'production'
apiVersion: '2025-08-21'
useCdn: false
```

Este projeto espera documentos do tipo `blogPost`, definidos no Studio do repositorio `viana-sanity-blog`.

Campos consumidos na listagem:

- `postTitle`
- `postDescription`
- `slug`
- `thumbnailImage`
- `postCategory`
- `authorName`
- `readingTime`

Campos consumidos na pagina do artigo:

- `postTitle`
- `postDescription`
- `postDate`
- `updatedPostDate`
- `postCategory`
- `authorName`
- `authorImage`
- `readingTime`
- `thumbnailImage`
- `references`
- `postContent`

## Imagens

As imagens vem do CDN do Sanity. O dominio `cdn.sanity.io` esta liberado em `next.config.ts`:

```ts
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'cdn.sanity.io',
      pathname: '/**',
    },
  ],
}
```

Os helpers de imagem ficam em:

- `src/utils/sanity/sanityImageBuilder.ts`
- `src/utils/sanity/sanityImageSource.ts`
- `src/utils/formatOgImage.ts`

## Scripts

```bash
npm run dev
```

Inicia o servidor local do Next com Turbopack.

```bash
npm run build
```

Gera a build de producao.

```bash
npm run start
```

Executa a build de producao localmente. Rode `npm run build` antes.

```bash
npm run lint
```

Executa o ESLint.

## Como rodar localmente

Instale as dependencias:

```bash
npm install
```

Inicie o frontend:

```bash
npm run dev
```

Acesse:

```txt
http://localhost:3000
```

Para editar conteudo, rode tambem o Sanity Studio no repositorio `viana-sanity-blog`.

## Fluxo de conteudo

1. Crie ou edite posts no Sanity Studio.
2. Publique o documento no dataset `production`.
3. O frontend consulta o Sanity pelas queries em `src/utils/sanity`.
4. A home revalida a listagem com `revalidate: 60`.
5. A pagina do artigo usa o `slug.current` para buscar o post.

## Deploy

Este projeto pode ser publicado na Vercel como uma aplicacao Next.js.

Antes do deploy, revise:

- dominio final usado nos metadados Open Graph e Twitter;
- imagens de fallback de compartilhamento;
- consistencia entre campos do schema Sanity e campos usados no frontend;
- se o Studio permite CORS para o dominio de producao, quando necessario.

## Pontos de manutencao

- O schema do Sanity deve continuar alinhado com `src/types/post.d.ts`.
- Se novos blocos forem adicionados ao Portable Text, eles tambem precisam ser tratados em `PostContent`.
- Se novos campos forem adicionados ao Studio, atualize as queries GROQ e os tipos TypeScript.
- Evite manter `package-lock.json` e `yarn.lock` ao mesmo tempo se o projeto padronizar apenas um gerenciador de pacotes.

## Repositorio relacionado

- `viana-sanity-blog`: Sanity Studio, schema dos posts e ferramentas de publicacao de conteudo.
