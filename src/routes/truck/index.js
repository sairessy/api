import express from "express";
import {
  home, sendRequest
} from "../../controllers/truck/index.js";

const router = express.Router();

router.get("/", home);
router.post('/send-request', sendRequest)

export default router;