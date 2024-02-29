"use strict";
import nodemailer from 'nodemailer';
import {env} from '../../config/index.js';

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: env.EMAIL,
    pass: env.PASS,
  },
});

export default transporter;