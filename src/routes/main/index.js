import express from "express";
import knex from "../../services/knex/index.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const result = await knex("user").insert({
      email: `${Date.now()}@gmail.com`,
      password: new Date(),
    });

    console.log(result);
  } catch (error) {
    console.log(error);
  }

  res.json({
    info: "Welcome to our api 🖖",
    date: new Date().toDateString(),
  });
});

router.get("/users", async (req, res) => {
  try {
    const result = await knex("user");

    res.json({ data: result });
  } catch (error) {
    console.log(error);
  }
});

export default router;
