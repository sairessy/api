import server from "./src/routes/index.js";
import {env} from './src/config/index.js';
import { hash } from './src/config/index.js'

server.listen(env.PORT, async () => {
  console.log('API working just fine!');
});
