import db from "../../services/nedb/index.js";

export const create = (req, res) => {
  const data = req.body;
  db.foco_cadastro.estudantes.insert(
    { ...data, created_at: String(Date.now()) },
    (err, doc) => {
      res.json(doc);
    }
  );
};

export const find = (req, res) => {
  db.foco_cadastro.estudantes.findOne({_id: req.params.id}, (err, doc) => {
    res.json(doc);
  });
};

export const all = (req, res) => {
  db.foco_cadastro.estudantes.find({}, (err, docs) => {
    res.json(docs);
  });
};
