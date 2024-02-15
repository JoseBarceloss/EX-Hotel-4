const { runSchema, runQuery } = require('./utils/executeQuery');

describe('03 - Escreva uma query que retorna o nome, id do hotel, data de entrada e data de saída de pessoas hospedadas nos quartos dos hotéis, ou seja, que estão sem a data de check-out ou com o quarto indisponível no hotel', function () {
  it('Deve retornar os dados corretos', async function () {
    await runSchema();
    await runQuery('../../src/01_challenge.sql');
    const [result] =  await runQuery('../../src/03_challenge.sql');
    expect(result).toStrictEqual([
      { 'Nome': 'Terry', 'Id do Hotel': 1, 'Data de Entrada': new Date('2023-01-01'), 'Data de Saída': null },
      { 'Nome': 'Demetrius', 'Id do Hotel': 1, 'Data de Entrada': new Date('2023-10-03'), 'Data de Saída': null },
      { 'Nome': 'Miles', 'Id do Hotel': 1, 'Data de Entrada': new Date('2023-05-10'), 'Data de Saída': null },
      { 'Nome': 'Sheldon', 'Id do Hotel': 1, 'Data de Entrada': new Date('2023-05-10'), 'Data de Saída': null },
    ]);
  });
});