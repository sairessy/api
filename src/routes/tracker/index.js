import express from "express";
import { all, create } from "../../controllers/tracker/index.js";

const router = express.Router();

router.get("/", (req, res) => res.json({ app: "Tracker" }));
router.post("/position", create);
router.get("/positions", all);

export default router;
