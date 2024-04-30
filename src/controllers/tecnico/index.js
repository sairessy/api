import db from "../../services/nedb/index.js";
import sendMail from "../../services/nodemailer/send_mail.js";

export const home = async (req, res) => {
  res.json({});
};

export const update = async (req, res) => {
  const { _id, nome, bairro, sexo, nascimento } = req.body;
  db.user.users.update(
    { _id },
    {
      $set: {
        nome,
        bairro,
        sexo,
        nascimento,
      },
    },
    (err, numReplaced) => {
      res.json({});
    }
  );
};

export const consulta = (req, res) => {
  const { area, desc, bairro, tel } = req.body;
  db.user.users.find({ area }, (err, data) => {
    const emails = data.map(({ email }) => email);
    const msg = `Procura-se um consultor de ${area.label}\n Descrição: ${desc}\n Bairro: ${bairro.label}\n Contacto: ${tel}`;
    sendMail(emails, "Consultor 🎓", msg);
    res.json({});
  });
};
