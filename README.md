# Fala Tina

Gráfico de linhas interativo com as mensagens semanais do grupo **Fala Tina** no WhatsApp — construído com uma estética **Liquid Glass** inspirada em refração física da luz.

**[→ Abrir Fala Tina](https://hlucas13.github.io/FalaTinaChart/)**

---

## Funcionalidades

- **Gráfico de linhas interativo** — cada participante é uma linha colorida; passe o mouse sobre qualquer ponto para ver um tooltip com vidro líquido exibindo o nome do participante e a quantidade de mensagens naquela semana
- **5 abas de visualização** — alterne entre diferentes perspectivas dos dados:
  - **Mensagens** — gráfico de linhas com o total de mensagens por semana (visão padrão)
  - **Horas Ativas** — gráfico de linhas com as horas ativas por semana (conta horas distintas em que o participante enviou pelo menos uma mensagem)
  - **Eficiência** — scatter plot de total de mensagens (eixo Y) vs total de horas ativas (eixo X), agregado em todas as semanas por participante; pontos mais altos e à esquerda indicam maior msg/h; tooltip mostra nome, totais e msg/h médio
  - **Intensidade** — heatmap de msg/h por participante e semana; cores quentes indicam alta taxa, frias indicam baixa; coluna "Média" com a taxa geral
  - **Proporção** — barras horizontais empilhadas mostrando horas ativas (colorido) vs inativas (cinza) de um total de 168h semanais
- **Métrica msg/h** — todas as abas mostram a taxa de mensagens por hora no tooltip e nas tabelas de ranking quando ambos os dados existem
- **Tooltip por participante** — ao passar o mouse sobre o gráfico, é exibido o tooltip apenas da linha mais próxima do cursor; todas as linhas permanecem visíveis
- **Foco por clique** — clique num ponto do gráfico para fixar o destaque naquela linha (as demais ficam semi-transparentes); clique novamente no mesmo ponto ou numa área vazia para voltar a exibir todas com opacidade plena
- **Legenda clicável** — clique em uma pílula da legenda para mostrar ou ocultar um participante; passe o mouse para destacá-lo isoladamente
- **Tooltip com Liquid Glass** — o container do tooltip usa o mesmo efeito de vidro físico da dock e dos painéis
- **Exportar PNG** — clique em **Exportar** na dock para abrir o menu de exportação; escolha **Com tabelas** (gráfico + legenda + Top 10 e Top 20) ou **Sem tabelas** (só gráfico e legenda); a imagem PNG é salva com o fundo e as cores do tema atual; uma confirmação aparece brevemente após guardar
- **Temas de cor** — 4 paletas de destaque (WhatsApp verde, Oceano azul, Uva roxo, Pôr do Sol laranja), cada uma com 32 cores distintas para as linhas do gráfico ordenadas para contrastar com o fundo do tema, em modo claro e escuro
- **Modo escuro / claro** — alternância completa com transição animada Liquid Glass; segue automaticamente a preferência do sistema
- **Vidro fosco** — ativa o efeito de desfoque atrás dos painéis e da dock (Liquid Glass frosted)
- **Mostrar / ocultar legenda** — toggle nas Configurações para esconder a barra de participantes e expandir o gráfico
- **Preferências salvas** — modo escuro, vidro fosco, paleta de cor, visibilidade da legenda e estado do painel de ranking são guardados no navegador (`localStorage`) e restaurados automaticamente na próxima visita
- **Ajuda & Wiki** — painel integrado nas Configurações com instruções de uso
- **Tecla ESC** — fecha qualquer menu aberto ou o painel de ajuda sem precisar clicar
- **Notificação de exportação** — exibe uma confirmação breve após salvar a imagem PNG
- **Tabelas de ranking** — painel lateral à direita com **Top 10 Geral** (total de mensagens/horas + média semanal + msg/h) e **Top 20 por Semana** em carrossel navegável com setas; o Top 20 mostra a variação em relação à semana anterior, setas ▲/▼ de posição, badge **NEW** para entradas novas, e msg/h por linha
- **Ocultar / mostrar ranking** — botão no cabeçalho da página (visível apenas em landscape) para colapsar e expandir o painel lateral de ranking com animação suave
- **Responsivo** — funciona em telas verticais (portrait); painel de ranking é empilhado abaixo do gráfico em portrait
- **Site estático** — funciona no GitHub Pages sem servidor; 100% CDN

---

## Dock — botões disponíveis

| Botão | Visibilidade | Ação |
|-------|-------------|------|
| **Exportar** | Sempre | Abre menu com **Com tabelas** e **Sem tabelas**; salva PNG diretamente |
| **Temas** | Sempre | Abre seletor de 4 temas de cor |
| **Configurações** | Sempre | Modo escuro, vidro fosco, legenda, Ajuda |

> **Botão de painel** — no cabeçalho da página (apenas landscape) há um botão de painel duplo que colapsa/expande o painel de ranking lateral com animação suave.

---

## Como atualizar os dados

1. Abra `src/data.ts`
2. Adicione a nova semana ao array `WEEKS`:

   ```typescript
   export const WEEKS: string[] = ['W10', 'W11', 'W12', 'W13'];
   ```

3. Para cada participante em `PARTICIPANTS`, adicione o novo valor nos arrays `data` (mensagens) e `hours` (horas ativas), na mesma posição que `WEEKS`. Use `null` se o participante não enviou mensagens ou não tem dados nessa semana:

   ```typescript
   { name: 'Nay', data: [2392, 2883, 2101, 1980], hours: [74, 82, 75, 68] },
   ```

4. Para adicionar um novo participante, acrescente uma nova entrada:

   ```typescript
   { name: 'Novo Participante', data: [null, null, null, 300], hours: [null, null, null, 20] },
   ```

5. **Horas ativas**: conta-se uma hora se o participante enviou pelo menos uma mensagem dentro do intervalo XX:00 a XX:59. Ex: 2 msgs às 10h20 e 1 msg às 11h30 = 2 horas ativas (slots 10h–10h59 e 11h–11h59).

6. Execute `node build.js` para gerar o bundle:

   ```bash
   node build.js
   ```

7. Faça commit de `app.bundle.js` e push — o GitHub Pages atualiza automaticamente.

---

## Tech Stack

### Runtime (CDN — sem instalação local)

| Biblioteca                              | Versão | Propósito                                       |
| --------------------------------------- | ------ | ----------------------------------------------- |
| [Chart.js](https://www.chartjs.org/)    | 4      | Gráfico de linhas com tooltip e legenda          |
| [GSAP](https://gsap.com/)               | 3      | Animações dos toggles Liquid Glass               |

### Build & Dev tooling (local, não incluído no bundle)

| Ferramenta                                                                                    | Propósito                                                                        |
| --------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| [esbuild](https://esbuild.github.io/)                                                         | Empacota `src/main.ts` e todas as importações em um único IIFE `app.bundle.js`   |
| [TypeScript](https://www.typescriptlang.org/)                                                 | Verificação de tipos (`tsc --noEmit`); compilação feita pelo esbuild             |
| [ESLint](https://eslint.org/) + [`@typescript-eslint`](https://typescript-eslint.io/)         | Análise estática de todos os arquivos `.ts`                                      |
| [Prettier](https://prettier.io/)                                                              | Formatação de código                                                             |
| [Husky](https://typicode.github.io/husky/)                                                    | Git hooks: lint-staged no `pre-commit`, commitlint no `commit-msg`               |
| [lint-staged](https://github.com/lint-staged/lint-staged)                                     | No commit, executa ESLint + Prettier apenas nos arquivos staged                  |
| [commitlint](https://commitlint.js.org/)                                                      | Exige o formato [Conventional Commits](https://www.conventionalcommits.org/)     |

---

## Liquid Glass

A UI (dock, menus, toggles e tooltip) é construída sobre o mesmo sistema **Liquid Glass** baseado em física do [Prisma.md](https://github.com/hlucas13/Prisma.md).

A implementação segue os princípios de refração descritos em **[Liquid Glass — CSS & SVG](https://kube.io/blog/liquid-glass-css-svg/)**:

- **Refração de Snell** — cada pixel da superfície de vidro desloca o fundo com base no ângulo de refração derivado da normal à superfície (índice de refração 1,45).
- **Perfil de altura convexo** — a função `h(t) = √t` modela uma lente de vidro curva.
- **Mapas de deslocamento SVG** — pipeline `<feImage>` + `<feDisplacementMap>` aplica o deslocamento por pixel em tempo real.
- **Dois filtros** — `#glass-distortion-dock` (pill da dock) e `#glass-distortion-panel` (menus e tooltip).

---

## Estrutura do Projeto

```
FalaTina/
├── src/
│   ├── chart-themes.ts    # Definições de temas de cor (4 paletas)
│   ├── data.ts            # Dataset — semanas e participantes
│   ├── glass-distortion.ts # Motor Liquid Glass (refração física)
│   ├── globals.d.ts       # Declarações de tipos para CDN (Chart.js, GSAP)
│   └── main.ts            # Lógica principal — gráfico, dock, temas, exportação
├── app.bundle.js          # Bundle gerado (fazer commit após o build)
├── build.js               # Script de build (esbuild)
├── commitlint.config.js
├── eslint.config.js
├── index.html
├── LICENSE
├── package.json
├── README.md
├── style.css
└── tsconfig.json
```

---

## Desenvolvimento local

```bash
# Instalar dependências de build
npm install

# Verificar tipos
npm run typecheck

# Lint
npm run lint

# Build (gera app.bundle.js)
npm run build

# Abrir no navegador
open index.html
```

---

## Deploy para GitHub Pages

1. Criar o repositório `FalaTinaChart` no GitHub
2. Fazer push de todos os arquivos (incluindo `app.bundle.js`)
3. Nas configurações do repositório → Pages → Branch: `main`, pasta: `/ (root)`
4. O site fica disponível em `https://<username>.github.io/FalaTinaChart/`
