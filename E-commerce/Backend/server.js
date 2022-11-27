const express = require('express');
const dotenv = require('dotenv');
const  productRoutes  = require('./routes/productsRoute');
const cartRoutes = require('./routes/cartRoute');
const userRoutes = require('./routes/userRoute');

dotenv.config();

const app = express();

app.use(express.json());

app.use('/products', productRoutes);
app.use('/cart', cartRoutes);
app.use('/', userRoutes);


app.listen(process.env.PORT, () => {
  console.log(`App running on port ${process.env.PORT}`)
})

