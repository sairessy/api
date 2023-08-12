import express from "express";

const router = express.Router();

router.get("/", async (req, res) => {
  res.json({
    info: "Welcome to owner user 🖖",
  });
});

router.get("/sign_up", async (req, res) => {
  const user_id = req.params.id;

  res.json({
    data: user_id,
  });
});

router.get("/login", async (req, res) => {
  const user_id = req.params.id;

  res.json({
    data: user_id,
  });
});

router.get("/:id", async (req, res) => {
  const user_id = req.params.id;

  res.json({
    data: user_id,
  });
});

router.get("/:id", async (req, res) => {
  const user_id = req.params.id;

  res.json({
    data: user_id,
  });
});

export default router;
