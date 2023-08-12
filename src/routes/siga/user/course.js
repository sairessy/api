import express from "express";
import knex from "../../../services/knex/siga/index.js";

const router = express.Router();

router.get("/", async (req, res) => {
  res.json({ info: "Welcome to course" });
});

router.post("/create", async (req, res) => {
  const { course_name } = req.body;

  try {
    await knex("course").insert({
      name: course_name,
      created_at: new Date(),
      created_by: 1,
    });

    res.json({});
  } catch (error) {
    res.status(500).json({ error });
  }
});

router.get("/all", async (req, res) => {
  const courses = await knex("course").orderBy("id", "desc");

  for (let i = 0; i < courses.length; i++) {
    courses[i].num_students = (
      await knex("student").where({ course: courses[i].id })
    ).length;
  }

  res.json({ courses });
});

export default router;
