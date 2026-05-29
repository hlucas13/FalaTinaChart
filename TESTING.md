# 🧪 Testes de Integridade de Dados

## Visão Geral

O sistema de testes garante que os dados de mensagens e horas ativas permaneçam sempre consistentes com as semanas definidas.

**Validação Principal:**

- ✅ Cada participante tem exatamente a mesma quantidade de valores para `data` (mensagens) e `hours` (horas)
- ✅ Essa quantidade corresponde ao número de semanas no array `WEEKS`
- ✅ Valores podem ser `null`, mas a quantidade total deve ser sempre consistente

## 📋 Uso

### Executar testes manualmente

```bash
npm test
```

Ou

```bash
node test-data.js
```

### Validação automática

O teste é executado automaticamente **antes de cada commit** via hook do Husky:

```bash
git commit -m "atualizar dados"
# → executa npm test
# → executa npm run lint
```

Se o teste falhar, o commit será bloqueado até que os dados sejam corrigidos.

### Teste completo (typecheck + lint + test)

```bash
npm run test:full
```

## 🔍 Quando Adicionar Novos Dados

Ao atualizar `src/data.ts` com novas semanas ou participantes:

1. **Adicione a semana ao array `WEEKS`:**

   ```typescript
   export const WEEKS: string[] = [
     "W11", "W12", ..., "W20", "W21"  // ← nova semana
   ];
   ```

2. **Adicione valores para cada participante:**
   - Atualize os arrays `data` e `hours` com a mesma quantidade de entradas
   - Use `null` se não houver dados para aquele participante

3. **Execute o teste:**

   ```bash
   npm test
   ```

4. **Exemplo de participante válido:**

   ```typescript
   {
     name: "João",
     data: [100, 200, 150, null, 300],    // 5 entradas
     hours: [30, 40, 35, null, 45],       // 5 entradas (mesma qtd)
   }
   ```

## ❌ Erros Comuns

### Erro: `data tem X entradas, esperado Y`

**Causa:** Um participante tem mais/menos valores no array `data` que o esperado
**Solução:** Ajuste o array `data` para ter exatamente `Y` entradas

### Erro: `data e hours têm tamanhos diferentes`

**Causa:** Um participante tem quantidade diferente de valores em `data` e `hours`
**Solução:** Sincronize os arrays para terem a mesma quantidade

## 📊 Estrutura dos Dados

```typescript
export interface Participant {
  name: string;
  data: (number | null)[]; // Mensagens por semana
  hours: (number | null)[]; // Horas ativas por semana
}
```

## 🔧 Arquivos Envolvidos

- [`src/data.ts`](../src/data.ts) - Dados dos participantes
- [`test-data.js`](../test-data.js) - Script de validação
- [`package.json`](../package.json) - Scripts npm
- [`.husky/pre-commit`](../.husky/pre-commit) - Hook de pre-commit

## 📝 Histórico

- **v1.0** - Adicionado sistema de validação com 10 semanas (W11-W20)
- **v1.0** - Suporte a 45 participantes
