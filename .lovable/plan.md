# Plano: Hero responsivo e bem ajustado

## Problema atual

Hoje os 3 elementos do Hero usam estratégias diferentes e desconectadas:

- **Fundo (praia)**: `object-cover` — escala bem.
- **Placas**: `h-[95%]` da seção (altura fixa muito grande), escondidas em mobile (`hidden sm:block`).
- **Buggy**: `h-[70%–82%]` da seção + `max-w-[55%]` — a altura da seção é fixa em px (`min-h-[640/720/820px]`), então o buggy fica gigante em telas estreitas (ocupa mais de meia tela) e minúsculo em telas largas. Em larguras intermediárias (~1000–1200px, como a viewport atual de 1092px) ele "corta" a placa e invade o card.

Resultado: a composição que combina bem em uma largura quebra nas outras.

## Solução

Tornar o Hero **proporcional à largura** (não a uma altura px fixa) e dimensionar cada peça em `vw`/`%` da própria largura, com clamps mínimos/máximos. Assim os 3 elementos crescem/encolhem juntos mantendo a mesma composição do print.

### 1. Container do Hero

- Trocar `min-h-[640/720/820px]` por uma altura proporcional: `h-[min(820px,calc(100vw*0.62))]` com `min-h-[560px]`.
- Isso garante que a seção tenha sempre a mesma proporção visual, evitando "fundo gigante + objetos pequenos".

### 2. Placas (esquerda)

- Mostrar a partir de `md` (≥768px) em vez de `sm` — em telas pequenas elas competem demais com o card.
- Tamanho proporcional à largura: `w-[clamp(180px,22vw,360px)]`, `h-auto`, ancorado em `left-0 bottom-0` (alinhado ao chão como no print, não centralizado verticalmente).
- Em mobile (<768px): ocultas (sem espaço útil).

### 3. Buggy (direita, na areia)

- Tamanho proporcional à **largura** da seção, não à altura: `w-[clamp(260px,38vw,640px)]`, `h-auto`.
- Ancorado em `right-[2%] bottom-[4%]` para "pousar" na faixa de areia da foto (não colado no canto).
- Em mobile pequeno (<480px): reduzir para `w-[60vw]` e mover ligeiramente pra fora (`right-[-4%]`) para não cobrir o card.

### 4. Card de conteúdo

- Largura `max-w-sm` em mobile, `max-w-md` em md+.
- Posicionamento: centralizado horizontalmente em mobile (sem placas atrás); a partir de `md`, deslocado para a faixa entre placas e buggy usando `ml-[clamp(200px,24vw,380px)]` — alinhado ao mesmo sistema de medida das placas, então nunca se sobrepõe a elas.
- Padding vertical do wrapper ajustado para acompanhar a nova altura proporcional.

### 5. Breakpoints unificados

Toda a composição passa a usar **três faixas claras**, todas baseadas na mesma lógica:

| Faixa | Largura | Comportamento |
|---|---|---|
| Mobile | <768px | Só fundo + card centralizado + buggy menor no canto |
| Tablet | 768–1279px | Placas + buggy + card, todos em escala `vw` |
| Desktop | ≥1280px | Mesma composição, com clamps no máximo |

## Arquivos alterados

- `src/components/landing/Hero.tsx` — reescrita das classes dos 3 `<img>` e do wrapper do card. Sem novos arquivos, sem novas dependências.

## Verificação

Após implementar, testarei nos viewports 375, 768, 1024, 1092 (atual do usuário), 1366 e 1920 via screenshot para confirmar que a composição (placas à esquerda no chão, card no meio, buggy na areia à direita) se mantém idêntica à do print em todas as larguras.
