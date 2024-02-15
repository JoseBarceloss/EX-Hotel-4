const { runSchema, runQuery } = require('./utils/executeQuery');

describe('04 - Escreva uma query que retorna o nome, sobrenome, e-mail, data de registro da pessoa, data de entrada e data de saída de pessoas que fizeram check-in entre Agosto e Outubro de 2023', function () {
  it('Deve retornar os dados corretos', async function () {
    await runSchema();
    await runQuery('../../src/01_challenge.sql');
    const [result] =  await runQuery('../../src/04_challenge.sql');
    expect(result).toStrictEqual([
      { 'Nome': 'Demetrius', 'Sobrenome': 'Corkery', 'E-mail de Contato': 'nloiterton8@email.com', 'Data de Registro': new Date('2023-08-03'), 'Data de Entrada': new Date('2023-10-03'), 'Data de Saída': null },
      { 'Nome': 'Oleta', 'Sobrenome': 'Schultz', 'E-mail de Contato': 'dpettegre6@email.com', 'Data de Registro': new Date('2023-09-25'), 'Data de Entrada': new Date('2023-09-25'), 'Data de Saída': new Date('2023-09-30') },
      { 'Nome': 'Demetrius', 'Sobrenome': 'Corkery', 'E-mail de Contato': 'nloiterton8@email.com', 'Data de Registro': new Date('2023-08-03'), 'Data de Entrada': new Date('2023-08-03'), 'Data de Saída': new Date('2023-08-10') },
    ]);
  });
});