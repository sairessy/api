import express from "express";
import { home, create, all, profissoes} from "../../controllers/work/index.js";

const router = express.Router();

router.get('/', home);
router.get('/all', all);
router.post("/create", create);
//router.post('/update', update);

router.get('/professions', profissoes)

export default router;