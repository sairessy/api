import express from "express";

const router = express.Router();

router.get("/", (req, res) => res.json({ app: "Welcome to our api" }));
router.get("/empresas", (req, res) => res.json({ app: "Welcomxe to our api" }));

export default router;
