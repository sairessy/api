import express from "express";
import { home, subscribeEmail } from "../../controllers/ats/index.js";

const router = express.Router();

router.get("/", home);
router.post("/email-subscription", subscribeEmail);

export default router;
