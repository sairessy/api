import express from "express";

const router = express.Router();

router.get("/", async (req, res) => {
  res.json({
    info: "Welcome to APIx 🖖",
  });
});

router.post('/post', (req, res) => {
  const data = req.body;
  console.log(data);
  res.json(data);
})

// Redirector Min App
router.get("/redirector/foco", async (req, res) => {
  const url = "https://drive.google.com/drive/folders/1bcFZraqa3GPft9SGMd_xpO23qchUY8Pr?usp=sharing"
  res.redirect(url)
})
// Redirector Min App

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
  const { email, pass } = req.body;

  const result = await knex("user").where({ email, pass }).first();
  const success = result !== undefined;
  res.json({ success, user: success ? result.id : null });
});

router.get("/logout", (req, res) => {
  try {
    res.clearCookie("uid");
    res.json({ msg: "Sessão terminada" });
  } catch (error) {
    res.status(500).json({ msg: "Erro ao terminar a sessão", error });
  }
});

router.get("/auth-check", (req, res) => {
  console.log(req.sessionID);
  res.json({});
});

router.get("/users", async (req, res) => {
  const result = await knex("user");
  for (let i = 0; i < result.length; i++) {
    result[i].followers = await knex("follow").where({
      user_id: result[i].id,
    });
  }
  res.json(result);
});

router.post("/user/follow", async (req, res) => {
  const { user_id, follower_id } = req.body;
  const result = await knex("follow").where({ user_id, follower_id });

  if (result.length === 0) {
    await knex("follow").insert({
      user_id,
      follower_id,
    });
    res.json({ following: true });
  } else {
    await knex("follow").delete().where({
      user_id,
      follower_id,
    });
    res.json({ following: false });
  }
});

export default router;
