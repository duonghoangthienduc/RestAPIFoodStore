const mysql = require('mysql');
require('dotenv').config()


const dbConnect = mysql.createConnection({ 
    host: process.env.HOST ,
    user: process.env.DB_USER,
    port: process.env.DB_PORT,
    password: process.env.DB_PASS,
    database: process.env.DB_DATA
})

dbConnect.connect((err)=>{
    if(err) throw err;
    console.log('Connection Successfully');
});


module.exports = dbConnect;