const { Pool } = require('pg');

// Configuração da conexão com o banco de dados
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgresdb',
  password: 'postgres',
  port: 5432,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};