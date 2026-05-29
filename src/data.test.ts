/**
 * Validação de integridade dos dados
 * Garante que:
 * - Cada participante tem a mesma quantidade de semanas em data[] e hours[]
 * - A quantidade de semanas corresponde ao array WEEKS
 */

import { PARTICIPANTS, WEEKS } from "./data";

interface TestResult {
  passed: boolean;
  message: string;
  errors: string[];
}

function validateDataIntegrity(): TestResult {
  const errors: string[] = [];
  const expectedLength = WEEKS.length;

  console.log(`📊 Validando integridade dos dados...`);
  console.log(
    `   Semanas esperadas: ${expectedLength} (${WEEKS.join(", ")})\n`,
  );

  // Validar cada participante
  PARTICIPANTS.forEach((participant) => {
    const dataLength = participant.data.length;
    const hoursLength = participant.hours.length;

    if (dataLength !== expectedLength) {
      errors.push(
        `❌ "${participant.name}": data tem ${dataLength} entradas, esperado ${expectedLength}`,
      );
    }

    if (hoursLength !== expectedLength) {
      errors.push(
        `❌ "${participant.name}": hours tem ${hoursLength} entradas, esperado ${expectedLength}`,
      );
    }

    if (dataLength !== hoursLength) {
      errors.push(
        `❌ "${participant.name}": data e hours têm tamanhos diferentes (${dataLength} vs ${hoursLength})`,
      );
    }
  });

  const passed = errors.length === 0;

  return {
    passed,
    message: passed
      ? `✅ Todos os ${PARTICIPANTS.length} participantes estão validados!`
      : `❌ ${errors.length} erro(s) encontrado(s)`,
    errors,
  };
}

function printResults(result: TestResult): void {
  console.log(result.message);

  if (result.errors.length > 0) {
    console.log("\nDetalhes dos erros:");
    result.errors.forEach((error) => console.log(`  ${error}`));
    console.log("\n" + "=".repeat(60));
    process.exit(1);
  }

  console.log(`✨ Total de participantes validados: ${PARTICIPANTS.length}\n`);
}

// Executar validação
const result = validateDataIntegrity();
printResults(result);
