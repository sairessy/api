"use strict";
import nodemailer from 'nodemailer';
import {env} from '../../config/index.js';

const transporter = nodemailer.createTransport({
  host: "smtp.office365.com",
  port: 587,
  secure: false,
  auth: {
    user: env.EMAIL,
    pass: env.PASS,
  },
});

export default transporter;
