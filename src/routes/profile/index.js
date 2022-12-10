import express from "express";

import {
  create,
  login,
  private_info,
  public_info,
  recovery_account,
  send_recovery_code,
  update,
} from "../../controllers/profile/User.js";

const router = express.Router();

router.get("/", async (req, res) => {
  res.json({});
});

// User routes
router.post("/create", create);
router.post("/login", login);
router.put("/user/:id", update);
router.get("/user/:id", private_info);
router.get("/public/user/:id", public_info);
router.post("/user/send-recovery-code", send_recovery_code);
router.post("/user/recovery-account", recovery_account);

export default router;
