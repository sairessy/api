import knex from "../../services/knex/profile/index.js";

export const create = async (req, res) => {
  const { value, description } = req.body;
  const id_user = req.params.id;

  await knex("pfl_document").insert({
    value,
    description,
    id_user,
    created_at: new Date(),
  });
  res.json({});
};

export const all = async (req, res) => {
  console.log("all", req.cookies);
  const id_user = req.params.id;
  const result = await knex("pfl_document")
    .where({ id_user, removed: false })
    .orderBy("created_at", "desc");
  res.json({ data: result });
};

export const _delete = async (req, res) => {
  const id = req.params.id;
  const result = await knex("pfl_document")
    .update({ removed: true })
    .where({ id });
  res.json({ data: result });
};

export const update = async (req, res) => {
  const id = req.params.id;
  const data = req.body;

  const result = await knex("pfl_document").update(data).where({ id });
  res.json({ data: result });
};
