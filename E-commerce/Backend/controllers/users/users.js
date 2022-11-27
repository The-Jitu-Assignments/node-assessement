const bcrypt = require('bcrypt');
const { v4 } = require('uuid');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const sql = require('mssql');
const { sqlConfig } = require('../../config/index');

dotenv.config();

exports.signUp = async (req, res) => {
  try {
    const pool = await sql.connect(sqlConfig);
    const { userName, userEmail, userPassword } = req.body;

    if (!userName ||!userEmail ||!userPassword) {
      return res.status(400).json({ error: 'Please fill in all the fields' });
    };

    const hashedPassword = await bcrypt.hash(userPassword, 8);

    await pool.request()
      .input('id', v4())
      .input('userName', userName)
      .input('userEmail', userEmail)
      .input('userPassword', hashedPassword)
    .execute('usp_signUp');

    return res.status(200).json({ message: 'User created successfully' });

  } catch (error) {
    return res.status(500).json({
      msg: error
    })
  }
}