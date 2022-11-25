const express = require('express');
const dotenv = require('dotenv');
const  { router } = require('./routes/productsRoute');

dotenv.config();

const app = express();

app.use(express.json());

app.use('/products', router);

// test route
app.get('/', (req, res) => {
  res.json('Welcome')
});

app.listen(process.env.PORT, () => {
  console.log(`App running on port ${process.env.PORT}`)
})
