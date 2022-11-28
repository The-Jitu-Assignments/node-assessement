const { sqlConfig } = require('../../config/index')
const sql = require('mssql');
const { v4 } = require('uuid');

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
    const response = await pool.request()
      .input('id', id)
      .execute('usp_getOneProduct');
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
    await pool.request()
      .input('id', v4())
      .input('productName', productName)
      .input('productDescription', productDescription)
      .input('price', price)
      .input('imgUrl', imgUrl)
      .input('discountRate', discountRate)
      .execute('usp_createOrUpdateProduct')
    return res.status(201).json({
      msg: 'Product Inserted'
    })
  } catch (error) {
    res.status(500).json({
      msg: error
    })
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { productName, productDescription, price, imgUrl, discountRate, quantity, productInCart, productDeleted } = req.body;
    const pool = await sql.connect(sqlConfig);
    await pool.request()
      .input('id', id)
      .input('productName', productName)
      .input('productDescription', productDescription)
      .input('price', price)
      .input('imgUrl', imgUrl)
      .input('discountRate', discountRate)
      .input('quantity', quantity)
      .input('productInCart', productInCart)
      .input('productDeleted', productDeleted)
      .execute('usp_createOrUpdateProduct')
    return res.status(200).json({
      msg: 'Todo Updated'
    })
  } catch (error) {
    res.status(500).json({
      msg: error
    })
  }
}
