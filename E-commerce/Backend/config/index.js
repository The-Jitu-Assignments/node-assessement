const  dotenv = require('dotenv')
const  sql = require('mssql')
dotenv.config()

const sqlConfig = {
  user: 'sa',
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















































// import sql from 'mssql'
// import sqlConfig from '../Config/config'


// export default class Connection{
//       private pool: Promise<sql.ConnectionPool>
//     constructor(){
//        this.pool = this.connectToDb()
//     }

//     connectToDb= async()=>{
//         try {
//             const pool =await sql.connect(sqlConfig) 
//             return pool
//         } catch (error:any) {
//             console.log(error.message);
//             throw new Error(error.message)
//         }
//     }

//     createRequest = (request:sql.Request, data:{[c:string]:string|number|boolean})=>{
//      try {
//            const keys = Object.keys(data)

//         keys.map((keyname:string)=>{
//             const keyValue= data[keyname]
//             request.input(keyname, keyValue)
//         })

//         return request;
//      } catch (error:any) {
//        return error.message
//      }
//     }

//     exec= async(procedure:string, data={})=>{
//    try {
//     let request = await (await this.pool).request() as sql.Request ;
//     request= this.createRequest(request, data)
//     const results =await request.execute(procedure)
//     return results
//    } catch (error:any) {
//     throw new Error(error.message)
//    }
//     }

//     query= async(query:string)=>{
//         const results = await (await this.pool).request().query(query)
//         return results
//     }
// }