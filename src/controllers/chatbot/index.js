import { NlpManager } from "node-nlp";

const manager = new NlpManager();

export const chat = async (req, res) => {
  try {
    const model = `./src/node-nlp-models/${req.headers.bot}.nlp`;
    manager.load(model);
    const r = await manager.process("pt", req.body.text);
    res.json(r);
  } catch (err) {
    console.log(err);
    res
      .status(409)
      .json({ msg: `The bot does not exist, check the bot name.` });
  }
};
