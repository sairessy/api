import { Subscriber } from "../../services/mongoose/index.js";

export const home = (req, res) => {
  res.json({ app: "Advancedtechspace" });
};

export const subscribeEmail = async (req, res) => {
  const email = req.body.email;

  const doc = await(new Subscriber({ email, createdAt: new Date() })).save();
  res.status(200).json(doc);
};
