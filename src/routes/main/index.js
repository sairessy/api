import express from "express";
import {
  getDistritos,
  getBairros,
  home
} from "../../controllers/main/index.js";
import log from '../../middleware/main/log.js';

const router = express.Router();

router.get("/", log, home);
router.get("/maputo/bairros/:distrito", log, getBairros);
router.get("/maputo/distritos", log, getDistritos);


export default router;