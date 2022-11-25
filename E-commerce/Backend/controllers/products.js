const { sqlConfig } = require('../config/index.js');
const sql = require('mssql');

exports.getAllProducts = async (req, res) => {
  try {
    const pool = await sql.connect(sqlConfig);
    const response = (await pool.request().execute('dbo.usp_getAllProducts'));
    const products = response.recordset
    return res.status(200).json({
      data: products
    })
  } catch (error) {
    return res.status(500).json({ error })
  }
};

exports.getASingleProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const pool = await sql.connect(sqlConfig);
    const response = await pool.request().execute('usp_getOneProduct', {id});
    const product = response.recordset;
    return res.status(200).json({
      product
    })
  } catch (error) {
    res.status(500).json({
      msg: error
    })
  }
};

exports.createProduct = async (req, res) => {
  try {
    const { productName, productDescription, price, imgUrl, discountRate } = req.body;
    const pool = await sql.connect(sqlConfig);
    await pool.request().execute('usp_getOneProduct', {
      productName, productDescription, price, imgUrl, discountRate
    });
    return res.status(201).json({
      msg: 'Todo Insertet'
    })
  } catch (error) {
    res.status(500).json({
      msg: error
    })
  }
}
