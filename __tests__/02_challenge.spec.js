const { runSchema, runQuery } = require('./utils/executeQuery');

describe('02 - Escreva uma query que retorna o nome, sobrenome, valor da diária e id do hotel de todas as pessoas hospedadas ou que já se hospedaram nos quartos dos hotéis', function () {
  it('Deve retornar os dados corretos', async function () {
    await runSchema();
    await runQuery('../../src/01_challenge.sql');
    const [result] =  await runQuery('../../src/02_challenge.sql');
    expect(result).toStrictEqual([
      { 'Nome': 'Terry', 'Sobrenome': 'Medhurst', 'Diária': 120.35, 'Id do Hotel': 1 },
      { 'Nome': 'Demetrius', 'Sobrenome': 'Corkery', 'Diária': 329.99, 'Id do Hotel': 1 },
      { 'Nome': 'Miles', 'Sobrenome': 'Hills', 'Diária': 929.99, 'Id do Hotel': 1 },
      { 'Nome': 'Sheldon', 'Sobrenome': 'Hills', 'Diária': 929.99, 'Id do Hotel': 1 },
      { 'Nome': 'Oleta', 'Sobrenome': 'Schultz', 'Diária': 201.62, 'Id do Hotel': 2 },
      { 'Nome': 'Demetrius', 'Sobrenome': 'Corkery', 'Diária': 118.01, 'Id do Hotel': 4 },
    ]);
  });
});
    