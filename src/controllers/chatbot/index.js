import { NlpManager } from "node-nlp";
import { areas, houses, tecnicos } from "../../config/index.js";

const manager = new NlpManager();

export const chat = async (req, res) => {
  try {
    const model = `./src/node-nlp-models/${req.headers.bot}.nlp`;
    manager.load(model);
    const r = await manager.process("pt", req.body.text);

    let techs = [];

    if (r.intent === "find.technician") {
      const sp = r.utterance.toLowerCase().split(" ");

      for (let word of sp) {
        for (let area of areas) {
          if (area.tags !== undefined && area.tags.includes(word)) {
            techs.push(area);
          }
        }
      }

      return res.json({
        tech_area: techs[0],
        intent: r.intent,
        techs: tecnicos.filter(({ area }) => techs[0].id === area),
      });
    }

    if (r.intent === "rent.house") {
      return res.json({houses, intent: r.intent});
    }

    res.json(r);
  } catch (err) {
    console.log(err);
    res
      .status(409)
      .json({ msg: `The bot does not exist, check the bot name.` });
  }
};
