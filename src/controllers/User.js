import db from "../database/nedb/index.js";

export const create = async (req, res) => {
  const { email, pass } = req.body;
  db.users.insert(new User(email, pass), (err, doc) => {
    res.status(200).json({});
  });
};

export const login = async (req, res) => {
  db.users.findOne({ email, password }, (err, doc) => {
    if (doc === null) {
      res.status(409).json({ message: "Email ou senha incorrecto" });
    } else {
      res.json({ doc });
    }
  });
};

export const sendRecoveryCode = async (req, res) => {};

export const recoveryPassword = async (req, res) => {};

export const changePassword = async (req, res) => {};
