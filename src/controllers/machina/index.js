import Machina from "../../models/machina/Machina.js";
import db from "../../services/nedb/index.js";

export const create = (req, res) => {
  db.insert(
    new Machina({
      id: String(Date.now()),
      ...req.body,
    }),
    (err, doc) => {
      res.json(doc);
    }
  );
};

export const find = (req, res) => {
  db.loadDatabase();
  db.findOne({ id: req.params.id }, (err, doc) => {
    const machina = doc;
    delete machina._id;
    res.json(machina);
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

  db.remove({ id: req.body.id }, () => {
    db.insert(machina, (err, doc) => {
      res.json(doc);
    });
  });
};
