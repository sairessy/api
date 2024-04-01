import express from "express";
import cors from "cors";
import http from "http";
import cookieParser from "cookie-parser";

// IMPORT ROUTES
import main from "./main/index.js";
import automata from "./automata/index.js";
import user from "./user/index.js";
import feedback from "./feedback/index.js";
import ads_front from "./ads-front/index.js";
import ads_back from "./ads-back/index.js";
import work from "./work/index.js";
import gestor from "./gestor/index.js";
import machina from './machina/index.js';
import notify from './notify/index.js';
import tecnico from './tecnico/index.js';
import truck from './truck/index.js';
import chatbot from './chatbot/index.js';

// EXPRESS CONFIG.
const app = express();
app.use(cookieParser());
app.use(cors({ origin: "*" }));
app.use(express.json({ limit: "3mb" }));
app.use(express.static("static"));
const server = http.createServer(app);

// USE ROUTES
app.use("/", main);
app.use("/user", user);
app.use("/automata", automata);
app.use('/feedback', feedback);
app.use('/ads-front', ads_front);
app.use('/ads-back', ads_back);
app.use('/work', work);
app.use('/gestor', gestor);
app.use('/machina', machina);
app.use('/notify', notify);
app.use('/tecnico', tecnico);
app.use('/truck', truck);
app.use('/chatbot', chatbot);

export default server;
