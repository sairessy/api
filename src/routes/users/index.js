import express from "express";
import { create, login } from "../../controllers/User.js";

const router = express.Router();

router.get("/", (req, res) => res.json({ app: "Users" }));
router.post("/create", create);
router.post("/login", login);

export default router;
