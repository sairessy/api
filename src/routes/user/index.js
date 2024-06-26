import express from "express";
import {
  create,
  login,
  all,
  sendRecoveryCode,
  user,
  changePass,
  sendConfirmationCode,
  update,
  byApp,
} from "../../controllers/user/index.js";

const router = express.Router();

router.post("/create", create);
router.post("/login", login);
router.get("/", all);
router.get("/:id", user);
router.post("/send-recovery-code", sendRecoveryCode);
router.post("/send-confirmation-code", sendConfirmationCode);
router.post("/change-pass", changePass);
router.post("/update", update);
router.get("/app/:appId", byApp);

export default router;
