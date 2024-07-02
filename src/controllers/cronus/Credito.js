import { Credito } from "../../models/cronus/credito.js";

export const getCredito = async (req, res) => {
  try {
    const credito = await Credito.find();
    res.json(credito);
  } catch (error) {
    console.log(error);
    res.status(409).json({});
  }
};

export const createCredito = async (req, res) => {
  const data = req.body;
  const user = req.headers.user;

  console.log(data, user);

  try {
    const credito = await new Credito({ ...data, user }).save();
    res.json(credito);
  } catch (error) {
    console.log(error);
    res.status(409).json({});
  }
};
