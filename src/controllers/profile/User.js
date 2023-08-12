import knex from "../../services/knex/profile/index.js";
import QRCode from "qrcode";

export const create = async (req, res) => {
  const { email, password } = req.body;

  await knex("pfl_user").insert({
    email: email.toLowerCase(),
    password,
  });

  res.status(200).json({});
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const result = await knex("pfl_user").where({ email, password });
  res.json({ data: result });
};

export const update = async (req, res) => {
  console.log("updt", req.cookies);
  const { name, surname } = req.body;
  const id = req.params.id;
  const result = await knex("pfl_user").update({ name, surname }).where({ id });
  res.json({ data: result });
};

export const private_info = async (req, res) => {
  const id = req.params.id;
  const result = await knex("pfl_user").where({ id }).first();
  QRCode.toDataURL(`${process.env.PROFILE_BASE_URL}/public/${id}`).then(
    (url) => {
      res.json({ data: { ...result, url } });
    }
  );
};

export const public_info = async (req, res) => {
  console.log("pbcinfo", req.cookies);
  const result = await knex("pfl_document").where({
    id_user: req.params.id,
    private: false,
    removed: false,
  });

  res.json({
    data: result.map(({ value, description }) => ({
      Valor: value,
      Descricao: description,
    })),
  });
};

export const send_recovery_code = async (req, res) => {
  const email = req.body.email;
  const recovery_code = String(Math.random()).substring(2, 7);

  const result = await knex("pfl_user")
    .update({
      recovery_code,
    })
    .where({ email });

  // Send email with recovery code

  res.json({ data: result });
};

export const recovery_account = async (req, res) => {
  const { email, password, recovery_code } = req.body;
  const result = await knex("pfl_user")
    .update({ password })
    .where({ email, recovery_code });
  res.json({ data: result });
};
