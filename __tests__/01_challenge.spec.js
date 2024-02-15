const connection = require('./utils/connection');
const { runSchema, runQuery } = require('./utils/executeQuery');

describe('01 - Crie e popule a tabela `room_users` de acordo com as verificações abaixo', function () {
  it('A tabela `room_users` deve ser criada', async function () {
    await runSchema();
    await runQuery('../../src/01_challenge.sql');
    const [result] = await connection.query('SHOW TABLES LIKE "room_users"');
    expect(result.length).toBe(1);
  });

  it('A tabela `room_users` deve ter a coluna `id` como chave primária, não nula e auto incrementável', async function () {
    await runSchema();
    await runQuery('../../src/01_challenge.sql');
    const [result] = await connection.query('SHOW COLUMNS FROM room_users');
    expect(result).toContainEqual({
      Field: 'id',
      Type: 'int',
      Null: 'NO',
      Key: 'PRI',
      Default: null,
      Extra: 'auto_increment'
    });
  });

  it('A tabela `room_users` deve ter a coluna `user_id` como chave estrangeira, não nula', async function () {
    await runSchema();
    await runQuery('../../src/01_challenge.sql');
    const [result] = await connection.query('SHOW COLUMNS FROM room_users');
    expect(result).toContainEqual({
      Field: 'user_id',
      Type: 'int',
      Null: 'NO',
      Key: 'MUL',
      Default: null,
      Extra: ''
    });
  });

  it('A tabela `room_users` deve ter a coluna `room_id` como chave estrangeira, não nula', async function () {
    await runSchema();
    await runQuery('../../src/01_challenge.sql');
    const [result] = await connection.query('SHOW COLUMNS FROM room_users');
    expect(result).toContainEqual({
      Field: 'room_id',
      Type: 'int',
      Null: 'NO',
      Key: 'MUL',
      Default: null,
      Extra: ''
    });
  });

  it('A tabela `room_users` deve ter a coluna `check_in` como date, não nula', async function () {
    await runSchema();
    await runQuery('../../src/01_challenge.sql');
    const [result] = await connection.query('SHOW COLUMNS FROM room_users');
    expect(result).toContainEqual({
      Field: 'check_in',
      Type: 'date',
      Null: 'NO',
      Key: '',
      Default: null,
      Extra: ''
    });
  });

  it('A tabela `room_users` deve ter a coluna `check_out` como date', async function () {
    await runSchema();
    await runQuery('../../src/01_challenge.sql');
    const [result] = await connection.query('SHOW COLUMNS FROM room_users');
    expect(result).toContainEqual({
      Field: 'check_out',
      Type: 'date',
      Null: 'YES',
      Key: '',
      Default: null,
      Extra: ''
    });
  });

  it('A tabela `room_users` deve ter a coluna `user_id` como chave estrangeira da tabela `users`', async function () {
    await runSchema();
    await runQuery('../../src/01_challenge.sql');
    const [[result]] = await connection.query('SHOW CREATE TABLE room_users');
    expect(result['Create Table']).toContain('FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)');
  });

  it('A tabela `room_users` deve ter a coluna `room_id` como chave estrangeira da tabela `rooms`', async function () {
    await runSchema();
    await runQuery('../../src/01_challenge.sql');
    const [[result]] = await connection.query('SHOW CREATE TABLE room_users');
    expect(result['Create Table']).toContain('FOREIGN KEY (`room_id`) REFERENCES `rooms` (`id`)');
  });

  it('A tabela `room_users` deve ser populada com os dados corretos', async function () {
    await runSchema();
    await runQuery('../../src/01_challenge.sql');
    const [result] = await connection.query('SELECT * FROM room_users');
    expect(result).toStrictEqual([
      { 'id': 1, 'user_id': 1, 'room_id': 1, 'check_in': new Date('2023-01-01'), 'check_out': null },
      { 'id': 2, 'user_id': 7, 'room_id': 3, 'check_in': new Date('2023-10-03'), 'check_out': null },
      { 'id': 3, 'user_id': 2, 'room_id': 5, 'check_in': new Date('2023-05-10'), 'check_out': null },
      { 'id': 4, 'user_id': 3, 'room_id': 5, 'check_in': new Date('2023-05-10'), 'check_out': null },
      { 'id': 5, 'user_id': 5, 'room_id': 6, 'check_in': new Date('2023-09-25'), 'check_out': new Date('2023-09-30') },
      { 'id': 6, 'user_id': 7, 'room_id': 13, 'check_in': new Date('2023-08-03'), 'check_out': new Date('2023-08-10') },
    ]);
  });
});