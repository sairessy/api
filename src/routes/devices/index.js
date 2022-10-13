import express from "express";
import {
  all,
  apagar,
  create,
  findByOwner,
  renomear,
} from "../../controllers/devices/index.js";

const router = express.Router();

router.get("/", all);
router.post("/create", create);
router.get("/user/:id", findByOwner);
router.get("/delete/:id", apagar);
router.put("/rename", renomear);

export default router;
