import express from "express";

import { createStaff, createStaffCategoria, getStaff, getStaffCategoria,  } from "../../controllers/cronus/Staff.js";
import { createCredito, getCredito } from "../../controllers/cronus/Credito.js";
import { createStock, getStock, createStockCategoria } from "../../controllers/cronus/Stock.js";
import { createAsset, createAssetCategoria, getAsset } from "../../controllers/cronus/Asset.js";

const router = express.Router();

router.get("/", (req, res) => res.json({ app: "CRONUS" }));

// Staff
router.get("/staff/", getStaff);
router.post("/staff/create", createStaff);
router.post("/staff/categoria/create", createStaffCategoria);
router.get("/staff/categoria/", getStaffCategoria);

// Credito
router.get("/credito/", getCredito);
router.post("/credito/create", createCredito);

// Stock
router.get("/stock/", getStock);
router.post("/stock/create", createStock);
router.post("/stock/categoria/create", createStockCategoria);

// Asset
router.get("/asset/", getAsset);
router.post("/asset/create", createAsset);
router.post("/asset/categoria/create", createAssetCategoria);

export default router;
