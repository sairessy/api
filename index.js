import express from "express";
import { app, server } from "./src/routes/index.js";

const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

server.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
