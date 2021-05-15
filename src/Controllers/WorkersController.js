const db = require("../database");

module.exports = {
  async store(req, res) {
    const { name, enterprise_id } = req.body;

    try {
      const text =
        "INSERT INTO workers(name,enterprise_id) VALUES($1, $2) RETURNING *";
      const values = [name, enterprise_id];

      const worker = await db.query(text, values);
      res.json({ fields: worker.rows });
    } catch (err) {
      console.log(err);
    }
  },

  async index(req, res) {
    try {
      const worker = await db.query("SELECT * FROM workers");

      res.json({ Trabalhadores: worker.rows });
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
      await db.query("UPDATE workers SET name=$1 WHERE id=$2", [name, id]);
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
      await db.query("DELETE FROM workers WHERE id=$1", [id]);
      res.send();
    } catch (error) {
      res.status(500).json({
        erro: "Não foi possivel fazer a alteração no banco de dados",
      });
    }
  },
};
