import {env} from '../../config/index.js';
import transporter from './index.js';

const sendMail = async (to, subject, text, html = "") => {
 const r = await transporter.sendMail({
	  from: env.EMAIL, to, subject, text, html
  }, (error, info) => {
    if (error) {
      console.log('Error occurred:', error);
    } else {
      console.log('Email sent:', info.response, r);
    }
  });
}

export default sendMail;
