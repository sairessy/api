import { NlpManager } from 'node-nlp';

const manager = new NlpManager({ languages: ['en'], forceNER: true });

manager.addDocument('en', 'courses', 'courses.show');
manager.addDocument('en', 'duration', 'courses.duration')

manager.addAnswer('en', 'courses.show', 'A Nossa instituicao oferece os seguintes cursos: CA, MI, GG, GRH, EI, ADU, EDINF e CC');
manager.addAnswer('en', 'courses.duration', 'Todos os nossos cursos tem a duracao de 3 anos, com excessao do curso de EINF que tem uma duracao de 3 meses');

export default async function reply(text) {
  await manager.train();
    manager.save('./src/node-nlp-models/foco.nlp');
    const response = await manager.process('en', text);
    return response.answer;
}