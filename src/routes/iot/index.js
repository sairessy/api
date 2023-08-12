import express from "express";

const router = express.Router();

router.get("/", async (req, res) => {
  res.json({
    info: "Welcome to our APIx IOT 🖖",
  });
});

export default router;
