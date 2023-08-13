import express from "express";
import { create, find, remove, update } from "../../controllers/machina/index.js";

const router = express.Router();

router.get("/", async (req, res) => {
  res.json({ info: "Welcome to machina 👌!" });
});

router.post('/create', create);
router.get('/:id', find);
router.post('/remove/:id', remove);
router.post('/update', update)
export default router;
