const nodemailer = require('nodemailer');

export const sendEmail = ({ from, to, subject, text }) => {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.PASSWORD
    }
  });

  const msg = { from, to, subject, text };

  return transporter.sendMail(msg);
};