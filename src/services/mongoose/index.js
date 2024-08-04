import mongoose from "mongoose";
import { env } from "../../config/index.js";

// `mongodb+srv://sairessy:${env.MONGO_PASS}@cluster0.bpljm3t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
mongoose
  .connect(
    'mongodb://127.0.0.1:27017'
  )
  .catch((err) => {
    console.log("MongoDB connection error");
    console.log(String(err));
  });

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
