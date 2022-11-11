import db from "../database/nedb/index.js";

export const create = async (req, res) => {
  const { email, pass } = req.body;

  try {
    db.users.insert(new User(email, pass), (err, doc) => {
      res.status(200).json({});
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const login = async (req, res) => {
  try {
    db.users.findOne({ email, password }, (err, doc) => {
      if (doc === null) {
        res.status(409).json({ message: "Email ou senha incorrecta(o)" });
      } else {
        res.json({ doc });
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
