import { NlpManager } from "node-nlp";

const manager = new NlpManager({ languages: ["pt"], forceNER: true });

manager.addDocument("pt", "Olá cronus", "greetings");
manager.addDocument("pt", "Obrigado", "thanks");
manager.addDocument("pt", "hora", "show.time");
manager.addDocument("pt", "temperatura", "show.wether");

manager.addAnswer("pt", "greetings", "");
manager.addAnswer("pt", "thanks", "De nada.");
manager.addAnswer("pt", "show.time", "");
manager.addAnswer("pt", "show.wether", "");

(async () => {
  try {
    await manager.train();
    manager.save("./src/node-nlp-models/cronus.nlp");
    console.log("Model trained and saved successfully!");
  } catch (err) {
    console.log(err);
  }
})();