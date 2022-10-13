import express from "express";
import { create, play } from "../../controllers/devices/Bell.js";

const router = express.Router();

router.get("/", (req, res) => res.json({ app: "Bells" }));

router.post("/create", create);

router.get("/play/:id", play);

export default router;
