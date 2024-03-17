import sendMail from '../../services/nodemailer/send_mail.js';

export const send = async (req, res) => {
	const user = req.headers.user;
	const {to, subject, text} = req.body;
	try {
	  await sendMail(to, subject, text);
		res.json({sucess: true, data: req.body});
	} catch (err) {
	  res.status(409).json({sucess: false, error: err})
	}
};
