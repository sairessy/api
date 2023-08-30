import express from "express";

const router = express.Router();

router.get("/", async (req, res) => {
  res.json({
    info: "Welcome to API 🖖",
  });
});

// Redirector Min App
router.get("/r/foco", async (req, res) => {
  const url = "https://drive.google.com/drive/folders/1bcFZraqa3GPft9SGMd_xpO23qchUY8Pr?usp=sharing"
  res.redirect(url);
})
// Redirector Min App

router.get('/test', (req, res) => {
  res.json({})
})

export default router;
