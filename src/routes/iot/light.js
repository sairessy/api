import express from "express";
import Light from "../../models/iot/Light.js";

const router = express.Router();

router.get("/", async (req, res) => {
  res.json({
    info: "Your Lights here 🖖",
  });
});

router.post('/create', async (req, res) => {
    console.log(req.body)
    const {token, description} = req.body
    const light = new Light(description)
    res.json({light, l: req.body})
});

router.post('/update', async (req, res) => {
    const {token, id} = req.body
});

router.post('/delete', async (req, res) => {
    const {token, id} = req.body
});

export default router;
