const { runSchema, runQuery } = require('./utils/executeQuery');

describe('05 - Escreva uma query que retorna o nome, sobrenome, e-mail, data de registro da pessoa, data de entrada e data de saída de pessoas que fizeram check-in entre Agosto e Outubro de 2023 e ainda estão hospedadas', function () {
  it('Deve retornar os dados corretos', async function () {
    await runSchema();
    await runQuery('../../src/01_challenge.sql');
    const [result] =  await runQuery('../../src/05_challenge.sql');
    expect(result).toStrictEqual([
      { 'Nome': 'Demetrius', 'Sobrenome': 'Corkery', 'E-mail de Contato': 'nloiterton8@email.com', 'Data de Registro': new Date('2023-08-03'), 'Data de Entrada': new Date('2023-10-03'), 'Data de Saída': null },
    ]);
  });
});