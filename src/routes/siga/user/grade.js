import express from "express";
import knex from "../../../services/knex/siga/index.js";

const router = express.Router();

router.get("/", async (req, res) => {
  res.json({ info: "Welcome to grade" });
});

router.get("/all", async (req, res) => {
  const grades = await knex("grade").orderBy("id", "desc");
  res.json({ grades });
});

router.get("/:id", async (req, res) => {
  const grade = await knex("grade").where({ id: req.params.id }).first();
  res.json(grade);
});

router.post("/create", async (req, res) => {
  const { school_name } = req.body;

  try {
    const result = await knex("grade").insert({
      name: school_name,
      created_at: new Date(),
      created_by: 1,
    });

    res.json({ result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
});

router.post("/create-grade-course", async (req, res) => {
  const { courses, grade_id } = req.body;

  await knex("grade-course").delete().where({ grade_id });
  for (let i = 0; i < courses.length; i++) {
    const c = courses[i];
    await knex("grade-course").insert({ grade_id, course_id: c });
  }

  res.json({});
});

router.get("/grade-courses/:grade_id", async (req, res) => {
  const id = req.params.grade_id;

  const data = await knex("grade-course").where({ grade_id: id });

  res.json({ courses: data.map(({ course_id }) => course_id) });
});

export default router;
