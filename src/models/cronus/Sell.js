import mongoose from "mongoose";
import { env, mongoConnectionString } from "../../config/index.js";

try {
  mongoose.connect(mongoConnectionString);
} catch (error) {
  console.log("MongoDB connection error");
  console.log(error);
}

// Staff
export const Sell = mongoose.model(
  "Sell",
  new mongoose.Schema(
    {
      created_at: Date,
      created_by: String,
    },
    { strict: false }
  )
);
