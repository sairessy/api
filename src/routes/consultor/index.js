import express from "express";
import { all, categorie, find, update } from "../../controllers/consultor/index.js";

const router = express.Router();

router.get('/all', all);
router.get('/:course', categorie);
router.post('/update', update);
router.get('/byid/:id', find);

export default router;
