// IMPORT CORE MODULES
import express from "express";
import cors from "cors";
import http from "http"; 

// IMPORT ROUTES
import main from "./main/index.js";
import automata from "./automata/index.js";
import machina from './machina/index.js'
import user from './user/index.js';
import cookieParser from "cookie-parser";


// EXPRESS
const app = express();
app.use(cookieParser());
app.use(cors({ origin: "*" }));
app.use(express.json({ limit: "3mb" }));
app.use(express.static('static'));
const server = http.createServer(app);

// USE ROUTES
app.use("/", main);
app.use("/automata", automata);
app.use('/machina', machina);
app.use('/user', user);

export default server;
