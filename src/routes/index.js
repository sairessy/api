import main from "./main/index.js";
import profile from "./profile/index.js";
import thoughs from "./thoughs/index.js";
import docs from "./profile/docs.js";

// Owner
import owner from "./owner/index.js";
import owner_user from "./owner/user.js";

// Notify
import notify from "./notify/index.js";

// Iot
import iot from "./iot/index.js";
import light from "./iot/light.js";

// Automata
import automata from "./automata/index.js";
import users from "./automata/users.js";

// Siga
import siga from "./siga/index.js";
import admin from "./siga/admin/index.js";
import user from "./siga/user/index.js";
import course from "./siga/user/course.js";
import student from "./siga/user/student.js";
import grade from "./siga/user/grade.js";

// Machina
import machina from './machina/index.js';

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

// Profile
app.use("/profile", profile);
app.use("/profile/docs", docs);
app.use("/thoughs", thoughs);

// Automata
app.use("/automata", automata);
app.use("/automata/user", users);

// Iot
app.use("/iot", iot);
app.use("/iot/light", light);

// siga
app.use("/siga", siga);
app.use("/siga/admin", admin);
app.use("/siga/user", user);
app.use("/siga/user/course", course);
app.use("/siga/user/grade", grade);
app.use("/siga/user/student", student);

// Notify
app.use("/notify", notify);

// Owner
app.use("/owner", owner);
app.use("/owner/user", owner_user);

// Machina
app.use('/machina', machina)

export default server;
