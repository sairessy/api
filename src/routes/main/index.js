import express from "express";
import auth from "../../middleware/main/auth.js";

const router = express.Router();

router.get("/", auth, async (req, res) => {
  res.json({
    info: "Welcome to our api 🖖",
    user: req.cookies.user_id,
  });
});

export default router;
