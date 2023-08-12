import knex from "../../services/knex/automata/index.js";

export const create = async (req, res) => {
  const { email, pass } = req.body;

  try {
    const result = await knex("user").insert({ email, pass });
    res.json({ result });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const login = async (req, res) => {
  const { email, pass } = req.body;

  try {
    const result = await knex("user").where({ email, pass });

    res.json({ result: result.length > 0 });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const recovery_pass = async (req, res) => {
  const { email, pass, code } = req.body;

  const result = await knex("user").update({ pass }).where({ email });
  res.json(result);
};

export const send_code = async (req, res) => {};
