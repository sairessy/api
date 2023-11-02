import express from "express";
import { all, find, create } from "../../controllers/foco-cadastro/index.js";

const router = express.Router();

router.post('/create', create);
router.get('/all', all);
router.get('/byid/:id', find);

export default router;
