import express from "express";
import {sales_all} from '../../controllers/gestor/sales/index.js';

const router = express.Router();

router.get("/", (req, res) => res.json({}));

// SALES
router.get('/sales/all', sales_all);

export default router;
