const express = require("express");
const router = require("./routes");
const port = 3003;
require("./database");

const app = express();

app.use(express.json());
app.use(router);

app.listen(port, (err) => {
  console.log(err || `Servidor rodando ${port}`);
});
