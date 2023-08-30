import express from "express";
import { all, categorie, create, find, login, update } from "../../controllers/user/index.js";

const router = express.Router();

router.get("/", async (req, res) => {
  res.json({
    info: "Welcome user route 🖖",
  });
});

router.post('/create', create);
router.post('/login', login);
router.get('/all', all);
router.get('/:course', categorie);
router.post('/update', update);
router.get('/byid/:id', find);

export default router;
