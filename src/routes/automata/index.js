import express from "express";
import { fill_anep_docs } from "../../controllers/automata/index.js";

const router = express.Router();

router.get("/", async (req, res) => {
  res.json({ info: "Welcome to automata 👌!" });
});

router.post("/anep-docs/", fill_anep_docs);

export default router;
