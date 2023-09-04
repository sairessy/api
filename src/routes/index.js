// IMPORT
import express from "express";
import cors from "cors";
import http from "http"; 
import cookieParser from "cookie-parser";

// IMPORT ROUTES
import main from "./main/index.js";
import automata from "./automata/index.js";
import machina from './machina/index.js'
import user from './user/index.js';
import consultor from './consultor/index.js';
import consultor_msg from './consultor/message.js'


// EXPRESS
const app = express();
app.use(cookieParser());
app.use(cors({ origin: "*" }));
app.use(express.json({ limit: "3mb" }));
app.use(express.static('static'));
const server = http.createServer(app);

// USE ROUTES
app.use("/", main);
app.use('/user', user);

app.use("/automata", automata);

app.use('/machina', machina);

app.use('/consultor', consultor);
app.use('/consultor_msg', consultor_msg);

export default server;
