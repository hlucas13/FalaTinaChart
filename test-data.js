#!/usr/bin/env node

/**
 * Script de validação de integridade dos dados
 * Verifica se cada participante tem a mesma quantidade de valores para
 * mensagens e horas que a quantidade de semanas definidas
 *
 * Uso: node test-data.js
 */

const fs = require('fs');
const path = require('path');

function parseDataFile() {
    const dataFilePath = path.join(__dirname, 'src', 'data.ts');
    const content = fs.readFileSync(dataFilePath, 'utf-8');

    // Extrair array WEEKS (suporta single e double quotes)
    const weeksMatch = content.match(
        /export const WEEKS:\s*string\[\]\s*=\s*\[([\s\S]*?)\];/,
    );
    if (!weeksMatch) {
        throw new Error('Não foi possível extrair o array WEEKS');
    }

    const weeksString = weeksMatch[1];
    const weeks = weeksString
        .match(/['"]W\d+['"]/g)
        .map((w) => w.replace(/['"`]/g, ''));

    // Extrair participantes e validar (suporta single e double quotes)
    const participants = [];
    const participantRegex =
        /{\s*name:\s*['"]([^'"]+)['"]\s*,\s*data:\s*\[([\s\S]*?)\]\s*,\s*hours:\s*\[([\s\S]*?)\]\s*,?\s*}/g;

    let match;
    while ((match = participantRegex.exec(content))) {
        const name = match[1];
        const dataString = match[2].replace(/\s/g, '');
        const hoursString = match[3].replace(/\s/g, '');

        // Contar elementos (null, números, etc)
        const dataCount = dataString.split(',').filter((x) => x).length;
        const hoursCount = hoursString.split(',').filter((x) => x).length;

        participants.push({
            name,
            dataLength: dataCount,
            hoursLength: hoursCount,
        });
    }

    return { weeks, participants };
}

function validateData() {
    try {
        const { weeks, participants } = parseDataFile();
        const errors = [];
        const expectedLength = weeks.length;

        console.log(`\n📊 Validando integridade dos dados...`);
        console.log(
            `   Semanas esperadas: ${expectedLength} (${weeks.join(', ')})\n`,
        );

        // Validar cada participante
        participants.forEach((participant) => {
            const { name, dataLength, hoursLength } = participant;

            if (dataLength !== expectedLength) {
                errors.push(
                    `❌ "${name}": data tem ${dataLength} entradas, esperado ${expectedLength}`,
                );
            }

            if (hoursLength !== expectedLength) {
                errors.push(
                    `❌ "${name}": hours tem ${hoursLength} entradas, esperado ${expectedLength}`,
                );
            }

            if (dataLength !== hoursLength) {
                errors.push(
                    `❌ "${name}": data e hours têm tamanhos diferentes (${dataLength} vs ${hoursLength})`,
                );
            }
        });

        if (errors.length === 0) {
            console.log(
                `✅ Todos os ${participants.length} participantes estão validados!`,
            );
            console.log(`✨ Total de semanas: ${expectedLength}\n`);
            process.exit(0);
        } else {
            console.log(`❌ ${errors.length} erro(s) encontrado(s)\n`);
            console.log('Detalhes dos erros:');
            errors.forEach((error) => console.log(`  ${error}`));
            console.log('\n' + '='.repeat(60) + '\n');
            process.exit(1);
        }
    } catch (error) {
        console.error('❌ Erro ao validar dados:', error.message);
        process.exit(1);
    }
}

validateData();
