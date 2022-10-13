import Position from "../../models/tracker/Position.js";
import db from "../../database/nedb/index.js";

export const create = async (req, res) => {
  const { lat = 0, lon = 0 } = req.body;
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  const pos = new Position(lat, lon, ip);

  db.tracker.positions.insert(pos, (err, doc) => {
    res.json(doc);
  });
};

export const all = async (req, res) => {
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;

  db.tracker.positions.find({}, (err, data) => {
    res.json(data);
  });
};
