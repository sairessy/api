import express from "express";
import knex from "../../../services/knex/siga/index.js";

const router = express.Router();

router.get("/", async (req, res) => {
  res.json({ info: "Welcome to student" });
});

router.get("/all", async (req, res) => {
  const s = await knex.raw(
    `SELECT 
      s.id, s.name, c.id c_id, c.name c_name
    FROM student AS s 
    LEFT JOIN course AS c 
    ON s.course = c.id
    ORDER BY id DESC
    `
  );

  const students = await knex("student").orderBy("id", "desc");
  res.json({ students: s[0] });
});

router.post("/create", async (req, res) => {
  const { full_name, course, contact, email } = req.body;

  try {
    const result = await knex("student").insert({
      name: full_name,
      course,
      email,
      contact,
      created_at: new Date(),
      created_by: 1,
    });

    res.json({ result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
});

export default router;
