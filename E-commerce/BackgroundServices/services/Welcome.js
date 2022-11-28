const ejs = require('ejs');
const { sendEmail } = require('../helpers/sendEmail');
const sql = require('mssql');
const { sqlConfig } = require('../config/index');

const welcomeEmailService = async () => {
  try {
    const pool = await sql.connect(sqlConfig);
    const users = await pool.request().execute('usp_getUsersToSendEmail')
    let foundUsers = users.recordset;

    console.log(foundUsers);

    for (let user of foundUsers) {
      ejs.renderFile('./template/email.ejs', {name: user.userName, email: user.userEmail}, async(error, data) => {
        await sendEmail({
          from: '',
          to: user.userEmail,
          subject: `Welcome to ${user.userName}`,
          text: data
        })
        await pool.request().input('id', user.id).execute('usp_updateReceivedEmail');
        console.log('email sent successfully');
      })
    }
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
};

module.exports = {
  welcomeEmailService
};