import express from "express";
import {
  home, update
} from "../../controllers/tecnico/index.js";

const router = express.Router();

router.get("/", home);
router.post("/update", update)

export default router;