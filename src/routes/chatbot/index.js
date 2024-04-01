import express from "express";
import {
  chat
} from "../../controllers/chatbot/index.js";

const router = express.Router();

router.get("/", (req, res) => res.json({app: 'ChatBot'}));
router.get("/:text", chat);


export default router;