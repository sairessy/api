import express from "express";
import { create, login } from "../../controllers/automata/User.js";

const router = express.Router();

router.get("/", async (req, res) => {
  res.json({ info: "Welcome to automata users" });
});

router.post("/create", create);
router.post("/login", login);

export default router;
