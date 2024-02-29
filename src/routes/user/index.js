import express from "express";
import { create, login, all, sendRecoveryCode } from "../../controllers/user/index.js";

const router = express.Router();

router.post("/create", create);
router.post("/login", login);
router.get("/", all);
router.post('/send-recovery-code', sendRecoveryCode)

export default router;
