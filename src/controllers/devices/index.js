import devices from "../../config/index.js";
import db from "../../database/nedb/index.js";
import Bell from "../../models/devices/Bell.js";
import Camera from "../../models/devices/Camera.js";
import Light from "../../models/devices/Light.js";
import Tracker from "../../models/devices/Tracker.js";
import api_url from "../../config/api_url.js";

import QRCode from "qrcode";

export const create = async (req, res) => {
  const data = req.body;
  let device = null;

  switch (data.id) {
    case "0":
      device = new Light(data.owner, data.name, data.id);
      break;
    case "1":
      device = new Bell(data.owner, data.name, data.id);
      break;

    case "2":
      device = new Camera(data.owner, data.name, data.id);
      break;
    case "3":
      device = new Tracker(data.owner, data.name, data.id);
      break;
  }

  db.devices.insert(device, (err, doc) => {
    res.json(doc);
  });
};

export const findByOwner = (req, res) => {
  const owner = req.params.id;

  db.devices.find({ owner, removed: false }, async (err, data) => {
    const d = data;

    for (let i = 0; i < d.length; i++) {
      d[i].qr_code = await new Promise(async (resolve) => {
        const url = `${api_url}/devices/${d[i].def_name}/?id=${d[i]._id}`;
        const code = await QRCode.toDataURL(url);
        resolve(code);
      });
    }

    res.json(d);
  });
};

export const all = (req, res) => {
  res.json(devices);
};

export const apagar = async (req, res) => {
  const _id = req.params.id;

  db.devices.update(
    { _id },
    { $set: { removed: true } },
    (err, numReplaced) => {
      if (err) {
        res.status(409).json({ msg: "Erro ao deletar", err });
      } else {
        res.json({ numReplaced });
      }
    }
  );
};

export const renomear = async (req, res) => {
  const { id: _id, new_name } = req.body;

  db.devices.update(
    { _id },
    { $set: { name: new_name } },
    (err, numReplaced) => {
      if (err) {
        res.status(409).json({ msg: "Erro ao deletar", err });
      } else {
        res.json({ numReplaced });
      }
    }
  );
};
