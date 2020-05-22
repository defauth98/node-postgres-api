const db = require("../database");

module.exports = {
  async store(req, res) {
    const { name, owner_id } = req.body;

    // Cria a tabela se ela não existe
    try {
      const queryText = `CREATE TABLE IF NOT EXISTS 'enterprise'  (
        id SERIAL PRIMARY KEY,
        nome VARCHAR(55) NOT NULL,
        owner_id INTEGER NOT NULL,
        FOREIGN KEY (owner_id) REFERENCES owner(id)
      )
      `;
      await db.query(queryText);
    } catch (err) {
      console.log("Error ao criar a tabela");
    }

    //Insere na tabela enterprise
    try {
      const text =
        "INSERT INTO enterprise(nome,owner_id) VALUES($1, $2) RETURNING *";
      const values = [name, owner_id];

      const owner = await db.query(text, values);
      res.json({ fields: owner.rows });
    } catch (err) {
      console.log(err);
    }
  },

  async index(req, res) {
    try {
      const owners = await db.query("SELECT * FROM enterprise");

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
      await db.query("UPDATE enterprise SET nome=$1 WHERE id=$2", [name, id]);
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
