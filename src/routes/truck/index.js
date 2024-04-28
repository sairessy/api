import express from "express";
import {
  home, sendRequest, travel
} from "../../controllers/truck/index.js";

const router = express.Router();

router.get("/", home);
router.post('/send-request', sendRequest)
router.post('/travel', travel);

export default router;