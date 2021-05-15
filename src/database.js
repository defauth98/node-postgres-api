const { Client } = require("pg");

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "test_api",
  password: "docker",
  port: 5432,
});

client.connect();

module.exports = client;
