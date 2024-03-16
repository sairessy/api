import server from "./src/routes/index.js";
import colors from "colors";
import sendMail from './src/services/nodemailer/send_mail.js';
import cron from 'node-cron';

const PORT = process.env.PORT || 3000;
server.listen(PORT, async () => {
  console.log(`${colors.bold.cyan('[✓]')} API working just fine!`);
	
	const task = () => {
    sendMail('sairessy@gmail.com', 'Olá', `Já são ${new Date()}.`);
};


//	cron.schedule('* * * * *', task); ever min
cron.schedule('30 17 * * *', task);

});
