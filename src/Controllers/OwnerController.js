const db = require("../database");

module.exports = {
  async store(req, res) {
    const { name } = req.body;

    // Cria a tabela se ela não existe
    try {
      const queryText = `CREATE TABLE IF NOT EXISTS "owner" (
          id SERIAL PRIMARY KEY,
          nome VARCHAR(55))`;
      await db.query(queryText);
    } catch (err) {
      console.log("Error ao criar a tabela");
    }

    //Insere na tabela owner
    try {
      const text = "INSERT INTO owner(nome) VALUES($1) RETURNING *";
      const values = [name];

      const owner = await db.query(text, values);
      res.json({ fields: owner.rows });
    } catch (err) {
      console.log(err);
    }
  },

  async index(req, res) {
    try {
      const owners = await db.query("SELECT * FROM owner");

      res.json({ donos: owners.rows });
    } catch (error) {
      res.status(500).json({
        erro: "Não foi possivel listar os campos no banco de dados",
      });
    }
  },

  async update(req, res) {
    const { name } = req.body;
    const { id } = req.params;

    try {
      await db.query("UPDATE owner SET nome=$1 WHERE id=$2", [name, id]);
      res.send();
    } catch (error) {
      res.status(500).send({
        erro: "Não foi possivel fazer a alteração no banco de dados",
      });
    }
  },

  async delete(req, res) {
    const { id } = req.params;

    try {
      await db.query("DELETE FROM owner WHERE id=$1", [id]);
      res.send();
    } catch (error) {
      res.status(500).json({
        erro: "Não foi possivel fazer a alteração no banco de dados",
      });
    }
  },
};
