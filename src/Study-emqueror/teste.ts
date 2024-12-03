import { prompt } from 'enquirer';
import chalk from 'chalk';

async function teste() {
  const resposta = await prompt({
    type: 'input',
    name: 'nome',
    message: chalk.red('Qual é o seu nome?')
  });

    const nome = (resposta as { nome: string }).nome;
  console.log(`Olá, ${nome}!`);
}

teste();
