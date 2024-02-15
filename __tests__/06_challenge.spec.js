const { runSchema, runQuery } = require('./utils/executeQuery');

describe('06 - Escreva uma query que retorna o nome da pessoa hospede, nome do hotel, valor da diária, número de estrelas, data de registro da pessoas que já se hospedaram algum dia em quartos de hotéis com três ou mais estrelas, onde estes quartos tenham diária menor ou igual 500.00 e hoje os quartos estão disponíveis', function () {
  it('Deve retornar os dados corretos', async function () {
    await runSchema();
    await runQuery('../../src/01_challenge.sql');
    const [result] =  await runQuery('../../src/06_challenge.sql');
    expect(result).toStrictEqual([
      { 'Hospede': 'Oleta', 'Hotel': 'Dickinson, Mayer and Boyer', 'Diária': 201.62, 'Estrelas': 3, 'Data de Entrada do hospede': new Date('2023-09-25'), 'Data de Saída do hospede': new Date('2023-09-30') },
      { 'Hospede': 'Demetrius', 'Hotel': 'Ernser Inc', 'Diária': 118.01, 'Estrelas': 4, 'Data de Entrada do hospede': new Date('2023-08-03'), 'Data de Saída do hospede': new Date('2023-08-10') },
    ]);
  });
});