# Landing Page Jerilifetur

Vamos recriar a landing page de turismo em Jericoacoara seguindo fielmente o layout do Figma, com fotos reais do Unsplash e textos em português.

## Estrutura da página (single page, ordem do Figma)

1. **Header fixo** — logo "Jerilifetur" à esquerda, menu (Home, Tours, Sobre, Contato), botão "Login" à direita. Fundo branco translúcido sobre o hero.

2. **Hero** — foto grande de buggy na praia de Jericoacoara, com título "Descubra Jericoacoara com quem é da casa", parágrafo curto e dois botões (CTA azul "Agendar passeio" + secundário "Mensagem"). Padrão de losangos azul-claro nas laterais (textura decorativa).

3. **Tours Lado Leste** — título display, subtítulo, grade de 4 cards de passeios (Lagoa do Paraíso, Lagoa Azul, Árvore da Preguiça, Pedra Furada) com foto, estrelas, nome e descrição curta.

4. **Tours Lado Oeste** — mesma estrutura, 4 cards (Pôr do Sol / Duna do Pôr do Sol, Lagoa do Tatajuba, Dunas Móveis, Vila e Ilhas Místicas).

5. **Tipos de passeio** — linha com 3 pílulas/botões coloridos: BUGGY, QUADRI, TRANSFER, com legenda "Oferecemos passeios privativos ou compartilhados em:".

6. **Faixa azul com 2 cards horizontais grandes**:
   - Kite Trips & Downwind (foto + texto)
   - Transfer e Logística (foto + texto)
   Fundo azul com padrão losango.

7. **Por que Jerilifetur?** — título + 3 cards com foto de fundo e texto sobreposto:
   - Equipe Nativa
   - Atendimento Completo
   - Passeios Exclusivos

8. **Jericoacoara Além dos Roteiros** — banner full-width com foto da Pedra Furada e bloco de texto centralizado por cima (sobre preservação, dunas, lagoas).

9. **Pronto para Embarcar?** — seção CTA azul com mockup de celular à direita, título grande, parágrafo, e dois botões ("Agendar passeio" + "Mensagem Kite Trip").

10. **Footer** — bloco "UNIWERSOTECH" com nome em destaque, links, redes sociais e crédito.

## Estilo visual

- **Cores**: azul céu (#3FA9F5 aprox.), azul escuro para texto, branco, areia clara como fundo geral. Tokens definidos em `src/styles.css` (sem cores hardcoded nos componentes).
- **Tipografia**: fonte display marcante (estilo retrô-praia, parecida com a do Figma) para títulos via Google Fonts (ex.: "Bungee" ou "Lilita One"); Inter para corpo.
- **Texturas**: padrão de losangos sutil em fundos (SVG repetível).
- **Cards**: cantos arredondados generosos, sombras suaves, fotos com overlay quando houver texto sobreposto.
- **Responsivo**: mobile-first; grids de 4 colunas viram 2 e depois 1; hero e seções ajustam padding.

## Conteúdo

- Textos em PT-BR plausíveis para cada tour, card e seção (descrição curta, 1–2 frases).
- Estrelas de avaliação fixas nos cards de tour (visual).
- Nomes reais dos pontos turísticos de Jeri.

## Imagens

- Fotos do Unsplash via URLs diretas (buggy, praia, kitesurf, dunas, lagoas, pedra furada, pessoas viajando, mockup de celular).
- Imagens otimizadas com `loading="lazy"` exceto a hero.

## Detalhes técnicos

- Tudo em `src/routes/index.tsx` (substituindo o placeholder), com componentes auxiliares quebrados em `src/components/landing/` (Header, Hero, ToursSection, TourCard, RideTypes, KiteTransferBand, WhyUs, BeyondRoutes, ReadyCTA, Footer).
- Tailwind v4 com tokens HSL/oklch no `styles.css`; sem `style={{}}` para cores.
- Meta tags atualizadas no `__root.tsx` (title "Jerilifetur — Passeios em Jericoacoara", description em PT-BR, og:title/description).
- Fontes carregadas via `<link>` no head do root.
- Botões só visuais (sem onClick).

Após aprovação, implemento tudo de uma vez e você verá a página renderizada no preview.