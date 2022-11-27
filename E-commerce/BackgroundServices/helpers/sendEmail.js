const nodemailer = require('nodemailer');

exports.sendEmail = ({ from, to, subject, text }) => {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD
    }
  });

  const msg = { from, to, subject, text };

  return transporter.sendMail(msg);
};