const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const run = () => {
  console.log('running')
};

run();

app.listen(port, () => {
  console.log('background services running on port: ' + port)
});