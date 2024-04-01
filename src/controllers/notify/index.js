import sendMail from '../../services/nodemailer/send_mail.js';

export const send = async (req, res) => {
	const user = req.headers.user;
	const {to, subject, text} = req.body;
	try {
	  const r = await sendMail(to, subject, text);
		res.json({sucess: true, data: req.body, r});
	} catch (err) {
	  res.status(409).json({sucess: false, error: err})
	}
};
