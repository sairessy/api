import knex from "knex";

export const check_auth = async (req, res, next) => {
  const result = await knex("session").where({ _id: req.sessionID }).first();
  if (result) {
    if (Date.now() - result.expirity >= 0) {
      await knex("session").remove().where({ _id: req.sessionID });
      res.json({ info: "Sessão expirada" });
    } else {
      next();
    }
  } else {
    res.json({ info: "Not authenticated" });
  }
};
