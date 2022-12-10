import main from "./main/index.js";
import profile from "./profile/index.js";
import docs from "./profile/docs.js";

import express from "express";
import cors from "cors";
import http from "http";

const app = express();
app.use(cors({ origin: "*", allowedHeaders: "*" }));
const server = http.createServer(app);

app.use(express.static("public"));
app.use(express.json({ limit: "3mb" }));

// ROUTES
// Main
app.use("/", main);

// Profile
app.use("/profile", profile);
app.use("/profile/docs", docs);

export default server;
