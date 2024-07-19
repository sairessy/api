import express from "express";

import { removeItem } from "../../controllers/cronus/index.js";
import {
  createStaff,
  createStaffCategoria,
  getStaff,
  getStaffCategoria,
  updateStaff,
} from "../../controllers/cronus/Staff.js";
import { createCredito, getCredito } from "../../controllers/cronus/Credito.js";
import {
  createStock,
  getStock,
  createStockCategoria,
  getStockCategoria,
  getTotalStockServices,
} from "../../controllers/cronus/Stock.js";
import {
  createAsset,
  createAssetCategoria,
  getAsset,
  getAssetCategoria,
} from "../../controllers/cronus/Asset.js";
import { createSell, getSales } from "../../controllers/cronus/Sell.js";

const router = express.Router();

router.get("/", (req, res) => res.json({ app: "CRONUS" }));

// Remove
router.delete("/remove", removeItem);

// Staff
router.get("/staff/", getStaff);
router.post("/staff/create", createStaff);
router.put("/staff/update", updateStaff);
router.post("/staff/categoria/create", createStaffCategoria);
router.get("/staff/categoria/", getStaffCategoria);

// Credito
router.get("/credito/", getCredito);
router.post("/credito/create", createCredito);

// Stock
router.get("/stock/", getStock);
router.post("/stock/create", createStock);
router.post("/stock/categoria/create", createStockCategoria);
router.get("/stock/categoria/", getStockCategoria);
router.get("/stock/total-stock-servicos", getTotalStockServices);

// Asset
router.get("/asset/", getAsset);
router.post("/asset/create", createAsset);
router.post("/asset/categoria/create", createAssetCategoria);
router.get("/asset/categoria/", getAssetCategoria);

// Sales
router.get("/sales/", getSales);
router.post("/sales/create", createSell);

export default router;
