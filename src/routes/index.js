import main from "./main/index.js";
import profile from "./profile/index.js";
import docs from "./profile/docs.js";

import express from "express";
import cors from "cors";
import http from "http";
import cookieParser from "cookie-parser";

const app = express();

// app.use(
//   cors({
//     origin: "*",
//     allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept"],
//     preflightContinue: true,
//     methods: ["PUT", "POST", "GET", "DELETE"],
//     credentials: true,
//   })
// );
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.static("public"));
app.use(express.json({ limit: "3mb" }));
app.use(cookieParser());

const server = http.createServer(app);

// ROUTES
// Main
app.use("/", main);

// Profile
app.use("/profile", profile);
app.use("/profile/docs", docs);

export default server;
