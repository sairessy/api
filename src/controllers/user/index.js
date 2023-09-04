import db from "../../services/nedb/collections/user/index.js";
import User from "../../models/user/index.js";

export const create = async (req, res) => {
  const { email, pass } = req.body;

  try {
    db.insert(new User(email, pass), (err, doc) => {
      delete doc.pass;
      res.status(200).json(doc);
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const login = async (req, res) => {
  const { email, pass } = req.body;
  try {
    db.findOne({ email, pass }, (err, doc) => {
      if (doc === null) {
        res
          .status(409)
          .json({ success: false, msg: "Credenciais incorrectas!" });
      } else {
        return res.json({ success: true, user: doc._id });
      }
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const sendRecoveryCode = async (req, res) => {};

export const recoveryPassword = async (req, res) => {};

export const changePassword = async (req, res) => {
  db.users.update(
    { password },
    { $set: { password } },
    (err, numReplaced) => {}
  );
};

export const all = (req, res) => {
  db.find({}, (err, docs) => {
    res.json(
      docs.map(({ _id, created_at, email }) => ({ id: _id, created_at, email }))
    );
  });
};
