const express = require('express');
const app = express();
const cron = require('node-cron');
const { welcomeEmailService } = require('./services/Welcome');

const port = process.env.PORT || 3000;

const run = () => {
  cron.schedule('*/11 * * * * *', async () => {
    console.log('status');
    await welcomeEmailService();
    console.log('Starting up...');
  });
};

run();

app.listen(port, () => {
  console.log('background services running on port: ' + port)
});