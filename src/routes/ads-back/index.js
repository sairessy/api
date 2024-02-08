import express from "express";
import { home, create, all } from "../../controllers/ads-back/index.js";

const router = express.Router();

router.get('/', home);
router.get('/all', all);
router.post("/create", create);

export default router;