import nodemailer from "nodemailer";
import { env } from "../../config/index.js";

// Create a transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  host: "mail.privateemail.com",
  port: 465, // Use 587 for TLS, 465 for SSL
  secure: true, // Set to true for 465, false for other ports
  auth: {
    user: env.ATS_NOREPLY_EMAIL,
    pass: env.ATS_NOREPLY_PASS,
  },
});

// Set up email data
//   const mailOptions = {
//     from: 'noreply@advancedtechspace.com',
//     to: 'sairessy@gmail.com',
//     subject: 'Hello from Nodemailer',
//     text: 'This is a test email sent using Nodemailer and Namecheap Private Email!',
//     html: '<p>This is a test email sent using <b>Nodemailer</b> and <b>Namecheap Private Email</b>!</p>',
//   };

// Send mail with defined transport object
//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       return console.log('Error occurred:', error);
//     }
//     console.log('Email sent:', info.response);
//   });

export default transporter;
