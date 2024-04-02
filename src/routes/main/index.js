import express from "express";
import {
  getDistritos,
  getBairros,
  home
} from "../../controllers/main/index.js";
import log from '../../middleware/main/log.js';
import sendMail from '../../services/nodemailer/send_mail.js';

const router = express.Router();

router.get("/", log, home);
router.get("/cron", async (req, res) => {
  const r = await sendMail(['sairessy@gmail.com'], 'Cron', `Hello, it is ${new Date()}, it comes from ${req.get('host')}.`);
  res.json({data: r});
});
router.get("/maputo/bairros/:distrito", log, getBairros);
router.get("/maputo/distritos", log, getDistritos);


export default router;
