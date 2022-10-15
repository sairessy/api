import main from "./_main/index.js";
import camera from "./camera/index.js";
import tracker from "./tracker/index.js";
import news from "./news/comments.js";
import users from "./users/index.js";

// Devices
import bells from "./devices/bells.js";
import lights from "./devices/lights.js";
import devices from "./devices/index.js";

import express from "express";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";
import db from "../database/nedb/index.js";

const app = express();
app.use(cors({ origin: "*", allowedHeaders: "*" }));
const server = http.createServer(app);

app.use(express.json());

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  // console.log("New connection");
  // Trackers
  socket.on("devices-tracker-position", (data) => {
    db.devices.update(
      { _id: data.device_id },
      {
        $set: {
          last_position: { lat: data.lat, lon: data.lon, time: data.time },
        },
      }
    );
    io.emit("devices-tracker-position", data);
  });

  // Strean
  socket.on("stream", (data) => {
    io.emit("stream", data);
  });

  // Cameras
  socket.on("devices-camera-img", (data) => {
    io.emit("devices-camera-img", data);
  });
});

app.use("/", main);
app.use("/camera", camera);
app.use("/tracker", tracker);
app.use("/news", news);
app.use("/users", users);

// Devices
app.use("/devices", devices);
app.use("/devices/bells/", bells);
app.use("/devices/lights/", lights);

export { app, server, io };
