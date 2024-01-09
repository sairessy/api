import express from "express";
import { getDistritos, getBairros, home } from "../../controllers/main/index.js";

const router = express.Router();

router.get("/", home);
router.get("/maputo/bairros/:distrito", getBairros);
router.get("/maputo/distritos", getDistritos);


export default router;
