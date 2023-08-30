import db from "../../services/nedb/collections/user/index.js";
import db_consultores from "../../services/nedb/collections/consultor/index.js";
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
        try {
          res.cookie("id", doc._id, { maxAge: 600000, path: "/" });
          console.log("Cookie set");
        } catch (error) {
          console.log("Error setting cookie");
          console.error(error);
        }
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
  db.find({}, (err, _docs) => {
    db_consultores.find({}, (err, consultores) => {

      const docs = _docs.filter(
        ({ _id }) => consultores.map(({ user }) => user).includes(_id)
      );

      res.json(
        docs.map(({ _id }) => ({
          _id,
          name: consultores.find(({ user }) => user == _id).name,
          course: consultores.find(({ user }) => user == _id).course,
          price: consultores.find(({ user }) => user == _id).price,
          tel: consultores.find(({ user }) => user == _id).tel,
          desc: consultores.find(({ user }) => user == _id).desc,
        }))
      );
    });
  });
};

export const categorie = (req, res) => {
  db.find({}, (err, _docs) => {
    db_consultores.find({course: req.params.course}, (err, consultores) => {

      const docs = _docs.filter(
        ({ _id }) => consultores.map(({ user }) => user).includes(_id)
      );

      res.json(
        docs.map(({ _id }) => ({
          _id,
          name: consultores.find(({ user }) => user == _id).name,
          course: consultores.find(({ user }) => user == _id).course,
          price: consultores.find(({ user }) => user == _id).price,
          tel: consultores.find(({ user }) => user == _id).tel,
          desc: consultores.find(({ user }) => user == _id).desc,
        }))
      );
    });
  });
};

export const update = (req, res) => {
  const { price, name, id, course, tel, desc } = req.body;

  db_consultores.findOne({ user: id }, (err, doc) => {
    if (doc === null) {
      db_consultores.insert({ name, price, course, tel, desc, user: id }, (err, doc) => {
        res.json(doc);
      });
    } else {
      db_consultores.update(
        { user: id },
        { $set: { name, price, course, tel, desc } },
        (err, num) => {
          res.json({ success: num > 0 });
        }
      );
    }
  });
};

export const find = (req, res) => {
  db_consultores.findOne({ user: req.params.id }, (err, doc) => {
    res.json(doc);
  });
};
