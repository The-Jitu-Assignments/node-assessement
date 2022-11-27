const express = require('express');
const app = express();
const cron = require('node-cron');


const port = process.env.PORT || 3000;

const run = () => {
  cron.schedule('*/5 * * * *', () => {
    console.log('Starting up...');
  });
};

run();

app.listen(port, () => {
  console.log('background services running on port: ' + port)
});