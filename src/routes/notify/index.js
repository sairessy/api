import express from "express";
import {
  send
} from "../../controllers/notify/index.js";
import log from '../../middleware/main/log.js';

const router = express.Router();

router.get("/", log, (req, res) => res.json({}));
router.post("/send", send);


export default router;
