import { NlpManager } from 'node-nlp';

const manager = new NlpManager({ languages: ['en'], forceNER: true });

manager.addDocument('en', 'time', 'show.time');
manager.addDocument('en', 'wether', 'show.wether');

manager.addAnswer('en', 'show.time', '');
manager.addAnswer('en', 'show.wether', '');

(async () => {
    try {
      await manager.train();
      manager.save('./src/node-nlp-models/cronus.nlp');
      console.log('Model trained and saved successfully!');
    } catch (err) {
      console.log(err);
    }
})();
