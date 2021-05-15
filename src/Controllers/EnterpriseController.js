const db = require("../database");

module.exports = {
  async store(req, res) {
    const { name, owner_id, city_id } = req.body;

    try {
      const text =
        "INSERT INTO enterprise(name,owner_id, city_id) VALUES($1, $2, $3) RETURNING *";
      const values = [name, owner_id, city_id];

      const enterprises = await db.query(text, values);
      res.json({ fields: enterprises.rows });
    } catch (err) {
      console.log(err);
    }
  },

  async index(req, res) {
    try {
      const enterprises = await db.query("SELECT * FROM enterprise");

      res.json({ empresas: enterprises.rows });
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
      await db.query("UPDATE enterprise SET name=$1 WHERE id=$2", [name, id]);
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
