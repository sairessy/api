import Machina from "../../models/machina/Machina.js";
import db from "../../services/nedb/index.js";

export const create = (req, res) => {
  db.machina.machinas.insert(new Machina(req.body), (err, doc) => {
    res.json(doc);
  });
};

export const find = (req, res) => {
  db.machina.machinas.findOne({ id: req.params.id }, (err, doc) => {
    const machina = doc;
    if (machina !== null) {
      delete machina._id;
    }
    res.json(machina || {});
  });
};

export const all = (req, res) => {
  db.machina.machinas.find({}, (err, docs) => {
    const machinas = docs;
    if (machinas.length > 0) {
      for (let i = 0; i < machinas.length; i++) {
        delete machinas[i]._id;
      }
    }
    res.json(machinas || {});
  });
};

export const remove = (req, res) => {
  db.remove({ id: req.params.id }, () => {
    res.json({});
  });
};

export const update = (req, res) => {
  const machina = new Machina({
    ...req.body,
  });

  db.machina.machinas.remove({ id: req.body.id }, () => {
    db.insert(machina, (err, doc) => {
      res.json(doc);
    });
  });
};
