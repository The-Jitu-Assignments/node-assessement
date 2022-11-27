const express = require('express');
const dotenv = require('dotenv');
const  productroutes  = require('./routes/productsRoute');
const cartRoutes = require('./routes/cartRoute');

dotenv.config();

const app = express();

app.use(express.json());

app.use('/products', productroutes);
app.use('/cart', cartRoutes);

// test route
app.get('/', (req, res) => {
  res.json('Welcome')
});

app.listen(process.env.PORT, () => {
  console.log(`App running on port ${process.env.PORT}`)
})

