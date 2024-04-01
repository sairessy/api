import fManager from './foco.js';

export const chat = async (req, res) => {
  const r = await fManager(req.params.text);
  res.json({answer: r || "Desculpa, não consigo lhe compreender."})
}