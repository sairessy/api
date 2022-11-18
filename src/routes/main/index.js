import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    info: "Welcome to our api 🖖",
    date: new Date().toDateString(),
  });
});

export default router;
