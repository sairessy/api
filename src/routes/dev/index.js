import express from "express";
import knex from "../../services/knex/dev/index.js";

const router = express.Router();

router.get("/users", async (req, res) => {
  const users = await knex("user");

  res.json({ data: users });
});

export default router;
