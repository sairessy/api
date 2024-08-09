import mongoose from "mongoose";
import { env, mongoConnectionString } from "../../config/index.js";

try {
  mongoose.connect(mongoConnectionString);
} catch (error) {
  console.log("MongoDB connection error");
  console.log(error);
}

// Staff
export const Staff = mongoose.model(
  "Staff",
  new mongoose.Schema(
    {
      created_at: Date,
      created_by: String,
    },
    { strict: false }
  )
);

// Categoria
export const StaffCategoria = mongoose.model(
  "StaffCategoria",
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

