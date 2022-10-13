import io from "../../../index.js";

io.on("connection", (socket) => {
  console.log("Client connected!");

  // DEVICES
  // Bells
  socket.on("device-bell-play", (data) => {
    io.emit("device-bell-play", data);
  });

  // Cameras
  socket.on("device-camera-img", (data) => {
    io.emit("device-camera-img", data);
  });
});
