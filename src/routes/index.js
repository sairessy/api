import main from "./main/index.js";
import users from "./dev/index.js";

import express from "express";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";

const app = express();
app.use(cors({ origin: "*", allowedHeaders: "*" }));
const server = http.createServer(app);

app.use(express.static("public"));
app.use(express.json({ limit: "3mb" }));

// ROUTES
app.use("/", main);
// Dev
app.use("/dev", users);

// WebSocket
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  socket.on("devices-camera-img", (data) => {
    io.emit("devices-camera-img", data);
  });
});

export default server;
