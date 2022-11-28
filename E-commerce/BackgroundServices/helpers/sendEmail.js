const nodemailer = require('nodemailer');

exports.sendEmail = ({ from, to, subject, html }) => {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD
    }
  });

  const msg = { from, to, subject, html };
  console.log(msg);

  return transporter.sendMail(msg);
};