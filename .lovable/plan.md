# Plano: Hero idêntico ao print

## Diferenças vs print

1. Card está centralizado verticalmente — no print fica **no topo, colado ao header**.
2. Botões estão ancorados no rodapé da seção — no print ficam **logo abaixo do card**, agrupados com ele.
3. Seção tem cantos retos — no print tem **cantos arredondados embaixo** com pequena margem nas laterais.
4. Placas aparecem demais — no print só **espiam na borda esquerda**.

## Mudanças em `src/components/landing/Hero.tsx`

- **Wrapper da section**: adicionar padding lateral pequeno (`px-2 sm:px-4`) e mover `overflow-hidden` + `rounded-b-[2.5rem]` para o div interno, para criar os cantos arredondados embaixo.
- **Card + botões**: agrupar em um único container posicionado em `absolute left-0 top-0` com `pt-24` (logo abaixo do header), `flex-col gap-4`. Card em cima, botões logo abaixo.
- **Placas**: reduzir largura para `clamp(150px,16vw,260px)` e mover para `left-[-7%]` para só espiar.
- **Buggy**: manter tamanho atual mas ancorar em `bottom-0` (sem offset negativo) para pousar limpo na areia.
- **Remover**: o bloco de botões antigo posicionado no rodapé da seção.

Sem novas dependências, sem novos arquivos.
