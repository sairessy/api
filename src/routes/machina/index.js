import express from "express";
import { create, get, set } from "../../controllers/machina/Machina.js";

const router = express.Router();

router.get("/", async (req, res) => {
  res.json({
    info: "Welcome to our Machina APIx 🖖",
  });
});

router.post('/create', create)
router.post('/set', set)
router.get('/:id', get)

export default router;
