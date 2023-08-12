import express from "express";
import { create, login } from "../../controllers/automata/User.js";

const router = express.Router();

router.get("/", async (req, res) => {
  res.json({ info: "Welcome to automatax users" });
});

router.post("/create", create);
// router.post("/all", all);

export default router;
