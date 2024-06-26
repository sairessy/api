import express from "express";
import {
  chat
} from "../../controllers/chatbot/index.js";

import {cronusSendMsg} from '../../controllers/main/index.js';

const router = express.Router();

router.get("/", (req, res) => {
  res.json({app: 'ChatBot'});
});
router.post("/chat", chat);

router.post('/send-msg', cronusSendMsg);

export default router;