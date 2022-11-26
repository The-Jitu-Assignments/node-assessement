const  dotenv = require('dotenv')
dotenv.config()

const sqlConfig = {
  user: process.env.DB_USER,
  password: process.env.PASSWORD ,
  database: process.env.DATABASE_NAME,
  server: 'localhost',
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    trustServerCertificate: true  // using vscode to connect to DB
  }
}

module.exports={sqlConfig}

