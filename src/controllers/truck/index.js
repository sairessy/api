import sendMail from "../../services/nodemailer/send_mail.js";

export const loaders = [
  {
    email: "sairessy@gmail.com",
    nome: "Sairesse Victorino",
    tel: 872081978,
  },
];

export const home = (req, res) => {
  const auth = req.headers.authorization;
  res.json({
    app: "Truck 🖖",
  });
};

export const sendRequest = async (req, res) => {
  const data = req.body;
  const emails = loaders.map(({ email }) => email);
  sendMail(emails, "Loady", `Requisição de transporte de ${data.user}`);
  res.json({});
};

export const travel = async (req, res) => {
  const data = req.body;
  const mails = ["sairessy@gmail.com"];
  const msg = `Pretende-se fazer um transporte de bens de ${data.travel.partida.label} para  ${data.travel.destino.label}.`;
  sendMail(mails, "Loady > novo transporte 🚚", msg);
  res.json({});
};
