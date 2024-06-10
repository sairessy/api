import express from "express";
import {
  chat
} from "../../controllers/chatbot/index.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({app: 'ChatBot'});
});
router.post("/chat", chat);

export default router;