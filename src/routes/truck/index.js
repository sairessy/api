import express from "express";
import {
  home
} from "../../controllers/truck/index.js";

const router = express.Router();

router.get("/", home);

export default router;