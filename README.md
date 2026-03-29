# Fala Tina

Gráfico de linhas interativo com as mensagens semanais do grupo **Fala Tina** no WhatsApp — construído com uma estética **Liquid Glass** inspirada em refração física da luz.

**[→ Abrir Fala Tina](https://hlucas13.github.io/FalaTinaChart/)**

---

## Funcionalidades

- **Gráfico de linhas interativo** — cada participante é uma linha colorida; passe o mouse sobre qualquer ponto para ver um tooltip com vidro líquido exibindo o nome do participante e a quantidade de mensagens naquela semana
- **Destaque de linha** — ao passar o mouse sobre uma linha, as demais ficam esmaecidas; ao sair, todas voltam ao normal
- **Legenda clicável** — clique em uma pílula da legenda para mostrar ou ocultar um participante; passe o mouse para destacá-lo isoladamente
- **Tooltip com Liquid Glass** — o container do tooltip usa o mesmo efeito de vidro físico da dock e dos painéis
- **Exportar PNG** — gera uma imagem com o gráfico e a legenda de participantes abaixo, usando o fundo do tema atual
- **Exportar / Imprimir PDF** — abre a caixa de diálogo de impressão nativa do navegador com a legenda inclusa abaixo do gráfico
- **Temas de cor** — 4 paletas de destaque (WhatsApp verde, Oceano azul, Uva roxo, Pôr do Sol laranja), cada uma com variante clara e escura
- **Modo escuro / claro** — alternância completa com transição animada Liquid Glass; segue automaticamente a preferência do sistema
- **Vidro fosco** — ativa o efeito de desfoque atrás dos painéis e da dock (Liquid Glass frosted)
- **Mostrar / ocultar legenda** — toggle nas Configurações para esconder a barra de participantes e expandir o gráfico
- **Preferências salvas** — modo escuro, vidro fosco, paleta de cor e visibilidade da legenda são guardados no navegador (`localStorage`) e restaurados automaticamente na próxima visita
- **Ajuda & Wiki** — painel integrado nas Configurações com instruções de uso
- **Tecla ESC** — fecha qualquer menu aberto ou o painel de ajuda sem precisar clicar
- **Notificação de exportação** — exibe uma confirmação breve após salvar a imagem PNG
- **Responsivo** — funciona em telas verticais (portrait); botão "Mais" na dock agrupa as ações de tema e exportação
- **Site estático** — funciona no GitHub Pages sem servidor; 100% CDN

---

## Dock — botões disponíveis

| Botão | Visibilidade | Ação |
|-------|-------------|------|
| **Exportar** | Sempre | Abre submenu com PNG e PDF |
| **Temas** | Landscape | Abre seletor de 4 temas de cor |
| **Mais** | Portrait | Hamburger com Temas + Exportar |
| **Configurações** | Sempre | Modo escuro, vidro fosco, legenda, Ajuda |

---

## Como atualizar os dados

1. Abra `src/data.ts`
2. Adicione a nova semana ao array `WEEKS`:

   ```typescript
   export const WEEKS: string[] = ['W10', 'W11', 'W12', 'W13'];
   ```

3. Para cada participante em `PARTICIPANTS`, adicione o novo valor no array `data` (mesma posição que `WEEKS`). Use `null` se o participante não enviou mensagens nessa semana:

   ```typescript
   { name: 'Nay', color: '#f87171', data: [2392, 2883, 2101, 1980] },
   ```

4. Para adicionar um novo participante, acrescente uma nova entrada:

   ```typescript
   { name: 'Novo Participante', color: '#hexcor', data: [null, null, null, 300] },
   ```

5. Execute `node build.js` para gerar o bundle:

   ```bash
   node build.js
   ```

6. Faça commit de `app.bundle.js` e push — o GitHub Pages atualiza automaticamente.

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
