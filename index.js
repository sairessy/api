import server from "./src/routes/index.js";
import colors from "colors";
import {env} from './src/config/index.js';
import sendMail from './src/services/nodemailer/send_mail.js';
import cron from 'node-cron';

server.listen(env.PORT, async () => {
  console.log(`${colors.bold.cyan('[✓]')} API working just fine!`);
	
	const task = async () => {
    const r = await sendMail('sairessy@gmail.com', 'Olá', `Já são ${new Date()}.`);
    console.log(r);
  };

  cron.schedule('30 17 * * *', task);

});
