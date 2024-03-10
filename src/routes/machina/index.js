import express from "express";
import { create, update, findById, remove, removeAttr} from "../../controllers/machina/index.js";

const router = express.Router();

router.get("/", async (req, res) => {
  res.json({ info: "Welcome to machina" });
});

router.get('/:id', findById);
router.post("/create", create);
router.put("/update/:id", update);
router.delete('/remove/:id', remove);
router.put('/remove-attr/:id', removeAttr);

export default router;