const { Pool, Client } = require("pg");
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "api_pg_test",
  password: "",
  port: 5432,
});

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "api_pg_test",
  password: "",
  port: 5432,
});

client.connect();

module.exports = client;
