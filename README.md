# KZ — Landing Page (Next.js)

Landing page de Kayo Zuzarte, assessor de investimentos, pronta para deploy na Vercel.

## Rodar localmente

```bash
npm install
npm run dev
```

Acesse http://localhost:3000

## Deploy na Vercel

1. Suba este repositório para o GitHub (ou GitLab/Bitbucket).
2. Em https://vercel.com, clique em "Add New… → Project" e importe o repositório.
3. A Vercel detecta o Next.js automaticamente — não é preciso configurar nada.
4. Clique em "Deploy". Pronto.

Ou via CLI:

```bash
npm i -g vercel
vercel
```

## O que já está pronto

- **Responsivo**: breakpoint em 820px (mobile empilha hero, seções e grids).
- **SEO básico**: `app/layout.js` define title/description/Open Graph/robots; `app/robots.js` e `app/sitemap.js` geram `robots.txt` e `sitemap.xml` automaticamente.
- **Formulário em 3 etapas** (Você → Perfil → Enviar) que, ao final, abre o WhatsApp do Kayo (`5519988303000`) com uma mensagem pré-preenchida com as respostas.
- **Botão flutuante** "Falar no WhatsApp".

## Antes de publicar, ajuste:

1. **Fotos**: o código já espera `public/hero.jpg` e `public/sobre.jpg` — basta colocar essas duas fotos dentro da pasta `public/` (mesmo nome de arquivo).
2. **Domínio real**: troque `SEU-DOMINIO.com` em `app/layout.js`, `app/robots.js` e `app/sitemap.js` pelo domínio definitivo.
3. **Número de WhatsApp**: já configurado como `5519988303000` (constante `WHATSAPP_NUMBER` em `app/page.js`) — altere se necessário.
4. **Favicon**: adicione um `app/icon.png` (ou `.ico`) — o Next.js o usa automaticamente.

## Estrutura

```
app/
  layout.js      # metadata, fontes (Playfair Display + Inter)
  page.js        # página inteira (hero, método, para quem, sobre, formulário)
  globals.css    # todos os estilos e media queries
  robots.js      # robots.txt dinâmico
  sitemap.js     # sitemap.xml dinâmico
```
