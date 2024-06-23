import { NlpManager } from "node-nlp";

const manager = new NlpManager({ languages: ["en"], forceNER: true });

manager.addDocument("en", "cursos", "mostra.cursos");
manager.addDocument("en", "dura duracao", "mostra.duracao");
manager.addDocument(
  "en",
  "periodo turno manha tarde noite laboral pos-laboral",
  "mostra.periodo"
);
manager.addDocument("en", "horas", "time");
manager.addDocument("en", "abre inici", "start");
manager.addDocument("en", "Obrigado", "thanks");

manager.addAnswer(
  "en",
  "mostra.cursos",
  "A nossa instituição oferece o curso de Contabilidade, Gestão, GRH, Mecânica, Electricidade, Construção civil, Enfermagem e Educação de infância."
);
manager.addAnswer(
  "en",
  "mostra.duracao",
  "Todos cursos duram 3 anos, com excessão do curso de Educação de Infância, que dura apenas um ano."
);
manager.addAnswer(
  "en",
  "mostra.periodo",
  "Os cursos são leccionados em todos periodos do dia, isto é, de manhã, de tarde e de noite."
);
manager.addAnswer(
  "en",
  "start",
  "As aulas iniciam em Março de cada ano, e sao leccionadas por bimestre."
);
manager.addAnswer("en", "thanks", "De nada.");

(async () => {
  try {
    await manager.train();
    manager.save("./src/node-nlp-models/foco.nlp");
    console.log("Model trained and saved successfully!");
  } catch (err) {
    console.log(err);
  }
})();
