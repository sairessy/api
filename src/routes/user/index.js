import express from "express";
import { create, login, all, sendRecoveryCode, user } from "../../controllers/user/index.js";

const router = express.Router();

router.post("/create", create);
router.post("/login", login);
router.get("/", all);
router.get('/:id', user);
router.post('/send-recovery-code', sendRecoveryCode)

export default router;
