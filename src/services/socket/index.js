import main from "./main/index.js";

import express from "express";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";

const app = express();
app.use(cors({ origin: "*", allowedHeaders: "*" }));
const server = http.createServer(app);

app.use(express.json());

app.use("/", main);

// WebSocket
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  // Cameras
  socket.on("devices-camera-img", (data) => {
    io.emit("devices-camera-img", data);
  });
});

export { app, server, io };
