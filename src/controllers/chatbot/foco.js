import { NlpManager } from 'node-nlp';

const manager = new NlpManager({ languages: ['en'], forceNER: true });

manager.addDocument('en', 'cursos', 'mostra.cursos');
manager.addDocument('en', 'dura duracao', 'mostra.duracao');

manager.addAnswer('en', 'mostra.cursos', 'CA, GG');
manager.addAnswer('en', 'mostra.duracao', 'Todos cursos duram 3 anos, com excessao de EINF, que dura um ano.')

export default async function reply(text) {
  await manager.train();
    manager.save('./src/node-nlp-models/foco.nlp');
    const response = await manager.process('en', text);
    return response.answer;
}