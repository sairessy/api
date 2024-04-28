import express from "express";
import {
  consulta,
  home, update
} from "../../controllers/tecnico/index.js";

const router = express.Router();

router.get("/", home);
router.post("/update", update)
router.post('/consulta', consulta)

export default router;