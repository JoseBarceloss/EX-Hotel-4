const { readFileSync } = require('fs');
const path = require('path');
const connection = require('./connection');

const runQuery = async (fileName) => {
  const challengeQuery = readFileSync(path.resolve(__dirname, fileName), 'utf8');
  return await connection.query(challengeQuery);
};

const runSchema = async () => {
  await runQuery('./trybe-hotel-test.sql');
};
  
const runMigration = async () => {
  await runSchema();
  process.exit(0);
};

module.exports = {
  runSchema,
  runQuery,
  runMigration,
};