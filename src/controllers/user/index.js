import { User } from "../../services/mongoose/index.js";
import db from "../../services/nedb/index.js";
import sendMail from "../../services/nodemailer/send_mail.js";

export const create = async (req, res) => {
  const { email, pass, app: app_id } = req.body;
  
  const doc = await (new User({email, pass, app_id})).save();
  res.status(200).json(doc);
};

export const login = async (req, res) => {
  const { email, pass, app = null } = req.body;
  try {
    const users = await User.find({email, pass, app_id: app})
      if (users.length === 0) {
        res
          .status(409)
          .json({ success: false, msg: "Credenciais incorrectas!" });
      } else {
        return res.json({ success: true, user: users[0]._id });
      }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

export const all = async (req, res) => {
  const docs = await User.find();
  const users = docs.map((doc) => ({ ...doc, pass: null }));
  res.json(docs);
};

export const byApp = async (req, res) => {
  const docs = await User.find({app_id: req.params.appId});
  const users = docs.map((doc) => ({ ...doc, pass: null }));
  res.json(users);
};

export const user = async (req, res) => {
  const _id = req.params.id;
  const docs = await User.find({ _id });
  let doc = {};
  if (docs.length !== 0) {
    doc = docs[0];
    delete doc.pass;
  }
  res.json(doc);
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
  //const { surname, name, tel, bairro, area, desc } = req.body;
  const _id = req.headers.user;
  db.user.users.update(
    { _id },
    { $set: req.body },
    (err, num) => {
      res.json({});
    }
  );
};
