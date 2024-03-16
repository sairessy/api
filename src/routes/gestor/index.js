import express from "express";
import {sales_all, sales_create, sales_product_create, sales_product_all} from '../../controllers/gestor/sales/index.js';

const router = express.Router();

router.get("/", (req, res) => res.json({}));

// SALES
router.get('/sales/all', sales_all);
router.post('/sales/create', sales_create);
router.post('/sales/product/create', sales_product_create);
router.get('/sales/product/', sales_product_all);

export default router;
