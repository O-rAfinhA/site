# Deploy no AWS Amplify

## O que ja ficou configurado

- `next.config.mjs` com `output: "standalone"`
- `amplify.yml` com build padrao do Next.js
- `.env.example` com as variaveis esperadas pelo site

## Como publicar

1. Suba este projeto para um repositorio Git conectado ao Amplify.
2. No AWS Amplify, crie um app usando esse repositorio.
3. Confirme que o Amplify detectou o arquivo `amplify.yml`.
4. Configure as variaveis de ambiente abaixo no painel do Amplify.
5. Rode o primeiro deploy.

## Variaveis de ambiente

Obrigatorias:

- `NEXT_PUBLIC_SITE_URL`: URL publica do site, por exemplo `https://www.sisteq.com.br`
- `NEXT_PUBLIC_APP_URL`: URL do app principal, por exemplo `https://app.sisteq.com.br`

Opcionais, caso use Clerk no proprio site:

- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
- `NEXT_PUBLIC_CLERK_SIGN_IN_PATH`
- `NEXT_PUBLIC_CLERK_SIGN_UP_PATH`
- `NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL`
- `NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL`

## Comportamento sem Clerk

Se `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` nao for definido:

- o layout nao carrega `ClerkProvider`
- o botao de login continua visivel
- `/login` redireciona para `NEXT_PUBLIC_APP_URL + NEXT_PUBLIC_CLERK_SIGN_IN_PATH`
- `/cadastro` redireciona para `NEXT_PUBLIC_APP_URL + NEXT_PUBLIC_CLERK_SIGN_UP_PATH`

## Dominio

Depois do deploy:

1. Adicione o dominio customizado no Amplify
2. Aponte DNS para o Amplify
3. Atualize `NEXT_PUBLIC_SITE_URL` para o dominio final
4. Rode novo deploy para refletir metadata, sitemap e robots

## Observacao

O projeto usa `next/image` com `images.unoptimized = true`, o que evita depender do otimizador de imagem do runtime e simplifica o deploy no Amplify.
