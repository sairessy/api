import User from "../../models/user/index.js";
import db from '../../services/nedb/index.js';

export const create = async (req, res) => {
  const { email, pass } = req.body;
  db.user.users.findOne({email}, (err, doc) => {
  if (doc === null) {
  try {
    db.user.users.insert(new User(email, pass), (err, doc) => {
      delete doc.pass;
      res.status(200).json(doc);
    });
  } catch (error) {
    res.status(500).json({ error });
  }
  } else {
    res.status(500).json({msg: 'O email já foi usado'});
  }
});
}

export const login = async (req, res) => {
  const { email, pass } = req.body;
  try {
    db.user.users.findOne({ email, pass }, (err, doc) => {
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

export const all = (req, res) => {
  db.user.users.find({}, (err, docs) => {
    res.json(
      docs.map(({ _id, created_at, email }) => ({ id: _id, created_at, email }))
    );
  });
};

export const sendRecoveryCode = async (req, res) => {
  const email = req.body.email;
  db.user.users.findOne({email}, (err, doc) => {
    if(!doc) {
      res.json({info: 'O email não existe!'})
    } else {
      // send recovery code to email
      db.user.users.update({email}, {$set: {recovery_code: String(Math.random()).substring(2, 7)}})
      res.json({success: true})
    }
  })
}
