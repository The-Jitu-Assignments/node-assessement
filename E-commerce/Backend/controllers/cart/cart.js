const { sqlConfig } = require('../../config/index')
const sql = require('mssql');

exports.getAllProducts = async (req, res) => {
  try {
    const pool = await sql.connect(sqlConfig);
    const response = (await pool.request().execute('dbo.usp_getAllProductsInCart'));
    const products = response.recordset
    return res.status(200).json({
      data: products
    })
  } catch (error) {
    return res.status(500).json({ error })
  }
};