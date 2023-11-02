import express from "express";
import { create, login, all } from "../../controllers/user/index.js";

const router = express.Router();

router.post("/create", create);
router.post("/login", login);
router.get("/", all);

export default router;
