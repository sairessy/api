import mongoose from "mongoose";
import { env, mongoConnectionString } from "../../config/index.js";

try {
  mongoose.connect(mongoConnectionString);
} catch (error) {
  console.log("MongoDB connection error");
  console.log(error);
}

// Staff
export const Asset = mongoose.model(
  "Asset",
  new mongoose.Schema(
    {
      created_at: Date,
      created_by: String,
    },
    { strict: false }
  )
);

// Categoria
export const AssetCategoria = mongoose.model(
  "AssetCategoria",
  new mongoose.Schema(
    {
      user: String,
      label: String,
      created_at: Date,
      created_by: String,
    },
    { strict: false }
  )
);
