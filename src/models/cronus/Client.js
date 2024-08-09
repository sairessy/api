import mongoose from "mongoose";
import { env, mongoConnectionString } from "../../config/index.js";

try {
  mongoose.connect(mongoConnectionString);
} catch (error) {
  console.log("MongoDB connection error");
  console.log(error);
}

// Client
export const Client = mongoose.model(
  "Client",
  new mongoose.Schema(
    {
      created_at: Date,
      created_by: String,
    },
    { strict: false }
  )
);

// Categoria
export const ClientCategoria = mongoose.model(
  "ClientCategoria",
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

