import express from "express";
import { create, all } from "../../controllers/feedback/index.js";

const router = express.Router();

router.get('/', (req, res) => res.send('feedback'));
router.get('/all', all);
router.post("/create", create);

export default router;