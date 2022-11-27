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
};

exports.login = async (req, res) => {
  try {
    const pool = await sql.connect(sqlConfig);
    const { userEmail, userPassword } = req.body;

    if (!userEmail ||!userPassword) {
      return res.status(400).json({ error: 'Please fill in all the fields' });
    };

    const user = await (await pool.request()
     .input('userEmail', userEmail)
     .execute('findUser')).recordset[0];
    
    if (user) {
      const checkPassword = await bcrypt.compare(userPassword, user.userPassword);
      if (checkPassword) {
        const { userPassword, id, ...payload } = user;
        const token = jwt.sign(payload, process.env.SECRET, { expiresIn: '24h' });
        return res.status(200).json({
          msg: 'User Logged in successfully',
          token
        });
      } else {
        return res.status(400).json({ msg: 'Password do not match' });
      }
    } else {
      return res.status(404).json({ msg: 'User with that email do not match' });
    }
  } catch (e) {
    return res.status(500).json({
      msg: e
    });
  }
}