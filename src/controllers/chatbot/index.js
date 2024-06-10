import { NlpManager } from 'node-nlp';

const manager = new NlpManager();

export const chat = async (req, res) => {
  const model = `./src/node-nlp-models/${req.headers.org}.nlp`;
  manager.load(model);
  const r = await manager.process('en', req.body.text);
  res.json(r);
}