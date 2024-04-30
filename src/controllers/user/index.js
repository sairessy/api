import User from "../../models/user/index.js";
import db from "../../services/nedb/index.js";
import sendMail from "../../services/nodemailer/send_mail.js";

export const create = async (req, res) => {
  const { email, pass, app } = req.body;

  db.user.users.insert(new User(email, pass, app), (err, doc) => {
    delete doc.pass;
    res.status(200).json(doc);
  });
};

export const login = async (req, res) => {
  const { email, pass, app } = req.body;
  try {
    db.user.users.findOne({ email, pass, app }, (err, doc) => {
      if (doc === null) {
        res
          .status(409)
          .json({ success: false, msg: "Credenciais incorrectas!" });
      } else {
        return res.json({ success: true, user: doc._id });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

export const all = (req, res) => {
  db.user.users.find({}, (err, docs) => {
    const users = docs.map((doc) => ({ ...doc, pass: null }));
    res.json(docs);
  });
};

export const byApp = (req, res) => {
  db.user.users.find({app: req.params.appId}, (err, docs) => {
    const users = docs.map((doc) => ({ ...doc, pass: null }));
    res.json(users);
  });
};

export const user = async (req, res) => {
  const _id = req.params.id;
  db.user.users.findOne({ _id }, (err, doc) => {
    if (doc != null) {
      delete doc.pass;
    }
    res.json(doc);
  });
};

export const sendConfirmationCode = async (req, res) => {
  const { email, app } = req.body;
  db.user.users.findOne({ email, app }, (err, doc) => {
    if (doc === null) {
      const code = String(Math.random()).substring(2, 7);
      console.log(code);
      sendMail(email, app, "Codigo de confirmação: " + code);
      res.json({ msg: "Enviamos o código de confirmação para " + email, code });
    } else {
      res
        .status(409)
        .json({ msg: "Este email já foi usado, opte em recuperá-lo." });
    }
  });
};

export const sendRecoveryCode = async (req, res) => {
  const email = req.body.email;
  const app = 'consultor';
  db.user.users.findOne({ email }, (err, doc) => {
    if (!doc) {
      res.status(409).json({ info: "O email não existe!" });
    } else {
      const code = String(Math.random()).substring(2, 7);
      sendMail(email, app, "Código de recuperação:" + code);
      console.log("======================")
      console.log(code, email, app);
      db.user.users.update(
        { email },
        {
          $set: {
            recovery_code: code
          },
        }
      );

      res.json({ success: true });
    }
  });
};

export const changePass = async (req, res) => {
  const { email, pass, code, app } = req.body;

  db.user.users.update(
    { email, recovery_code: code },
    {
      $set: {  pass, app },
    },
    (err, num) => {
      if (num === 0) {
        res
          .status(409)
          .json({ msg: "O código introduzido é incorrecto, tente novamente." });
      } else {
        res.json({ msg: "Senha alterada com successo." });
      }
    }
  );
};

export const update = async (req, res) => {
  const { surname, name, tel, bairro, area, desc } = req.body;
  const _id = req.body.user;
  db.user.users.update(
    { _id },
    { $set: { surname, name, tel, bairro, area, desc } },
    (err, num) => {
      res.json({});
    }
  );
};
