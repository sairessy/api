import mongoose from "mongoose";
import { env, mongoConnectionString } from "../../config/index.js";

try {
  mongoose.connect(mongoConnectionString);
} catch (error) {
  console.log("MongoDB connection error");
  console.log(error);
}

// Models
// user
export const User = mongoose.model(
  "User",
  new mongoose.Schema(
    {
      email: String,
      pass: String,
      app_id: String,
      created_at: Date,
      recovery_code: Number,
    },
    { strict: false }
  )
);

// machina
export const Machina = mongoose.model(
  "Machina",
  new mongoose.Schema(
    {
      label: String,
      on: Boolean,
    },
    { strict: false }
  )
);

// Ats
export const Subscriber = mongoose.model(
  "Subscriber",
  new mongoose.Schema(
    {
      email: String,
      created_at: Date,
    },
    { strict: false }
  )
);
