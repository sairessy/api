import mongoose from "mongoose";
import { env } from "../../config/index.js";

mongoose
  .connect(
    `mongodb+srv://sairessy:${env.MONGO_PASS}@cluster0.bpljm3t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  )
  .catch((err) => {
    console.log("MongoDB connection error");
    console.log(String(err));
  });

// Credito
export const Credito = mongoose.model(
  "Credito",
  new mongoose.Schema(
    {
      created_at: Date,
      created_by: String,
    },
    { strict: false }
  )
);
