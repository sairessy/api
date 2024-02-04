// IMPORT
import express from "express";
import cors from "cors";
import http from "http";
import cookieParser from "cookie-parser";
// import { Server } from "socket.io";

// import IoMain from "../controllers/io/index.js";

// IMPORT ROUTES
import main from "./main/index.js";
import automata from "./automata/index.js";
import user from "./user/index.js";
import feedback from "./feedback/index.js";

// EXPRESS
const app = express();
app.use(cookieParser());
app.use(cors({ origin: "*" }));
app.use(express.json({ limit: "3mb" }));
app.use(express.static("static"));
const server = http.createServer(app);
//const io = new Server(server, { cors: { origin: "*" } });

// io.sockets.on("connection", new IoMain().on_connection);

// USE ROUTES
app.use("/", main);
app.use("/user", user);
app.use("/automata", automata);
app.use('/feedback', feedback);

export default server;