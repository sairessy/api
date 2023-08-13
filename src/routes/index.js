import main from "./main/index.js";

// Automata
import automata from "./automata/index.js";

// Machina
import machina from './machina/index.js'

import express from "express";
import cors from "cors";
import http from "http"; 

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json({ limit: "3mb" }));
app.use(express.static('static'))

const server = http.createServer(app);

// ROUTES
// Main
app.use("/", main);

// Automata
app.use("/automata", automata);

// Machina
app.use('/machina', machina)

export default server;
