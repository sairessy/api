import express from "express";
import { all, create } from "../../../controllers/siga/admin/Client.js";

const router = express.Router();

router.get("/", async (req, res) => {
  res.json({ info: "Welcome to admin" });
});

router.post("/client/create", create);
router.get("/client/all", all);

export default router;
