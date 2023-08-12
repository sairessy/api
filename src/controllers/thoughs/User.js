import express from "express";
import knex from "../../services/knex/main/index.js";

const router = express.Router();

var session;

router.get("/", async (req, res) => {
  res.json({
    info: "Welcome to our api 🖖",
  });
});

router.post("/create-user", async (req, res) => {
  const { email, pass } = req.body;
  try {
    const result = await knex("user").insert({ email, pass });
    res.json({ result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
});

router.post("/login", async (req, res) => {
  session = req.session;

  const { email, pass } = req.body;

  const result = await knex("user").where({ email, pass }).first();
  if (result) {
    session.user = { id: result.id };
    res.json({ info: "Logado com successo" });
  } else {
    res.status(500).json({ info: "Falha ao autenticar" });
  }
});

router.get("/logout", (req, res) => {
  try {
    req.session.destroy(() => {
      session = null;
      res.json({ msg: "Sessão terminada", user: req.session });
    });
  } catch (error) {
    res.status(500).json({ msg: "Erro ao terminar a sessão", error });
  }
});

router.get("/auth-check", (req, res) => {
  if (session) {
    res.json({ user: session.user });
  } else {
    res.json({ user: null });
  }
});

export default router;
